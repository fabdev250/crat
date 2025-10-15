// src/pages/Faqs.jsx
import React from 'react';

const Faqs = () => {
  const faqs = [
    {
      question: "How does FarmCloud™ help farmers?",
      answer: "FarmCloud™ helps farmers digitize their farm records, access markets, track farm activities, and generate traceability reports for buyers."
    },
    {
      question: "What is FarmShield™?",
      answer: "FarmShield™ is our IoT sensor system that monitors farm conditions and automatically takes corrective actions to optimize growing environments."
    },
    {
      question: "How much does a smart greenhouse cost?",
      answer: "Prices vary based on size and specifications. Please use our pricing calculator or contact our sales team for a customized quote."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide complete installation services for all our products including greenhouses, irrigation systems, and sensor networks."
    },
    {
      question: "What support do you offer after purchase?",
      answer: "We offer comprehensive support including training, maintenance, and 24/7 technical support for all our products."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our products and services.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <details className="group">
                <summary className="list-none p-6 cursor-pointer hover:bg-green-50 transition duration-300">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <svg className="w-5 h-5 text-green-600 transform group-open:rotate-180 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="btn-primary">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;