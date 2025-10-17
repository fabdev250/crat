import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendContactEmail } from "../../config/emailjs";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2,
  Send,
  Globe,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  User,
  Map,
  Calendar,
  Users,
  Heart,
  Star,
  ArrowRight,
  Coffee,
  Leaf,
  Zap,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    farmType: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      country: "Rwanda",
      flag: "🇷🇼",
      gradient: "from-green-500 to-emerald-600",
      physicalAddress: "Rubavu, Gisenyi, Western Province, Rwanda",
      postalAddress: "P.O.BOX 1234, Rubavu, Rwanda",
      phone: "+250 788 123 456",
      isPrimary: true,
      region: "Western Province",
      description: "Our main operations center serving farmers across Rwanda",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "General Information",
      value: "jsongclaude21@gmail.com",
      link: "jsongclaude21@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "0785599926",
      link: "0785599926"
    },
    {
      icon: MessageCircle,
      label: "Customer Support",
      value: "jsongclaude21@gmail.com",
      link: "jsongclaude21@gmail.com"
    }
  ];

  // Regions in Rwanda used for the Location select
  const rwandaRegions = [
    'Kigali',
    'Northern Province',
    'Southern Province',
    'Eastern Province',
    'Western Province'
  ];

  // Common farm types for the Farm Type select
  const farmTypes = [
    'Smallholder (subsistence)',
    'Commercial (cash crops)',
    'Horticulture (fruits & vegetables)',
    'Livestock (cattle, goats)',
    'Poultry',
    'Aquaculture',
    'Agroforestry'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.farmType.trim()) {
      newErrors.farmType = "Farm type is required";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            farmType: "",
            subject: "",
            message: "",
          });
        }, 3000);
      } else {
        console.error('Email sending failed:', result.error);
        // You can add a toast notification here for error handling
        alert('Failed to send message. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
                Contact Crat_Agri
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Let's Grow Rwanda's{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Agriculture
                </span>{" "}
                Together
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Based in Rubavu, Gisenyi, we're dedicated to empowering Rwanda's
                farmers with innovative agricultural solutions. Get in touch
                with our team of experts.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-sm">
                  <Coffee className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">
                    Coffee Farmers
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-sm">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Tea Farmers</span>
          </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-sm">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">
                    Smart Farming
            </span>
                </div>
        </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Rubavu, Gisenyi
                    </h3>
                  <p className="text-white/90 mb-6">Western Province, Rwanda</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-white/80 text-sm">
                        Rwanda Farmers
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-white/80 text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 lg:p-10"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Tell us about your farming needs and we'll get back to you
                  within 24 hours.
                </p>
                      </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.name
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.email
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Phone and Location Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.phone
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="+250 788 123 456"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Location *
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.location
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select your region</option>
                        {rwandaRegions.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                      {errors.location && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Farm Type */}
                  <div>
                    <label
                      htmlFor="farmType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Farm Type *
                    </label>
                    <select
                      id="farmType"
                      name="farmType"
                      value={formData.farmType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                        errors.farmType
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select your farm type</option>
                      {farmTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.farmType && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.farmType}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                        errors.subject
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder="What would you like to discuss?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none ${
                        errors.message
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder="Tell us about your farming challenges, goals, or questions..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting Crat_Agri. Our team will get back
                    to you within 24 hours.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-green-800 text-sm">
                      <strong>What happens next?</strong>
                      <br />
                      • Our agricultural experts will review your message
                      <br />
                      • We'll prepare personalized recommendations for your farm
                      <br />• You'll receive a detailed response via email or
                      phone
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-green-600/10 overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl">
                        🇷🇼
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Crat_Agri Rwanda
                        </h3>
                        <p className="text-white/90">Rubavu, Gisenyi</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm">
                      {offices[0].description}
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Address
                        </h4>
                        <p className="text-gray-600">
                          {offices[0].physicalAddress}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          {offices[0].postalAddress}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <a 
                          href={`tel:${offices[0].phone}`}
                          className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors"
                      >
                          {offices[0].phone}
                      </a>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
        
        {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Get in Touch
                </h3>
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1 block"
                >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">
                            {contact.label}
                          </h4>
                          <p className="text-green-600 font-semibold group-hover:text-green-700 transition-colors mb-1">
                    {contact.value}
                  </p>
                          <p className="text-gray-500 text-sm">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                </a>
              );
            })}
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Working Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-green-600">
                      8:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-green-600">
                      9:00 AM - 1:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-3 flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  Kigali Time (GMT+2)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Rwanda Farmers Choose{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Crat_Agri
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities in Rwanda's
              agricultural sector
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                Based in Rubavu, we understand Rwanda's climate, soil, and
                farming practices
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Farmer-First Approach
              </h3>
              <p className="text-gray-600">
                Every solution is designed specifically for Rwanda's farming
                community
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600">
                500+ Rwanda farmers have transformed their operations with our
                solutions
              </p>
            </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
