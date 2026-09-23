/**
 * @file TopicTrackerEffect.tsx
 * @description Componente cliente ligero para registrar la visita a un tema desde Server Components.
 */

'use client';

import { useTopicTracker } from '../../hooks/useTopicTracker';

export interface TopicTrackerEffectProps {
  readonly materiaSlug: string;
  readonly temaSlug: string;
}

/**
 * Efecto secundario encapsulado para actualizar el ultimo tema visitado.
 */
export function TopicTrackerEffect({ materiaSlug, temaSlug }: TopicTrackerEffectProps) {
  useTopicTracker(materiaSlug, temaSlug);
  return null;
}
