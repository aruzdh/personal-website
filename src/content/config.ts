import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    subtitle: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    status: z.enum(['active', 'completed', 'on-hold']),
    github: z.string().url(),
    demo: z.string().url().optional().or(z.literal('')),
    image: image(),
  }),
});

const lifeCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    alt: z.string(),
    image: image(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'life': lifeCollection,
};
