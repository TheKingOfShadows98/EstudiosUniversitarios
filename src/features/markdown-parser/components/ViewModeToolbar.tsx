/**
 * @file ViewModeToolbar.tsx
 * @description Barra de herramientas para alternar entre Modo Lectura y Modo Estudio Activo.
 */

'use client';

import React from 'react';
import { type StudyViewMode } from '../types/parser.types';
import styles from './ViewModeToolbar.module.css';

export interface ViewModeToolbarProps {
  readonly mode: StudyViewMode;
  readonly onModeChange: (mode: StudyViewMode) => void;
  readonly questionsCount?: number;
}

/**
 * Barra superior para la conmutacion de modo de lectura y estudio activo.
 */
export function ViewModeToolbar({ mode, onModeChange, questionsCount }: ViewModeToolbarProps) {
  return (
    <aside className={styles.toolbar} aria-label="Controles de visualizacion de estudio">
      <div className={styles.titleGroup}>
        <span className={styles.label}>Modo de Estudio</span>
        {typeof questionsCount === 'number' && (
          <span className={styles.label}>({questionsCount} reactivos disponibles)</span>
        )}
      </div>

      <div className={styles.buttonGroup} role="group" aria-label="Seleccionar modo">
        <button
          type="button"
          className={`${styles.modeButton} ${mode === 'reading' ? styles.activeButton : ''}`}
          onClick={() => onModeChange('reading')}
          aria-pressed={mode === 'reading'}
        >
          Lectura
        </button>
        <button
          type="button"
          className={`${styles.modeButton} ${mode === 'active_study' ? styles.activeButton : ''}`}
          onClick={() => onModeChange('active_study')}
          aria-pressed={mode === 'active_study'}
        >
          Estudio Activo
        </button>
      </div>
    </aside>
  );
}
