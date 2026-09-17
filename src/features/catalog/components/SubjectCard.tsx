/**
 * @file SubjectCard.tsx
 * @description Tarjeta representativa de una asignatura academica y sus temas vinculados.
 */

import React from 'react';
import { type Subject } from '../types/catalog.types';
import { TopicBadgeItem } from './TopicBadgeItem';
import styles from './SubjectCard.module.css';

export interface SubjectCardProps {
  readonly subject: Subject;
}

/**
 * Tarjeta de asignatura con descripcion y lista de temas disponibles.
 */
export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <article className={styles.card} aria-labelledby={`subject-${subject.slug}`}>
      <header className={styles.header}>
        <span className={styles.specialtyBadge}>
          {subject.especialidadSlug.replace(/-/g, ' ')}
        </span>
        <h2 id={`subject-${subject.slug}`} className={styles.name}>
          {subject.name}
        </h2>
        <p className={styles.description}>{subject.description}</p>
      </header>

      <div className={styles.topicsSection}>
        <span className={styles.topicsSectionTitle}>
          Temas Disponibles ({subject.topics.length})
        </span>
        <div className={styles.topicsList}>
          {subject.topics.map((topic) => (
            <TopicBadgeItem key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </article>
  );
}
