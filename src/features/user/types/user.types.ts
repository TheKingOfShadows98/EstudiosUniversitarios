/**
 * @file user.types.ts
 * @description Contratos de tipos y modelo de dominio para el perfil de usuario,
 * persistencia local y gamificacion (Medallas de Valor y Copas del Conocimiento).
 */

/**
 * Estado pedagogico y de gamificacion para cada tema individual.
 * - 'untouched': Tema que aun no ha sido evaluado.
 * - 'pending_valor_medal': Tema con preguntas falladas previamente, habilitado para reclamar Medalla de Valor.
 * - 'completed': Tema superado y contestado correctamente.
 */
export type TopicGamificationStatus = 'untouched' | 'pending_valor_medal' | 'completed';

/**
 * Registro de estado y progreso por tema.
 */
export interface UserTopicProgress {
  readonly topicSlug: string;
  readonly materiaSlug: string;
  readonly status: TopicGamificationStatus;
  readonly lastEvaluatedAt?: string;
  readonly failedQuestionsCount: number;
}

/**
 * Registro de progreso y ubicacion de estudio por asignatura.
 */
export interface UserSubjectProgress {
  readonly materiaSlug: string;
  readonly lastTopicSlug: string | null;
  readonly lastAccessedAt: string;
}

/**
 * Perfil completo del usuario persistido localmente.
 */
export interface UserProfile {
  readonly username: string;
  readonly valorMedals: number;
  readonly knowledgeTrophies: number;
  readonly subjectProgress: Record<string, UserSubjectProgress>;
  readonly topicsProgress: Record<string, UserTopicProgress>;
  readonly createdAt: string;
  readonly updatedAt: string;
}

/**
 * Estado de autenticacion / sesion local en el cliente.
 */
export type UserSessionState =
  | { readonly status: 'loading' }
  | { readonly status: 'unauthenticated' }
  | { readonly status: 'authenticated'; readonly user: UserProfile };

/**
 * Clasificacion por rango de calificacion de examen y su representacion visual.
 * - 'critical': Calificacion < 5.0 (Rojo).
 * - 'sufficient': Calificacion >= 5.0 y < 7.0 (Naranja).
 * - 'good': Calificacion >= 7.0 y < 9.0 (Naranja / Ambar).
 * - 'excellent': Calificacion >= 9.0 (Verde - Otorga Copa del Conocimiento).
 */
export type ExamGradeBracket = 'critical' | 'sufficient' | 'good' | 'excellent';

/**
 * Evaluacion de una pregunta individual en el resumen ordenado del examen.
 */
export interface ExamQuestionReviewItem {
  readonly questionId: string;
  readonly orderIndex: number;
  readonly prompt: string;
  readonly topicSlug: string;
  readonly topicTitle: string;
  readonly materiaSlug: string;
  readonly selectedOptionId: string | null;
  readonly correctOptionId: string;
  readonly isCorrect: boolean;
  readonly explanation?: string;
}

/**
 * Recompensas y mutaciones computadas tras concluir un examen.
 */
export interface ExamGamificationReward {
  readonly earnedKnowledgeTrophy: boolean;
  readonly earnedValorMedalsCount: number;
  readonly newlyTaggedValorTopics: readonly string[];
  readonly newlyCompletedTopics: readonly string[];
  readonly gradeBracket: ExamGradeBracket;
  readonly score10Scale: number;
}

/**
 * Puerto (Hexagonal) para el repositorio de persistencia de usuario.
 */
export interface IUserRepository {
  getUser(): UserProfile | null;
  createUser(username: string): UserProfile;
  saveUser(user: UserProfile): void;
  updateLastVisitedTopic(materiaSlug: string, topicSlug: string): UserProfile;
  processExamCompletion(
    materiaSlug: string,
    questions: readonly ExamQuestionReviewItem[],
    scorePercentage: number
  ): { readonly updatedUser: UserProfile; readonly reward: ExamGamificationReward };
  logout(): void;
}
