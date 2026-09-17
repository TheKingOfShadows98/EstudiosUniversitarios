/**
 * @file adjacentTopics.ts
 * @description Utilidad pura para calcular temas contiguos ordenados por la propiedad 'order'.
 */

import { type TopicSummary } from '../types/catalog.types';
import { type TopicAdjacentNavigation } from '../types/navigation.types';

/**
 * Calcula la navegacion previa y siguiente para un tema dentro de su materia segun el orden secuencial.
 *
 * @param topics - Lista de todos los temas de la asignatura.
 * @param currentTopicSlug - Slug del tema que se esta visualizando actualmente.
 * @param materiaSlug - Slug de la materia.
 * @returns Objeto con las referencias al tema anterior, siguiente y estado de frontera.
 */
export function getAdjacentTopics(
  topics: readonly TopicSummary[],
  currentTopicSlug: string,
  materiaSlug: string
): TopicAdjacentNavigation {
  // Ordenar los temas de forma ascendente segun la propiedad order
  const sortedTopics = [...topics].sort((a, b) => a.order - b.order);
  const currentIndex = sortedTopics.findIndex((t) => t.slug === currentTopicSlug);

  if (currentIndex === -1) {
    return {
      prevTopic: null,
      nextTopic: null,
      isFirstTopic: true,
      isLastTopic: true,
      currentOrder: 1,
      totalTopicsInSubject: sortedTopics.length,
      materiaSlug,
    };
  }

  const currentTopic = sortedTopics[currentIndex];
  const prevTopic = currentIndex > 0 ? sortedTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < sortedTopics.length - 1 ? sortedTopics[currentIndex + 1] : null;

  return {
    prevTopic: prevTopic
      ? {
          slug: prevTopic.slug,
          title: prevTopic.title,
          order: prevTopic.order,
        }
      : null,
    nextTopic: nextTopic
      ? {
          slug: nextTopic.slug,
          title: nextTopic.title,
          order: nextTopic.order,
        }
      : null,
    isFirstTopic: currentIndex === 0,
    isLastTopic: currentIndex === sortedTopics.length - 1,
    currentOrder: currentTopic.order,
    totalTopicsInSubject: sortedTopics.length,
    materiaSlug,
  };
}
