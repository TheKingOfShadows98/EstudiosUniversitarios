/**
 * @file gamificationEvaluator.ts
 * @description Funciones puras para el calculo de recompensas, medallas de valor,
 * copas del conocimiento y clasificacion de notas por rango y color.
 */

import {
  type ExamGradeBracket,
  type ExamGamificationReward,
  type ExamQuestionReviewItem,
  type UserProfile,
  type UserTopicProgress,
} from '../types/user.types';

/**
 * Determina el rango de clasificacion y la calificacion en escala de 0 a 10.
 *
 * @param scorePercentage - Calificacion porcentual (0 a 100).
 * @returns Rango formal y nota decimal sobre 10.
 */
export function computeGradeBracket(scorePercentage: number): {
  readonly bracket: ExamGradeBracket;
  readonly score10Scale: number;
} {
  const normalized = Math.max(0, Math.min(100, scorePercentage));
  const score10Scale = Number((normalized / 10).toFixed(1));

  if (score10Scale < 5.0) {
    return { bracket: 'critical', score10Scale };
  }
  if (score10Scale < 7.0) {
    return { bracket: 'sufficient', score10Scale };
  }
  if (score10Scale < 9.0) {
    return { bracket: 'good', score10Scale };
  }
  return { bracket: 'excellent', score10Scale };
}

/**
 * Evalua el conjunto de preguntas de un examen y actualiza el estado de temas y recompensas de gamificacion.
 *
 * Reglas de negocio:
 * 1. Copas del Conocimiento: Se otorga 1 copa si scorePercentage >= 90% (>= 9.0).
 * 2. Marcado para Medalla de Valor: Si se falla 1 o mas preguntas de un tema, el tema pasa a 'pending_valor_medal'.
 * 3. Obtencion de Medalla de Valor: Si el tema estaba en 'pending_valor_medal', el examen se aprueba con >= 70%
 *    y se responden correctamente todas las preguntas de dicho tema, se otorga 1 Medalla de Valor y el tema pasa a 'completed'.
 * 4. Completado estandar: Si se aciertan todas las preguntas de un tema y el examen se aprueba con >= 70%, pasa a 'completed'.
 *
 * @param currentTopics - Mapa actual de progreso por temas del usuario.
 * @param questions - Lista ordenada de preguntas revisadas en el examen.
 * @param scorePercentage - Calificacion porcentual global obtenida.
 * @param materiaSlug - Identificador de la materia evaluada.
 */
export function evaluateExamGamification(
  currentTopics: Record<string, UserTopicProgress>,
  questions: readonly ExamQuestionReviewItem[],
  scorePercentage: number,
  materiaSlug: string
): {
  readonly updatedTopics: Record<string, UserTopicProgress>;
  readonly reward: ExamGamificationReward;
} {
  const { bracket, score10Scale } = computeGradeBracket(scorePercentage);
  const earnedKnowledgeTrophy = scorePercentage >= 90;
  const isExamPassed = scorePercentage >= 70;

  let earnedValorMedalsCount = 0;
  const newlyTaggedValorTopics: string[] = [];
  const newlyCompletedTopics: string[] = [];

  // Agrupacion de preguntas por tema
  const topicQuestionsMap = new Map<string, ExamQuestionReviewItem[]>();
  for (const q of questions) {
    const list = topicQuestionsMap.get(q.topicSlug) || [];
    list.push(q);
    topicQuestionsMap.set(q.topicSlug, list);
  }

  const updatedTopics: Record<string, UserTopicProgress> = { ...currentTopics };
  const now = new Date().toISOString();

  topicQuestionsMap.forEach((qList, topicSlug) => {
    const key = `${materiaSlug}/${topicSlug}`;
    const previous = currentTopics[key] || {
      topicSlug,
      materiaSlug,
      status: 'untouched',
      failedQuestionsCount: 0,
    };

    const failedCountInExam = qList.filter((q) => !q.isCorrect).length;
    const allCorrectInTopic = failedCountInExam === 0;

    if (!allCorrectInTopic) {
      // Reprobo 1 o mas preguntas del tema -> Se etiqueta con posibilidad de Medalla de Valor
      updatedTopics[key] = {
        ...previous,
        status: 'pending_valor_medal',
        lastEvaluatedAt: now,
        failedQuestionsCount: previous.failedQuestionsCount + failedCountInExam,
      };
      newlyTaggedValorTopics.push(topicSlug);
    } else if (allCorrectInTopic && isExamPassed) {
      // Respondio correctamente todas las preguntas del tema y aprobo el examen con >= 70%
      if (previous.status === 'pending_valor_medal') {
        earnedValorMedalsCount += 1;
      }
      updatedTopics[key] = {
        ...previous,
        status: 'completed',
        lastEvaluatedAt: now,
      };
      newlyCompletedTopics.push(topicSlug);
    }
  });

  return {
    updatedTopics,
    reward: {
      earnedKnowledgeTrophy,
      earnedValorMedalsCount,
      newlyTaggedValorTopics,
      newlyCompletedTopics,
      gradeBracket: bracket,
      score10Scale,
    },
  };
}

/**
 * Aplica las recompensas de un examen concluido al perfil global del usuario.
 *
 * @param user - Perfil actual del usuario.
 * @param materiaSlug - Asignatura evaluada.
 * @param questions - Preguntas evaluadas en el examen.
 * @param scorePercentage - Puntuacion porcentual obtenida.
 */
export function applyExamCompletionToUser(
  user: UserProfile,
  materiaSlug: string,
  questions: readonly ExamQuestionReviewItem[],
  scorePercentage: number
): { readonly updatedUser: UserProfile; readonly reward: ExamGamificationReward } {
  const { updatedTopics, reward } = evaluateExamGamification(
    user.topicsProgress,
    questions,
    scorePercentage,
    materiaSlug
  );

  const updatedSubjectProgress = {
    ...user.subjectProgress,
    [materiaSlug]: {
      materiaSlug,
      lastTopicSlug: user.subjectProgress[materiaSlug]?.lastTopicSlug ?? null,
      lastAccessedAt: new Date().toISOString(),
    },
  };

  const updatedUser: UserProfile = {
    ...user,
    valorMedals: user.valorMedals + reward.earnedValorMedalsCount,
    knowledgeTrophies: user.knowledgeTrophies + (reward.earnedKnowledgeTrophy ? 1 : 0),
    topicsProgress: updatedTopics,
    subjectProgress: updatedSubjectProgress,
    updatedAt: new Date().toISOString(),
  };

  return { updatedUser, reward };
}
