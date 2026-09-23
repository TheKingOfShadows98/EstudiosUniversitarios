/**
 * @file SubjectExamRunner.tsx
 * @description Contenedor interactivo para la realizacion del examen general de una materia y registro de gamificacion.
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { type SubjectExamQuestion } from '../types/examEngine.types';
import { type ExamGamificationReward } from '@/features/user/types/user.types';
import { useSubjectExamSession } from '../hooks/useSubjectExamSession';
import { useUserSession } from '@/features/user/hooks/useUserSession';
import { renderInlineContent } from '@/features/markdown-parser/utils/inlineRenderer';
import { ExamResultsView } from './ExamResultsView';
import styles from './SubjectExamRunner.module.css';

export interface SubjectExamRunnerProps {
  readonly materiaName: string;
  readonly materiaSlug: string;
  readonly questionsPool: readonly SubjectExamQuestion[];
  readonly maxQuestionsLimit?: number;
}

/**
 * Motor interactivo de evaluacion para la asignatura.
 */
export function SubjectExamRunner({
  materiaName,
  materiaSlug,
  questionsPool,
  maxQuestionsLimit = 20,
}: SubjectExamRunnerProps) {
  const { recordExamResult } = useUserSession();
  const [gamificationReward, setGamificationReward] = useState<ExamGamificationReward | null>(null);
  const hasProcessedReward = useRef<boolean>(false);

  const {
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions,
    answers,
    answeredCount,
    progressPercentage,
    isSubmitted,
    result,
    isFirstQuestion,
    isLastQuestion,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitExam,
    restartExam,
  } = useSubjectExamSession(questionsPool, maxQuestionsLimit);

  // Registro de gamificacion al completar el examen
  useEffect(() => {
    if (isSubmitted && result && !hasProcessedReward.current) {
      hasProcessedReward.current = true;
      const reward = recordExamResult(materiaSlug, result.allQuestionsReview, result.scorePercentage);
      setGamificationReward(reward);
    }
  }, [isSubmitted, result, materiaSlug, recordExamResult]);

  const handleRestart = () => {
    hasProcessedReward.current = false;
    setGamificationReward(null);
    restartExam();
  };

  // Si no hay preguntas disponibles en la materia
  if (totalQuestions === 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.questionCard}>
          <h2 className={styles.title}>No hay preguntas disponibles</h2>
          <p className={styles.prompt}>
            Esta asignatura aun no contiene reactivos de evaluacion en sus temas.
          </p>
        </div>
      </div>
    );
  }

  // Si ya se entrego el examen, mostramos la pantalla de resultados con remediacion y gamificacion
  if (isSubmitted && result) {
    return (
      <ExamResultsView
        result={result}
        materiaName={materiaName}
        materiaSlug={materiaSlug}
        reward={gamificationReward}
        onRestart={handleRestart}
      />
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const selectedOptionId = answers[currentQuestion.id];

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.badge}>Examen de Evaluacion</span>
        <h1 className={styles.title}>{materiaName}</h1>

        <div className={styles.metaRow}>
          <span>
            Pregunta {currentIndex + 1} de {totalQuestions}
          </span>
          <span>
            {answeredCount} de {totalQuestions} respondidas ({progressPercentage}%)
          </span>
        </div>

        <div
          className={styles.progressBarContainer}
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className={styles.progressBarFill} style={{ width: `${progressPercentage}%` }} />
        </div>
      </header>

      <section className={styles.questionCard} aria-label={`Pregunta ${currentIndex + 1}`}>
        <div className={styles.topicOrigin}>
          Tema: {currentQuestion.topicTitle}
        </div>

        <p className={styles.prompt}>
          {renderInlineContent(currentQuestion.prompt, `runner-q-${currentQuestion.id}`)}
        </p>

        <ul className={styles.optionsList}>
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <li
                key={option.id}
                className={`${styles.optionItem} ${isSelected ? styles.optionSelected : ''}`}
                onClick={() => selectAnswer(option.id)}
              >
                <input
                  type="radio"
                  name={`exam-question-${currentQuestion.id}`}
                  id={`runner-opt-${option.id}`}
                  checked={isSelected}
                  onChange={() => selectAnswer(option.id)}
                  className={styles.radioInput}
                />
                <label
                  htmlFor={`runner-opt-${option.id}`}
                  className={styles.optionText}
                >
                  {renderInlineContent(option.text, `runner-opt-${option.id}`)}
                </label>
              </li>
            );
          })}
        </ul>
      </section>

      <div className={styles.navigationBar}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonSecondary}`}
          onClick={prevQuestion}
          disabled={isFirstQuestion}
        >
          &larr; Anterior
        </button>

        {!isLastQuestion ? (
          <button
            type="button"
            className={`${styles.button} ${styles.buttonPrimary}`}
            onClick={nextQuestion}
          >
            Siguiente &rarr;
          </button>
        ) : (
          <button
            type="button"
            className={`${styles.button} ${styles.buttonSuccess}`}
            onClick={submitExam}
          >
            Finalizar Examen ({answeredCount}/{totalQuestions})
          </button>
        )}
      </div>

      <nav className={styles.paginationDots} aria-label="Navegacion rapida de preguntas">
        {questions.map((q, idx) => {
          const isAnswered = !!answers[q.id];
          const isActive = idx === currentIndex;
          let dotClass = styles.dot;
          if (isActive) dotClass += ` ${styles.dotActive}`;
          else if (isAnswered) dotClass += ` ${styles.dotAnswered}`;

          return (
            <button
              key={q.id}
              type="button"
              className={dotClass}
              onClick={() => goToQuestion(idx)}
              aria-label={`Ir a la pregunta ${idx + 1}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
