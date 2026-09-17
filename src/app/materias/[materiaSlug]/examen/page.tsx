/**
 * @file page.tsx
 * @description Ruta de examen de evaluacion global por materia con generacion aleatoria y remediacion pedagogica.
 */

import React from 'react';
import { notFound } from 'next/navigation';
import { getAllSubjects } from '@/features/catalog';
import { getSubjectExamQuestions, SubjectExamRunner } from '@/features/exams';
import styles from './ExamPage.module.css';

interface ExamPageProps {
  params: Promise<{
    materiaSlug: string;
  }>;
}

/**
 * Genera de forma estatica las rutas de examen para todas las asignaturas existentes.
 */
export async function generateStaticParams() {
  const subjects = await getAllSubjects();
  return subjects.map((subject) => ({
    materiaSlug: subject.slug,
  }));
}

export default async function ExamPage({ params }: ExamPageProps) {
  const { materiaSlug } = await params;

  const allSubjects = await getAllSubjects();
  const currentSubject = allSubjects.find((s) => s.slug === materiaSlug);

  if (!currentSubject) {
    notFound();
  }

  // Recopilar el banco de preguntas completo de todos los temas de la materia
  const questionsPool = await getSubjectExamQuestions(materiaSlug);

  return (
    <div className={styles.container}>
      <SubjectExamRunner
        materiaName={currentSubject.name}
        materiaSlug={materiaSlug}
        questionsPool={questionsPool}
        maxQuestionsLimit={20}
      />
    </div>
  );
}
