// src/components/Footer/Footer.jsx
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
  Globe,
  Heart,
  Leaf,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Award,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const products = [
    {
      name: "FarmCloud™",
      description: "Digital Farming Platform",
      href: "/farmcloud",
    },
    {
      name: "Smart Greenhouses",
      description: "Climate-Controlled Growing",
      href: "/smart-greenhouses",
    },
    { name: "FarmShield", description: "Crop Protection Solutions", href: "#" },
    {
      name: "Smart Solar Dryers",
      description: "Efficient Drying Technology",
      href: "#",
    },
    { name: "Screenhouses", description: "Protected Cultivation", href: "#" },
    { name: "NetHouses", description: "Shade & Protection", href: "#" },
    { name: "Smart Drip Kits", description: "Precision Irrigation", href: "#" },
    {
      name: "Herbs for Export",
      description: "Premium Quality Herbs",
      href: "#",
    },
  ];

  const resources = [
    { name: "About Crat_Agri", href: "/mission" },
    { name: "Farmer Help Centre", href: "#" },
    { name: "Pricing Calculator", href: "/pricing" },
    { name: "Request Pre-Site Survey", href: "/contact" },
    { name: "Request a Meeting", href: "/contact" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const company = [
    { name: "Our Mission", href: "/mission" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "/careers" },
    { name: "Press & Media", href: "#" },
    { name: "Partnerships", href: "#" },
    { name: "Investor Relations", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-400",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-300" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-400",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-400" },
  ];

  const stats = [
    { number: "500+", label: "Farmers Empowered", icon: Users },
    { number: "45%", label: "Yield Increase", icon: TrendingUp },
    { number: "60%", label: "Water Savings", icon: Target },
    { number: "100%", label: "Climate Smart", icon: Leaf },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-xl mr-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Crat_Agri</h3>
                    <p className="text-green-300 text-sm">
                      Empowering Rwanda's Agriculture
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transforming agriculture in Rwanda through innovative
                  technology, sustainable practices, and farmer empowerment.
                  Building a brighter future for our farming communities.
                </p>

                {/* Newsletter Subscription */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-green-400" />
                    Stay Updated
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Get the latest agricultural insights and updates delivered
                    to your inbox.
                  </p>

                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <div className="flex">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        required
                      />
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 rounded-r-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center"
                      >
                        {isSubscribed ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <ArrowRight className="w-5 h-5" />
                        )}
                      </motion.button>
                    </div>
                    {isSubscribed && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-400 text-sm flex items-center"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Successfully subscribed!
                      </motion.p>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-green-400" />
                Our Products
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {products.map((product, index) => (
                  <motion.a
                    key={product.name}
                    href={product.href}
                    whileHover={{ x: 5 }}
                    className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div>
                      <p className="text-white group-hover:text-green-400 transition-colors font-medium">
                        {product.name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {product.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <motion.li
                    key={resource.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <a
                      href={resource.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4 text-white">
                  Company
                </h5>
                <ul className="space-y-3">
                  {company.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                Contact Us
              </h4>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Rwanda</p>
                    <p className="text-gray-300">+250 788 123 456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">USA</p>
                    <p className="text-gray-300">+1 302 565 4405</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">info@cratagri.rw</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Working Hours</p>
                    <p className="text-gray-300">Mon-Fri 8am-5pm EAT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Rubavu, Gisenyi, Rwanda</p>
                  </div>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold mb-4 text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-400" />
                  Our Impact
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-2xl font-bold text-white">
                          {stat.number}
                        </span>
                      </div>
                      <p className="text-gray-300 text-xs">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Media & Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Social Media */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-300 font-medium">Follow Us:</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center lg:text-right">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Crat_Agri. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Made with <Heart className="w-3 h-3 inline text-red-400" /> in
                  Rwanda
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
