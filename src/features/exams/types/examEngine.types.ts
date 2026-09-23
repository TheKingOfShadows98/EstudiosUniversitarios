/**
 * @file examEngine.types.ts
 * @description Tipos de dominio para el motor de examenes por materia, evaluacion y remediacion pedagogica.
 */

import { type QuestionOption, type QuestionType } from '@/features/markdown-parser/types/parser.types';
import { type ExamQuestionReviewItem } from '@/features/user/types/user.types';

/**
 * Reactivo enriquecido con el tema de origen para guiar la remediacion pedagogica.
 */
export interface SubjectExamQuestion {
  readonly id: string;
  readonly questionType: QuestionType;
  readonly prompt: string;
  readonly options: readonly QuestionOption[];
  readonly correctOptionId: string;
  readonly explanation?: string;
  readonly topicSlug: string;
  readonly topicTitle: string;
  readonly materiaSlug: string;
}

/**
 * Configuracion inicial para la sesion de examen.
 */
export interface ExamConfig {
  readonly materiaSlug: string;
  readonly materiaName: string;
  readonly maxQuestionsLimit: number;
  readonly passingPercentage: number;
}

/**
 * Estados del ciclo de vida del examen.
 */
export type ExamSessionStatus = 'ready' | 'in_progress' | 'completed';

/**
 * Revision individual de una pregunta contestada incorrectamente.
 */
export interface FailedQuestionReview {
  readonly question: SubjectExamQuestion;
  readonly selectedOptionId: string | null;
  readonly correctOptionId: string;
  readonly explanation?: string;
}

/**
 * Tema recomendado para estudio tras la evaluacion con conteo de fallos.
 */
export interface RemediationTopicRef {
  readonly topicSlug: string;
  readonly topicTitle: string;
  readonly materiaSlug: string;
  readonly failedCount: number;
}

/**
 * Resultado completo de la evaluacion del examen.
 */
export interface ExamEvaluationResult {
  readonly totalQuestions: number;
  readonly correctCount: number;
  readonly scorePercentage: number;
  readonly passed: boolean;
  readonly completedAt: string;
  readonly failedQuestions: readonly FailedQuestionReview[];
  readonly remediationTopics: readonly RemediationTopicRef[];
  readonly allQuestionsReview: readonly ExamQuestionReviewItem[];
}
