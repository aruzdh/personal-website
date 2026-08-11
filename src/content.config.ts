import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
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

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.date(),
    tag: z.string().default('general'),
  }),
});

const feed = defineCollection({
  loader: glob({ base: './src/content/feed', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    description: z.string(),
    alt: z.string(),
    image: image().optional(),
    date: z.date(),
    tag: z.string().default('general'),
  }),
});

export const collections = { projects, blog, feed };
