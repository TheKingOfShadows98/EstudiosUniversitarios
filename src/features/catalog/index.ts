/**
 * @file index.ts
 * @description Punto de entrada publico del modulo catalog.
 */

// Tipos
export * from './types/catalog.types';
export * from './types/navigation.types';

// Servicios y Utilidades
export { getAllSubjects } from './services/contentScanner';
export { filterSubjects } from './utils/catalogFilter';
export { getAdjacentTopics } from './utils/adjacentTopics';

// Hooks
export { useCatalogFilter } from './hooks/useCatalogFilter';

// Componentes
export { LandingHero, type LandingHeroProps } from './components/LandingHero';
export { CatalogFilterBar, type CatalogFilterBarProps } from './components/CatalogFilterBar';
export { SubjectCard, type SubjectCardProps } from './components/SubjectCard';
export { TopicBadgeItem, type TopicBadgeItemProps } from './components/TopicBadgeItem';
export { SubjectGrid, type SubjectGridProps } from './components/SubjectGrid';
export { LandingCatalogView, type LandingCatalogViewProps } from './components/LandingCatalogView';
export { TopicNavButtons, type TopicNavButtonsProps } from './components/TopicNavButtons';
