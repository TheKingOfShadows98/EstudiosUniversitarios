/**
 * @file LandingHero.tsx
 * @description Seccion de bienvenida del catalogo con estadisticas globales.
 */

import React from 'react';
import styles from './LandingHero.module.css';

export interface LandingHeroProps {
  readonly totalSubjects: number;
  readonly totalTopics: number;
  readonly totalQuestions: number;
}

/**
 * Hero principal con metricas agregadas de la plataforma.
 */
export function LandingHero({ totalSubjects, totalTopics, totalQuestions }: LandingHeroProps) {
  return (
    <section className={styles.hero} aria-label="Introduccion a la plataforma">
      <span className={styles.tagline}>Plataforma de Estudio Universitario</span>
      <h1 className={styles.heading}>
        Domina tus asignaturas con teoria estructurada y evaluaciones interactivas
      </h1>
      <p className={styles.subheading}>
        Explora fragmentos de conocimiento, definiciones tecnicas rigurosas y pon a prueba tu comprension con bancos de reactivos explicados.
      </p>

      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{totalSubjects}</span>
          <span className={styles.statLabel}>Asignaturas</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{totalTopics}</span>
          <span className={styles.statLabel}>Temas Totales</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{totalQuestions}</span>
          <span className={styles.statLabel}>Reactivos</span>
        </div>
      </div>
    </section>
  );
}
