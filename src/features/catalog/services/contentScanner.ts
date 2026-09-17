/**
 * @file contentScanner.ts
 * @description Servicio de escaneo del sistema de archivos para compilar materias y temas en tiempo de compilacion/servidor.
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { type Subject, type TopicSummary, type SubjectMetadata } from '../types/catalog.types';
import { buildCustomAst } from '@/features/markdown-parser/utils/astBuilder';
import { extractQuestionsFromAst } from '@/features/markdown-parser/utils/examExtractor';

/**
 * Cuenta recursivamente la cantidad de definiciones en un nodo AST.
 */
function countDefinitionsInNode(node: unknown): number {
  if (!node || typeof node !== 'object') return 0;
  const anyNode = node as { type?: string; children?: unknown[] };
  let count = anyNode.type === 'definicion' ? 1 : 0;
  if (Array.isArray(anyNode.children)) {
    for (const child of anyNode.children) {
      count += countDefinitionsInNode(child);
    }
  }
  return count;
}

/**
 * Normaliza un slug de carpeta a un nombre legible por defecto.
 */
function formatSlugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Escanea recursivamente el directorio content/ y compila el catalogo completo de materias y temas.
 *
 * @param contentDir - Ruta base del directorio de contenido (por defecto process.cwd()/content).
 * @returns Lista de todas las materias con sus respectivos temas y metricas.
 */
export async function getAllSubjects(contentDir?: string): Promise<Subject[]> {
  const baseDir = contentDir || path.join(process.cwd(), 'content');

  try {
    const dirEntries = await fs.readdir(baseDir, { withFileTypes: true });
    const subjectDirs = dirEntries.filter((entry) => entry.isDirectory());

    const subjects: Subject[] = [];

    for (const subjectDir of subjectDirs) {
      const subjectSlug = subjectDir.name;
      const fullSubjectPath = path.join(baseDir, subjectSlug);

      // Lectura de metadata.json opcional
      let metadata: SubjectMetadata | null = null;
      try {
        const metaPath = path.join(fullSubjectPath, 'metadata.json');
        const metaRaw = await fs.readFile(metaPath, 'utf-8');
        metadata = JSON.parse(metaRaw) as SubjectMetadata;
      } catch {
        metadata = null;
      }

      // Lectura de archivos Markdown dentro de la carpeta de la materia
      const files = await fs.readdir(fullSubjectPath, { withFileTypes: true });
      const mdFiles = files.filter((f) => f.isFile() && f.name.endsWith('.md'));

      const topics: TopicSummary[] = [];
      let totalQuestionsForSubject = 0;

      for (const mdFile of mdFiles) {
        const topicSlug = mdFile.name.replace(/\.md$/, '');
        const fullTopicPath = path.join(fullSubjectPath, mdFile.name);
        const fileRaw = await fs.readFile(fullTopicPath, 'utf-8');

        const { data: frontmatter, content } = matter(fileRaw);

        // Construccion del AST para extraccion exacta de metricas
        const ast = buildCustomAst(content);
        const questions = extractQuestionsFromAst(ast);
        const definitionsCount = countDefinitionsInNode(ast);

        totalQuestionsForSubject += questions.length;

        const topicSummary: TopicSummary = {
          id: (frontmatter.id as string) || topicSlug,
          slug: topicSlug,
          title: (frontmatter.title as string) || formatSlugToTitle(topicSlug),
          description: (frontmatter.description as string) || '',
          materiaSlug: subjectSlug,
          especialidadSlug:
            (frontmatter.especialidad as string) ||
            metadata?.especialidadSlug ||
            'general',
          order: typeof frontmatter.order === 'number' ? frontmatter.order : 99,
          tags: Array.isArray(frontmatter.tags) ? (frontmatter.tags as string[]) : [],
          definitionsCount,
          questionsCount: questions.length,
          lastUpdated: (frontmatter.lastUpdated as string) || new Date().toISOString().split('T')[0],
        };

        topics.push(topicSummary);
      }

      // Ordenar temas por 'order' ascendente
      topics.sort((a, b) => a.order - b.order);

      // Solo registrar la asignatura si tiene al menos un tema
      if (topics.length > 0 || metadata) {
        subjects.push({
          slug: subjectSlug,
          name: metadata?.name || formatSlugToTitle(subjectSlug),
          description:
            metadata?.description ||
            `Asignatura de ${formatSlugToTitle(subjectSlug)} con ${topics.length} temas disponibles.`,
          especialidadSlug: metadata?.especialidadSlug || topics[0]?.especialidadSlug || 'general',
          topicsCount: topics.length,
          totalQuestionsCount: totalQuestionsForSubject,
          topics,
        });
      }
    }

    return subjects;
  } catch (error) {
    // Si el directorio content/ no existe aun o hay error de I/O, retornar lista vacia
    console.warn('Advertencia al escanear directorio de contenidos:', error);
    return [];
  }
}
