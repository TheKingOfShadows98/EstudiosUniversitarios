/**
 * @file CustomMarkdownRenderer.tsx
 * @description Componente orquestador principal que procesa y renderiza el AST de Markdown enriquecido.
 */

'use client';

import React, { useMemo } from 'react';
import {
  type DocumentRootAstNode,
  type TopicAstNode,
  type DefinitionAstNode,
  type QuestionAstNode,
  type MarkdownAstNode,
  type CustomAstNode,
  type StudyViewMode,
} from '../types/parser.types';
import { buildCustomAst } from '../utils/astBuilder';
import { extractQuestionsFromAst } from '../utils/examExtractor';
import { useStudyViewMode } from '../hooks/useStudyViewMode';
import { ViewModeToolbar } from './ViewModeToolbar';
import { TopicBlock } from './TopicBlock';
import { DefinitionBlock } from './DefinitionBlock';
import { QuestionWidget } from './QuestionWidget';
import { StandardMarkdownContent } from './StandardMarkdownContent';
import styles from './CustomMarkdownRenderer.module.css';

export interface CustomMarkdownRendererProps {
  readonly markdown: string;
  readonly initialViewMode?: StudyViewMode;
  readonly showToolbar?: boolean;
}

/**
 * Renderizador declarativo de Markdown con soporte para etiquetas de dominio academicas.
 */
export function CustomMarkdownRenderer({
  markdown,
  initialViewMode = 'active_study',
  showToolbar = true,
}: CustomMarkdownRendererProps) {
  const { viewMode, setViewMode } = useStudyViewMode(initialViewMode);

  // Construccion determinista del AST y extraccion de preguntas
  const ast: DocumentRootAstNode = useMemo(() => {
    return buildCustomAst(markdown);
  }, [markdown]);

  const allQuestions = useMemo(() => {
    return extractQuestionsFromAst(ast);
  }, [ast]);

  /**
   * Renderizado recursivo de cualquier nodo del AST.
   */
  const renderNode = (node: CustomAstNode, index: number): React.ReactNode => {
    switch (node.type) {
      case 'tema':
        return (
          <TopicBlock key={`topic-${node.id}-${index}`} id={node.id} name={node.name}>
            {node.children.map((child, childIndex) => renderNode(child, childIndex))}
          </TopicBlock>
        );

      case 'definicion':
        return (
          <DefinitionBlock key={`def-${node.id}-${index}`} id={node.id} name={node.name}>
            {node.children.map((child, childIndex) => renderNode(child, childIndex))}
          </DefinitionBlock>
        );

      case 'pregunta':
        return (
          <QuestionWidget
            key={`question-${node.id}-${index}`}
            question={node}
            viewMode={viewMode}
          />
        );

      case 'markdown':
        return (
          <StandardMarkdownContent
            key={`md-${index}`}
            content={node.rawContent}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {showToolbar && (
        <ViewModeToolbar
          mode={viewMode}
          onModeChange={setViewMode}
          questionsCount={allQuestions.length}
        />
      )}
      <main className={styles.documentBody}>
        {ast.children.map((node, index) => renderNode(node, index))}
      </main>
    </div>
  );
}
