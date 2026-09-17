/**
 * @file StandardMarkdownContent.tsx
 * @description Renderizador para fragmentos de texto Markdown regular dentro de los bloques.
 */

import React from 'react';
import styles from './StandardMarkdownContent.module.css';

export interface StandardMarkdownContentProps {
  readonly content: string;
}

/**
 * Renderiza de forma estructurada los fragmentos de Markdown estandar.
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
            {parseInlineMarkdown(text)}
          </p>
        );
      }
      paragraphBuffer = [];
    }
  };

  const flushList = () => {
    if (listBuffer.length > 0 && listType) {
      const items = listBuffer.map((item, idx) => (
        <li key={`li-${idx}`}>{parseInlineMarkdown(item)}</li>
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
        <h3 key={`h3-${renderedElements.length}`}>{trimmed.substring(4)}</h3>
      );
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flushParagraph();
      flushList();
      renderedElements.push(
        <h2 key={`h2-${renderedElements.length}`}>{trimmed.substring(3)}</h2>
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

/**
 * Parsea marcas inline basicas (**negrita**, `codigo`, *cursiva*).
 */
function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(<strong key={`b-${parts.length}`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(<code key={`c-${parts.length}`}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(<em key={`i-${parts.length}`}>{token.slice(1, -1)}</em>);
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}
