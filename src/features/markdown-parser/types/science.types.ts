/**
 * @file science.types.ts
 * @description Definiciones de tipos e interfaces para el renderizado de notacion cientifica y quimica.
 */

/**
 * Tipos de expresiones cientificas soportadas en el analizador.
 */
export type ScientificExpressionType =
  | 'inline_math'       // Formulas matematicas inline ($...$)
  | 'block_math'        // Ecuaciones en bloque ($$...$$)
  | 'chemical_formula'  // Formulas quimicas (\ce{...} o $\ce{...}$)
  | 'scientific_unit';  // Unidades y constantes cientificas (ej. 6.022e23, kg*m/s^2)

/**
 * Opciones de configuracion para el renderizado de KaTeX en cliente/servidor.
 */
export interface ScientificRenderOptions {
  readonly displayMode?: boolean;
  readonly throwOnError?: boolean;
  readonly output?: 'html' | 'mathml' | 'htmlAndMathml';
  readonly enableChemicalNotation?: boolean;
}

/**
 * Resultado de compilar una expresion cientifica a HTML mediante KaTeX.
 */
export interface CompiledScientificExpression {
  readonly rawExpression: string;
  readonly type: ScientificExpressionType;
  readonly isDisplayMode: boolean;
  readonly renderedHtml: string;
  readonly hasError: boolean;
  readonly errorMessage?: string;
}

/**
 * Segmento de contenido inline clasificado para renderizado tipado y jerarquico.
 */
export type InlineContentSegment =
  | { readonly type: 'text'; readonly value: string }
  | { readonly type: 'bold'; readonly children: readonly InlineContentSegment[] }
  | { readonly type: 'italic'; readonly children: readonly InlineContentSegment[] }
  | { readonly type: 'code'; readonly value: string }
  | { readonly type: 'scientific'; readonly expression: CompiledScientificExpression };
