/**
 * @file parser.types.ts
 * @description Definiciones de tipos e interfaces para el AST y el renderizador de Markdown.
 */

/**
 * Tipos de nodos admitidos en el AST del parser de Markdown personalizado.
 */
export type CustomAstNodeType = 'root' | 'tema' | 'definicion' | 'pregunta' | 'markdown';

/**
 * Tipos de reactivos o preguntas soportadas.
 */
export type QuestionType = 'opcion_multiple' | 'codigo' | 'verdadero_falso';

/**
 * Representa una opcion de respuesta dentro de una pregunta.
 */
export interface QuestionOption {
  readonly id: string;
  readonly text: string;
  readonly isCorrect: boolean;
}

/**
 * Nodo que representa un fragmento de Markdown estandar (texto, listas, tablas, formulas).
 */
export interface MarkdownAstNode {
  readonly type: 'markdown';
  readonly rawContent: string;
}

/**
 * Nodo que representa una pregunta interactiva.
 */
export interface QuestionAstNode {
  readonly type: 'pregunta';
  readonly id: string;
  readonly questionType: QuestionType;
  readonly prompt: string;
  readonly options: readonly QuestionOption[];
  readonly explanation?: string;
}

/**
 * Nodo que representa una definicion o concepto clave dentro de un tema.
 */
export interface DefinitionAstNode {
  readonly type: 'definicion';
  readonly id: string;
  readonly name: string;
  readonly children: readonly (MarkdownAstNode | QuestionAstNode)[];
}

/**
 * Nodo que representa un tema principal.
 */
export interface TopicAstNode {
  readonly type: 'tema';
  readonly id: string;
  readonly name: string;
  readonly children: readonly (MarkdownAstNode | DefinitionAstNode | QuestionAstNode)[];
}

/**
 * Nodo raiz del documento parseado.
 */
export interface DocumentRootAstNode {
  readonly type: 'root';
  readonly children: readonly (TopicAstNode | MarkdownAstNode)[];
}

/**
 * Union discriminada de todos los posibles nodos del arbol AST.
 */
export type CustomAstNode =
  | DocumentRootAstNode
  | TopicAstNode
  | DefinitionAstNode
  | QuestionAstNode
  | MarkdownAstNode;

/**
 * Modo de visualizacion para el renderizador de React.
 */
export type StudyViewMode = 'reading' | 'active_study';

/**
 * Estado interactivo de una pregunta en la interfaz de usuario.
 */
export type QuestionEvaluationState = 'unanswered' | 'correct' | 'incorrect';

/**
 * Interfaz para el estado de una pregunta en sesion de estudio interactivo.
 */
export interface QuestionInteractionState {
  readonly selectedOptionId: string | null;
  readonly isSubmitted: boolean;
  readonly isExplanationExpanded: boolean;
}
