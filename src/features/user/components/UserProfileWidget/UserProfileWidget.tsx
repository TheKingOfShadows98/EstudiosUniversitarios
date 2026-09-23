/**
 * @file UserProfileWidget.tsx
 * @description Widget visual para mostrar el nickname del estudiante, sus Medallas de Valor y Copas del Conocimiento.
 */

'use client';

import React, { useState } from 'react';
import { useUserSession } from '../../hooks/useUserSession';
import { Trophy, Award, User, LogOut } from 'lucide-react';
import styles from './UserProfileWidget.module.css';

export interface UserProfileWidgetProps {
  readonly variant?: 'compact' | 'card' | 'hero';
}

/**
 * Widget de perfil de usuario con monedas de gamificacion.
 */
export function UserProfileWidget({ variant = 'compact' }: UserProfileWidgetProps) {
  const { user, sessionState, logout } = useUserSession();
  const [showMenu, setShowMenu] = useState(false);

  if (sessionState.status === 'loading') {
    return <div className={styles.loadingSkeleton}>Cargando perfil...</div>;
  }

  if (sessionState.status !== 'authenticated' || !user) {
    return null;
  }

  if (variant === 'hero' || variant === 'card') {
    return (
      <aside className={styles.profileCard} aria-label="Resumen de perfil y gamificacion">
        <header className={styles.cardHeader}>
          <div className={styles.avatar}>
            <User size={20} aria-hidden="true" />
          </div>
          <div className={styles.userInfo}>
            <span className={styles.roleLabel}>Estudiante</span>
            <strong className={styles.username}>{user.username}</strong>
          </div>
        </header>

        <div className={styles.statsGrid}>
          <div className={`${styles.statItem} ${styles.statMedals}`} title="Medallas de Valor ganadas al superar temas con fallos previos">
            <div className={styles.statIconWrapper}>
              <Award size={18} className={styles.medalIcon} aria-hidden="true" />
            </div>
            <div className={styles.statData}>
              <span className={styles.statValue}>{user.valorMedals}</span>
              <span className={styles.statLabel}>Medallas de Valor</span>
            </div>
          </div>

          <div className={`${styles.statItem} ${styles.statTrophies}`} title="Copas del Conocimiento ganadas al obtener >= 90% en un examen">
            <div className={styles.statIconWrapper}>
              <Trophy size={18} className={styles.trophyIcon} aria-hidden="true" />
            </div>
            <div className={styles.statData}>
              <span className={styles.statValue}>{user.knowledgeTrophies}</span>
              <span className={styles.statLabel}>Copas del Conocimiento</span>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <div className={styles.compactContainer}>
      <button
        type="button"
        className={styles.compactTrigger}
        onClick={() => setShowMenu((prev) => !prev)}
        aria-expanded={showMenu}
        aria-label="Menu de usuario"
      >
        <div className={styles.compactUserBadge}>
          <User size={15} aria-hidden="true" />
          <span className={styles.compactUsername}>{user.username}</span>
        </div>

        <div className={styles.compactCounters}>
          <span className={styles.compactBadgeMedal} title={`${user.valorMedals} Medallas de Valor`}>
            <Award size={13} aria-hidden="true" />
            <span>{user.valorMedals}</span>
          </span>

          <span className={styles.compactBadgeTrophy} title={`${user.knowledgeTrophies} Copas del Conocimiento`}>
            <Trophy size={13} aria-hidden="true" />
            <span>{user.knowledgeTrophies}</span>
          </span>
        </div>
      </button>

      {showMenu && (
        <div className={styles.dropdownMenu} role="menu">
          <div className={styles.dropdownHeader}>
            <span className={styles.dropdownTitle}>Sesion activa</span>
            <span className={styles.dropdownName}>{user.username}</span>
          </div>

          <div className={styles.dropdownDivider} />

          <button
            type="button"
            className={styles.dropdownItemDanger}
            onClick={() => {
              setShowMenu(false);
              logout();
            }}
            role="menuitem"
          >
            <LogOut size={14} aria-hidden="true" />
            <span>Cambiar de Usuario / Salir</span>
          </button>
        </div>
      )}
    </div>
  );
}
