/**
 * @file MathEquation.tsx
 * @description Componente para renderizar de forma segura formulas matematicas y quimicas procesadas por KaTeX.
 */

import React from 'react';
import { type CompiledScientificExpression } from '../types/science.types';
import styles from './MathEquation.module.css';

export interface MathEquationProps {
  readonly expression: CompiledScientificExpression;
}

/**
 * Renderiza el HTML compilado de KaTeX en modo inline o bloque.
 */
export function MathEquation({ expression }: MathEquationProps) {
  const containerClass = expression.isDisplayMode ? styles.blockMath : styles.inlineMath;

  return (
    <span
      className={containerClass}
      dangerouslySetInnerHTML={{ __html: expression.renderedHtml }}
      aria-label={expression.rawExpression}
    />
  );
}
