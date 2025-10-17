import emailjs from '@emailjs/browser';

// EmailJS configuration - COPY THIS FILE TO emailjs.js AND ADD YOUR ACTUAL VALUES
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'YOUR_CONTACT_TEMPLATE_ID'; // Replace with your contact template ID
const EMAILJS_TEMPLATE_ID_PRICE_ESTIMATE = 'YOUR_PRICE_ESTIMATE_TEMPLATE_ID'; // Replace with your price estimate template ID
const EMAILJS_TEMPLATE_ID_DEMO_BOOKING = 'YOUR_DEMO_BOOKING_TEMPLATE_ID'; // Replace with your demo booking template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Email templates configuration
export const emailTemplates = {
  contact: {
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID_CONTACT,
  },
  priceEstimate: {
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID_PRICE_ESTIMATE,
  },
  demoBooking: {
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID_DEMO_BOOKING,
  },
};

// Email sending functions
export const sendEmail = async (templateType, templateParams) => {
  try {
    const template = emailTemplates[templateType];
    if (!template) {
      throw new Error(`Template type ${templateType} not found`);
    }

    const response = await emailjs.send(
      template.serviceId,
      template.templateId,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

// Contact form email
export const sendContactEmail = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    location: formData.location,
    farm_type: formData.farmType,
    subject: formData.subject,
    message: formData.message,
    to_email: 'info@cratagri.rw', // Your receiving email
    reply_to: formData.email,
  };

  return await sendEmail('contact', templateParams);
};

// Price estimate email
export const sendPriceEstimateEmail = async (formData) => {
  const templateParams = {
    from_name: formData.fullName,
    from_email: formData.email,
    location: formData.location,
    farm_size: formData.farmSize,
    crop_type: formData.cropType,
    to_email: 'sales@cratagri.rw', // Your receiving email
    reply_to: formData.email,
    product: 'Smart Greenhouses',
  };

  return await sendEmail('priceEstimate', templateParams);
};

// Demo booking email
export const sendDemoBookingEmail = async (formData) => {
  const templateParams = {
    from_name: formData.fullName,
    from_email: formData.email,
    location: formData.location,
    farm_type: formData.farmType,
    message: formData.message || 'No additional message provided',
    to_email: 'sales@cratagri.rw', // Your receiving email
    reply_to: formData.email,
    product: 'FarmCloud™ Demo',
  };

  return await sendEmail('demoBooking', templateParams);
};

export default emailjs;
