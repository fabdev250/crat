// src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Subscribe for Crat_Agri Updates</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-4 py-2 rounded-l-lg text-white flex-1 border-white"
              />
              <button className="bg-green-600 px-4 py-2 rounded-r-lg hover:bg-green-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>          
          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              {['FarmCloud', 'FarmShield', 'Smart Greenhouses', 'Smart Solar Dryers', 'Screenhouses', 'NetHouses', 'Smart Drip Kits', 'Herbs for Export'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition duration-300">{item}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              {['About Crat_Agri', 'Farmer Help Centre', 'Pricing Calculator', 'Request Pre-Site Survey', 'Request a Meeting', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition duration-300">{item}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="text-gray-300 space-y-2 text-sm">
              <p>Rwanda: +250 20 3892455</p>
              <p>USA: +1 302 565 4405</p>
              <p>Email: info@cratagri.io</p>
              <p>Working Hours: Mon-Fri 8am-5pm EAT</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Crat_Agri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;