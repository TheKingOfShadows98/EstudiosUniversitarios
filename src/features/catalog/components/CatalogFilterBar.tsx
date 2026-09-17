/**
 * @file CatalogFilterBar.tsx
 * @description Barra de busqueda y selector de especialidades para el catalogo.
 */

'use client';

import React from 'react';
import styles from './CatalogFilterBar.module.css';

export interface CatalogFilterBarProps {
  readonly searchQuery: string;
  readonly selectedEspecialidad: string | null;
  readonly availableEspecialidades: readonly string[];
  readonly onSearchChange: (query: string) => void;
  readonly onEspecialidadChange: (especialidad: string | null) => void;
}

/**
 * Filtro interactivo de asignaturas y temas.
 */
export function CatalogFilterBar({
  searchQuery,
  selectedEspecialidad,
  availableEspecialidades,
  onSearchChange,
  onEspecialidadChange,
}: CatalogFilterBarProps) {
  return (
    <div className={styles.filterContainer} role="search" aria-label="Filtros del catalogo">
      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar materia, tema, concepto o etiqueta (ej. arboles, memoria, algoritmos)..."
          className={styles.searchInput}
          aria-label="Buscar en el catalogo"
        />
      </div>

      {availableEspecialidades.length > 0 && (
        <div className={styles.chipsContainer}>
          <span className={styles.chipsLabel}>Especialidad:</span>
          <button
            type="button"
            className={`${styles.chip} ${selectedEspecialidad === null ? styles.activeChip : ''}`}
            onClick={() => onEspecialidadChange(null)}
          >
            Todas
          </button>
          {availableEspecialidades.map((esp) => (
            <button
              key={esp}
              type="button"
              className={`${styles.chip} ${selectedEspecialidad === esp ? styles.activeChip : ''}`}
              onClick={() => onEspecialidadChange(esp)}
            >
              {esp.replace(/-/g, ' ').toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
