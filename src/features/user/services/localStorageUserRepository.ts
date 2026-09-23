/**
 * @file localStorageUserRepository.ts
 * @description Adaptador de persistencia de usuario y gamificacion en LocalStorage.
 */

import {
  type IUserRepository,
  type UserProfile,
  type ExamQuestionReviewItem,
  type ExamGamificationReward,
} from '../types/user.types';
import { UserProfileSchema } from '../schemas/user.schema';
import { applyExamCompletionToUser } from '../utils/gamificationEvaluator';

export const USER_STORAGE_KEY = '@estudios_univ:user_profile';

/**
 * Adaptador de repositorio que persiste y recupera el perfil de usuario en el almacenamiento local del navegador.
 */
export class LocalStorageUserRepository implements IUserRepository {
  private readonly storageKey: string;

  constructor(storageKey: string = USER_STORAGE_KEY) {
    this.storageKey = storageKey;
  }

  /**
   * Obtiene el perfil de usuario almacenado, validando su estructura con Zod.
   */
  getUser(): UserProfile | null {
    if (typeof window === 'undefined') {
      return null;
    }

    try {
      const rawData = window.localStorage.getItem(this.storageKey);
      if (!rawData) {
        return null;
      }

      const parsed = JSON.parse(rawData);
      const validation = UserProfileSchema.safeParse(parsed);

      if (!validation.success) {
        console.warn('Perfil de usuario corrupto en LocalStorage:', validation.error);
        return null;
      }

      return validation.data as UserProfile;
    } catch (error) {
      console.error('Error al deserializar perfil de usuario:', error);
      return null;
    }
  }

  /**
   * Crea un nuevo perfil de usuario con saldos en cero.
   */
  createUser(username: string): UserProfile {
    const trimmed = username.trim();
    const now = new Date().toISOString();

    const newUser: UserProfile = {
      username: trimmed || 'Estudiante',
      valorMedals: 0,
      knowledgeTrophies: 0,
      subjectProgress: {},
      topicsProgress: {},
      createdAt: now,
      updatedAt: now,
    };

    this.saveUser(newUser);
    return newUser;
  }

  /**
   * Persiste el perfil de usuario en LocalStorage.
   */
  saveUser(user: UserProfile): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const serialized = JSON.stringify(user);
      window.localStorage.setItem(this.storageKey, serialized);
    } catch (error) {
      console.error('Error al guardar perfil de usuario:', error);
    }
  }

  /**
   * Actualiza el registro del ultimo tema visitado por el usuario en una asignatura.
   */
  updateLastVisitedTopic(materiaSlug: string, topicSlug: string): UserProfile {
    const current = this.getUser();
    if (!current) {
      throw new Error('No hay sesion de usuario activa');
    }

    const updatedUser: UserProfile = {
      ...current,
      subjectProgress: {
        ...current.subjectProgress,
        [materiaSlug]: {
          materiaSlug,
          lastTopicSlug: topicSlug,
          lastAccessedAt: new Date().toISOString(),
        },
      },
      updatedAt: new Date().toISOString(),
    };

    this.saveUser(updatedUser);
    return updatedUser;
  }

  /**
   * Procesa la conclusion de un examen, actualizando el estado de temas y otorgando medallas o copas.
   */
  processExamCompletion(
    materiaSlug: string,
    questions: readonly ExamQuestionReviewItem[],
    scorePercentage: number
  ): { readonly updatedUser: UserProfile; readonly reward: ExamGamificationReward } {
    const current = this.getUser();
    if (!current) {
      throw new Error('No hay sesion de usuario activa');
    }

    const { updatedUser, reward } = applyExamCompletionToUser(
      current,
      materiaSlug,
      questions,
      scorePercentage
    );

    this.saveUser(updatedUser);
    return { updatedUser, reward };
  }

  /**
   * Elimina los datos del usuario del almacenamiento local.
   */
  logout(): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(this.storageKey);
    }
  }
}
