import { z } from 'zod';

export interface ILoginformValue {
    email: string;
    name: string;
}

export const loginSchema = z.object({
    email: z.string() .trim().email({ message: 'Invalid email' }),
    name: z.string() .trim()
    .min(3, 'Name must be at least 3 characters long')
    .max(30, 'Project name must be at most 30 characters long')
});


export const profileSchema =z.object({
    name: z.string() .trim()
    .min(3, 'Name must be at least 3 characters long')
    .max(30, 'Project name must be at most 30 characters long')
})