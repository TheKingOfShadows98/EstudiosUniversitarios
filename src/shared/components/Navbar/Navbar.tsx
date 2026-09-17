/**
 * @file Navbar.tsx
 * @description Barra de navegacion principal de la aplicacion.
 */

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

/**
 * Encabezado de navegacion global.
 */
export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <span>Estudios<span className={styles.brandAccent}>Universitarios</span></span>
        </Link>

        <nav aria-label="Navegacion principal">
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={styles.navLink}>
                Catalogo
              </Link>
            </li>
            <li>
              <Link href="/docs/ESTRUCTURA_TEMAS_MD.md" className={styles.navLink}>
                Guia de Redaccion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
