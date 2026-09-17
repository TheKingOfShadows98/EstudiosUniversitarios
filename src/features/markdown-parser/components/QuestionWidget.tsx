/**
 * @file QuestionWidget.tsx
 * @description Componente interactivo para responder preguntas en Modo Estudio Activo.
 */

'use client';

import React from 'react';
import { type QuestionAstNode, type StudyViewMode } from '../types/parser.types';
import { useQuestionInteraction } from '../hooks/useQuestionInteraction';
import styles from './QuestionWidget.module.css';

export interface QuestionWidgetProps {
  readonly question: QuestionAstNode;
  readonly viewMode: StudyViewMode;
}

/**
 * Widget interactivo de autoevaluacion para preguntas del tema.
 */
export function QuestionWidget({ question, viewMode }: QuestionWidgetProps) {
  const {
    selectedOptionId,
    isSubmitted,
    isExplanationExpanded,
    evaluationState,
    selectOption,
    submitAnswer,
    resetQuestion,
    toggleExplanation,
  } = useQuestionInteraction(question.options);

  // En modo lectura, no se renderizan los widgets de examen para no interrumpir el flujo
  if (viewMode === 'reading') {
    return null;
  }

  return (
    <div className={styles.card} role="region" aria-label={`Pregunta: ${question.prompt}`}>
      <div className={styles.header}>
        <span className={styles.badge}>Reactivo de Autoevaluacion</span>
      </div>

      <p className={styles.prompt}>{question.prompt}</p>

      <ul className={styles.optionsList}>
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          let optionClass = styles.optionItem;

          if (isSelected) {
            optionClass += ` ${styles.optionSelected}`;
          }

          if (isSubmitted) {
            optionClass += ` ${styles.submitted}`;
            if (option.isCorrect) {
              optionClass += ` ${styles.optionCorrect}`;
            } else if (isSelected && !option.isCorrect) {
              optionClass += ` ${styles.optionIncorrect}`;
            }
          }

          return (
            <li
              key={option.id}
              className={optionClass}
              onClick={() => selectOption(option.id)}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                id={`opt-${option.id}`}
                checked={isSelected}
                disabled={isSubmitted}
                onChange={() => selectOption(option.id)}
                className={styles.radioInput}
              />
              <label htmlFor={`opt-${option.id}`} className={styles.optionText}>
                {option.text}
              </label>
            </li>
          );
        })}
      </ul>

      {isSubmitted && (
        <div>
          {evaluationState === 'correct' && (
            <div className={styles.feedbackCorrect}>Respuesta correcta</div>
          )}
          {evaluationState === 'incorrect' && (
            <div className={styles.feedbackIncorrect}>Respuesta incorrecta</div>
          )}
        </div>
      )}

      <div className={styles.actions}>
        {!isSubmitted ? (
          <button
            type="button"
            className={styles.submitButton}
            disabled={!selectedOptionId}
            onClick={submitAnswer}
          >
            Comprobar Respuesta
          </button>
        ) : (
          <>
            <button type="button" className={styles.resetButton} onClick={resetQuestion}>
              Reintentar
            </button>
            {question.explanation && (
              <button
                type="button"
                className={styles.resetButton}
                onClick={toggleExplanation}
              >
                {isExplanationExpanded ? 'Ocultar Explicacion' : 'Ver Explicacion'}
              </button>
            )}
          </>
        )}
      </div>

      {isSubmitted && isExplanationExpanded && question.explanation && (
        <div className={styles.explanationSection}>
          <div className={styles.explanationTitle}>Explicacion Tecnica:</div>
          <div className={styles.explanationContent}>{question.explanation}</div>
        </div>
      )}
    </div>
  );
}
