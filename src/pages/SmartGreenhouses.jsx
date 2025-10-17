import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  CheckCircle2,
  ArrowRight,
  Sun,
  Droplets,
  Wind,
  Shield,
  Zap,
  Leaf,
  BarChart3,
  Clock,
  Users,
  Globe,
} from "lucide-react";
import PriceEstimateModal from "../components/PriceEstimateModal";

const SmartGreenhouses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // SEO Meta tags
  useEffect(() => {
    document.title =
      "Smart Greenhouses - Crat_Agri | Revolutionary Farming Solutions";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Transform your agricultural operations with our state-of-the-art Smart Greenhouses. Increase yields by 300%, reduce water usage by 50%, and grow crops year-round with precision technology."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Transform your agricultural operations with our state-of-the-art Smart Greenhouses. Increase yields by 300%, reduce water usage by 50%, and grow crops year-round with precision technology.";
      document.head.appendChild(meta);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Crat_Agri - Innovative Farming Solutions";
    };
  }, []);

  const features = [
    {
      icon: Sun,
      title: "Climate Control",
      description:
        "Automated temperature, humidity, and light management for optimal growing conditions",
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description:
        "Precision watering systems that conserve water while ensuring perfect moisture levels",
    },
    {
      icon: Wind,
      title: "Ventilation Systems",
      description:
        "Intelligent airflow management for healthy plant growth and disease prevention",
    },
    {
      icon: Shield,
      title: "Weather Protection",
      description:
        "Robust construction protects crops from extreme weather conditions",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Real-time monitoring and analytics to optimize yield and resource usage",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description:
        "Solar-powered systems and LED lighting for sustainable operations",
    },
  ];

  const benefits = [
    "Increase crop yield by up to 300%",
    "Extend growing seasons year-round",
    "Reduce water usage by 50%",
    "Protect crops from pests and diseases",
    "Enable precision farming techniques",
    "Lower operational costs over time",
  ];

  const useCases = [
    {
      title: "Commercial Farming",
      description:
        "Scale up production with consistent, high-quality yields for market demands",
      icon: BarChart3,
    },
    {
      title: "Research & Development",
      description:
        "Perfect for agricultural research and testing new crop varieties",
      icon: Leaf,
    },
    {
      title: "Urban Agriculture",
      description:
        "Bring fresh produce to urban areas with vertical farming solutions",
      icon: Globe,
    },
    {
      title: "Educational Institutions",
      description:
        "Teach modern farming techniques in schools and universities",
      icon: Users,
    },
  ];

  const sustainabilityFeatures = [
    "Solar panel integration for renewable energy",
    "Water recycling and conservation systems",
    "Organic pest control methods",
    "Carbon footprint reduction",
    "Sustainable materials and construction",
    "Waste reduction through precision farming",
  ];

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
                <Home className="w-4 h-4" />
                Smart Greenhouses
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Revolutionize Your{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  Farming
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your agricultural operations with our state-of-the-art
                Smart Greenhouses. Increase yields, reduce costs, and grow crops
                year-round with precision technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Request a Quote
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Home className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Smart Greenhouse
                  </h3>
                  <p className="text-white/90 mb-6">
                    Advanced climate control and monitoring systems for optimal
                    crop production
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">300%</div>
                      <div className="text-white/80 text-sm">
                        Yield Increase
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">50%</div>
                      <div className="text-white/80 text-sm">Water Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Advanced{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Smart Greenhouses are equipped with cutting-edge technology to
              maximize your agricultural potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 group hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  Smart Greenhouses?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the future of agriculture with our innovative
                greenhouse solutions designed for maximum efficiency and
                sustainability.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Performance Metrics
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Yield Increase</span>
                    <span className="text-2xl font-bold text-green-600">
                      300%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Water Savings</span>
                    <span className="text-2xl font-bold text-blue-600">
                      50%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Energy Efficiency</span>
                    <span className="text-2xl font-bold text-purple-600">
                      40%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">ROI Timeline</span>
                    <span className="text-2xl font-bold text-orange-600">
                      2-3 Years
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perfect for Every{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                Application
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small-scale urban farming to large commercial operations, our
              Smart Greenhouses adapt to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                Sustainable
              </span>{" "}
              Agriculture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Smart Greenhouses are designed with environmental
              responsibility at their core
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of farmers who have already revolutionized their
              agricultural operations with our Smart Greenhouses
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Request a Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Greenhouses Installed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price Estimate Modal */}
      <PriceEstimateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SmartGreenhouses;
