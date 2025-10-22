# Email Configuration Guide

## Overview
The NeoNova website now includes email functionality for both the Contact form and Builder quote requests. Emails are sent to `admin@maxwellsoftwaresolutions.com` using MailerSend SMTP service.

## Architecture

### Backend (Vercel Serverless Function)
- **Location:** `api/send-email.ts`
- **Function:** Handles email sending via nodemailer
- **Endpoint:** `POST /api/send-email`

### Frontend Integration
- **Contact Form:** `src/pages/Contact.tsx`
- **Builder Quote Form:** `src/pages/Builder.tsx`

## Environment Variables

Required environment variables in `.env`:

```env
VITE_SMTP_HOST=smtp.mailersend.net
VITE_SMTP_PORT=587
VITE_SMTP_USER=MS_B5JJBp@test-z0vklo6prypl7qrx.mlsender.net
VITE_SMTP_PASS=mssp.MAI4cFO.zr6ke4n03v9lon12.X8tzTw5
VITE_ADMIN_EMAIL=admin@maxwellsoftwaresolutions.com
```

**Note:** The `.env` file is gitignored. Use `.env.example` as a template.

## Deployment

### Vercel Deployment
1. Add environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all `VITE_*` variables from `.env`

2. Deploy:
   ```bash
   git push origin main
   ```
   Vercel will automatically deploy the serverless function.

### Local Testing
```bash
npm run dev
```
Note: Email sending requires the API endpoint to be available. For local testing with serverless functions, use `vercel dev` instead of `npm run dev`.

## Email Types

### 1. Contact Form Email
Sent when users submit the contact form with:
- Name
- Email
- Subject
- Message

### 2. Quote Request Email
Sent when users request a quote from the Builder with:
- Customer email
- Design details (text, color, font, size)
- Estimated price

## API Request Format

```typescript
POST /api/send-email
Content-Type: application/json

{
  "type": "contact" | "quote",
  "name": "string",
  "email": "string",
  "subject": "string",      // For contact type
  "message": "string",      // For contact type
  "quoteDetails": {         // For quote type
    "text": "string",
    "color": "string",
    "font": "string",
    "size": "string",
    "price": number
  }
}
```

## Response Format

### Success
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### Error
```json
{
  "error": "Error message"
}
```

## Troubleshooting

### Common Issues

1. **Emails not sending locally:**
   - Use `vercel dev` instead of `npm run dev`
   - Check that all environment variables are set

2. **404 on /api/send-email:**
   - Verify `vercel.json` rewrites are correct
   - Check that the `api` directory exists

3. **Authentication errors:**
   - Verify MailerSend credentials are correct
   - Check if the SMTP password hasn't expired

4. **Emails going to spam:**
   - Verify domain authentication in MailerSend
   - Set up SPF/DKIM records

## Security Considerations

- ✅ Environment variables are gitignored
- ✅ API validates required fields
- ✅ Email addresses are validated on frontend (zod)
- ✅ SMTP credentials are server-side only
- ✅ CORS is handled by Vercel

## Future Enhancements

- [ ] Add email templates with better styling
- [ ] Implement email confirmation to users
- [ ] Add rate limiting to prevent spam
- [ ] Add attachment support for Builder preview images
- [ ] Add email queue for better reliability
