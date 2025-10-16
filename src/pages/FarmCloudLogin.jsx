// src/pages/FarmCloudLogin.jsx
import React, { useState } from 'react';
import { Eye, EyeOff, LogIn, Cloud, Smartphone, Globe, Shield, ArrowRight } from 'lucide-react';

const FarmCloudLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData);
      setIsLoading(false);
      // Handle login logic here
    }, 1500);
  };

  const features = [
    {
      icon: Cloud,
      title: "Cloud Management",
      description: "Access your farm data from anywhere, anytime"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Optimized for use on smartphones and tablets"
    },
    {
      icon: Globe,
      title: "Market Access",
      description: "Connect with buyers and access premium markets"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security for your farm data"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-600/30 transition-all duration-300">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Crat_Agri
            </span>
          </a>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Login Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Welcome to FarmCloud™
                </h1>
                <p className="text-gray-600">
                  Sign in to manage your farm operations
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="farmer@example.com"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white pr-12"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  
                  <a href="/forgot-password" className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      Sign in to FarmCloud™
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 text-sm mb-4">
                  Don't have a FarmCloud™ account?
                </p>
                <button className="w-full border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center gap-2 group">
                  Sign up for FarmCloud™
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Demo Access */}
              <div className="mt-6 text-center">
                <button className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-200">
                  Try demo account
                </button>
              </div>
            </div>

            {/* Features & Info */}
            <div className="space-y-8">
              {/* App Preview */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-2xl">
                <h2 className="text-2xl font-bold mb-4">Farm Management Made Simple</h2>
                <p className="text-green-100 mb-6 leading-relaxed">
                  Access real-time farm data, manage operations, track harvests, and connect with markets - all in one platform trusted by over 21,000 farmers.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold">21K+</div>
                    <div className="text-green-200 text-sm">Active Farmers</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold">45%</div>
                    <div className="text-green-200 text-sm">Yield Increase</div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Mobile App CTA */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Also available on mobile</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Download the FarmCloud™ mobile app for on-the-go farm management
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                    </svg>
                    App Store
                  </button>
                  <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5z"/>
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm5.5 0H7v5.5a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 3 9.5V4zm4.188 0a3.75 3.75 0 0 1 0 7.5H8V4h1.188z"/>
                    </svg>
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a href="/privacy" className="hover:text-green-600 transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" className="hover:text-green-600 transition-colors duration-200">Terms of Service</a>
            <a href="/support" className="hover:text-green-600 transition-colors duration-200">Support</a>
            <a href="/contact" className="hover:text-green-600 transition-colors duration-200">Contact Us</a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © 2024 Crat_Agri. FarmCloud™ is a trademark of Crat_Agri.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmCloudLogin;