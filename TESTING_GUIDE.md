# EmailJS Integration Testing Guide

## Quick Setup Steps

1. **Copy the example file:**

   ```bash
   cp src/config/emailjs.example.js src/config/emailjs.js
   ```

2. **Get your EmailJS credentials:**

   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Create account and get your Service ID, Template IDs, and Public Key
   - Follow the detailed setup in `EMAILJS_SETUP.md`

3. **Update `src/config/emailjs.js` with your actual values**

4. **Test the integration:**
   ```bash
   npm run dev
   ```

## Testing All Forms

### 1. Contact Form Test

- **URL:** `http://localhost:5174/contact`
- **Steps:**
  1. Fill out all required fields
  2. Select a Rwanda region
  3. Choose a farm type
  4. Write a subject and message
  5. Click "Send Message"
  6. Check your email for the contact form submission

### 2. Price Estimate Modal Test

- **URL:** `http://localhost:5174/` (Products section)
- **Steps:**
  1. Scroll to the Smart Greenhouses card
  2. Click "Get a price estimate" button
  3. Fill out the modal form:
     - Full Name
     - Email
     - Location
     - Farm Size (in acres)
     - Crop Type
  4. Click "Get Price Estimate"
  5. Check your email for the price estimate request

### 3. Demo Booking Modal Test

- **URL:** `http://localhost:5174/farmcloud`
- **Steps:**
  1. Click "Book a Demo" button (any of them)
  2. Fill out the modal form:
     - Full Name
     - Email
     - Location
     - Farm Type
     - Additional Message (optional)
  3. Click "Book My Demo"
  4. Check your email for the demo booking request

## Expected Email Templates

### Contact Form Email

```
Subject: New Contact Form Submission - [User's Subject]

From: [User's Name] ([User's Email])
Phone: [User's Phone]
Location: [User's Location]
Farm Type: [User's Farm Type]

Subject: [User's Subject]

Message:
[User's Message]

---
Reply to: [User's Email]
```

### Price Estimate Email

```
Subject: Smart Greenhouses Price Estimate Request

From: [User's Name] ([User's Email])
Location: [User's Location]
Farm Size: [Farm Size] acres
Crop Type: [Crop Type]

Product: Smart Greenhouses

---
Reply to: [User's Email]
```

### Demo Booking Email

```
Subject: FarmCloud™ Demo Booking Request

From: [User's Name] ([User's Email])
Location: [User's Location]
Farm Type: [Farm Type]

Additional Message:
[User's Message]

Product: FarmCloud™ Demo

---
Reply to: [User's Email]
```

## Troubleshooting

### Common Issues:

1. **"Email sending failed" error:**

   - Check that all IDs in `emailjs.js` are correct
   - Verify your EmailJS service is active
   - Check browser console for detailed error messages

2. **No emails received:**

   - Check spam folder
   - Verify email service connection in EmailJS dashboard
   - Ensure template variables match exactly

3. **Template not found error:**

   - Verify template IDs are correct
   - Check that templates are published in EmailJS dashboard

4. **CORS errors:**
   - Make sure you're using the correct public key
   - Check that your domain is allowed in EmailJS settings

### Debug Steps:

1. **Check browser console** for error messages
2. **Verify EmailJS dashboard** shows successful sends
3. **Test with simple template** first
4. **Check email service logs** if available

## Success Indicators

✅ **Contact form:** Shows success message and resets form  
✅ **Price estimate:** Shows success message and closes modal  
✅ **Demo booking:** Shows success message and closes modal  
✅ **Emails received:** All three email types arrive in your inbox  
✅ **Email content:** All form data is properly formatted in emails

## Next Steps After Testing

1. **Customize email templates** in EmailJS dashboard
2. **Add email notifications** for failed sends
3. **Implement email analytics** if needed
4. **Add auto-responders** for each form type
5. **Set up email forwarding** to team members

## Production Deployment

Before deploying to production:

1. **Update email addresses** in `emailjs.js` to production emails
2. **Test all forms** on production domain
3. **Set up monitoring** for email delivery
4. **Configure backup email** handling
5. **Add rate limiting** if needed
