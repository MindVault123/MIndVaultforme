import { defineCollection, z } from 'astro:content';

const libraryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    videoId: z.string(),
    featuredOrder: z.number(),
    category: z.string().optional(),
  }),
});

export const collections = {
  'library': libraryCollection,
};
