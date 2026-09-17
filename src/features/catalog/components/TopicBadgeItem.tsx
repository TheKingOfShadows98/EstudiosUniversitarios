/**
 * @file TopicBadgeItem.tsx
 * @description Elemento de tema interactivo dentro de la tarjeta de asignatura.
 */

import React from 'react';
import Link from 'next/link';
import { type TopicSummary } from '../types/catalog.types';
import styles from './TopicBadgeItem.module.css';

export interface TopicBadgeItemProps {
  readonly topic: TopicSummary;
}

/**
 * Muestra el titulo del tema con sus metricas de reactivos y definiciones.
 */
export function TopicBadgeItem({ topic }: TopicBadgeItemProps) {
  const topicHref = `/materias/${topic.materiaSlug}/${topic.slug}`;

  return (
    <Link href={topicHref} className={styles.item} aria-label={`Ver tema ${topic.title}`}>
      <span className={styles.title}>{topic.title}</span>
      <div className={styles.metrics}>
        {topic.definitionsCount > 0 && (
          <span className={styles.badge} title="Definiciones conceptuales">
            {topic.definitionsCount} defs
          </span>
        )}
        {topic.questionsCount > 0 && (
          <span className={styles.badge} title="Reactivos interactivos">
            {topic.questionsCount} preguntas
          </span>
        )}
      </div>
    </Link>
  );
}
