/**
 * @file scienceCompiler.ts
 * @description Compilador puro de expresiones matematicas, cientificas y quimicas a HTML accesible mediante KaTeX.
 */

import katex from 'katex';
import {
  type ScientificRenderOptions,
  type CompiledScientificExpression,
  type ScientificExpressionType,
} from '../types/science.types';

/**
 * Compila una expresion matematica o quimica escrita en LaTeX/KaTeX a una cadena HTML segura.
 *
 * @param expression - Expresion cientifica sin los delimitadores de dolar (ej. "p^+", "E = mc^2", "\ce{H2O}").
 * @param options - Opciones de compilacion (displayMode, throwOnError).
 * @returns Estructura con el HTML compilado y metadatos de renderizado.
 */
export function compileScientificExpression(
  expression: string,
  options: ScientificRenderOptions = {}
): CompiledScientificExpression {
  const isDisplayMode = options.displayMode ?? false;
  const rawClean = expression.trim();

  // Deteccion del tipo de expresion cientifica
  let exprType: ScientificExpressionType = isDisplayMode ? 'block_math' : 'inline_math';
  if (rawClean.includes('\\ce{')) {
    exprType = 'chemical_formula';
  } else if (rawClean.includes('\\text{') && (rawClean.includes('C') || rawClean.includes('kg') || rawClean.includes('mol') || rawClean.includes('u}'))) {
    exprType = 'scientific_unit';
  }

  try {
    const renderedHtml = katex.renderToString(rawClean, {
      displayMode: isDisplayMode,
      throwOnError: false,
      output: options.output ?? 'htmlAndMathml',
      strict: false,
    });

    return {
      rawExpression: rawClean,
      type: exprType,
      isDisplayMode,
      renderedHtml,
      hasError: false,
    };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Error al compilar expresion cientifica';
    return {
      rawExpression: rawClean,
      type: exprType,
      isDisplayMode,
      renderedHtml: `<span class="katex-error" title="${errorMsg}">${rawClean}</span>`,
      hasError: true,
      errorMessage: errorMsg,
    };
  }
}
