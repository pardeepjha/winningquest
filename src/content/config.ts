import { defineCollection, z } from 'astro:content';

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    subject: z.string(),
    hero: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional()
  })
});

export const collections = {
  locations
};
