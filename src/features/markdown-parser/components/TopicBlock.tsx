/**
 * @file TopicBlock.tsx
 * @description Componente de seccion semantica para representar el bloque [TEMA].
 */

import React from 'react';
import styles from './TopicBlock.module.css';

export interface TopicBlockProps {
  readonly id: string;
  readonly name: string;
  readonly children: React.ReactNode;
}

/**
 * Renderiza el bloque contenedor de un tema con cabecera y ancla.
 */
export function TopicBlock({ id, name, children }: TopicBlockProps) {
  return (
    <section id={id} className={styles.topicSection} aria-labelledby={`title-${id}`}>
      <header className={styles.header}>
        <span className={styles.badge}>Tema Academico</span>
        <h2 id={`title-${id}`} className={styles.title}>
          {name}
        </h2>
      </header>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
