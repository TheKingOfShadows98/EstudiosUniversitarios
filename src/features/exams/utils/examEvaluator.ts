/**
 * @file examEvaluator.ts
 * @description Utilidad pura para la calificacion de examenes y compilacion de temas de remediacion.
 */

import {
  type SubjectExamQuestion,
  type ExamEvaluationResult,
  type FailedQuestionReview,
  type RemediationTopicRef,
} from '../types/examEngine.types';

/**
 * Evalua las respuestas enviadas por el usuario, computa el porcentaje de aciertos y agrupa temas a repasar.
 *
 * @param questions - Lista de preguntas presentes en la sesion de examen.
 * @param answers - Mapa de respuestas seleccionadas por el estudiante (questionId -> optionId).
 * @param passingPercentage - Porcentaje minimo para aprobar (por defecto 70%).
 * @returns Resultado formal de la evaluacion con enlaces de remediacion.
 */
export function evaluateExamSession(
  questions: readonly SubjectExamQuestion[],
  answers: Record<string, string>,
  passingPercentage: number = 70
): ExamEvaluationResult {
  if (questions.length === 0) {
    return {
      totalQuestions: 0,
      correctCount: 0,
      scorePercentage: 0,
      passed: false,
      completedAt: new Date().toISOString(),
      failedQuestions: [],
      remediationTopics: [],
    };
  }

  let correctCount = 0;
  const failedQuestions: FailedQuestionReview[] = [];
  const remediationMap = new Map<string, { title: string; materiaSlug: string; count: number }>();

  for (const question of questions) {
    const selectedOptionId = answers[question.id] ?? null;
    const isCorrect = selectedOptionId === question.correctOptionId;

    if (isCorrect) {
      correctCount += 1;
    } else {
      failedQuestions.push({
        question,
        selectedOptionId,
        correctOptionId: question.correctOptionId,
        explanation: question.explanation,
      });

      // Agregacion de temas para sugerencias de estudio
      const current = remediationMap.get(question.topicSlug);
      if (current) {
        current.count += 1;
      } else {
        remediationMap.set(question.topicSlug, {
          title: question.topicTitle,
          materiaSlug: question.materiaSlug,
          count: 1,
        });
      }
    }
  }

  const scorePercentage = Math.round((correctCount / questions.length) * 100);
  const passed = scorePercentage >= passingPercentage;

  const remediationTopics: RemediationTopicRef[] = Array.from(remediationMap.entries()).map(
    ([slug, data]) => ({
      topicSlug: slug,
      topicTitle: data.title,
      materiaSlug: data.materiaSlug,
      failedCount: data.count,
    })
  );

  // Ordenar temas a repasar por mayor cantidad de fallos
  remediationTopics.sort((a, b) => b.failedCount - a.failedCount);

  return {
    totalQuestions: questions.length,
    correctCount,
    scorePercentage,
    passed,
    completedAt: new Date().toISOString(),
    failedQuestions,
    remediationTopics,
  };
}
