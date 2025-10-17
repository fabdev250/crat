// EmailJS Test Utility
// Use this to test your EmailJS configuration

import {
  sendContactEmail,
  sendPriceEstimateEmail,
  sendDemoBookingEmail,
} from "../config/emailjs";

// Test data for each form type
export const testData = {
  contact: {
    name: "Test User",
    email: "test@example.com",
    phone: "+250788123456",
    location: "Rubavu",
    farmType: "Vegetable Farming",
    subject: "Test Contact Form",
    message: "This is a test message from the contact form.",
  },
  priceEstimate: {
    fullName: "Test Farmer",
    email: "farmer@example.com",
    location: "Gisenyi",
    farmSize: "5",
    cropType: "Tomatoes",
  },
  demoBooking: {
    fullName: "Test Demo User",
    email: "demo@example.com",
    location: "Rubavu",
    farmType: "Coffee Farming",
    message: "I would like to see a demo of FarmCloud™ for my coffee farm.",
  },
};

// Test function for contact form
export const testContactForm = async () => {
  console.log("🧪 Testing Contact Form...");
  try {
    const result = await sendContactEmail(testData.contact);
    if (result.success) {
      console.log("✅ Contact form test PASSED");
      return true;
    } else {
      console.error("❌ Contact form test FAILED:", result.error);
      return false;
    }
  } catch (error) {
    console.error("❌ Contact form test ERROR:", error);
    return false;
  }
};

// Test function for price estimate
export const testPriceEstimate = async () => {
  console.log("🧪 Testing Price Estimate...");
  try {
    const result = await sendPriceEstimateEmail(testData.priceEstimate);
    if (result.success) {
      console.log("✅ Price estimate test PASSED");
      return true;
    } else {
      console.error("❌ Price estimate test FAILED:", result.error);
      return false;
    }
  } catch (error) {
    console.error("❌ Price estimate test ERROR:", error);
    return false;
  }
};

// Test function for demo booking
export const testDemoBooking = async () => {
  console.log("🧪 Testing Demo Booking...");
  try {
    const result = await sendDemoBookingEmail(testData.demoBooking);
    if (result.success) {
      console.log("✅ Demo booking test PASSED");
      return true;
    } else {
      console.error("❌ Demo booking test FAILED:", result.error);
      return false;
    }
  } catch (error) {
    console.error("❌ Demo booking test ERROR:", error);
    return false;
  }
};

// Test all forms
export const testAllForms = async () => {
  console.log("🚀 Starting EmailJS Tests...");
  console.log("=====================================");

  const results = {
    contact: await testContactForm(),
    priceEstimate: await testPriceEstimate(),
    demoBooking: await testDemoBooking(),
  };

  console.log("=====================================");
  console.log("📊 Test Results:");
  console.log(`Contact Form: ${results.contact ? "✅ PASS" : "❌ FAIL"}`);
  console.log(
    `Price Estimate: ${results.priceEstimate ? "✅ PASS" : "❌ FAIL"}`
  );
  console.log(`Demo Booking: ${results.demoBooking ? "✅ PASS" : "❌ FAIL"}`);

  const allPassed = Object.values(results).every((result) => result === true);
  console.log(
    `Overall: ${allPassed ? "✅ ALL TESTS PASSED" : "❌ SOME TESTS FAILED"}`
  );

  return results;
};

// Make test functions available globally for console testing
if (typeof window !== "undefined") {
  window.testEmailJS = {
    testContactForm,
    testPriceEstimate,
    testDemoBooking,
    testAllForms,
    testData,
  };

  console.log("🧪 EmailJS Test Functions Available:");
  console.log("- testEmailJS.testContactForm()");
  console.log("- testEmailJS.testPriceEstimate()");
  console.log("- testEmailJS.testDemoBooking()");
  console.log("- testEmailJS.testAllForms()");
  console.log("- testEmailJS.testData (test data)");
}
