/**
 * @file useTopicTracker.ts
 * @description Hook reactivo para registrar automaticamente el progreso y ultimo tema visitado por el usuario.
 */

'use client';

import { useEffect } from 'react';
import { useUserSession } from './useUserSession';

/**
 * Registra la visita al tema actual en el perfil persistido del usuario.
 *
 * @param materiaSlug - Identificador de la materia.
 * @param temaSlug - Identificador del tema.
 */
export function useTopicTracker(materiaSlug: string, temaSlug: string): void {
  const { trackTopicVisit, sessionState } = useUserSession();

  useEffect(() => {
    if (sessionState.status === 'authenticated' && materiaSlug && temaSlug) {
      trackTopicVisit(materiaSlug, temaSlug);
    }
  }, [sessionState.status, materiaSlug, temaSlug, trackTopicVisit]);
}
