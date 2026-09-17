/**
 * @file index.ts
 * @description Punto de entrada publico del modulo exams.
 */

// Tipos
export * from './types/examEngine.types';

// Servicios y Utilidades
export { getSubjectExamQuestions } from './services/subjectExamPool';
export { generateRandomExam } from './utils/examGenerator';
export { evaluateExamSession } from './utils/examEvaluator';

// Custom Hooks
export { useSubjectExamSession } from './hooks/useSubjectExamSession';

// Componentes React
export { SubjectExamRunner, type SubjectExamRunnerProps } from './components/SubjectExamRunner';
export { ExamResultsView, type ExamResultsViewProps } from './components/ExamResultsView';
