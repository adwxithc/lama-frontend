import { z } from 'zod';

export const projectSchema = z.object({
    name: z.string() .trim()
    .min(3, 'Project name must be at least 3 characters long')
    .max(20, 'Project name must be at most 20 characters long')
  
});