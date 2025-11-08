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
        <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Form Submission</title>
    <style>
      body {
        background-color: #f9fafb;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #111827;
        padding: 24px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 24px;
      }
      h2 {
        color: #2563eb;
        margin-bottom: 16px;
      }
      .info {
        margin-bottom: 16px;
      }
      .info strong {
        display: inline-block;
        width: 80px;
      }
      .divider {
        border-top: 1px solid #e5e7eb;
        margin: 16px 0;
      }
      .message {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        padding: 12px;
        white-space: pre-wrap;
        font-size: 14px;
      }
      .footer {
        font-size: 12px;
        color: #6b7280;
        text-align: center;
        margin-top: 24px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>📬 New Contact Form Submission</h2>

      <div class="info"><strong>Name:</strong> ${name}</div>
      <div class="info"><strong>Email:</strong> ${email}</div>
      <div class="info"><strong>Subject:</strong> ${subject}</div>

      <div class="divider"></div>

      <div>
        <strong>Message:</strong>
        <div class="message">${message.replace(/\n/g, '<br />')}</div>
      </div>
    </div>

    <div class="footer">
      This message was sent from your website contact form.
    </div>
  </body>
  </html>
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
