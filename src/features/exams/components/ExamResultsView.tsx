/**
 * @file ExamResultsView.tsx
 * @description Pantalla de resultados del examen con calificacion por rangos de color,
 * desglose ordenado de todas las preguntas (verde/amarillo) y entrega de recompensas de gamificacion.
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { type ExamEvaluationResult } from '../types/examEngine.types';
import { type ExamGamificationReward } from '@/features/user/types/user.types';
import { computeGradeBracket } from '@/features/user/utils/gamificationEvaluator';
import { renderInlineContent } from '@/features/markdown-parser/utils/inlineRenderer';
import { Trophy, Award, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import styles from './ExamResultsView.module.css';

export interface ExamResultsViewProps {
  readonly result: ExamEvaluationResult;
  readonly materiaName: string;
  readonly materiaSlug: string;
  readonly reward: ExamGamificationReward | null;
  readonly onRestart: () => void;
}

/**
 * Vista de evaluacion, clasificacion por color y revision ordinal de preguntas.
 */
export function ExamResultsView({
  result,
  materiaName,
  materiaSlug,
  reward,
  onRestart,
}: ExamResultsViewProps) {
  const { bracket, score10Scale } = computeGradeBracket(result.scorePercentage);

  // Mapeo de estilos y etiquetas segun el rango de calificacion
  const bracketConfig = {
    critical: {
      badgeClass: styles.badgeCritical,
      scoreClass: styles.scoreCritical,
      label: 'Calificacion Insuficiente (< 5.0)',
    },
    sufficient: {
      badgeClass: styles.badgeSufficient,
      scoreClass: styles.scoreSufficient,
      label: 'Calificacion Regular (5.0 - 6.9)',
    },
    good: {
      badgeClass: styles.badgeGood,
      scoreClass: styles.scoreGood,
      label: 'Calificacion Aprobatoria (7.0 - 8.9)',
    },
    excellent: {
      badgeClass: styles.badgeExcellent,
      scoreClass: styles.scoreExcellent,
      label: 'Calificacion Excelente (>= 9.0)',
    },
  }[bracket];

  return (
    <div className={styles.wrapper}>
      {/* Tarjeta de Calificacion Principal */}
      <section className={styles.scoreCard} aria-label="Resumen de calificacion del examen">
        <span className={`${styles.badgeStatus} ${bracketConfig.badgeClass}`}>
          {bracketConfig.label}
        </span>

        <div className={`${styles.scoreNumber} ${bracketConfig.scoreClass}`}>
          {score10Scale.toFixed(1)}{' '}
          <span className={styles.scoreBase}>/ 10 ({result.scorePercentage}%)</span>
        </div>

        <p className={styles.scoreSummary}>
          Obtuviste <strong>{result.correctCount}</strong> aciertos de un total de{' '}
          <strong>{result.totalQuestions}</strong> preguntas evaluadas en <strong>{materiaName}</strong>.
        </p>

        {/* Panel de Recompensas de Gamificacion */}
        {reward && (
          <div className={styles.rewardsPanel} aria-label="Recompensas obtenidas">
            {reward.earnedKnowledgeTrophy && (
              <div className={styles.rewardTrophyBanner}>
                <Trophy className={styles.trophyIcon} size={22} aria-hidden="true" />
                <div>
                  <strong>¡Copa del Conocimiento Obtenida!</strong>
                  <p>Alcanzaste una nota superior o igual a 9.0 (90%).</p>
                </div>
              </div>
            )}

            {reward.earnedValorMedalsCount > 0 && (
              <div className={styles.rewardMedalBanner}>
                <Award className={styles.medalIcon} size={22} aria-hidden="true" />
                <div>
                  <strong>
                    ¡+{reward.earnedValorMedalsCount}{' '}
                    {reward.earnedValorMedalsCount === 1 ? 'Medalla de Valor Ganada!' : 'Medallas de Valor Ganadas!'}
                  </strong>
                  <p>Aprobaste el examen y dominaste temas que tenias pendientes.</p>
                </div>
              </div>
            )}

            {reward.newlyTaggedValorTopics.length > 0 && (
              <div className={styles.rewardNoticeBanner}>
                <AlertCircle className={styles.noticeIcon} size={18} aria-hidden="true" />
                <span>
                  Se han etiquetado <strong>{reward.newlyTaggedValorTopics.length}</strong> temas en amarillo.
                  Podras ganar una Medalla de Valor superandolos en tu proximo examen.
                </span>
              </div>
            )}
          </div>
        )}

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
      </section>

      {/* Revision Completa de Reactivos en Orden Secuencial */}
      <section className={styles.reviewSection} aria-label="Revision ordenada de todas las preguntas">
        <header className={styles.reviewHeader}>
          <h2 className={styles.reviewTitle}>Revision Detallada de Preguntas</h2>
          <p className={styles.reviewSubtitle}>
            A continuacion se presenta la revision ordenada de los reactivos respondidos en la evaluacion:
          </p>
        </header>

        <div className={styles.questionsList}>
          {result.allQuestionsReview.map((item) => {
            const isCorrect = item.isCorrect;
            const cardClass = isCorrect ? styles.questionCardCorrect : styles.questionCardIncorrect;
            const topicHref = `/materias/${item.materiaSlug}/${item.topicSlug}`;

            return (
              <article key={item.questionId} className={`${styles.questionCard} ${cardClass}`}>
                <div className={styles.questionCardTop}>
                  <div className={styles.questionMeta}>
                    <span className={styles.questionIndex}>Pregunta #{item.orderIndex + 1}</span>
                    <Link href={topicHref} className={styles.topicLink} title="Ir al tema relacionado">
                      Tema: {item.topicTitle}
                    </Link>
                  </div>

                  <span
                    className={`${styles.statusPill} ${
                      isCorrect ? styles.statusPillCorrect : styles.statusPillIncorrect
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 size={14} aria-hidden="true" />
                        <span>Correcta</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>Incorrecta (Opcion a Medalla)</span>
                      </>
                    )}
                  </span>
                </div>

                <div className={styles.questionPrompt}>
                  {renderInlineContent(item.prompt, `rev-q-${item.questionId}`)}
                </div>

                {item.explanation && (
                  <div className={styles.explanationBox}>
                    <strong className={styles.explanationTitle}>Explicacion Tecnica: </strong>
                    <div className={styles.explanationContent}>
                      {renderInlineContent(item.explanation, `rev-exp-${item.questionId}`)}
                    </div>
                  </div>
                )}

                <div className={styles.topicRefFooter}>
                  <Link href={topicHref} className={styles.reviewTopicButton}>
                    <span>Repasar contenido de &quot;{item.topicTitle}&quot;</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Temas Sugeridos para Repaso */}
      {result.remediationTopics.length > 0 && (
        <section className={styles.remediationSection} aria-label="Temas sugeridos para refuerzo">
          <h2 className={styles.remediationTitle}>Temas Prioritarios para Refuerzo</h2>
          <ul className={styles.remediationList}>
            {result.remediationTopics.map((topic) => (
              <li key={topic.topicSlug}>
                <Link
                  href={`/materias/${materiaSlug}/${topic.topicSlug}`}
                  className={styles.remediationItem}
                >
                  <span className={styles.remediationItemTitle}>{topic.topicTitle}</span>
                  <span className={styles.failedCountBadge}>
                    {topic.failedCount} {topic.failedCount === 1 ? 'error registrado' : 'errores registrados'}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
