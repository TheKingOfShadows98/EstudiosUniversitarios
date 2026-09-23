/**
 * @file confetti.ts
 * @description Motor de particulas de confeti en Canvas 2D sin dependencias externas,
 * optimizado para rendimiento de 60fps con gestion automatica de ciclo de vida del canvas.
 */

import {
  type CelebrationIntensity,
  type ConfettiParticleOptions,
  type IConfettiService,
} from '../types/celebration.types';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  decay: number;
}

const DEFAULT_COLORS: readonly string[] = [
  '#2563eb', // Azul
  '#10b981', // Esmeralda / Verde
  '#f59e0b', // Ambar
  '#ec4899', // Rosa
  '#8b5cf6', // Purpura
  '#06b6d4', // Cian
  '#eab308', // Dorado
];

const GOLDEN_COLORS: readonly string[] = [
  '#fbbf24', // Oro claro
  '#f59e0b', // Oro ambar
  '#d97706', // Oro oscuro
  '#10b981', // Esmeralda
  '#3b82f6', // Zafiro
  '#ffffff', // Destello blanco
];

/**
 * Gestor del canvas de superposicion para animaciones de particulas.
 */
class ConfettiEngine implements IConfettiService {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private animationFrameId: number | null = null;

  /**
   * Inicializa o redimensiona el canvas en la ventana global.
   */
  private ensureCanvas(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.style.position = 'fixed';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.width = '100vw';
      this.canvas.style.height = '100vh';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '99999';
      this.canvas.setAttribute('aria-hidden', 'true');
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
    }

    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;

    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }

    return Boolean(this.ctx);
  }

  /**
   * Bucle de animacion fisica de particulas.
   */
  private loop = (): void => {
    if (!this.ctx || !this.canvas) {
      return;
    }

    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // Gravedad
      p.vx *= 0.98; // Resistencia del aire
      p.vy *= 0.98;
      p.rotation += p.rotationSpeed;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > window.innerHeight + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationFrameId = requestAnimationFrame(this.loop);
    } else {
      if (this.canvas && this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
        this.canvas = null;
        this.ctx = null;
      }
      this.animationFrameId = null;
    }
  };

  /**
   * Dispara una rafaga de particulas personalizada.
   */
  public fire(options: ConfettiParticleOptions): void {
    if (!this.ensureCanvas()) {
      return;
    }

    const originX = options.origin.x * window.innerWidth;
    const originY = options.origin.y * window.innerHeight;
    const radAngle = (options.angle * Math.PI) / 180;
    const radSpread = (options.spread * Math.PI) / 180;

    for (let i = 0; i < options.particleCount; i++) {
      const currentAngle = radAngle + (Math.random() - 0.5) * radSpread;
      const velocity = options.startVelocity * (0.6 + Math.random() * 0.8);
      const color = options.colors[Math.floor(Math.random() * options.colors.length)];

      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(currentAngle) * velocity,
        vy: -Math.sin(currentAngle) * velocity,
        width: 6 + Math.random() * 6,
        height: 8 + Math.random() * 6,
        color,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        opacity: 1,
        decay: 1 / (options.durationMs / 16.6),
      });
    }

    if (!this.animationFrameId) {
      this.animationFrameId = requestAnimationFrame(this.loop);
    }
  }

  /**
   * Dispara una celebracion preconfigurada segun el nivel de intensidad.
   *
   * @param intensity - Escala de celebracion.
   * @param origin - Coordenadas de origen normalizadas opcionales.
   */
  public celebrate(intensity: CelebrationIntensity, origin?: { x: number; y: number }): void {
    const defaultOrigin = origin ?? { x: 0.5, y: 0.6 };

    switch (intensity) {
      case 'single_correct': {
        this.fire({
          particleCount: 35,
          angle: 90,
          spread: 60,
          startVelocity: 18,
          durationMs: 1400,
          origin: defaultOrigin,
          colors: DEFAULT_COLORS,
        });
        break;
      }

      case 'exam_pass_min': {
        // Rafaga base moderada
        this.fire({
          particleCount: 55,
          angle: 90,
          spread: 75,
          startVelocity: 22,
          durationMs: 1800,
          origin: { x: 0.5, y: 0.65 },
          colors: DEFAULT_COLORS,
        });
        break;
      }

      case 'exam_pass_mid': {
        // Doble rafaga amplia
        this.fire({
          particleCount: 45,
          angle: 60,
          spread: 55,
          startVelocity: 26,
          durationMs: 2200,
          origin: { x: 0.35, y: 0.7 },
          colors: DEFAULT_COLORS,
        });
        this.fire({
          particleCount: 45,
          angle: 120,
          spread: 55,
          startVelocity: 26,
          durationMs: 2200,
          origin: { x: 0.65, y: 0.7 },
          colors: DEFAULT_COLORS,
        });
        break;
      }

      case 'perfect_strike': {
        // Maxima celebracion: Rafaga inicial central dorada + cañones laterales secuenciales
        this.fire({
          particleCount: 80,
          angle: 90,
          spread: 100,
          startVelocity: 32,
          durationMs: 3000,
          origin: { x: 0.5, y: 0.55 },
          colors: GOLDEN_COLORS,
        });

        setTimeout(() => {
          this.fire({
            particleCount: 60,
            angle: 45,
            spread: 60,
            startVelocity: 35,
            durationMs: 2800,
            origin: { x: 0.1, y: 0.8 },
            colors: GOLDEN_COLORS,
          });
          this.fire({
            particleCount: 60,
            angle: 135,
            spread: 60,
            startVelocity: 35,
            durationMs: 2800,
            origin: { x: 0.9, y: 0.8 },
            colors: GOLDEN_COLORS,
          });
        }, 250);
        break;
      }
    }
  }
}

/**
 * Instancia singleton del motor de confeti.
 */
export const confettiService = new ConfettiEngine();
