/**
 * @file DefinitionBlock.tsx
 * @description Componente visual para resaltar definiciones y conceptos clave ([DEFINICION]).
 */

import React from 'react';
import styles from './DefinitionBlock.module.css';

export interface DefinitionBlockProps {
  readonly id: string;
  readonly name: string;
  readonly children: React.ReactNode;
}

/**
 * Renderiza una definicion como un bloque destacado con ancla.
 */
export function DefinitionBlock({ id, name, children }: DefinitionBlockProps) {
  return (
    <article id={id} className={styles.callout} aria-label={`Definicion de ${name}`}>
      <header className={styles.header}>
        <span className={styles.tag}>Definicion</span>
        <h3 className={styles.term}>{name}</h3>
      </header>
      <div className={styles.body}>{children}</div>
    </article>
  );
}
