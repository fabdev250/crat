// src/components/Contact/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pay us a visit</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Kenya Office */}
          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Crat_Agri, Kenya 🇰🇪</h3>
            <div className="space-y-3 text-gray-600">
              <p><strong>Physical Office Address:</strong><br/>4th Floor Bishop Magua Centre, Ngong Road, Opposite Uchumi Ngong Hyper.</p>
              <p><strong>Postal Address:</strong><br/>P.O.BOX 23170-00505, Nairobi, Kenya.</p>
              <p><strong>Support Line:</strong><br/>+254 20 3892455</p>
            </div>
          </div>
          
          {/* USA Office */}
          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Crat_Agri, USA 🇺🇸</h3>
            <div className="space-y-3 text-gray-600">
              <p><strong>Mailing Address:</strong><br/>8 The Green, Ste A, Dover, DE 19901</p>
              <p><strong>Support Line:</strong><br/>+1 302 565 4405</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-600">
          <p><strong>Working Hours in Nairobi Time (GMT+3):</strong><br/>
          Monday to Friday, 8am – 5pm | Saturdays, 9am – 1pm | Closed on Sundays</p>
          
          <div className="mt-6 space-y-2">
            <p><strong>General Information:</strong> info@cratagri.io</p>
            <p><strong>Sales Queries:</strong> sales@cratagri.io</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;