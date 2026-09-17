/**
 * @file examEvaluator.test.ts
 * @description Pruebas unitarias para el evaluador de examenes y extraccion de enlaces de remediacion.
 */

import { describe, it, expect } from 'vitest';
import { evaluateExamSession } from '../examEvaluator';
import { type SubjectExamQuestion } from '../../types/examEngine.types';

const mockQuestions: SubjectExamQuestion[] = [
  {
    id: 'q1',
    questionType: 'opcion_multiple',
    prompt: 'Pregunta 1 sobre Protones',
    options: [
      { id: 'opt1', text: 'Correcta', isCorrect: true },
      { id: 'opt2', text: 'Incorrecta', isCorrect: false },
    ],
    correctOptionId: 'opt1',
    explanation: 'Explicacion 1',
    topicSlug: 'estructura-atomica',
    topicTitle: 'Estructura Atomica',
    materiaSlug: 'quimica',
  },
  {
    id: 'q2',
    questionType: 'opcion_multiple',
    prompt: 'Pregunta 2 sobre Neutrones',
    options: [
      { id: 'opt3', text: 'Correcta', isCorrect: true },
      { id: 'opt4', text: 'Incorrecta', isCorrect: false },
    ],
    correctOptionId: 'opt3',
    explanation: 'Explicacion 2',
    topicSlug: 'estructura-atomica',
    topicTitle: 'Estructura Atomica',
    materiaSlug: 'quimica',
  },
  {
    id: 'q3',
    questionType: 'opcion_multiple',
    prompt: 'Pregunta 3 sobre Enlace Covalente',
    options: [
      { id: 'opt5', text: 'Correcta', isCorrect: true },
      { id: 'opt6', text: 'Incorrecta', isCorrect: false },
    ],
    correctOptionId: 'opt5',
    explanation: 'Explicacion 3',
    topicSlug: 'enlace-quimico',
    topicTitle: 'Enlace Quimico',
    materiaSlug: 'quimica',
  },
];

describe('evaluateExamSession', () => {
  it('debe calcular 100% de aciertos y estado aprobado cuando todas las respuestas son correctas', () => {
    const answers = { q1: 'opt1', q2: 'opt3', q3: 'opt5' };
    const result = evaluateExamSession(mockQuestions, answers);

    expect(result.scorePercentage).toBe(100);
    expect(result.correctCount).toBe(3);
    expect(result.passed).toBe(true);
    expect(result.failedQuestions.length).toBe(0);
    expect(result.remediationTopics.length).toBe(0);
  });

  it('debe compilar temas de remediacion cuando el usuario comete fallos', () => {
    // q1 y q2 falladas (ambas de 'estructura-atomica'), q3 correcta
    const answers = { q1: 'opt2', q2: 'opt4', q3: 'opt5' };
    const result = evaluateExamSession(mockQuestions, answers, 70);

    expect(result.scorePercentage).toBe(33);
    expect(result.correctCount).toBe(1);
    expect(result.passed).toBe(false);
    expect(result.failedQuestions.length).toBe(2);

    expect(result.remediationTopics.length).toBe(1);
    expect(result.remediationTopics[0].topicSlug).toBe('estructura-atomica');
    expect(result.remediationTopics[0].topicTitle).toBe('Estructura Atomica');
    expect(result.remediationTopics[0].failedCount).toBe(2);
  });

  it('debe agrupar multiples temas de remediacion y ordenarlos por cantidad de errores', () => {
    // Todas falladas
    const answers = { q1: 'opt2', q2: 'opt4', q3: 'opt6' };
    const result = evaluateExamSession(mockQuestions, answers);

    expect(result.remediationTopics.length).toBe(2);
    // estructura-atomica tiene 2 fallos, enlace-quimico tiene 1 fallo
    expect(result.remediationTopics[0].topicSlug).toBe('estructura-atomica');
    expect(result.remediationTopics[0].failedCount).toBe(2);
    expect(result.remediationTopics[1].topicSlug).toBe('enlace-quimico');
    expect(result.remediationTopics[1].failedCount).toBe(1);
  });
});
