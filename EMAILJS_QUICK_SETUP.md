# 🚀 EmailJS Quick Setup Guide

## Current Status

✅ **Service ID:** `service_y0i2a2i` (configured)  
✅ **Public Key:** `HdYgZxLdVeEqbovvN` (configured)  
✅ **Contact Template:** `template_8qlfkjr` (configured)  
✅ **Price Estimate Template:** `template_35kvuyk` (configured)  
❌ **Demo Booking Template:** `template_demo_booking` (needs to be created)

## 🔧 Fix the Price Estimate Error

The error you're seeing is likely because the **Price Estimate template** (`template_35kvuyk`) doesn't exist in your EmailJS dashboard yet.

### Step 1: Create the Price Estimate Template

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **"Email Templates"**
3. Click **"Create New Template"**
4. **Template Name:** `Price Estimate`
5. **Template ID:** `template_35kvuyk` (or copy the generated ID)
6. **Subject:** `Smart Greenhouses Price Estimate Request`

### Step 2: Add Template Content

Copy this HTML content into your template:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Smart Greenhouses Price Estimate Request</title>
  </head>
  <body
    style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"
  >
    <div
      style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;"
    >
      <h1 style="margin: 0; font-size: 28px;">🏠 Smart Greenhouses</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Price Estimate Request</p>
    </div>

    <div
      style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;"
    >
      <h2 style="color: #1f2937; margin-bottom: 20px;">📊 Request Details</h2>

      <div
        style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #10b981;"
      >
        <p><strong>Customer Name:</strong> {{from_name}}</p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:{{from_email}}" style="color: #10b981;"
            >{{from_email}}</a
          >
        </p>
        <p><strong>Location:</strong> {{location}}</p>
        <p><strong>Farm Size:</strong> {{farm_size}} acres</p>
        <p><strong>Crop Type:</strong> {{crop_type}}</p>
        <p><strong>Product:</strong> {{product}}</p>
      </div>

      <div
        style="background: #1f2937; color: white; padding: 20px; border-radius: 8px; text-align: center;"
      >
        <h3 style="margin: 0 0 10px 0;">🚀 Ready to Provide Quote</h3>
        <p style="margin: 0 0 15px 0; opacity: 0.9;">
          This customer is interested in Smart Greenhouses for their
          {{farm_size}}-acre {{crop_type}} farm in {{location}}.
        </p>
        <a
          href="mailto:{{from_email}}?subject=Smart Greenhouses Quote for {{from_name}}"
          style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;"
        >
          Reply with Quote
        </a>
      </div>

      <div
        style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 6px; font-size: 14px; color: #64748b;"
      >
        <p style="margin: 0;">
          <strong>🌍 Crat_Agri Rwanda</strong><br />
          Smart Agricultural Solutions for Rwanda's Farmers<br />
          📧 sales@cratagri.rw | 📞 +250 788 123 456 | 📍 Rubavu, Gisenyi,
          Rwanda
        </p>
      </div>
    </div>
  </body>
