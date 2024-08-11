import { z } from 'zod';

export const projectSchema = z.object({
    name: z.string() .trim()
    .min(3, 'Project name must be at least 3 characters long')
    .max(50, 'Project name must be at most 50 characters long')
  
});


export const episodeSchema = z.object({
    name: z.string() .trim()
    .min(3, 'Episode name must be at least 3 characters long')
    .max(50, 'Episode name must be at most 50 characters long'),
    description: z.string() .trim()
    .min(10, 'Description must be at least 10 characters long')
    .max(1000, 'Description name must be at most 1000 characters long')
})