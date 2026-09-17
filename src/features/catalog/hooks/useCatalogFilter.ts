/**
 * @file useCatalogFilter.ts
 * @description Hook reactivo para controlar la busqueda y filtrado de asignaturas en el catalogo.
 */

'use client';

import { useState, useMemo, useCallback } from 'react';
import { type Subject, type CatalogFilterState } from '../types/catalog.types';
import { filterSubjects } from '../utils/catalogFilter';

/**
 * Hook para el manejo de estado de busqueda y filtrado del catalogo.
 *
 * @param initialSubjects - Lista inicial de asignaturas provista por el servidor.
 */
export function useCatalogFilter(initialSubjects: readonly Subject[]) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEspecialidad, setSelectedEspecialidad] = useState<string | null>(null);

  // Extraccion de especialidades unicas presentes en las asignaturas
  const availableEspecialidades = useMemo(() => {
    const set = new Set<string>();
    for (const subject of initialSubjects) {
      if (subject.especialidadSlug) {
        set.add(subject.especialidadSlug);
      }
    }
    return Array.from(set);
  }, [initialSubjects]);

  const filterState: CatalogFilterState = useMemo(
    () => ({
      searchQuery,
      selectedEspecialidad,
    }),
    [searchQuery, selectedEspecialidad]
  );

  const filteredSubjects = useMemo(() => {
    return filterSubjects(initialSubjects, filterState);
  }, [initialSubjects, filterState]);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleEspecialidadSelect = useCallback((especialidad: string | null) => {
    setSelectedEspecialidad(especialidad);
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedEspecialidad(null);
  }, []);

  return {
    searchQuery,
    selectedEspecialidad,
    availableEspecialidades,
    filteredSubjects,
    totalResults: filteredSubjects.length,
    handleSearchChange,
    handleEspecialidadSelect,
    clearFilters,
  };
}
