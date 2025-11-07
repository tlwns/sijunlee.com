'use server';

import { ContactFormSchema } from '@/schemas/contactFormSchema';

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(prevState: State, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;
  try {
    // Simulate sending an email or storing the message
    console.log('Contact Form Submitted:', {
      name,
      email,
      subject,
      message,
    });

    return {};
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
