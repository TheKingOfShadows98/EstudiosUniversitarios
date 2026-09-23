/**
 * @file gamificationEvaluator.test.ts
 * @description Pruebas unitarias para la logica pura de gamificacion, notas y medallas.
 */

import { describe, it, expect } from 'vitest';
import {
  computeGradeBracket,
  evaluateExamGamification,
  applyExamCompletionToUser,
} from '../gamificationEvaluator';
import { type ExamQuestionReviewItem, type UserProfile } from '../../types/user.types';

describe('gamificationEvaluator', () => {
  describe('computeGradeBracket', () => {
    it('debe clasificar en critical (rojo) notas inferiores a 5.0 (< 50%)', () => {
      expect(computeGradeBracket(40)).toEqual({ bracket: 'critical', score10Scale: 4.0 });
      expect(computeGradeBracket(0)).toEqual({ bracket: 'critical', score10Scale: 0.0 });
      expect(computeGradeBracket(49)).toEqual({ bracket: 'critical', score10Scale: 4.9 });
    });

    it('debe clasificar en sufficient (naranja) notas entre 5.0 y 6.9', () => {
      expect(computeGradeBracket(50)).toEqual({ bracket: 'sufficient', score10Scale: 5.0 });
      expect(computeGradeBracket(65)).toEqual({ bracket: 'sufficient', score10Scale: 6.5 });
      expect(computeGradeBracket(69)).toEqual({ bracket: 'sufficient', score10Scale: 6.9 });
    });

    it('debe clasificar en good (naranja/ambar) notas entre 7.0 y 8.9', () => {
      expect(computeGradeBracket(70)).toEqual({ bracket: 'good', score10Scale: 7.0 });
      expect(computeGradeBracket(85)).toEqual({ bracket: 'good', score10Scale: 8.5 });
      expect(computeGradeBracket(89)).toEqual({ bracket: 'good', score10Scale: 8.9 });
    });

    it('debe clasificar en excellent (verde) notas superiores o iguales a 9.0 (>= 90%)', () => {
      expect(computeGradeBracket(90)).toEqual({ bracket: 'excellent', score10Scale: 9.0 });
      expect(computeGradeBracket(100)).toEqual({ bracket: 'excellent', score10Scale: 10.0 });
    });
  });

  describe('evaluateExamGamification', () => {
    const mockQuestions: ExamQuestionReviewItem[] = [
      {
        questionId: 'q1',
        orderIndex: 0,
        prompt: 'Pregunta 1',
        topicSlug: 'tema-atomos',
        topicTitle: 'Estructura Atomica',
        materiaSlug: 'quimica',
        selectedOptionId: 'opt-b',
        correctOptionId: 'opt-a',
        isCorrect: false,
      },
      {
        questionId: 'q2',
        orderIndex: 1,
        prompt: 'Pregunta 2',
        topicSlug: 'tema-enlace',
        topicTitle: 'Enlace Quimico',
        materiaSlug: 'quimica',
        selectedOptionId: 'opt-c',
        correctOptionId: 'opt-c',
        isCorrect: true,
      },
    ];

    it('debe marcar en pending_valor_medal temas con preguntas falladas', () => {
      const result = evaluateExamGamification({}, mockQuestions, 50, 'quimica');
      expect(result.reward.earnedKnowledgeTrophy).toBe(false);
      expect(result.reward.earnedValorMedalsCount).toBe(0);
      expect(result.reward.newlyTaggedValorTopics).toContain('tema-atomos');
      expect(result.updatedTopics['quimica/tema-atomos'].status).toBe('pending_valor_medal');
    });

    it('debe otorgar 1 Copa del Conocimiento si el score es >= 90%', () => {
      const allCorrectQuestions: ExamQuestionReviewItem[] = mockQuestions.map((q) => ({
        ...q,
        isCorrect: true,
      }));
      const result = evaluateExamGamification({}, allCorrectQuestions, 100, 'quimica');
      expect(result.reward.earnedKnowledgeTrophy).toBe(true);
      expect(result.reward.gradeBracket).toBe('excellent');
    });

    it('debe otorgar Medalla de Valor al aprobar con >= 70% y responder correctamente un tema previamente fallado', () => {
      const initialTopics = {
        'quimica/tema-atomos': {
          topicSlug: 'tema-atomos',
          materiaSlug: 'quimica',
          status: 'pending_valor_medal' as const,
          failedQuestionsCount: 1,
        },
      };

      const perfectForAtomos: ExamQuestionReviewItem[] = [
        {
          questionId: 'q1',
          orderIndex: 0,
          prompt: 'Pregunta 1',
          topicSlug: 'tema-atomos',
          topicTitle: 'Estructura Atomica',
          materiaSlug: 'quimica',
          selectedOptionId: 'opt-a',
          correctOptionId: 'opt-a',
          isCorrect: true,
        },
      ];

      const result = evaluateExamGamification(initialTopics, perfectForAtomos, 80, 'quimica');
      expect(result.reward.earnedValorMedalsCount).toBe(1);
      expect(result.updatedTopics['quimica/tema-atomos'].status).toBe('completed');
    });
  });

  describe('applyExamCompletionToUser', () => {
    it('debe incrementar el saldo de medallas y copas en el perfil del usuario', () => {
      const baseUser: UserProfile = {
        username: 'EstudianteTest',
        valorMedals: 2,
        knowledgeTrophies: 1,
        subjectProgress: {},
        topicsProgress: {
          'quimica/tema-atomos': {
            topicSlug: 'tema-atomos',
            materiaSlug: 'quimica',
            status: 'pending_valor_medal',
            failedQuestionsCount: 2,
          },
        },
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
      };

      const perfectExam: ExamQuestionReviewItem[] = [
        {
          questionId: 'q1',
          orderIndex: 0,
          prompt: 'Pregunta 1',
          topicSlug: 'tema-atomos',
          topicTitle: 'Estructura Atomica',
          materiaSlug: 'quimica',
          selectedOptionId: 'opt-a',
          correctOptionId: 'opt-a',
          isCorrect: true,
        },
      ];

      const { updatedUser, reward } = applyExamCompletionToUser(baseUser, 'quimica', perfectExam, 95);

      expect(reward.earnedKnowledgeTrophy).toBe(true);
      expect(reward.earnedValorMedalsCount).toBe(1);
      expect(updatedUser.knowledgeTrophies).toBe(2);
      expect(updatedUser.valorMedals).toBe(3);
      expect(updatedUser.topicsProgress['quimica/tema-atomos'].status).toBe('completed');
      expect(updatedUser.subjectProgress['quimica']).toBeDefined();
    });
  });
});
