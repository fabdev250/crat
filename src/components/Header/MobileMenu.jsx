// src/components/Header/MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="ml-2 text-xl font-bold text-green-600">Crat_Agri</span>
          </div>
          <button onClick={onClose} className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="space-y-4">
          <Link to="/mission" className="block text-gray-700 hover:text-green-600 text-lg py-2" onClick={onClose}>Our mission</Link>
          <Link to="/projects" className="block text-gray-700 hover:text-green-600 text-lg py-2" onClick={onClose}>Our projects</Link>
          <Link to="/faqs" className="block text-gray-700 hover:text-green-600 text-lg py-2" onClick={onClose}>Faqs</Link>
          <Link to="/pricing" className="block text-gray-700 hover:text-green-600 text-lg py-2" onClick={onClose}>Pricing</Link>
          <Link to="/careers" className="block text-gray-700 hover:text-green-600 text-lg py-2" onClick={onClose}>Careers</Link>
          <button className="w-full text-left text-green-600 hover:text-green-700 text-lg py-2" onClick={onClose}>
            Log in to FarmCloud™
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;