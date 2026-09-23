/**
 * @file soundPlayer.ts
 * @description Adaptador de infraestructura para la reproduccion de efectos de sonido
 * con soporte para archivos .mp3/.ogg y generador sintetico Web Audio API de respaldo.
 */

import {
  type ISoundPlayerService,
  type SoundEffectKey,
  type SoundEffectsRegistryConfig,
} from '../types/celebration.types';
import { SOUND_CONFIG, SYNTHETIC_SOUND_PRESETS } from '../config/soundConfig';

/**
 * Adaptador de reproduccion de audio para el navegador.
 */
export class BrowserSoundPlayer implements ISoundPlayerService {
  private readonly config: SoundEffectsRegistryConfig;
  private audioContext: AudioContext | null = null;
  private readonly audioCache = new Map<string, HTMLAudioElement>();

  public constructor(config: SoundEffectsRegistryConfig = SOUND_CONFIG) {
    this.config = config;
  }

  /**
   * Obtiene o inicializa perezosamente el AudioContext.
   */
  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') {
      return null;
    }
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      void this.audioContext.resume();
    }
    return this.audioContext;
  }

  /**
   * Genera tonos armonicos sinteticos utilizando Web Audio API cuando el archivo fisico no existe.
   *
   * @param key - Clave del efecto de sonido a sintetizar.
   */
  private playSyntheticFallback(key: SoundEffectKey): void {
    const ctx = this.getAudioContext();
    if (!ctx) {
      return;
    }

    const preset = SYNTHETIC_SOUND_PRESETS[key];
    if (!preset) {
      return;
    }

    const now = ctx.currentTime;
    const toneDuration = preset.duration;

    preset.frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = preset.type;
      osc.frequency.setValueAtTime(freq, now + index * toneDuration);

      const startTime = now + index * toneDuration;
      const stopTime = startTime + toneDuration;

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.25, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, stopTime);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(stopTime);
    });
  }

  /**
   * Reproduce un efecto de sonido configurado. Si el archivo no carga o falla,
   * conmuta silenciosamente al sintetizador Web Audio.
   *
   * @param key - Clave del efecto sonoro.
   */
  public async playSound(key: SoundEffectKey): Promise<void> {
    if (typeof window === 'undefined') {
      return;
    }

    const soundItem = this.config[key];
    if (!soundItem) {
      return;
    }

    try {
      let audio = this.audioCache.get(soundItem.src);
      if (!audio) {
        audio = new Audio(soundItem.src);
        audio.preload = 'auto';
        this.audioCache.set(soundItem.src, audio);
      }

      audio.volume = Math.max(0, Math.min(1, soundItem.volume));
      audio.currentTime = 0;

      await audio.play().catch(() => {
        // Si el archivo binario no esta presente en public/ o es rechazado por autoplay, usar sintetizador
        this.playSyntheticFallback(key);
      });
    } catch {
      this.playSyntheticFallback(key);
    }
  }

  /**
   * Detiene las instancias cacheadas de audio.
   */
  public stopAll(): void {
    this.audioCache.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  /**
   * Devuelve la configuracion activa de efectos de sonido.
   */
  public getConfig(): SoundEffectsRegistryConfig {
    return this.config;
  }
}

/**
 * Instancia singleton para uso transversal en la aplicacion.
 */
export const soundPlayerService = new BrowserSoundPlayer();
