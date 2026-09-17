/**
 * @file useSubjectExamSession.ts
 * @description Hook reactivo para controlar el flujo de realizacion y evaluacion de un examen por materia.
 */

'use client';

import { useState, useCallback, useMemo } from 'react';
import { type SubjectExamQuestion, type ExamEvaluationResult } from '../types/examEngine.types';
import { evaluateExamSession } from '../utils/examEvaluator';
import { generateRandomExam } from '../utils/examGenerator';

/**
 * Hook para la sesion interactiva de examen.
 *
 * @param initialPool - Banco de preguntas disponibles de la materia.
 * @param maxQuestionsLimit - Limite maximo de preguntas a barajar (por defecto 20).
 * @param passingPercentage - Porcentaje para aprobar (por defecto 70%).
 */
export function useSubjectExamSession(
  initialPool: readonly SubjectExamQuestion[],
  maxQuestionsLimit: number = 20,
  passingPercentage: number = 70
) {
  // Generacion inicial aleatoria de la lista de preguntas
  const [questions, setQuestions] = useState<SubjectExamQuestion[]>(() =>
    generateRandomExam(initialPool, maxQuestionsLimit)
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [result, setResult] = useState<ExamEvaluationResult | null>(null);

  const currentQuestion: SubjectExamQuestion | undefined = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercentage = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const selectAnswer = useCallback(
    (optionId: string) => {
      if (!isSubmitted && currentQuestion) {
        setAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: optionId,
        }));
      }
    },
    [isSubmitted, currentQuestion]
  );

  const nextQuestion = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalQuestions - 1));
  }, [totalQuestions]);

  const prevQuestion = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalQuestions) {
        setCurrentIndex(index);
      }
    },
    [totalQuestions]
  );

  const submitExam = useCallback(() => {
    const evaluation = evaluateExamSession(questions, answers, passingPercentage);
    setResult(evaluation);
    setIsSubmitted(true);
  }, [questions, answers, passingPercentage]);

  const restartExam = useCallback(() => {
    setQuestions(generateRandomExam(initialPool, maxQuestionsLimit));
    setCurrentIndex(0);
    setAnswers({});
    setIsSubmitted(false);
    setResult(null);
  }, [initialPool, maxQuestionsLimit]);

  return {
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions,
    answers,
    answeredCount,
    progressPercentage,
    isSubmitted,
    result,
    isFirstQuestion: currentIndex === 0,
    isLastQuestion: currentIndex === totalQuestions - 1,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitExam,
    restartExam,
  };
}
