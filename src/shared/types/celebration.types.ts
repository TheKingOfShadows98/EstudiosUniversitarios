/**
 * @file celebration.types.ts
 * @description Contratos de tipos y modelo de dominio para el sistema de celebracion,
 * efectos de sonido y particulas de confeti.
 */

/**
 * Identificadores semanticos de efectos de sonido disponibles en la plataforma.
 */
export type SoundEffectKey =
  | 'correct_answer'
  | 'exam_pass_min'
  | 'exam_pass_mid'
  | 'perfect_strike';

/**
 * Formatos de audio permitidos para los efectos sonoros.
 */
export type AudioFileExtension = 'mp3' | 'ogg' | 'wav';

/**
 * Configuracion individual de un efecto de sonido.
 */
export interface SoundEffectItemConfig {
  /** Ruta relativa o absoluta del archivo de audio (dentro de /public o URL estatica). */
  readonly src: string;
  /** Volumen predeterminado del sonido (rango de 0.0 a 1.0). */
  readonly volume: number;
  /** Titulo o descripcion legible del sonido para propositos de configuracion. */
  readonly description: string;
}

/**
 * Esquema de configuracion global de sonidos del sistema.
 */
export type SoundEffectsRegistryConfig = Record<SoundEffectKey, SoundEffectItemConfig>;

/**
 * Niveles de intensidad de la celebracion de confeti.
 * - 'single_correct': Rafaga puntual y focalizada al contestar un reactivo de forma correcta.
 * - 'exam_pass_min': Celebracion de escala base para nota minima aprobatoria (5.0 - 6.9).
 * - 'exam_pass_mid': Celebracion de escala media para nota notable/buena (7.0 - 8.9).
 * - 'perfect_strike': Celebracion maxima multicapa para calificacion excelente/perfecta (>= 9.0).
 */
export type CelebrationIntensity =
  | 'single_correct'
  | 'exam_pass_min'
  | 'exam_pass_mid'
  | 'perfect_strike';

/**
 * Parametros numericos y dimensionales para el motor de particulas de confeti.
 */
export interface ConfettiParticleOptions {
  /** Cantidad total de particulas a instanciar. */
  readonly particleCount: number;
  /** Angulo de propagacion en grados (0 a 360). */
  readonly angle: number;
  /** Dispersion angular en grados. */
  readonly spread: number;
  /** Velocidad de propulsion inicial. */
  readonly startVelocity: number;
  /** Duracion estimada del ciclo de animacion en milisegundos. */
  readonly durationMs: number;
  /** Coordenadas de origen normalizadas (rango 0.0 a 1.0). */
  readonly origin: {
    readonly x: number;
    readonly y: number;
  };
  /** Paleta de colores hexadecimales o RGB para las particulas. */
  readonly colors: readonly string[];
}

/**
 * Parametros para disparar un evento de celebracion completo (sonido + confeti).
 */
export interface TriggerCelebrationOptions {
  /** Nivel de intensidad o escala de la celebracion. */
  readonly intensity: CelebrationIntensity;
  /** Opcional: origen relativo del click o elemento (si aplica). */
  readonly origin?: {
    readonly x: number;
    readonly y: number;
  };
  /** Desactivar temporalmente el sonido si el usuario lo configuro asi. */
  readonly muteSound?: boolean;
}

/**
 * Puerto (Hexagonal) para el servicio reproductor de audio.
 */
export interface ISoundPlayerService {
  /** Reproduce un efecto de sonido segun su clave configurada. */
  playSound(key: SoundEffectKey): Promise<void>;
  /** Detiene todas las reproducciones de audio activas. */
  stopAll(): void;
  /** Obtiene la configuracion actual de sonidos. */
  getConfig(): SoundEffectsRegistryConfig;
}

/**
 * Puerto (Hexagonal) para el controlador de particulas de confeti.
 */
export interface IConfettiService {
  /** Dispara el efecto de particulas con una configuracion dada. */
  fire(options: ConfettiParticleOptions): void;
  /** Dispara la animacion preconfigurada segun la intensidad requerida. */
  celebrate(intensity: CelebrationIntensity, origin?: { x: number; y: number }): void;
}