</html>
```

### Step 3: Create the Demo Booking Template

1. Create another template named **"Demo Booking"**
2. **Template ID:** `template_demo_booking` (or copy the generated ID)
3. **Subject:** `FarmCloud™ Demo Booking Request`

Copy this HTML content:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>FarmCloud™ Demo Booking Request</title>
  </head>
  <body
    style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"
  >
    <div
      style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;"
    >
      <h1 style="margin: 0; font-size: 28px;">☁️ FarmCloud™ Demo</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">
        Digital Farming Platform Booking
      </p>
    </div>

    <div
      style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;"
    >
      <h2 style="color: #1f2937; margin-bottom: 20px;">
        📅 Demo Request Details
      </h2>

      <div
        style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #3b82f6;"
      >
        <p><strong>Customer Name:</strong> {{from_name}}</p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:{{from_email}}" style="color: #3b82f6;"
            >{{from_email}}</a
          >
        </p>
        <p><strong>Location:</strong> {{location}}</p>
        <p><strong>Farm Type:</strong> {{farm_type}}</p>
        <p><strong>Product:</strong> {{product}}</p>
        <p><strong>Message:</strong> {{message}}</p>
      </div>

      <div
        style="background: #1f2937; color: white; padding: 20px; border-radius: 8px; text-align: center;"
      >
        <h3 style="margin: 0 0 10px 0;">🚀 Schedule the Demo</h3>
        <p style="margin: 0 0 15px 0; opacity: 0.9;">
          {{from_name}} is interested in FarmCloud™ for their {{farm_type}}
          operations in {{location}}.
        </p>
        <a
          href="mailto:{{from_email}}?subject=FarmCloud™ Demo Scheduling for {{from_name}}"
          style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-right: 10px;"
        >
          Schedule Demo
        </a>
        <a
          href="mailto:{{from_email}}?subject=FarmCloud™ Information for {{from_name}}"
          style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;"
        >
          Send Info
        </a>
      </div>

      <div
        style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 6px; font-size: 14px; color: #64748b;"
      >
        <p style="margin: 0;">
          <strong>🌍 Crat_Agri Rwanda</strong><br />
          Digital Solutions for Modern Agriculture<br />
          📧 sales@cratagri.rw | 📞 +250 788 123 456 | 📍 Rubavu, Gisenyi,
          Rwanda
        </p>
      </div>
    </div>
  </body>
</html>
```

### Step 4: Update Template IDs (if needed)

After creating the templates, copy the actual Template IDs from your EmailJS dashboard and update them in `src/config/emailjs.js`:

```javascript
const EMAILJS_TEMPLATE_ID_PRICE_ESTIMATE =
  "your_actual_price_estimate_template_id";
const EMAILJS_TEMPLATE_ID_DEMO_BOOKING = "your_actual_demo_booking_template_id";
```

### Step 5: Test the Forms

1. **Contact Form:** `http://localhost:5174/contact`
2. **Price Estimate:** Go to products section → Smart Greenhouses → "Get a price estimate"
3. **Demo Booking:** Go to FarmCloud page → "Book a Demo"

### Step 6: Check Browser Console

Open your browser's Developer Tools (F12) and check the Console tab for detailed error messages. The enhanced error logging will show you exactly what's wrong.

## 🔍 Common Issues & Solutions

### Issue 1: "Template not found"

- **Solution:** Make sure the template ID exists in your EmailJS dashboard
- **Check:** Template is published (not just saved as draft)

### Issue 2: "Service not found"

- **Solution:** Verify your service ID is correct
- **Check:** Service is active and connected to your email provider

### Issue 3: "Invalid public key"

- **Solution:** Copy the public key from your EmailJS account settings
- **Check:** Public key matches exactly (no extra spaces)

### Issue 4: "CORS error"

- **Solution:** Make sure your domain is allowed in EmailJS settings
- **Check:** Add `localhost:5174` to allowed origins

## 📧 Email Variables Reference

### Contact Form Variables:

- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone
- `{{location}}` - User's location
- `{{farm_type}}` - Farm type
- `{{subject}}` - Message subject
- `{{message}}` - User's message

### Price Estimate Variables:

- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email
- `{{location}}` - User's location
- `{{farm_size}}` - Farm size in acres
- `{{crop_type}}` - Crop type
- `{{product}}` - Product name

### Demo Booking Variables:

- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email
- `{{location}}` - User's location
- `{{farm_type}}` - Farm type
- `{{message}}` - Additional message
- `{{product}}` - Product name

## ✅ Success Indicators

When everything is working correctly, you should see:

- ✅ Forms submit without errors
- ✅ Success messages appear
- ✅ Emails arrive in your inbox
- ✅ Console shows "Email sent successfully"
- ✅ No error messages in browser console

## 🆘 Still Having Issues?

1. **Check the browser console** for detailed error messages
2. **Verify all template IDs** match your EmailJS dashboard
3. **Test with a simple template** first
4. **Check your email service** is properly connected
5. **Make sure templates are published** (not drafts)

The enhanced error logging I added will help you identify the exact issue!
