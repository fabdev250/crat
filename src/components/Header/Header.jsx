import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Target, 
  FolderKanban, 
  HelpCircle, 
  DollarSign, 
  Briefcase, 
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
  const navigate = useNavigate();

  if (!isOpen) return null;

  const navItems = [
    { name: 'Our mission', icon: Target, href: '/mission' },
    { name: 'Our projects', icon: FolderKanban, href: '/projects' },
    { name: 'FAQs', icon: HelpCircle, href: '/faqs' },
    { name: 'Pricing', icon: DollarSign, href: '/pricing' },
    { name: 'Careers', icon: Briefcase, href: '/careers' },
  ];

  const productItems = [
    { name: 'FarmCloud', icon: Cloud, href: '/#farmcloud' },
    { name: 'FarmShield', icon: Shield, href: '/#farmshield' },
    { name: 'Smart Greenhouses', icon: Sprout, href: '/#greenhouses' },
    { name: 'Smart Solar Dryers', icon: Sun, href: '/#solar-dryers' },
    { name: 'Smart Drip Kits', icon: Droplets, href: '/#drip-kits' },
    { name: 'Herbs for Export', icon: Leaf, href: '/#herbs' },
  ];

  const handleProductClick = (href) => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    onClose();
  };

  const handleConsultantClick = () => {
    navigate('/contact');
    onClose();
  };

  const handleLoginClick = () => {
    navigate('/farmcloud-login');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300">
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="mt-12 space-y-2">
            {/* Products Section */}
            <div className="px-4 py-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Products
              </h3>
              <div className="space-y-1">
                {productItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleProductClick(item.href)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition group"
                  >
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 my-2"></div>

            {/* Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition group"
              >
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 space-y-3">
            <button 
              onClick={handleLoginClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-green-600 hover:bg-green-50 rounded-lg transition font-medium"
            >
              <LogIn className="w-5 h-5" />
              Log in to FarmCloud™
            </button>
            <button 
              onClick={handleConsultantClick}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition font-medium shadow-lg shadow-green-600/30"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to a Consultant
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
  const navigate = useNavigate();

  const navItems = [
    { name: 'Our mission', icon: Target, href: '/mission' },
    { name: 'Our projects', icon: FolderKanban, href: '/projects' },
    { name: 'FAQs', icon: HelpCircle, href: '/faqs' },
    { name: 'Pricing', icon: DollarSign, href: '/pricing' },
    { name: 'Careers', icon: Briefcase, href: '/careers' },
  ];

  const productItems = [
    { 
      name: 'FarmCloud', 
      icon: Cloud, 
      href: '/#farmcloud',
      description: 'Farm management software platform'
    },
    { 
      name: 'FarmShield', 
      icon: Shield, 
      href: '/#farmshield',
      description: 'IoT sensors and automation'
    },
    { 
      name: 'Smart Greenhouses', 
      icon: Sprout, 
      href: '/#greenhouses',
      description: 'Climate-controlled growing environments'
    },
    { 
      name: 'Smart Solar Dryers', 
      icon: Sun, 
      href: '/#solar-dryers',
      description: 'Efficient post-harvest processing'
    },
    { 
      name: 'Smart Drip Kits', 
      icon: Droplets, 
      href: '/#drip-kits',
      description: 'Precision irrigation systems'
    },
    { 
      name: 'Herbs for Export', 
      icon: Leaf, 
      href: '/#herbs',
      description: 'Premium export-quality herbs'
    },
  ];

  const handleProductClick = (href) => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsProductsOpen(false);
  };

  const handleConsultantClick = () => {
    navigate('/contact');
  };

  const handleLoginClick = () => {
    navigate('/farmcloud-login');
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="w-11 h-11 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20 group-hover:shadow-green-600/40 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Crat_Agri
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 group font-medium">
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-in fade-in-0 zoom-in-95">
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Our Products
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {productItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleProductClick(item.href)}
                          className="w-full flex items-start gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition group mx-2 text-left"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition">
                            <item.icon className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium group-hover:text-green-600 transition">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 group"
                >
                  <item.icon className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
            
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={handleLoginClick}
                className="flex items-center gap-2 text-green-600 hover:text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition-all duration-200"
              >
                <LogIn className="w-4 h-4" />
                Log in to FarmCloud™
              </button>
              <button 
                onClick={handleConsultantClick}
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-green-600/30 transition-all duration-200 font-medium hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Talk to a Consultant
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