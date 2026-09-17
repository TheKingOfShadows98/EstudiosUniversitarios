/**
 * @file LandingCatalogView.tsx
 * @description Orquestador interactivo en cliente para la Landing Page del catalogo.
 */

'use client';

import React, { useMemo } from 'react';
import { type Subject } from '../types/catalog.types';
import { useCatalogFilter } from '../hooks/useCatalogFilter';
import { LandingHero } from './LandingHero';
import { CatalogFilterBar } from './CatalogFilterBar';
import { SubjectGrid } from './SubjectGrid';
import styles from './LandingCatalogView.module.css';

export interface LandingCatalogViewProps {
  readonly initialSubjects: readonly Subject[];
}

/**
 * Vista principal de la Landing Page que conecta el hero, barra de busqueda y cuadricula.
 */
export function LandingCatalogView({ initialSubjects }: LandingCatalogViewProps) {
  const {
    searchQuery,
    selectedEspecialidad,
    availableEspecialidades,
    filteredSubjects,
    handleSearchChange,
    handleEspecialidadSelect,
  } = useCatalogFilter(initialSubjects);

  // Metricas globales para el hero
  const globalMetrics = useMemo(() => {
    let topics = 0;
    let questions = 0;
    for (const sub of initialSubjects) {
      topics += sub.topicsCount;
      questions += sub.totalQuestionsCount;
    }
    return {
      totalSubjects: initialSubjects.length,
      totalTopics: topics,
      totalQuestions: questions,
    };
  }, [initialSubjects]);

  return (
    <div className={styles.catalogContainer}>
      <LandingHero
        totalSubjects={globalMetrics.totalSubjects}
        totalTopics={globalMetrics.totalTopics}
        totalQuestions={globalMetrics.totalQuestions}
      />

      <CatalogFilterBar
        searchQuery={searchQuery}
        selectedEspecialidad={selectedEspecialidad}
        availableEspecialidades={availableEspecialidades}
        onSearchChange={handleSearchChange}
        onEspecialidadChange={handleEspecialidadSelect}
      />

      <SubjectGrid subjects={filteredSubjects} />
    </div>
  );
}
