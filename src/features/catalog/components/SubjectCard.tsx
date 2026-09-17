/**
 * @file SubjectCard.tsx
 * @description Tarjeta representativa de una asignatura academica, sus temas vinculados y acceso directo a su examen general.
 */

import React from 'react';
import Link from 'next/link';
import { type Subject } from '../types/catalog.types';
import { TopicBadgeItem } from './TopicBadgeItem';
import styles from './SubjectCard.module.css';

export interface SubjectCardProps {
  readonly subject: Subject;
}

/**
 * Tarjeta de asignatura con descripcion, lista de temas y boton para rendir el examen directamente.
 */
export function SubjectCard({ subject }: SubjectCardProps) {
  const examHref = `/materias/${subject.slug}/examen`;

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

      <footer className={styles.cardFooter}>
        <span className={styles.questionsMetric}>
          {subject.totalQuestionsCount > 0
            ? `${subject.totalQuestionsCount} reactivos disponibles`
            : 'Sin reactivos'}
        </span>

        {subject.totalQuestionsCount > 0 && (
          <Link href={examHref} className={styles.examButton} aria-label={`Rendir examen de ${subject.name}`}>
            <span>Rendir Examen</span>
            <span>&rarr;</span>
          </Link>
        )}
      </footer>
    </article>
  );
}
