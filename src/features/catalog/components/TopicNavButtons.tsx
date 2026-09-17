/**
 * @file TopicNavButtons.tsx
 * @description Botones ordinales para avanzar, retroceder o iniciar el examen general de la materia.
 */

import React from 'react';
import Link from 'next/link';
import { type TopicAdjacentNavigation } from '../types/navigation.types';
import styles from './TopicNavButtons.module.css';

export interface TopicNavButtonsProps {
  readonly navigation: TopicAdjacentNavigation;
  readonly position?: 'top' | 'bottom';
}

/**
 * Renderiza la barra de navegacion ordinal entre temas contiguos.
 */
export function TopicNavButtons({ navigation, position = 'bottom' }: TopicNavButtonsProps) {
  const containerClass =
    position === 'top' ? `${styles.container} ${styles.topContainer}` : styles.container;

  const prevHref = navigation.prevTopic
    ? `/materias/${navigation.materiaSlug}/${navigation.prevTopic.slug}`
    : null;

  const nextHref = navigation.nextTopic
    ? `/materias/${navigation.materiaSlug}/${navigation.nextTopic.slug}`
    : null;

  const examHref = `/materias/${navigation.materiaSlug}/examen`;

  return (
    <nav className={containerClass} aria-label={`Navegacion de temas (${position})`}>
      {prevHref ? (
        <Link href={prevHref} className={styles.navButton} rel="prev">
          <span>&larr;</span>
          <span>Tema Anterior: {navigation.prevTopic?.title}</span>
        </Link>
      ) : (
        <span className={styles.orderIndicator}>
          Tema 1 de {navigation.totalTopicsInSubject}
        </span>
      )}

      <div className={styles.spacer} />

      {nextHref && (
        <Link href={nextHref} className={styles.navButton} rel="next">
          <span>Siguiente: {navigation.nextTopic?.title}</span>
          <span>&rarr;</span>
        </Link>
      )}

      {navigation.isLastTopic && (
        <Link href={examHref} className={`${styles.navButton} ${styles.examButton}`}>
          <span>Iniciar Examen de la Materia</span>
          <span>&rarr;</span>
        </Link>
      )}
    </nav>
  );
}
