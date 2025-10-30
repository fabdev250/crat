// src/pages/Mission.jsx
import React from 'react';

const Mission = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Mission</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-600 mb-6">
            Our mission is to empower African farmers with modern technology solutions that make farming simpler, more profitable, and sustainable.
          </p>
          {/* Add more mission comment  content */}
        </div>
      </div>
    </div>
  );
};

export default Mission;