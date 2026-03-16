import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const contentSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  author: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  slug: z.string().optional(),
});

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/posts',
    generateId: ({ data, entry }) =>
      typeof (data as { slug?: string })?.slug === 'string'
        ? (data as { slug: string }).slug
        : entry.replace(/\.md$/i, ''),
  }),
  schema: contentSchema,
});

const tutorials = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/tutorials',
    generateId: ({ data, entry }) =>
      typeof (data as { slug?: string })?.slug === 'string'
        ? (data as { slug: string }).slug
        : entry.replace(/\.md$/i, ''),
  }),
  schema: contentSchema,
});

export const collections = { posts, tutorials };
