/**
 * @file celebration.test.ts
 * @description Pruebas unitarias para la configuracion de sonido y motor de celebracion.
 */

import { describe, it, expect } from 'vitest';
import { SOUND_CONFIG, SYNTHETIC_SOUND_PRESETS } from '../../config/soundConfig';
import { type SoundEffectKey } from '../../types/celebration.types';

describe('Sound Configuration Registry', () => {
  const requiredKeys: readonly SoundEffectKey[] = [
    'correct_answer',
    'exam_pass_min',
    'exam_pass_mid',
    'perfect_strike',
  ];

  it('debe contener todas las claves de efectos de sonido requeridas por el sistema', () => {
    requiredKeys.forEach((key) => {
      expect(SOUND_CONFIG[key]).toBeDefined();
      expect(SOUND_CONFIG[key].src).toMatch(/\.(mp3|ogg|wav)$/);
      expect(SOUND_CONFIG[key].volume).toBeGreaterThanOrEqual(0);
      expect(SOUND_CONFIG[key].volume).toBeLessThanOrEqual(1);
      expect(SOUND_CONFIG[key].description.length).toBeGreaterThan(5);
    });
  });

  it('debe tener presets sinteticos de respaldo para cada clave de sonido', () => {
    requiredKeys.forEach((key) => {
      const preset = SYNTHETIC_SOUND_PRESETS[key];
      expect(preset).toBeDefined();
      expect(preset.frequencies.length).toBeGreaterThan(0);
      expect(preset.duration).toBeGreaterThan(0);
      expect(['sine', 'square', 'sawtooth', 'triangle']).toContain(preset.type);
    });
  });

  it('debe mapear el sonido de respuesta correcta a correct-answare.mp3', () => {
    expect(SOUND_CONFIG.correct_answer.src).toContain('correct-answare.mp3');
  });

  it('debe mapear el sonido maximo a perfect-strike.mp3', () => {
    expect(SOUND_CONFIG.perfect_strike.src).toContain('perfect-strike.mp3');
  });
});
