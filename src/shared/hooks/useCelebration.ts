/**
 * @file useCelebration.ts
 * @description Hook orquestador para sincronizar efectos visuales de confeti
 * y reproduccion de audio configurado segun el rendimiento del estudiante.
 */

'use client';

import { useCallback } from 'react';
import { type ExamGradeBracket } from '@/features/user/types/user.types';
import { confettiService } from '../utils/confetti';
import { soundPlayerService } from '../services/soundPlayer';
import { type CelebrationIntensity, type SoundEffectKey } from '../types/celebration.types';

/**
 * Mapeo entre calificacion obtenida en el examen y la intensidad de celebracion / sonido.
 */
function mapGradeBracketToCelebration(bracket: ExamGradeBracket): {
  readonly intensity: CelebrationIntensity;
  readonly soundKey: SoundEffectKey;
} | null {
  switch (bracket) {
    case 'sufficient':
      return { intensity: 'exam_pass_min', soundKey: 'exam_pass_min' };
    case 'good':
      return { intensity: 'exam_pass_mid', soundKey: 'exam_pass_mid' };
    case 'excellent':
      return { intensity: 'perfect_strike', soundKey: 'perfect_strike' };
    case 'critical':
    default:
      return null;
  }
}

/**
 * Hook para invocar celebraciones en reactivos y calificaciones de examen.
 */
export function useCelebration() {
  /**
   * Dispara celebracion puntual al responder correctamente una pregunta en modo estudio.
   *
   * @param origin - Coordenadas relativas opcionales de la pantalla (x, y de 0 a 1).
   */
  const celebrateCorrectAnswer = useCallback((origin?: { x: number; y: number }) => {
    confettiService.celebrate('single_correct', origin);
    void soundPlayerService.playSound('correct_answer');
  }, []);

  /**
   * Dispara celebracion escalonada al culminar un examen con calificacion aprobatoria.
   *
   * @param gradeBracket - Rango de calificacion alcanzado en el examen.
   */
  const celebrateExamCompletion = useCallback((gradeBracket: ExamGradeBracket) => {
    const celebration = mapGradeBracketToCelebration(gradeBracket);
    if (!celebration) {
      return;
    }

    confettiService.celebrate(celebration.intensity);
    void soundPlayerService.playSound(celebration.soundKey);
  }, []);

  return {
    celebrateCorrectAnswer,
    celebrateExamCompletion,
  };
}
