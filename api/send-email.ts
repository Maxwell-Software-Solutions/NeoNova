import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

interface EmailRequestBody {
  type: 'contact' | 'quote';
  name: string;
  email: string;
  subject?: string;
  message?: string;
  quoteDetails?: {
    text: string;
    color: string;
    font: string;
    size: string;
    price: number;
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data: EmailRequestBody = req.body;

    // Validate required fields
    if (!data.name || !data.email || !data.type) {
      return res.status(400).json({ error: 'Missing required fields' });
    } else {
      return res.status(400).json({ error: 'Unsupported email type' });
    }

    const mailersendApiKey = process.env.MAILERSEND_API_KEY;
    const fromEmail = process.env.MAILERSEND_FROM_EMAIL;
    const fromName = process.env.MAILERSEND_FROM_NAME || 'NeoNova Website';

    const missingEnv = [
      ['MAILERSEND_API_KEY', mailersendApiKey],
      ['MAILERSEND_FROM_EMAIL', fromEmail],
    ]
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingEnv.length > 0) {
      console.error('Email configuration error: missing env variables', missingEnv);
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const mailerSend = new MailerSend({ apiKey: mailersendApiKey });
    const sentFrom = new Sender(fromEmail!, fromName);

    const adminEmail = process.env.VITE_ADMIN_EMAIL || 'admin@maxwellsoftwaresolutions.com';

    let htmlContent = '';
    let textContent = '';
    let emailSubject = '';

    if (data.type === 'contact') {
      emailSubject = `NeoNova Contact: ${data.subject || 'New Message'}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #FF3EA5; margin-bottom: 20px;">New Contact Form Submission</h2>
            <div style="margin-bottom: 15px;">
              <strong>Name:</strong> ${data.name}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Email:</strong> ${data.email}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Subject:</strong> ${data.subject || 'N/A'}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Message:</strong>
              <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
                ${data.message}
              </p>
            </div>
          </div>
        </div>
      `;
      textContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject || 'N/A'}

Message:
${data.message}
      `;
    } else if (data.type === 'quote' && data.quoteDetails) {
      const quoteDetails = data.quoteDetails!;
      emailSubject = `NeoNova Quote Request from ${data.name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #18D7FF; margin-bottom: 20px;">New Quote Request</h2>
            <div style="margin-bottom: 15px;">
              <strong>Name:</strong> ${data.name}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Email:</strong> ${data.email}
            </div>
            <h3 style="color: #333; margin-top: 30px; margin-bottom: 15px;">Design Details</h3>
            <div style="margin-bottom: 10px;">
              <strong>Text:</strong> ${quoteDetails.text}
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Color:</strong> ${quoteDetails.color}
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Font:</strong> ${quoteDetails.font}
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Size:</strong> ${quoteDetails.size}
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 5px;">
              <strong>Estimated Price:</strong> <span style="font-size: 24px; color: #FF3EA5;">€${quoteDetails.price}</span>
            </div>
          </div>
        </div>
      `;
      textContent = `
New Quote Request

Name: ${data.name}
Email: ${data.email}

Design Details:
Text: ${quoteDetails.text}
Color: ${quoteDetails.color}
Font: ${quoteDetails.font}
Size: ${quoteDetails.size}
Estimated Price: €${quoteDetails.price}
      `;
    } else {
      return res.status(400).json({ error: 'Unsupported email type' });
    }

    const recipients = [new Recipient(adminEmail, 'NeoNova Admin')];

    const replyToName = data.name?.trim() || data.email;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Sender(data.email, replyToName))
      .setSubject(emailSubject)
      .setHtml(htmlContent)
      .setText(textContent);

    await mailerSend.email.send(emailParams);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message, error.stack);
    } else {
      console.error('Error sending email:', error);
    }

    return res.status(500).json({ error: 'Failed to send email' });
  }
}
