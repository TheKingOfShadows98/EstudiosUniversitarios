/**
 * @file soundConfig.ts
 * @description Archivo de configuracion centralizado para efectos de sonido (.mp3 / .ogg / .wav).
 * Permite personalizar las rutas relativas o absolutas de los archivos de audio utilizados en la plataforma.
 */

import { type SoundEffectsRegistryConfig } from '../types/celebration.types';

/**
 * Configuracion predeterminada de los efectos de sonido de la aplicacion.
 * Los archivos deben ubicarse dentro del directorio public/ (por ejemplo public/sounds/correct-answer.mp3).
 * Se admiten formatos de audio estandar: .mp3, .ogg y .wav.
 */
export const SOUND_CONFIG: SoundEffectsRegistryConfig = {
  correct_answer: {
    src: '/sounds/correct-answare.mp3',
    volume: 0.7,
    description: 'Efecto de sonido al responder correctamente un reactivo en modo estudio asistido.',
  },
  exam_pass_min: {
    src: '/sounds/exam-pass-min.mp3',
    volume: 0.75,
    description: 'Efecto de sonido al completar un examen con nota minima regular (5.0 - 6.9).',
  },
  exam_pass_mid: {
    src: '/sounds/exam-pass-mid.mp3',
    volume: 0.8,
    description: 'Efecto de sonido al completar un examen con nota media aprobatoria (7.0 - 8.9).',
  },
  perfect_strike: {
    src: '/sounds/perfect-strike.mp3',
    volume: 0.9,
    description: 'Efecto de sonido de maxima celebracion para nota excelente (>= 9.0).',
  },
};

/**
 * Frecuencias sinteticas de respaldo (Web Audio API) para cuando los archivos binarios (.mp3/.ogg)
 * aun no hayan sido agregados fisicamente en la carpeta public/sounds/.
 */
export interface SyntheticTonePreset {
  readonly frequencies: readonly number[];
  readonly duration: number;
  readonly type: OscillatorType;
}

export const SYNTHETIC_SOUND_PRESETS: Record<keyof SoundEffectsRegistryConfig, SyntheticTonePreset> = {
  correct_answer: {
    frequencies: [523.25, 659.25, 783.99], // C5 -> E5 -> G5 (Arpegio Mayor)
    duration: 0.12,
    type: 'triangle',
  },
  exam_pass_min: {
    frequencies: [440.0, 554.37, 659.25], // A4 -> C#5 -> E5
    duration: 0.18,
    type: 'sine',
  },
  exam_pass_mid: {
    frequencies: [523.25, 659.25, 783.99, 1046.5], // C5 -> E5 -> G5 -> C6
    duration: 0.15,
    type: 'triangle',
  },
  perfect_strike: {
    frequencies: [587.33, 739.99, 880.0, 1174.66, 1479.98], // D5 -> F#5 -> A5 -> D6 -> F#6 (Fanfarria Épica)
    duration: 0.16,
    type: 'triangle',
  },
};
