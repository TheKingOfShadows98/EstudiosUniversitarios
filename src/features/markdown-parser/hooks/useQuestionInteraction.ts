/**
 * @file useQuestionInteraction.ts
 * @description Hook desacoplado para la logica de respuesta y feedback de reactivos.
 */

'use client';

import { useState, useCallback, useMemo } from 'react';
import { type QuestionOption, type QuestionEvaluationState } from '../types/parser.types';

/**
 * Hook para la interaccion del estudiante con una pregunta.
 *
 * @param options - Lista de opciones disponibles para la pregunta.
 */
export function useQuestionInteraction(options: readonly QuestionOption[]) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isExplanationExpanded, setIsExplanationExpanded] = useState<boolean>(false);

  const evaluationState: QuestionEvaluationState = useMemo(() => {
    if (!isSubmitted || !selectedOptionId) {
      return 'unanswered';
    }
    const chosenOption = options.find((opt) => opt.id === selectedOptionId);
    return chosenOption?.isCorrect ? 'correct' : 'incorrect';
  }, [isSubmitted, selectedOptionId, options]);

  const selectOption = useCallback(
    (optionId: string) => {
      if (!isSubmitted) {
        setSelectedOptionId(optionId);
      }
    },
    [isSubmitted]
  );

  const submitAnswer = useCallback(() => {
    if (selectedOptionId) {
      setIsSubmitted(true);
      setIsExplanationExpanded(true);
    }
  }, [selectedOptionId]);

  const resetQuestion = useCallback(() => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setIsExplanationExpanded(false);
  }, []);

  const toggleExplanation = useCallback(() => {
    setIsExplanationExpanded((prev) => !prev);
  }, []);

  return {
    selectedOptionId,
    isSubmitted,
    isExplanationExpanded,
    evaluationState,
    selectOption,
    submitAnswer,
    resetQuestion,
    toggleExplanation,
  };
}
