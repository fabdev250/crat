import React from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-4 p-6 z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 ml-2 font-medium"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>

        <div className="mt-4 text-gray-700">{children}</div>
      </div>
    </div>
  );
}
