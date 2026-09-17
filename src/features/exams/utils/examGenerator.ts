/**
 * @file examGenerator.ts
 * @description Utilidad pura para la seleccion y barajado aleatorio de preguntas (Fisher-Yates).
 */

import { type SubjectExamQuestion } from '../types/examEngine.types';

/**
 * Aplica el algoritmo de barajado de Fisher-Yates sobre una lista de elementos.
 */
function shuffleArray<T>(array: readonly T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Genera una sesion de examen aleatoria a partir del banco de preguntas de una materia.
 *
 * @param pool - Lista completa de preguntas disponibles en la asignatura.
 * @param maxLimit - Limite maximo de preguntas a seleccionar (por defecto 20).
 * @returns Lista de preguntas seleccionadas y barajadas con sus opciones aleatorizadas.
 */
export function generateRandomExam(
  pool: readonly SubjectExamQuestion[],
  maxLimit: number = 20
): SubjectExamQuestion[] {
  if (!pool || pool.length === 0) {
    return [];
  }

  // 1. Barajar el banco completo de preguntas
  const shuffledPool = shuffleArray(pool);

  // 2. Tomar el minimo entre el limite solicitado (20) y la cantidad total existente
  const targetCount = Math.min(maxLimit, shuffledPool.length);
  const selectedQuestions = shuffledPool.slice(0, targetCount);

  // 3. Barajar tambien el orden de las opciones de cada pregunta
  return selectedQuestions.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));
}
