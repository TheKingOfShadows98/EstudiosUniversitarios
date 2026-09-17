/**
 * @file navigation.types.ts
 * @description Tipos de dominio para la navegacion secuencial ordinal entre temas de una materia.
 */

/**
 * Referencia a un tema contiguo en la secuencia de aprendizaje.
 */
export interface AdjacentTopicRef {
  readonly slug: string;
  readonly title: string;
  readonly order: number;
}

/**
 * Estructura que describe la navegacion adyacente para un tema actual.
 */
export interface TopicAdjacentNavigation {
  readonly prevTopic: AdjacentTopicRef | null;
  readonly nextTopic: AdjacentTopicRef | null;
  readonly isFirstTopic: boolean;
  readonly isLastTopic: boolean;
  readonly currentOrder: number;
  readonly totalTopicsInSubject: number;
  readonly materiaSlug: string;
}
