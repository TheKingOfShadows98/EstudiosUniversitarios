/**
 * @file catalogFilter.test.ts
 * @description Pruebas unitarias para el algoritmo de filtrado del catalogo.
 */

import { describe, it, expect } from 'vitest';
import { filterSubjects } from '../catalogFilter';
import { type Subject } from '../../types/catalog.types';

const mockSubjects: Subject[] = [
  {
    slug: 'estructuras-de-datos',
    name: 'Estructuras de Datos',
    description: 'Arboles, grafos y analisis de algoritmos.',
    especialidadSlug: 'ingenieria-software',
    topicsCount: 2,
    totalQuestionsCount: 5,
    topics: [
      {
        id: 'arboles-binarios',
        slug: 'arboles-binarios',
        title: 'Arboles Binarios y Recorridos',
        description: 'Propiedades y recorridos DFS.',
        materiaSlug: 'estructuras-de-datos',
        especialidadSlug: 'ingenieria-software',
        order: 1,
        tags: ['arboles', 'dfs'],
        definitionsCount: 2,
        questionsCount: 3,
        lastUpdated: '2026-09-17',
      },
      {
        id: 'grafos-dijkstra',
        slug: 'grafos-dijkstra',
        title: 'Grafos y Algoritmo de Dijkstra',
        description: 'Caminos minimos en grafos ponderados.',
        materiaSlug: 'estructuras-de-datos',
        especialidadSlug: 'ingenieria-software',
        order: 2,
        tags: ['grafos', 'dijkstra'],
        definitionsCount: 1,
        questionsCount: 2,
        lastUpdated: '2026-09-17',
      },
    ],
  },
  {
    slug: 'sistemas-operativos',
    name: 'Sistemas Operativos',
    description: 'Procesos, memoria virtual y concurrencia.',
    especialidadSlug: 'sistemas-computacionales',
    topicsCount: 1,
    totalQuestionsCount: 4,
    topics: [
      {
        id: 'gestion-memoria',
        slug: 'gestion-memoria',
        title: 'Gestion de Memoria Paginada',
        description: 'Paginacion y segmentacion.',
        materiaSlug: 'sistemas-operativos',
        especialidadSlug: 'sistemas-computacionales',
        order: 1,
        tags: ['memoria', 'paginacion'],
        definitionsCount: 3,
        questionsCount: 4,
        lastUpdated: '2026-09-17',
      },
    ],
  },
];

describe('filterSubjects', () => {
  it('debe retornar todas las asignaturas cuando no hay filtros aplicados', () => {
    const result = filterSubjects(mockSubjects, { searchQuery: '', selectedEspecialidad: null });
    expect(result.length).toBe(2);
  });

  it('debe filtrar por especialidad', () => {
    const result = filterSubjects(mockSubjects, {
      searchQuery: '',
      selectedEspecialidad: 'ingenieria-software',
    });
    expect(result.length).toBe(1);
    expect(result[0].slug).toBe('estructuras-de-datos');
  });

  it('debe filtrar por termino de busqueda en el titulo del tema', () => {
    const result = filterSubjects(mockSubjects, {
      searchQuery: 'dijkstra',
      selectedEspecialidad: null,
    });
    expect(result.length).toBe(1);
    expect(result[0].slug).toBe('estructuras-de-datos');
    expect(result[0].topics.length).toBe(1);
    expect(result[0].topics[0].slug).toBe('grafos-dijkstra');
  });

  it('debe filtrar por tag o etiqueta de tema', () => {
    const result = filterSubjects(mockSubjects, {
      searchQuery: 'paginacion',
      selectedEspecialidad: null,
    });
    expect(result.length).toBe(1);
    expect(result[0].slug).toBe('sistemas-operativos');
  });

  it('debe retornar un arreglo vacio si no hay coincidencias', () => {
    const result = filterSubjects(mockSubjects, {
      searchQuery: 'quimica organica',
      selectedEspecialidad: null,
    });
    expect(result.length).toBe(0);
  });
});
