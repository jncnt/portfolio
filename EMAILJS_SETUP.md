# EmailJS Configuration Guide

This guide will help you set up EmailJS for the contact form in your portfolio.

## What is EmailJS?

EmailJS is a free service that allows you to send emails directly from your frontend without a backend server. It's perfect for portfolio contact forms.

## Step-by-Step Setup

### 1. Create an EmailJS Account

1. Visit [EmailJS Website](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create an account with your email
4. Verify your email address

### 2. Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the steps to connect your email account
   - For Gmail: You'll need to generate an [App Password](https://support.google.com/accounts/answer/185833)
5. Copy your **Service ID** (e.g., `service_abc123xyz`)

### 3. Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Template Name**: `contact_form_template`

**Email Subject**:
```
New Contact Form Submission from {{from_name}}
```

**Email Content** (HTML):
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; }
    .header { border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-bottom: 20px; }
    .content { margin: 20px 0; }
    .label { font-weight: bold; color: #333; }
    .value { color: #666; margin-bottom: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📧 New Contact Form Submission</h2>
    </div>
    
    <div class="content">
      <div class="value">
        <p class="label">From:</p>
        <p>{{from_name}} &lt;{{from_email}}&gt;</p>
      </div>
      
      <div class="value">
        <p class="label">Message:</p>
        <p style="white-space: pre-wrap;">{{message}}</p>
      </div>
    </div>
    
    <div style="border-top: 1px solid #eee; padding-top: 10px; margin-top: 20px; font-size: 12px; color: #999;">
      <p>This email was sent from your portfolio website contact form.</p>
    </div>
  </div>
</body>
</html>
```

4. Note your **Template ID** (e.g., `template_abc123xyz`)

### 4. Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `abc123xyz_public_key`)

## 5. Update Your Portfolio

### Update Contact Component

Edit [`src/components/sections/Contact.tsx`](../src/components/sections/Contact.tsx) and replace:

```typescript
// Line 13-14: Replace YOUR_PUBLIC_KEY_HERE with your actual public key
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// Lines in handleSubmit function (around line 47-56):
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID_HERE',    // Replace with your Template ID
  {
    to_email: contactEmail,
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
);
```

### Example Configuration

```typescript
// After installation:
emailjs.init('abc123xyz_public_key');

// In handleSubmit:
await emailjs.send(
  'service_abc123xyz',
  'template_abc123xyz',
  {
    to_email: contactEmail,
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
);
```

## 6. Test the Form

1. Run your portfolio locally: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the message
5. If it works, you're all set! 🎉

## Troubleshooting

### Form not sending?
- ✓ Check that all IDs are correct (Service ID, Template ID, Public Key)
- ✓ Verify your email service is connected in EmailJS
- ✓ Check browser console for errors (F12 → Console tab)
- ✓ Make sure your EmailJS account isn't on the free tier limit

### Email not received?
- ✓ Check spam/junk folder
- ✓ Verify the email template is correct
- ✓ Check EmailJS Activity Log for errors

### CORS errors?
- EmailJS handles CORS automatically, so this shouldn't be an issue
- If it persists, check your Public Key is correct

## Security Notes

- Your Public Key is safe to expose (it's meant to be public)
- Never expose your Service ID in client-side code; use the Public Key + Template ID pattern
- The template ID is also safe to expose

## Cost

- **Free tier**: 200 emails per month
- **Paid plans**: More emails and advanced features
- [EmailJS Pricing](https://www.emailjs.com/pricing/)

## Alternative Services

If you prefer other options:
- **Formspree**: Form submissions via HTTP
- **Netlify Forms**: If hosting on Netlify
- **Basin**: Simple form backend
- **99Inbound**: Email form service

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
- Check the contact form error messages in browser console

---

Once configured, your contact form will be fully functional and ready to receive messages from visitors!
