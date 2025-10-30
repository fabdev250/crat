import React, { useState } from 'react';
import { 
  Target, 
  FolderKanban, 
  HelpCircle, 
  DollarSign, 
  Menu, 
  X, 
  LogIn, 
  MessageCircle,
  ChevronDown,
  Cloud,
  Shield,
  Sprout,
  Sun,
  Droplets,
  Leaf
} from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navItems = [
    { name: 'Mission', icon: Target },
    { name: 'Projects', icon: FolderKanban },
    { name: 'FAQs', icon: HelpCircle },
    { name: 'Pricing', icon: DollarSign },
  ];

  const productItems = [
    { name: 'FarmCloud', icon: Cloud },
    { name: 'FarmShield', icon: Shield },
    { name: 'Smart Greenhouses', icon: Sprout },
    { name: 'Solar Dryers', icon: Sun },
    { name: 'Drip Kits', icon: Droplets },
    { name: 'Export Herbs', icon: Leaf },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl animate-in slide-in-from-right duration-300">
        <div className="p-5">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="mt-12 space-y-1">
            <div className="px-2 py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Products
              </p>
              {productItems.map((item) => (
                <button
                  key={item.name}
                  onClick={onClose}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-gray-100 my-3"></div>

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={onClose}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-8 space-y-3">
            <button 
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-green-600 hover:bg-green-50 rounded-lg transition font-medium"
            >
              <LogIn className="w-5 h-5" />
              Login to FarmCloud
            </button>
            <button 
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition font-medium shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Consultant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const navItems = [
    { name: 'Mission', icon: Target },
    { name: 'Projects', icon: FolderKanban },
    { name: 'FAQs', icon: HelpCircle },
    { name: 'Pricing', icon: DollarSign }
  ];

  const productItems = [
    { name: 'FarmCloud', icon: Cloud, desc: 'Management platform' },
    { name: 'FarmShield', icon: Shield, desc: 'IoT automation' },
    { name: 'Smart Greenhouses', icon: Sprout, desc: 'Climate control' },
    { name: 'Solar Dryers', icon: Sun, desc: 'Post-harvest tech' },
    { name: 'Drip Kits', icon: Droplets, desc: 'Precision irrigation' },
    { name: 'Export Herbs', icon: Leaf, desc: 'Premium quality' },
  ];

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 lg:px-6 py-3.5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md shadow-green-600/20 group-hover:shadow-green-600/40 transition-all group-hover:scale-105">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Digital Agri Innovation
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center gap-1.5 px-3.5 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition font-medium">
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in-0 zoom-in-95 duration-200">
                    {productItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => setIsProductsOpen(false)}
                        className="w-full flex items-start gap-3 px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 transition text-left"
                      >
                        <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center gap-1.5 px-3.5 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                className="flex items-center gap-2 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition"
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
              <button 
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Contact
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;