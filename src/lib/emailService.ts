interface EmailData {
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

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export type { EmailData };
