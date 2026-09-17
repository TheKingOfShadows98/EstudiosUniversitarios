/**
 * @file page.tsx
 * @description Vista de lectura y estudio activo de un tema especifico de una materia.
 */

import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { CustomMarkdownRenderer } from '@/features/markdown-parser';
import { getAllSubjects } from '@/features/catalog';
import styles from './TopicPage.module.css';

interface TopicPageProps {
  params: Promise<{
    materiaSlug: string;
    temaSlug: string;
  }>;
}

/**
 * Genera de forma estatica las rutas para todos los temas existentes en content/.
 */
export async function generateStaticParams() {
  const subjects = await getAllSubjects();
  const paths: { materiaSlug: string; temaSlug: string }[] = [];

  for (const subject of subjects) {
    for (const topic of subject.topics) {
      paths.push({
        materiaSlug: subject.slug,
        temaSlug: topic.slug,
      });
    }
  }

  return paths;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { materiaSlug, temaSlug } = await params;
  const filePath = path.join(process.cwd(), 'content', materiaSlug, `${temaSlug}.md`);

  let fileContent: string;
  try {
    fileContent = await fs.readFile(filePath, 'utf-8');
  } catch {
    notFound();
  }

  const { data: frontmatter, content } = matter(fileContent);

  return (
    <div className={styles.wrapper}>
      <header className={styles.topicHeader}>
        <div className={styles.breadcrumb}>
          <span>Asignatura: {materiaSlug.replace(/-/g, ' ').toUpperCase()}</span>
        </div>
        <h1 className={styles.pageTitle}>{frontmatter.title || temaSlug}</h1>
        {frontmatter.description && (
          <p className={styles.pageDescription}>{frontmatter.description}</p>
        )}
      </header>

      <CustomMarkdownRenderer markdown={content} initialViewMode="active_study" />
    </div>
  );
}
