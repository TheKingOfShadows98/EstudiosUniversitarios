/**
 * @file subjectExamPool.ts
 * @description Servicio de servidor para compilar todas las preguntas de una materia para su evaluacion global.
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { type SubjectExamQuestion } from '../types/examEngine.types';
import { buildCustomAst } from '@/features/markdown-parser/utils/astBuilder';
import { extractQuestionsFromAst } from '@/features/markdown-parser/utils/examExtractor';

/**
 * Recopila todos los reactivos de evaluacion presentes en los temas de una materia.
 *
 * @param materiaSlug - Identificador de la asignatura (carpeta en content/).
 * @param contentDir - Directorio base opcional.
 * @returns Lista completa de preguntas tipadas y vinculadas a su tema de procedencia.
 */
export async function getSubjectExamQuestions(
  materiaSlug: string,
  contentDir?: string
): Promise<SubjectExamQuestion[]> {
  const baseDir = contentDir || path.join(process.cwd(), 'content', materiaSlug);
  const questionsPool: SubjectExamQuestion[] = [];

  try {
    const entries = await fs.readdir(baseDir, { withFileTypes: true });
    const mdFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'));

    for (const file of mdFiles) {
      const topicSlug = file.name.replace(/\.md$/, '');
      const filePath = path.join(baseDir, file.name);
      const rawContent = await fs.readFile(filePath, 'utf-8');

      const { data: frontmatter, content } = matter(rawContent);
      const topicTitle = (frontmatter.title as string) || topicSlug;

      const ast = buildCustomAst(content);
      const extractedQuestions = extractQuestionsFromAst(ast);

      for (const q of extractedQuestions) {
        // Encontrar la opcion correcta
        const correctOpt = q.options.find((opt) => opt.isCorrect);
        const correctOptionId = correctOpt?.id || q.options[0]?.id || '';

        questionsPool.push({
          id: `${topicSlug}-${q.id}`,
          questionType: q.questionType,
          prompt: q.prompt,
          options: q.options,
          correctOptionId,
          explanation: q.explanation,
          topicSlug,
          topicTitle,
          materiaSlug,
        });
      }
    }

    return questionsPool;
  } catch (error) {
    console.warn(`Advertencia al compilar banco de examen para la materia '${materiaSlug}':`, error);
    return [];
  }
}
