/**
 * @file ExamResultsView.tsx
 * @description Pantalla de resultados del examen con calificacion y enlaces de remediacion pedagogica.
 */

import React from 'react';
import Link from 'next/link';
import { type ExamEvaluationResult } from '../types/examEngine.types';
import { renderInlineContent } from '@/features/markdown-parser/utils/inlineRenderer';
import styles from './ExamResultsView.module.css';

export interface ExamResultsViewProps {
  readonly result: ExamEvaluationResult;
  readonly materiaName: string;
  readonly materiaSlug: string;
  readonly onRestart: () => void;
}

/**
 * Muestra el balance final de la evaluacion y los temas recomendados para repaso.
 */
export function ExamResultsView({
  result,
  materiaName,
  materiaSlug,
  onRestart,
}: ExamResultsViewProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scoreCard}>
        {result.passed ? (
          <span className={styles.badgePassed}>Examen Aprobado</span>
        ) : (
          <span className={styles.badgeFailed}>Requiere Refuerzo</span>
        )}

        <div className={styles.scoreNumber}>{result.scorePercentage}%</div>

        <p className={styles.scoreSummary}>
          Obtuviste <strong>{result.correctCount}</strong> aciertos de un total de{' '}
          <strong>{result.totalQuestions}</strong> preguntas evaluadas en <strong>{materiaName}</strong>.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.button} ${styles.buttonPrimary}`}
            onClick={onRestart}
          >
            Reintentar Examen
          </button>
          <Link href="/" className={`${styles.button} ${styles.buttonSecondary}`}>
            Volver al Catalogo
          </Link>
        </div>
      </div>

      {result.remediationTopics.length > 0 && (
        <section className={styles.remediationSection} aria-label="Temas sugeridos para repaso">
          <header className={styles.remediationHeader}>
            <h2 className={styles.remediationTitle}>Temas Sugeridos para Repaso</h2>
            <p className={styles.remediationDesc}>
              Detectamos errores en preguntas asociadas a los siguientes temas. Te recomendamos repasar su contenido teorico y definiciones:
            </p>
          </header>

          <ul className={styles.remediationList}>
            {result.remediationTopics.map((topic) => (
              <li key={topic.topicSlug}>
                <Link
                  href={`/materias/${materiaSlug}/${topic.topicSlug}`}
                  className={styles.remediationItem}
                >
                  <span>{topic.topicTitle}</span>
                  <span className={styles.failedCountBadge}>
                    {topic.failedCount} {topic.failedCount === 1 ? 'error' : 'errores'}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {result.failedQuestions.length > 0 && (
        <section className={styles.breakdownSection} aria-label="Revision de errores">
          <h2 className={styles.breakdownTitle}>Revision Detallada de Reactivos</h2>
          {result.failedQuestions.map((failed, idx) => (
            <div key={failed.question.id} className={styles.failedCard}>
              <div className={styles.failedPrompt}>
                {idx + 1}. {renderInlineContent(failed.question.prompt, `rev-${failed.question.id}`)}
              </div>

              {failed.explanation && (
                <div className={styles.explanation}>
                  <strong>Justificacion Tecnica: </strong>
                  {renderInlineContent(failed.explanation, `rev-exp-${failed.question.id}`)}
                </div>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
