/**
 * @file adjacentTopics.test.ts
 * @description Pruebas unitarias para el calculo de navegacion secuencial entre temas.
 */

import { describe, it, expect } from 'vitest';
import { getAdjacentTopics } from '../adjacentTopics';
import { type TopicSummary } from '../../types/catalog.types';

const mockTopics: TopicSummary[] = [
  {
    id: 'tema-1',
    slug: 'tema-1',
    title: 'Tema 1: Fundamentos',
    description: 'Desc 1',
    materiaSlug: 'quimica',
    especialidadSlug: 'ciencias',
    order: 1,
    tags: [],
    definitionsCount: 1,
    questionsCount: 2,
    lastUpdated: '2026-09-17',
  },
  {
    id: 'tema-2',
    slug: 'tema-2',
    title: 'Tema 2: Enlace Quimico',
    description: 'Desc 2',
    materiaSlug: 'quimica',
    especialidadSlug: 'ciencias',
    order: 2,
    tags: [],
    definitionsCount: 2,
    questionsCount: 3,
    lastUpdated: '2026-09-17',
  },
  {
    id: 'tema-3',
    slug: 'tema-3',
    title: 'Tema 3: Termodinamica',
    description: 'Desc 3',
    materiaSlug: 'quimica',
    especialidadSlug: 'ciencias',
    order: 3,
    tags: [],
    definitionsCount: 3,
    questionsCount: 4,
    lastUpdated: '2026-09-17',
  },
];

describe('getAdjacentTopics', () => {
  it('debe identificar el primer tema (sin previo, con siguiente y isFirstTopic true)', () => {
    const nav = getAdjacentTopics(mockTopics, 'tema-1', 'quimica');
    expect(nav.isFirstTopic).toBe(true);
    expect(nav.isLastTopic).toBe(false);
    expect(nav.prevTopic).toBeNull();
    expect(nav.nextTopic).not.toBeNull();
    expect(nav.nextTopic?.slug).toBe('tema-2');
  });

  it('debe identificar un tema intermedio (con previo y siguiente)', () => {
    const nav = getAdjacentTopics(mockTopics, 'tema-2', 'quimica');
    expect(nav.isFirstTopic).toBe(false);
    expect(nav.isLastTopic).toBe(false);
    expect(nav.prevTopic?.slug).toBe('tema-1');
    expect(nav.nextTopic?.slug).toBe('tema-3');
  });

  it('debe identificar el ultimo tema (con previo, sin siguiente y isLastTopic true)', () => {
    const nav = getAdjacentTopics(mockTopics, 'tema-3', 'quimica');
    expect(nav.isFirstTopic).toBe(false);
    expect(nav.isLastTopic).toBe(true);
    expect(nav.prevTopic?.slug).toBe('tema-2');
    expect(nav.nextTopic).toBeNull();
  });
});
