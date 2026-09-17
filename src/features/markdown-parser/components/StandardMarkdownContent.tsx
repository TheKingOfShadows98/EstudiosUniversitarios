/**
 * @file StandardMarkdownContent.tsx
 * @description Renderizador para fragmentos de texto Markdown regular con soporte para notacion cientifica, formulas KaTeX y codigo.
 */

import React from 'react';
import { renderInlineContent } from '../utils/inlineRenderer';
import styles from './StandardMarkdownContent.module.css';

export interface StandardMarkdownContentProps {
  readonly content: string;
}

/**
 * Renderiza de forma estructurada los fragmentos de Markdown estandar con formulas matematicas y quimicas.
 */
export function StandardMarkdownContent({ content }: StandardMarkdownContentProps) {
  if (!content || content.trim().length === 0) {
    return null;
  }

  // Segmentacion por lineas para procesar encabezados, bloques de codigo y listas
  const lines = content.split('\n');
  const renderedElements: React.ReactNode[] = [];

  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLang = '';
  let listBuffer: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      const text = paragraphBuffer.join(' ').trim();
      if (text.length > 0) {
        renderedElements.push(
          <p key={`p-${renderedElements.length}`}>
            {renderInlineContent(text, `p-${renderedElements.length}`)}
          </p>
        );
      }
      paragraphBuffer = [];
    }
  };

  const flushList = () => {
    if (listBuffer.length > 0 && listType) {
      const items = listBuffer.map((item, idx) => (
        <li key={`li-${idx}`}>{renderInlineContent(item, `li-${idx}`)}</li>
      ));
      if (listType === 'ul') {
        renderedElements.push(<ul key={`ul-${renderedElements.length}`}>{items}</ul>);
      } else {
        renderedElements.push(<ol key={`ol-${renderedElements.length}`}>{items}</ol>);
      }
      listBuffer = [];
      listType = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Deteccion de bloque matematico multilineal $$ ... $$
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length >= 4) {
      flushParagraph();
      flushList();
      renderedElements.push(
        <div key={`mathblock-${renderedElements.length}`}>
          {renderInlineContent(trimmed, `mb-${renderedElements.length}`)}
        </div>
      );
      continue;
    }

    // Deteccion de bloque de codigo fenced (```)
    if (trimmed.startsWith('```')) {
      if (!inCodeBlock) {
        flushParagraph();
        flushList();
        inCodeBlock = true;
        codeLang = trimmed.replace('```', '').trim();
        codeBuffer = [];
      } else {
        inCodeBlock = false;
        renderedElements.push(
          <pre key={`pre-${renderedElements.length}`}>
            <code className={codeLang ? `language-${codeLang}` : undefined}>
              {codeBuffer.join('\n')}
            </code>
          </pre>
        );
        codeBuffer = [];
        codeLang = '';
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Linea vacia: separador de parrafo/lista
    if (trimmed.length === 0) {
      flushParagraph();
      flushList();
      continue;
    }

    // Encabezados (###, ##, #)
    if (trimmed.startsWith('### ')) {
      flushParagraph();
      flushList();
      renderedElements.push(
        <h3 key={`h3-${renderedElements.length}`}>
          {renderInlineContent(trimmed.substring(4), `h3-${renderedElements.length}`)}
        </h3>
      );
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flushParagraph();
      flushList();
      renderedElements.push(
        <h2 key={`h2-${renderedElements.length}`}>
          {renderInlineContent(trimmed.substring(3), `h2-${renderedElements.length}`)}
        </h2>
      );
      continue;
    }

    // Listas no ordenadas (- o *)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      flushParagraph();
      if (listType && listType !== 'ul') flushList();
      listType = 'ul';
      listBuffer.push(trimmed.substring(2));
      continue;
    }

    // Listas ordenadas (1., 2.)
    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (olMatch) {
      flushParagraph();
      if (listType && listType !== 'ol') flushList();
      listType = 'ol';
      listBuffer.push(olMatch[2]);
      continue;
    }

    // Texto de parrafo regular
    flushList();
    paragraphBuffer.push(trimmed);
  }

  flushParagraph();
  flushList();

  return <div className={styles.markdownBody}>{renderedElements}</div>;
}
