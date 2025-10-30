import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Heart,
  Leaf,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Target,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const products = [
    { name: "FarmCloud™", href: "/farmcloud" },
    { name: "Smart Greenhouses", href: "/smart-greenhouses" },
    { name: "FarmShield", href: "#" },
    { name: "", href: "#" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/mission" },
    { name: "Help Centre", href: "#" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-300" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-400" },
  ];

  const stats = [
    { number: "500+", label: "Farmers", icon: Users },
    { number: "45%", label: "Yield ↑", icon: TrendingUp },
    { number: "60%", label: "Water ↓", icon: Target },
    { number: "100%", label: "Climate Smart", icon: Leaf },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Stats Bar - Hidden on mobile */}
        <div className="hidden md:block border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center space-x-2 bg-white/5 rounded-lg p-3"
                >
                  <stat.icon className="w-4 h-4 text-green-400" />
                  <div className="text-center">
                    <span className="text-base font-bold text-white block">{stat.number}</span>
                    <span className="text-xs text-gray-300">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-6">
            {/* Brand & Newsletter - Larger on desktop */}
            <div className="lg:col-span-5">
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-lg mr-2">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Digital Agri Innovation</h3>
                  <p className="text-green-300 text-xs">Empowering Rwanda's Agriculture</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Transforming agriculture through innovative technology and sustainable practices.
              </p>

              {/* Newsletter */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-green-400" />
                  Newsletter
                </h4>
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                      required
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-500 to-green-600 px-3 py-2 rounded-r-lg"
                    >
                      {isSubscribed ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                  {isSubscribed && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-400 text-xs flex items-center"
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Subscribed!
                    </motion.p>
                  )}
                </form>
              </div>

              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center space-x-2 mt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all ${social.color}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Products - Mobile Collapsible, Desktop Always Open */}
            <div className="lg:col-span-3">
              <div
                className="flex items-center justify-between md:justify-start cursor-pointer md:cursor-default mb-3"
                onClick={() => toggleSection("products")}
              >
                <h4 className="text-sm font-bold text-white">Products</h4>
                <ChevronDown
                  className={`w-4 h-4 md:hidden transition-transform ${
                    expandedSection === "products" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`space-y-1 ${
                  expandedSection === "products" ? "block" : "hidden"
                } md:block`}
              >
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className="block text-gray-300 hover:text-green-400 transition-colors text-sm py-1"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - Mobile Collapsible */}
            <div className="lg:col-span-2">
              <div
                className="flex items-center justify-between md:justify-start cursor-pointer md:cursor-default mb-3"
                onClick={() => toggleSection("links")}
              >
                <h4 className="text-sm font-bold text-white">Quick Links</h4>
                <ChevronDown
                  className={`w-4 h-4 md:hidden transition-transform ${
                    expandedSection === "links" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`space-y-1 ${
                  expandedSection === "links" ? "block" : "hidden"
                } md:block`}
              >
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-green-400 transition-colors text-sm py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact - Compact */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white mb-3">Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span>+250 788 123 456</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span>info@cratagri.rw</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span>Gisenyi, Rwanda</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span>Mon-Fri 8am-5pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              {/* Social Links - Mobile */}
              <div className="flex md:hidden items-center space-x-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 bg-white/5 rounded-lg ${social.color}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4 text-xs text-gray-400">
                <p>© {new Date().getFullYear()} Digital Agri Innovation. All rights reserved.</p>
                <div className="flex items-center space-x-3">
                  <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
                  <span>•</span>
                  <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                Made with <Heart className="w-3 h-3 inline text-red-400" /> in Crat
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;