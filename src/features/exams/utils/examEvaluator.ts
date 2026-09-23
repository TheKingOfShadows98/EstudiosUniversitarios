/**
 * @file examEvaluator.ts
 * @description Utilidad pura para la calificacion de examenes, compilacion de temas de remediacion y revision ordinal de preguntas.
 */

import {
  type SubjectExamQuestion,
  type ExamEvaluationResult,
  type FailedQuestionReview,
  type RemediationTopicRef,
} from '../types/examEngine.types';
import { type ExamQuestionReviewItem } from '@/features/user/types/user.types';

/**
 * Evalua las respuestas enviadas por el usuario, computa el porcentaje de aciertos, agrupa temas a repasar
 * y genera la lista ordinal completa para la revision detallada con feedback.
 *
 * @param questions - Lista de preguntas presentes en la sesion de examen.
 * @param answers - Mapa de respuestas seleccionadas por el estudiante (questionId -> optionId).
 * @param passingPercentage - Porcentaje minimo para aprobar (por defecto 70%).
 * @returns Resultado formal de la evaluacion con enlaces de remediacion y revision de todas las preguntas.
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
      allQuestionsReview: [],
    };
  }

  let correctCount = 0;
  const failedQuestions: FailedQuestionReview[] = [];
  const allQuestionsReview: ExamQuestionReviewItem[] = [];
  const remediationMap = new Map<string, { title: string; materiaSlug: string; count: number }>();

  questions.forEach((question, idx) => {
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

    allQuestionsReview.push({
      questionId: question.id,
      orderIndex: idx,
      prompt: question.prompt,
      topicSlug: question.topicSlug,
      topicTitle: question.topicTitle,
      materiaSlug: question.materiaSlug,
      selectedOptionId,
      correctOptionId: question.correctOptionId,
      isCorrect,
      explanation: question.explanation,
    });
  });

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
    allQuestionsReview,
  };
}
