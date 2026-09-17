/**
 * @file index.ts
 * @description Punto de entrada publico del modulo markdown-parser.
 */

// Tipos del AST, dominio y notacion cientifica
export * from './types/parser.types';
export * from './types/science.types';

// Utilidades puras y compiladores
export { generateSlug } from './utils/slugUtils';
export { tokenizeCustomMarkdown, parseAttributes } from './utils/tagTokenizer';
export { buildCustomAst } from './utils/astBuilder';
export { extractQuestionsFromAst } from './utils/examExtractor';
export { compileScientificExpression } from './utils/scienceCompiler';
export { tokenizeInlineContent } from './utils/inlineContentLexer';
export { renderInlineContent, renderSegmentsToReact } from './utils/inlineRenderer';

// Custom Hooks
export { useStudyViewMode } from './hooks/useStudyViewMode';
export { useQuestionInteraction } from './hooks/useQuestionInteraction';

// Componentes React
export { CustomMarkdownRenderer, type CustomMarkdownRendererProps } from './components/CustomMarkdownRenderer';
export { TopicBlock, type TopicBlockProps } from './components/TopicBlock';
export { DefinitionBlock, type DefinitionBlockProps } from './components/DefinitionBlock';
export { QuestionWidget, type QuestionWidgetProps } from './components/QuestionWidget';
export { ViewModeToolbar, type ViewModeToolbarProps } from './components/ViewModeToolbar';
export { StandardMarkdownContent, type StandardMarkdownContentProps } from './components/StandardMarkdownContent';
export { MathEquation, type MathEquationProps } from './components/MathEquation';
