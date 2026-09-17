/**
 * @file tagTokenizer.ts
 * @description Tokenizador lexico para identificar etiquetas de dominio y texto en Markdown.
 */

export type TagName = 'TEMA' | 'DEFINICION' | 'PREGUNTA' | 'RESPUESTA' | 'EXPLICACION';

export interface OpenTagToken {
  readonly type: 'open_tag';
  readonly tagName: TagName;
  readonly attributes: Record<string, string>;
  readonly startIndex: number;
  readonly endIndex: number;
}

export interface CloseTagToken {
  readonly type: 'close_tag';
  readonly tagName: TagName;
  readonly startIndex: number;
  readonly endIndex: number;
}

export interface TextToken {
  readonly type: 'text';
  readonly content: string;
  readonly startIndex: number;
  readonly endIndex: number;
}

export type MarkdownCustomToken = OpenTagToken | CloseTagToken | TextToken;

/**
 * Parsea una cadena de atributos de una etiqueta (ej. nombre="Arboles" id="123" o "Arboles").
 *
 * @param rawAttributes - Texto dentro de los corchetes tras el nombre de la etiqueta.
 * @returns Objeto clave-valor con los atributos normalizados.
 */
export function parseAttributes(rawAttributes: string): Record<string, string> {
  const attributes: Record<string, string> = {};
  const trimmed = rawAttributes.trim();

  if (!trimmed) {
    return attributes;
  }

  // Soporte para formato directo: [TEMA "Nombre"] o [DEFINICION = "Nombre"]
  const directMatch = trimmed.match(/^=?\s*"([^"]+)"$/);
  if (directMatch) {
    attributes['nombre'] = directMatch[1];
    return attributes;
  }

  // Regex para pares clave="valor" o clave=valor
  const attrRegex = /([a-zA-Z0-9_-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+))/g;
  let match: RegExpExecArray | null;

  while ((match = attrRegex.exec(trimmed)) !== null) {
    const key = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? '';
    attributes[key] = value;
  }

  return attributes;
}

/**
 * Tokeniza una cadena Markdown identificando etiquetas personalizadas y bloques de texto.
 *
 * @param input - Cadena Markdown de entrada.
 * @returns Lista ordenada de tokens (etiquetas y texto).
 */
export function tokenizeCustomMarkdown(input: string): MarkdownCustomToken[] {
  const tokens: MarkdownCustomToken[] = [];
  // Regex para capturar etiquetas de apertura [TAG ...] y cierre [/TAG]
  const tagRegex = /\[(\/?)(TEMA|DEFINICION|PREGUNTA|RESPUESTA|EXPLICACION)(?:\s+([^\]]*)|=([^\]]*))?\]/gi;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(input)) !== null) {
    const matchIndex = match.index;
    const fullMatch = match[0];
    const isClosing = match[1] === '/';
    const tagName = match[2].toUpperCase() as TagName;
    const rawAttrs = (match[3] ?? match[4] ?? '').trim();

    // Si hay texto previo a la etiqueta, lo emitimos como TextToken
    if (matchIndex > lastIndex) {
      const textChunk = input.substring(lastIndex, matchIndex);
      if (textChunk.length > 0) {
        tokens.push({
          type: 'text',
          content: textChunk,
          startIndex: lastIndex,
          endIndex: matchIndex,
        });
      }
    }

    if (isClosing) {
      tokens.push({
        type: 'close_tag',
        tagName,
        startIndex: matchIndex,
        endIndex: matchIndex + fullMatch.length,
      });
    } else {
      const attributes = parseAttributes(rawAttrs);
      tokens.push({
        type: 'open_tag',
        tagName,
        attributes,
        startIndex: matchIndex,
        endIndex: matchIndex + fullMatch.length,
      });
    }

    lastIndex = matchIndex + fullMatch.length;
  }

  // Capturar texto restante tras la ultima etiqueta
  if (lastIndex < input.length) {
    const remainingText = input.substring(lastIndex);
    if (remainingText.length > 0) {
      tokens.push({
        type: 'text',
        content: remainingText,
        startIndex: lastIndex,
        endIndex: input.length,
      });
    }
  }

  return tokens;
}
