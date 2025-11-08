'use server';

import { ContactFormSchema } from '@/schemas/contactFormSchema';
import { Resend } from 'resend';

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  inputs?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: State, formData: FormData) {
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  const validatedFields = ContactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      inputs: rawData,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: `GymTrack Support Contact <${process.env.FROM_EMAIL}>`,
      to: [`${process.env.CONTACT_EMAIL}`],
      subject: `Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }
    return {};
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
