// src/components/PWAInstallPrompt/PWAInstallPrompt.jsx
import React, { useState, useEffect } from 'react';
import { X, Download, Smartphone, Check } from 'lucide-react';

const PWAInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                       window.navigator.standalone === true;
    
    // Check if user has dismissed the prompt before
    const hasDismissed = localStorage.getItem('pwa-install-dismissed');
    
    // Check if it's iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(iOS);

    if (!isInstalled && !hasDismissed) {
      // For Android/Desktop - Listen for beforeinstallprompt
      const handleBeforeInstall = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        // Show prompt after 3 seconds
        setTimeout(() => setShowPrompt(true), 3000);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstall);

      // For iOS - Show manual instructions after 3 seconds
      if (iOS && !isInstalled) {
        setTimeout(() => setShowPrompt(true), 3000);
      }

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      };
    }
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    
    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Remember dismissal for 7 days
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    localStorage.setItem('pwa-install-dismissed', expiryDate.toISOString());
  };

  const handleNeverShow = () => {
    setShowPrompt(false);
    // Remember dismissal permanently
    localStorage.setItem('pwa-install-dismissed', 'permanent');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
        onClick={handleDismiss}
      />
      
      {/* Popup Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full pointer-events-auto transform transition-all duration-300 overflow-hidden border border-gray-100">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header with Gradient */}
        <div className="bg-gradient-to-br from-green-600 to-green-500 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Install Crat_Agri App
            </h3>
            <p className="text-green-50">
              Get instant access and a better experience!
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {isIOS ? (
            // iOS Instructions
            <div className="space-y-4 mb-6">
              <p className="text-gray-600 mb-4">
                Install this app on your iPhone for quick access:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                    1
                  </div>
                  <p className="text-gray-700">
                    Tap the <span className="font-semibold">Share</span> button at the bottom
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                    2
                  </div>
                  <p className="text-gray-700">
                    Select <span className="font-semibold">"Add to Home Screen"</span>
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                    3
                  </div>
                  <p className="text-gray-700">
                    Tap <span className="font-semibold">"Add"</span> to confirm
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Android/Desktop Benefits
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Works offline - Access anytime, anywhere</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Faster performance and smooth experience</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Quick access from your home screen</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Get instant notifications and updates</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {!isIOS && deferredPrompt && (
              <button
                onClick={handleInstall}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-4 rounded-xl hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 font-semibold"
              >
                <Download className="w-5 h-5" />
                Install Now
              </button>
            )}
            
            <div className="flex gap-3">
              <button
                onClick={handleDismiss}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Maybe Later
              </button>
              <button
                onClick={handleNeverShow}
                className="flex-1 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors font-medium text-sm"
              >
                Don't Show Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;