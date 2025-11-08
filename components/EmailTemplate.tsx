interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactEmailTemplate = ({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) => `
<!DOCTYPE html>
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
      margin-top: 8px;
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
</body>
</html>
`;
export default contactEmailTemplate;
