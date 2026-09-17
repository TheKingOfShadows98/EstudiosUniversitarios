/**
 * @file Footer.tsx
 * @description Pie de pagina institucional de la plataforma.
 */

import React from 'react';
import styles from './Footer.module.css';

/**
 * Pie de pagina accesible.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          EstudiosUniversitarios - Plataforma de Aprendizaje y Autoevaluacion Academica.
        </p>
        <ul className={styles.links}>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Repositorio
            </a>
          </li>
          <li>
            <a href="/ARCHITECTURE.md" className={styles.link}>
              Arquitectura
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
