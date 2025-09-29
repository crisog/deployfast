import { defineCollection, z } from 'astro:content';

const deploymentCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    framework: z.enum(['nextjs', 'tanstack-start']),
    type: z.enum(['dockerfile', 'guide', 'config']),
    filename: z.string().optional(),
  }),
});

export const collections = {
  deployment: deploymentCollection,
};