import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    date: z.string(),
    author: z.string(),
    authorImage: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = { blog };
