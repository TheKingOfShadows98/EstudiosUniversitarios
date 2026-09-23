/**
 * @file UserSessionContext.tsx
 * @description Proveedor de contexto global para la gestion de sesion, persistencia y gamificacion del usuario.
 */

'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import {
  type UserProfile,
  type UserSessionState,
  type ExamQuestionReviewItem,
  type ExamGamificationReward,
  type TopicGamificationStatus,
} from '../types/user.types';
import { LocalStorageUserRepository } from '../services/localStorageUserRepository';

interface UserSessionContextValue {
  readonly user: UserProfile | null;
  readonly sessionState: UserSessionState;
  readonly login: (username: string) => void;
  readonly logout: () => void;
  readonly trackTopicVisit: (materiaSlug: string, topicSlug: string) => void;
  readonly recordExamResult: (
    materiaSlug: string,
    questions: readonly ExamQuestionReviewItem[],
    scorePercentage: number
  ) => ExamGamificationReward | null;
  readonly getTopicStatus: (materiaSlug: string, topicSlug: string) => TopicGamificationStatus;
  readonly getLastVisitedTopic: (materiaSlug: string) => string | null;
}

const UserSessionContext = createContext<UserSessionContextValue | undefined>(undefined);

const repository = new LocalStorageUserRepository();

export interface UserSessionProviderProps {
  readonly children: React.ReactNode;
}

/**
 * Proveedor reactivo que sincroniza el perfil del usuario con LocalStorage y notifica cambios a la UI.
 */
export function UserSessionProvider({ children }: UserSessionProviderProps) {
  const [sessionState, setSessionState] = useState<UserSessionState>({ status: 'loading' });

  // Carga inicial al montar el cliente
  useEffect(() => {
    try {
      const stored = repository.getUser();
      if (stored) {
        setSessionState({ status: 'authenticated', user: stored });
      } else {
        setSessionState({ status: 'unauthenticated' });
      }
    } catch {
      setSessionState({ status: 'unauthenticated' });
    }
  }, []);

  const login = useCallback((username: string) => {
    const newUser = repository.createUser(username);
    setSessionState({ status: 'authenticated', user: newUser });
  }, []);

  const logout = useCallback(() => {
    repository.logout();
    setSessionState({ status: 'unauthenticated' });
  }, []);

  const trackTopicVisit = useCallback((materiaSlug: string, topicSlug: string) => {
    setSessionState((prev) => {
      if (prev.status !== 'authenticated') return prev;
      const updatedUser = repository.updateLastVisitedTopic(materiaSlug, topicSlug);
      return { status: 'authenticated', user: updatedUser };
    });
  }, []);

  const recordExamResult = useCallback(
    (
      materiaSlug: string,
      questions: readonly ExamQuestionReviewItem[],
      scorePercentage: number
    ): ExamGamificationReward | null => {
      if (sessionState.status !== 'authenticated') return null;

      const { updatedUser, reward } = repository.processExamCompletion(
        materiaSlug,
        questions,
        scorePercentage
      );

      setSessionState({ status: 'authenticated', user: updatedUser });
      return reward;
    },
    [sessionState.status]
  );

  const getTopicStatus = useCallback(
    (materiaSlug: string, topicSlug: string): TopicGamificationStatus => {
      if (sessionState.status !== 'authenticated') return 'untouched';
      const key = `${materiaSlug}/${topicSlug}`;
      return sessionState.user.topicsProgress[key]?.status ?? 'untouched';
    },
    [sessionState]
  );

  const getLastVisitedTopic = useCallback(
    (materiaSlug: string): string | null => {
      if (sessionState.status !== 'authenticated') return null;
      return sessionState.user.subjectProgress[materiaSlug]?.lastTopicSlug ?? null;
    },
    [sessionState]
  );

  const value = useMemo<UserSessionContextValue>(
    () => ({
      user: sessionState.status === 'authenticated' ? sessionState.user : null,
      sessionState,
      login,
      logout,
      trackTopicVisit,
      recordExamResult,
      getTopicStatus,
      getLastVisitedTopic,
    }),
    [
      sessionState,
      login,
      logout,
      trackTopicVisit,
      recordExamResult,
      getTopicStatus,
      getLastVisitedTopic,
    ]
  );

  return <UserSessionContext.Provider value={value}>{children}</UserSessionContext.Provider>;
}

/**
 * Hook de acceso seguro al contexto de sesion de usuario.
 */
export function useUserSession(): UserSessionContextValue {
  const context = useContext(UserSessionContext);
  if (!context) {
    throw new Error('useUserSession debe ser utilizado dentro de un UserSessionProvider');
  }
  return context;
}
