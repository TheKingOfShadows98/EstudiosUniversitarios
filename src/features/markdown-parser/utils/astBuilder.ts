/**
 * @file astBuilder.ts
 * @description Constructor del arbol de sintaxis abstracta (AST) para contenido Markdown enriquecido.
 */

import {
  type DocumentRootAstNode,
  type TopicAstNode,
  type DefinitionAstNode,
  type QuestionAstNode,
  type QuestionOption,
  type MarkdownAstNode,
  type QuestionType,
} from '../types/parser.types';
import { tokenizeCustomMarkdown, type MarkdownCustomToken } from './tagTokenizer';
import { generateSlug } from './slugUtils';

interface QuestionDraft {
  id: string;
  type: QuestionType;
  promptChunks: string[];
  options: QuestionOption[];
  currentOptionDraft?: {
    isCorrect: boolean;
    textChunks: string[];
  };
  explanationChunks: string[];
  isInsideOption: boolean;
  isInsideExplanation: boolean;
}

/**
 * Construye un AST tipado a partir de una cadena de texto Markdown con etiquetas de dominio.
 *
 * @param markdown - Texto Markdown con o sin etiquetas especiales.
 * @returns Nodo raiz DocumentRootAstNode con la jerarquia completa de nodos.
 */
export function buildCustomAst(markdown: string): DocumentRootAstNode {
  const tokens = tokenizeCustomMarkdown(markdown);
  const root: DocumentRootAstNode = {
    type: 'root',
    children: [],
  };

  let currentTopic: {
    id: string;
    name: string;
    children: (MarkdownAstNode | DefinitionAstNode | QuestionAstNode)[];
  } | null = null;

  let currentDefinition: {
    id: string;
    name: string;
    children: (MarkdownAstNode | QuestionAstNode)[];
  } | null = null;

  let currentQuestion: QuestionDraft | null = null;
  let questionCounter = 0;
  let optionCounter = 0;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === 'text') {
      const text = token.content;

      if (currentQuestion) {
        if (currentQuestion.isInsideOption && currentQuestion.currentOptionDraft) {
          currentQuestion.currentOptionDraft.textChunks.push(text);
        } else if (currentQuestion.isInsideExplanation) {
          currentQuestion.explanationChunks.push(text);
        } else {
          currentQuestion.promptChunks.push(text);
        }
      } else if (currentDefinition) {
        if (text.trim().length > 0) {
          currentDefinition.children.push({
            type: 'markdown',
            rawContent: text,
          });
        }
      } else if (currentTopic) {
        if (text.trim().length > 0) {
          currentTopic.children.push({
            type: 'markdown',
            rawContent: text,
          });
        }
      } else {
        if (text.trim().length > 0) {
          (root.children as (TopicAstNode | MarkdownAstNode)[]).push({
            type: 'markdown',
            rawContent: text,
          });
        }
      }
      continue;
    }

    if (token.type === 'open_tag') {
      switch (token.tagName) {
        case 'TEMA': {
          const name = token.attributes['nombre'] || token.attributes['name'] || 'Tema Sin Titulo';
          const id = token.attributes['id'] || generateSlug(name);
          currentTopic = {
            id,
            name,
            children: [],
          };
          break;
        }

        case 'DEFINICION': {
          const name = token.attributes['nombre'] || token.attributes['name'] || 'Definicion Sin Titulo';
          const id = token.attributes['id'] || generateSlug(name);
          currentDefinition = {
            id,
            name,
            children: [],
          };
          break;
        }

        case 'PREGUNTA': {
          questionCounter += 1;
          const rawType = token.attributes['tipo'] || 'opcion_multiple';
          const questionType: QuestionType =
            rawType === 'codigo' || rawType === 'verdadero_falso' ? rawType : 'opcion_multiple';
          const id = token.attributes['id'] || `pregunta-${questionCounter}`;

          currentQuestion = {
            id,
            type: questionType,
            promptChunks: [],
            options: [],
            explanationChunks: [],
            isInsideOption: false,
            isInsideExplanation: false,
          };
          optionCounter = 0;
          break;
        }

        case 'RESPUESTA': {
          if (currentQuestion) {
            optionCounter += 1;
            const isCorrect = token.attributes['correcta'] === 'true' || token.attributes['correct'] === 'true';
            currentQuestion.isInsideOption = true;
            currentQuestion.currentOptionDraft = {
              isCorrect,
              textChunks: [],
            };
          }
          break;
        }

        case 'EXPLICACION': {
          if (currentQuestion) {
            currentQuestion.isInsideExplanation = true;
          }
          break;
        }
      }
      continue;
    }

    if (token.type === 'close_tag') {
      switch (token.tagName) {
        case 'RESPUESTA': {
          if (currentQuestion && currentQuestion.currentOptionDraft) {
            const optionText = currentQuestion.currentOptionDraft.textChunks.join('').trim();
            currentQuestion.options.push({
              id: `opt-${currentQuestion.id}-${optionCounter}`,
              text: optionText,
              isCorrect: currentQuestion.currentOptionDraft.isCorrect,
            });
            currentQuestion.currentOptionDraft = undefined;
            currentQuestion.isInsideOption = false;
          }
          break;
        }

        case 'EXPLICACION': {
          if (currentQuestion) {
            currentQuestion.isInsideExplanation = false;
          }
          break;
        }

        case 'PREGUNTA': {
          if (currentQuestion) {
            const prompt = currentQuestion.promptChunks.join('').trim();
            const explanationText = currentQuestion.explanationChunks.join('').trim();

            const questionNode: QuestionAstNode = {
              type: 'pregunta',
              id: currentQuestion.id,
              questionType: currentQuestion.type,
              prompt,
              options: currentQuestion.options,
              explanation: explanationText.length > 0 ? explanationText : undefined,
            };

            if (currentDefinition) {
              currentDefinition.children.push(questionNode);
            } else if (currentTopic) {
              currentTopic.children.push(questionNode);
            }

            currentQuestion = null;
          }
          break;
        }

        case 'DEFINICION': {
          if (currentDefinition) {
            const defNode: DefinitionAstNode = {
              type: 'definicion',
              id: currentDefinition.id,
              name: currentDefinition.name,
              children: currentDefinition.children,
            };

            if (currentTopic) {
              currentTopic.children.push(defNode);
            }

            currentDefinition = null;
          }
          break;
        }

        case 'TEMA': {
          if (currentTopic) {
            const topicNode: TopicAstNode = {
              type: 'tema',
              id: currentTopic.id,
              name: currentTopic.name,
              children: currentTopic.children,
            };

            (root.children as (TopicAstNode | MarkdownAstNode)[]).push(topicNode);
            currentTopic = null;
          }
          break;
        }
      }
    }
  }

  // Manejo de cierres pendientes por seguridad si el documento cerro abruptamente
  if (currentTopic) {
    (root.children as (TopicAstNode | MarkdownAstNode)[]).push({
      type: 'tema',
      id: currentTopic.id,
      name: currentTopic.name,
      children: currentTopic.children,
    });
  }

  return root;
}
