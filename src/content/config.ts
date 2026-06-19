import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    subtitle: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    status: z.enum(['active', 'completed', 'frozen']),
    github: z.string().url(),
    demo: z.string().url().optional().or(z.literal('')),
    image: image().optional(),
    scope: z.string().default("general"),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.date(),
    tag: z.string().default('general'),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'blog': blogCollection,
};
