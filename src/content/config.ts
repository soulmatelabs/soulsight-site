import { defineCollection, z } from 'astro:content';

const features = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    tech: z.string(),
    description: z.string(),
    icon: z.string(),
    visualRank: z.enum(['V1', 'V2', 'V3', 'V4', 'V5']).default('V3'),
  }),
});

const roles = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    goal: z.string(),
    description: z.string(),
    slug: z.string(),
    visualRank: z.enum(['V1', 'V2', 'V3', 'V4', 'V5']).default('V3'),
  }),
});

export const collections = {
  features,
  roles,
};
