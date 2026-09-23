/**
 * @file TopicBadgeItem.tsx
 * @description Elemento de tema interactivo dentro de la tarjeta de asignatura con feedback visual de progreso y gamificacion.
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { type TopicSummary } from '../types/catalog.types';
import { useUserSession } from '@/features/user/hooks/useUserSession';
import { Award, CheckCircle2 } from 'lucide-react';
import styles from './TopicBadgeItem.module.css';

export interface TopicBadgeItemProps {
  readonly topic: TopicSummary;
}

/**
 * Muestra el titulo del tema con sus metricas e indicador visual de estado:
 * - Verde: Tema completado y superado.
 * - Amarillo: Tema marcado con posibilidad de Medalla de Valor.
 * - Neutro: Tema aun no evaluado.
 */
export function TopicBadgeItem({ topic }: TopicBadgeItemProps) {
  const { getTopicStatus } = useUserSession();
  const status = getTopicStatus(topic.materiaSlug, topic.slug);
  const topicHref = `/materias/${topic.materiaSlug}/${topic.slug}`;

  let itemClass = styles.item;
  if (status === 'completed') {
    itemClass += ` ${styles.itemCompleted}`;
  } else if (status === 'pending_valor_medal') {
    itemClass += ` ${styles.itemPendingMedal}`;
  }

  return (
    <Link href={topicHref} className={itemClass} aria-label={`Ver tema ${topic.title}`}>
      <div className={styles.leftCol}>
        {status === 'completed' && (
          <CheckCircle2 size={16} className={styles.completedIcon} aria-hidden="true" />
        )}
        {status === 'pending_valor_medal' && (
          <Award size={16} className={styles.medalIcon} aria-hidden="true" />
        )}
        <span className={styles.title}>{topic.title}</span>
      </div>

      <div className={styles.metrics}>
        {status === 'completed' && (
          <span className={styles.badgeSuccess} title="Tema superado con exito">
            Superado
          </span>
        )}
        {status === 'pending_valor_medal' && (
          <span className={styles.badgeMedal} title="Tema habilitado para ganar Medalla de Valor">
            Medalla de Valor
          </span>
        )}
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
