import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

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
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.VITE_SMTP_HOST,
      port: parseInt(process.env.VITE_SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.VITE_SMTP_USER,
        pass: process.env.VITE_SMTP_PASS,
      },
    });

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
              <strong>Text:</strong> ${data.quoteDetails.text}
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Color:</strong> ${data.quoteDetails.color}
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Font:</strong> ${data.quoteDetails.font}
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Size:</strong> ${data.quoteDetails.size}
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 5px;">
              <strong>Estimated Price:</strong> <span style="font-size: 24px; color: #FF3EA5;">€${data.quoteDetails.price}</span>
            </div>
          </div>
        </div>
      `;
      textContent = `
New Quote Request

Name: ${data.name}
Email: ${data.email}

Design Details:
Text: ${data.quoteDetails.text}
Color: ${data.quoteDetails.color}
Font: ${data.quoteDetails.font}
Size: ${data.quoteDetails.size}
Estimated Price: €${data.quoteDetails.price}
      `;
    }

    await transporter.sendMail({
      from: `"NeoNova Website" <${process.env.VITE_SMTP_USER}>`,
      to: adminEmail,
      replyTo: data.email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
