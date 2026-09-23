/**
 * @file UserLoginModal.tsx
 * @description Modal interactivo para el registro y bienvenida del estudiante mediante nickname.
 */

'use client';

import React, { useState } from 'react';
import { useUserSession } from '../../hooks/useUserSession';
import styles from './UserLoginModal.module.css';

/**
 * Dialogo modal de inicio de sesion local.
 */
export function UserLoginModal() {
  const { sessionState, login } = useUserSession();
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Solo se muestra si la sesion esta en estado 'unauthenticated'
  if (sessionState.status !== 'unauthenticated') {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanName = nickname.trim();
    if (!cleanName) {
      setError('Por favor ingresa un nombre de usuario o nickname valido.');
      return;
    }
    if (cleanName.length < 2) {
      setError('El nickname debe contener al menos 2 caracteres.');
      return;
    }
    if (cleanName.length > 30) {
      setError('El nickname no puede exceder los 30 caracteres.');
      return;
    }

    setError(null);
    login(cleanName);
  };

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
      <div className={styles.modalCard}>
        <div className={styles.badgeTop}>Bienvenido a EstudiosUniversitarios</div>
        <h2 id="login-modal-title" className={styles.title}>
          Configura tu Perfil de Estudio
        </h2>
        <p className={styles.description}>
          Para registrar tu progreso academico, rastrear las asignaturas y acumular{' '}
          <strong>Medallas de Valor</strong> y <strong>Copas del Conocimiento</strong>, ingresa tu nickname de estudiante.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="user-nickname-input" className={styles.label}>
              Usuario o Nickname:
            </label>
            <input
              id="user-nickname-input"
              type="text"
              className={styles.input}
              placeholder="Ej. Andy_Student, Alex99"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                if (error) setError(null);
              }}
              autoFocus
              required
              maxLength={30}
            />
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <div className={styles.initialStatsNotice}>
            <span>Tus medallas, copas y progresos se iniciaran en 0.</span>
          </div>

          <button type="submit" className={styles.submitButton}>
            Comenzar a Estudiar
          </button>
        </form>
      </div>
    </div>
  );
}
