/**
 * @file catalog.types.ts
 * @description Definiciones de tipos e interfaces para el catalogo de asignaturas y temas academicos.
 */

/**
 * Resumen estructurado de un tema para listados y tarjetas.
 */
export interface TopicSummary {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly materiaSlug: string;
  readonly especialidadSlug: string;
  readonly order: number;
  readonly tags: readonly string[];
  readonly definitionsCount: number;
  readonly questionsCount: number;
  readonly lastUpdated: string;
}

/**
 * Representa una materia o asignatura con sus metricas agregadas.
 */
export interface Subject {
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly especialidadSlug: string;
  readonly topicsCount: number;
  readonly totalQuestionsCount: number;
  readonly topics: readonly TopicSummary[];
}

/**
 * Estado de los filtros de busqueda en el catalogo.
 */
export interface CatalogFilterState {
  readonly searchQuery: string;
  readonly selectedEspecialidad: string | null;
}

/**
 * Metadatos opcionales definidos para una asignatura en metadata.json.
 */
export interface SubjectMetadata {
  readonly name: string;
  readonly description: string;
  readonly especialidadSlug: string;
  readonly order?: number;
}
