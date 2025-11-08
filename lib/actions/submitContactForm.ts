'use server';

import { ContactFormSchema } from '@/schemas/contactFormSchema';
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

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
      html: EmailTemplate({ name, email, subject, message }),
    });

    if (error) {
      throw new Error(error.message);
    }
    return {};
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
