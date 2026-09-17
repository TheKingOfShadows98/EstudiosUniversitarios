/**
 * @file index.ts
 * @description Punto de entrada publico del modulo catalog.
 */

// Tipos
export * from './types/catalog.types';

// Servicios y Utilidades
export { getAllSubjects } from './services/contentScanner';
export { filterSubjects } from './utils/catalogFilter';

// Hooks
export { useCatalogFilter } from './hooks/useCatalogFilter';

// Componentes
export { LandingHero, type LandingHeroProps } from './components/LandingHero';
export { CatalogFilterBar, type CatalogFilterBarProps } from './components/CatalogFilterBar';
export { SubjectCard, type SubjectCardProps } from './components/SubjectCard';
export { TopicBadgeItem, type TopicBadgeItemProps } from './components/TopicBadgeItem';
export { SubjectGrid, type SubjectGridProps } from './components/SubjectGrid';
export { LandingCatalogView, type LandingCatalogViewProps } from './components/LandingCatalogView';
