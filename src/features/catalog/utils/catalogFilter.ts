/**
 * @file catalogFilter.ts
 * @description Utilidad pura para el filtrado de asignaturas y temas por busqueda de texto y especialidad.
 */

import { type Subject, type CatalogFilterState } from '../types/catalog.types';

/**
 * Filtra la lista de asignaturas y temas segun el estado de busqueda actual.
 *
 * @param subjects - Lista completa de asignaturas disponibles.
 * @param filter - Criterios de busqueda y especialidad seleccionada.
 * @returns Lista de asignaturas que cumplen con los filtros.
 */
export function filterSubjects(
  subjects: readonly Subject[],
  filter: CatalogFilterState
): Subject[] {
  const query = filter.searchQuery.toLowerCase().trim();
  const especialidad = filter.selectedEspecialidad;

  return subjects
    .filter((subject) => {
      // Filtro por especialidad
      if (especialidad && subject.especialidadSlug !== especialidad) {
        return false;
      }

      // Si no hay consulta de texto, incluir la asignatura
      if (!query) {
        return true;
      }

      // Coincidencia en nombre o descripcion de la materia
      const matchesSubject =
        subject.name.toLowerCase().includes(query) ||
        subject.description.toLowerCase().includes(query);

      if (matchesSubject) {
        return true;
      }

      // Coincidencia en alguno de los temas o sus tags
      const matchesTopic = subject.topics.some((topic) => {
        const matchesTitle = topic.title.toLowerCase().includes(query);
        const matchesDesc = topic.description.toLowerCase().includes(query);
        const matchesTags = topic.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchesTitle || matchesDesc || matchesTags;
      });

      return matchesTopic;
    })
    .map((subject) => {
      // Si hay consulta de busqueda, filtramos tambien la lista interna de temas mostrados
      if (!query) {
        return subject;
      }

      const matchingTopics = subject.topics.filter((topic) => {
        const matchesTitle = topic.title.toLowerCase().includes(query);
        const matchesDesc = topic.description.toLowerCase().includes(query);
        const matchesTags = topic.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchesTitle || matchesDesc || matchesTags;
      });

      return {
        ...subject,
        topics: matchingTopics.length > 0 ? matchingTopics : subject.topics,
      };
    });
}
