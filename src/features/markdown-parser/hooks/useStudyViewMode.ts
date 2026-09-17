/**
 * @file useStudyViewMode.ts
 * @description Hook personalizado para controlar el modo de visualizacion (Lectura vs Estudio Activo).
 */

'use client';

import { useState, useCallback, useEffect } from 'react';
import { type StudyViewMode } from '../types/parser.types';

const STORAGE_KEY = 'estudios_view_mode';

/**
 * Hook para gestionar el modo de estudio de la interfaz.
 *
 * @param initialMode - Modo de inicio por defecto ('active_study' | 'reading').
 * @returns Modo actual y funcion para alternar o establecer el modo.
 */
export function useStudyViewMode(initialMode: StudyViewMode = 'active_study') {
  const [viewMode, setViewModeState] = useState<StudyViewMode>(initialMode);

  // Carga inicial segura del almacenamiento local en el cliente
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'reading' || stored === 'active_study') {
        setViewModeState(stored);
      }
    } catch {
      // Degradacion elegante si localStorage no esta disponible
    }
  }, []);

  const setViewMode = useCallback((mode: StudyViewMode) => {
    setViewModeState(mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Degradacion elegante
    }
  }, []);

  const toggleViewMode = useCallback(() => {
    setViewModeState((prev) => {
      const nextMode = prev === 'active_study' ? 'reading' : 'active_study';
      try {
        localStorage.setItem(STORAGE_KEY, nextMode);
      } catch {
        // Degradacion elegante
      }
      return nextMode;
    });
  }, []);

  return {
    viewMode,
    setViewMode,
    toggleViewMode,
    isReadingMode: viewMode === 'reading',
    isActiveStudyMode: viewMode === 'active_study',
  };
}
