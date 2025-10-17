# EmailJS Integration Setup Guide

## Step 1: EmailJS Account Setup

1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Templates

### Template 1: Contact Form Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it: "Contact Form"
4. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Location: {{location}}
Farm Type: {{farm_type}}

Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

5. **Copy the Template ID**

### Template 2: Price Estimate Template

1. Create another template named "Price Estimate"
2. Use this template content:

```
Subject: Smart Greenhouses Price Estimate Request

From: {{from_name}} ({{from_email}})
Location: {{location}}
Farm Size: {{farm_size}} acres
Crop Type: {{crop_type}}

Product: {{product}}

---
Reply to: {{reply_to}}
```

3. **Copy the Template ID**

### Template 3: Demo Booking Template

1. Create another template named "Demo Booking"
2. Use this template content:

```
Subject: FarmCloud™ Demo Booking Request

From: {{from_name}} ({{from_email}})
Location: {{location}}
Farm Type: {{farm_type}}

Additional Message:
{{message}}

Product: {{product}}

---
Reply to: {{reply_to}}
```

3. **Copy the Template ID**

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find "Public Key" section
3. **Copy the Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the following values with your actual IDs:

```javascript
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your service ID
const EMAILJS_TEMPLATE_ID_CONTACT = "YOUR_CONTACT_TEMPLATE_ID"; // Replace with contact template ID
const EMAILJS_TEMPLATE_ID_PRICE_ESTIMATE = "YOUR_PRICE_ESTIMATE_TEMPLATE_ID"; // Replace with price estimate template ID
const EMAILJS_TEMPLATE_ID_DEMO_BOOKING = "YOUR_DEMO_BOOKING_TEMPLATE_ID"; // Replace with demo booking template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your public key
```

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Go to `http://localhost:5174/contact`
3. Fill out and submit the contact form
4. Check your email for the form submission
5. Test the price estimate modal on the products page
6. Test the demo booking modal on the FarmCloud page

## Troubleshooting

- Make sure all IDs are correctly copied
- Check that your email service is properly connected
- Verify that templates have the correct variable names
- Check browser console for any error messages

## Email Templates Variables

### Contact Form Variables:

- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{location}}` - User's location
- `{{farm_type}}` - Type of farming
- `{{subject}}` - Message subject
- `{{message}}` - User's message
- `{{reply_to}}` - Reply-to email

### Price Estimate Variables:

- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email
- `{{location}}` - User's location
- `{{farm_size}}` - Farm size in acres
- `{{crop_type}}` - Type of crop
- `{{product}}` - Product name (Smart Greenhouses)
- `{{reply_to}}` - Reply-to email

### Demo Booking Variables:

- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email
- `{{location}}` - User's location
- `{{farm_type}}` - Type of farming
- `{{message}}` - Additional message
- `{{product}}` - Product name (FarmCloud™ Demo)
- `{{reply_to}}` - Reply-to email
