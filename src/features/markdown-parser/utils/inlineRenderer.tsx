/**
 * @file inlineRenderer.tsx
 * @description Utilidad pura y centralizada para renderizar arboles de segmentos inline a elementos React.
 */

import React from 'react';
import { type InlineContentSegment } from '../types/science.types';
import { tokenizeInlineContent } from './inlineContentLexer';
import { MathEquation } from '../components/MathEquation';

/**
 * Renderiza recursivamente una lista de segmentos inline a nodos React.
 *
 * @param segments - Lista de segmentos clasificados.
 * @param parentKey - Prefijo de clave para estabilidad de listas en React.
 * @returns Arreglo de nodos React listos para renderizar.
 */
export function renderSegmentsToReact(
  segments: readonly InlineContentSegment[],
  parentKey: string = 'inline'
): React.ReactNode[] {
  return segments.map((segment, index) => {
    const key = `${parentKey}-${index}`;

    switch (segment.type) {
      case 'bold':
        return (
          <strong key={key}>
            {renderSegmentsToReact(segment.children, `${key}-b`)}
          </strong>
        );

      case 'italic':
        return (
          <em key={key}>
            {renderSegmentsToReact(segment.children, `${key}-i`)}
          </em>
        );

      case 'code':
        return <code key={key}>{segment.value}</code>;

      case 'scientific':
        return <MathEquation key={key} expression={segment.expression} />;

      case 'text':
      default:
        return segment.value;
    }
  });
}

/**
 * Funcion de alto nivel que tokeniza y renderiza cualquier cadena de texto con formato y notacion cientifica.
 *
 * @param text - Texto Markdown inline plano.
 * @param keyPrefix - Prefijo de clave React opcional.
 * @returns Nodos React renderizados.
 */
export function renderInlineContent(text: string, keyPrefix?: string): React.ReactNode[] {
  const segments = tokenizeInlineContent(text);
  return renderSegmentsToReact(segments, keyPrefix);
}
