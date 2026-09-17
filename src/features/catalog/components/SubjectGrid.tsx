/**
 * @file SubjectGrid.tsx
 * @description Cuadricula responsiva para renderizar las asignaturas del catalogo.
 */

import React from 'react';
import { type Subject } from '../types/catalog.types';
import { SubjectCard } from './SubjectCard';
import styles from './SubjectGrid.module.css';

export interface SubjectGridProps {
  readonly subjects: readonly Subject[];
}

/**
 * Cuadricula para la presentacion de asignaturas con estado vacio accesible.
 */
export function SubjectGrid({ subjects }: SubjectGridProps) {
  if (subjects.length === 0) {
    return (
      <div className={styles.emptyState} role="status">
        <h3 className={styles.emptyTitle}>No se encontraron asignaturas</h3>
        <p>Intenta modificar o limpiar los terminos de busqueda y filtros seleccionados.</p>
      </div>
    );
  }

  return (
    <section className={styles.grid} aria-label="Listado de asignaturas">
      {subjects.map((subject) => (
        <SubjectCard key={subject.slug} subject={subject} />
      ))}
    </section>
  );
}
