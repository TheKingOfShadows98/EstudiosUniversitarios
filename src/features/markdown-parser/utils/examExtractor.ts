/**
 * @file examExtractor.ts
 * @description Utilidad pura para extraer todas las preguntas de un AST y alimentar bancos de examen.
 */

import { type DocumentRootAstNode, type QuestionAstNode, type CustomAstNode } from '../types/parser.types';

/**
 * Recorre recursivamente un arbol AST y recopila todas las preguntas interactivas presentes.
 *
 * @param node - Nodo raiz o seccion del AST.
 * @returns Lista de todas las preguntas encontradas en el documento.
 */
export function extractQuestionsFromAst(node: CustomAstNode): QuestionAstNode[] {
  const questions: QuestionAstNode[] = [];

  function traverse(currentNode: CustomAstNode) {
    if (currentNode.type === 'pregunta') {
      questions.push(currentNode);
      return;
    }

    if (currentNode.type === 'root' || currentNode.type === 'tema' || currentNode.type === 'definicion') {
      for (const child of currentNode.children) {
        traverse(child);
      }
    }
  }

  traverse(node);
  return questions;
}
