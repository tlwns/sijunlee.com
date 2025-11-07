import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.email({ message: 'Invalid email format' }),
  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters long' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' }),
});
