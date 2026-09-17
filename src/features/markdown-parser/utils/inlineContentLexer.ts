/**
 * @file inlineContentLexer.ts
 * @description Tokenizador lexico jerarquico para clasificar texto con expresiones matematicas, cientificas y formato Markdown.
 */

import { type InlineContentSegment } from '../types/science.types';
import { compileScientificExpression } from './scienceCompiler';

/**
 * Tokeniza un texto continuo clasificando bloques de matematicas ($$ o $), formato recursivo (negrita, cursiva, codigo) y texto plano.
 *
 * @param text - Cadena de texto a procesar.
 * @returns Lista ordenada de segmentos clasificados jerarquicamente.
 */
export function tokenizeInlineContent(text: string): InlineContentSegment[] {
  if (!text || typeof text !== 'string') {
    return [];
  }

  const segments: InlineContentSegment[] = [];

  // Expresion regular que captura en orden de precedencia:
  // 1. Math block: $$...$$
  // 2. Math inline: $...$
  // 3. Bold: **...**
  // 4. Code: `...`
  // 5. Italic: *...*
  const masterRegex = /(\$\$(?:[\s\S]*?)\$\$|\$(?:[^\$\n]+?)\$|\*\*(?:[^\*]+?)\*\*|`([^`]+?)`|\*(?:[^\*]+?)\*)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = masterRegex.exec(text)) !== null) {
    const matchIndex = match.index;
    const matchedStr = match[0];

    // Texto plano previo a la coincidencia
    if (matchIndex > lastIndex) {
      const textChunk = text.substring(lastIndex, matchIndex);
      if (textChunk.length > 0) {
        segments.push({ type: 'text', value: textChunk });
      }
    }

    if (matchedStr.startsWith('$$') && matchedStr.endsWith('$$') && matchedStr.length >= 4) {
      // Bloque matematico $$...$$
      const rawExpr = matchedStr.slice(2, -2);
      const compiled = compileScientificExpression(rawExpr, { displayMode: true });
      segments.push({ type: 'scientific', expression: compiled });
    } else if (matchedStr.startsWith('$') && matchedStr.endsWith('$') && matchedStr.length >= 2) {
      // Formula inline $...$
      const rawExpr = matchedStr.slice(1, -1);
      const compiled = compileScientificExpression(rawExpr, { displayMode: false });
      segments.push({ type: 'scientific', expression: compiled });
    } else if (matchedStr.startsWith('**') && matchedStr.endsWith('**') && matchedStr.length >= 4) {
      // Negrita con procesamiento recursivo de su contenido interno
      const innerText = matchedStr.slice(2, -2);
      const innerSegments = tokenizeInlineContent(innerText);
      segments.push({ type: 'bold', children: innerSegments });
    } else if (matchedStr.startsWith('`') && matchedStr.endsWith('`') && matchedStr.length >= 2) {
      // Codigo inline
      segments.push({ type: 'code', value: matchedStr.slice(1, -1) });
    } else if (matchedStr.startsWith('*') && matchedStr.endsWith('*') && matchedStr.length >= 2) {
      // Cursiva con procesamiento recursivo de su contenido interno
      const innerText = matchedStr.slice(1, -1);
      const innerSegments = tokenizeInlineContent(innerText);
      segments.push({ type: 'italic', children: innerSegments });
    }

    lastIndex = matchIndex + matchedStr.length;
  }

  // Texto restante al final
  if (lastIndex < text.length) {
    const remaining = text.substring(lastIndex);
    if (remaining.length > 0) {
      segments.push({ type: 'text', value: remaining });
    }
  }

  return segments;
}
