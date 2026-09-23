/**
 * @file user.schema.ts
 * @description Esquema Zod de validacion en runtime para el perfil de usuario almacenado en LocalStorage.
 */

import { z } from 'zod';

export const TopicGamificationStatusSchema = z.enum([
  'untouched',
  'pending_valor_medal',
  'completed',
]);

export const UserTopicProgressSchema = z.object({
  topicSlug: z.string(),
  materiaSlug: z.string(),
  status: TopicGamificationStatusSchema,
  lastEvaluatedAt: z.string().optional(),
  failedQuestionsCount: z.number().nonnegative(),
});

export const UserSubjectProgressSchema = z.object({
  materiaSlug: z.string(),
  lastTopicSlug: z.string().nullable(),
  lastAccessedAt: z.string(),
});

export const UserProfileSchema = z.object({
  username: z.string().min(1).max(50),
  valorMedals: z.number().int().nonnegative(),
  knowledgeTrophies: z.number().int().nonnegative(),
  subjectProgress: z.record(z.string(), UserSubjectProgressSchema),
  topicsProgress: z.record(z.string(), UserTopicProgressSchema),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type UserProfileRaw = z.infer<typeof UserProfileSchema>;
