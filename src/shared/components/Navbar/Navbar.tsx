/**
 * @file Navbar.tsx
 * @description Barra de navegacion principal de la aplicacion con perfil de estudiante y monedas.
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { UserProfileWidget } from '@/features/user/components/UserProfileWidget/UserProfileWidget';
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

        <nav aria-label="Navegacion principal" className={styles.navWrapper}>
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

          <UserProfileWidget variant="compact" />
        </nav>
      </div>
    </header>
  );
}
