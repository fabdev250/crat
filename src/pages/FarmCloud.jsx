import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Globe,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Droplets,
  Leaf,
  Smartphone,
  Database,
  Target,
  Clock,
  Star,
  Play,
  MessageCircle,
} from "lucide-react";
import DemoBookingModal from "../components/DemoBookingModal";

const FarmCloud = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // SEO Meta tags
  useEffect(() => {
    document.title =
      "FarmCloud™ - Crat_Agri | Digital Nerve Center for Modern Farms";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "FarmCloud™ digitizes your farm records, connects you to global markets, and ensures export compliance. Join 500+ farmers increasing yields by 45% with our digital farming platform."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "FarmCloud™ digitizes your farm records, connects you to global markets, and ensures export compliance. Join 500+ farmers increasing yields by 45% with our digital farming platform.";
      document.head.appendChild(meta);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Crat_Agri - Innovative Farming Solutions";
    };
  }, []);

  const keyFeatures = [
    {
      icon: Database,
      title: "Digitize Your Farm Records",
      description:
        "Manage activities, expenses, and yields digitally with our intuitive dashboard. Track everything from planting to harvest in real-time.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Globe,
      title: "Access Global Marketplace",
      description:
        "Connect directly to local and international buyers. Find the best prices for your produce and expand your market reach.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Shield,
      title: "Get Export Compliant",
      description:
        "Generate documentation and certifications for export. Ensure your produce meets international standards and regulations.",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const impactMetrics = [
    {
      number: "500+",
      label: "Farmers Empowered",
      icon: Users,
      color: "text-blue-600",
    },
    {
      number: "45%",
      label: "Yield Increase",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      number: "60%",
      label: "Water Savings",
      icon: Droplets,
      color: "text-cyan-600",
    },
    {
      number: "100%",
      label: "Climate Smart",
      icon: Leaf,
      color: "text-emerald-600",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Sign up to FarmCloud™",
      description:
        "Create your account and set up your farm profile with basic information about your operations.",
      icon: Cloud,
    },
    {
      step: "02",
      title: "Sync your IoT devices or farm data",
      description:
        "Connect your sensors, weather stations, and other devices to automatically collect farm data.",
      icon: Smartphone,
    },
    {
      step: "03",
      title: "Access insights and sell produce easily",
      description:
        "Get actionable insights from your data and connect with buyers through our marketplace.",
      icon: Target,
    },
  ];

  const testimonials = [
    {
      name: "John Mukamana",
      role: "Commercial Farmer",
      location: "Rwanda",
      quote:
        "FarmCloud™ transformed my farming business. I can now track everything digitally and have direct access to international buyers.",
      rating: 5,
    },
    {
      name: "Sarah Uwimana",
      role: "Agricultural Entrepreneur",
      location: "Uganda",
      quote:
        "The export compliance features saved me months of paperwork. Now I can focus on growing quality produce.",
      rating: 5,
    },
    {
      name: "Peter Nkurunziza",
      role: "Farm Manager",
      location: "Tanzania",
      quote:
        "The data insights helped me increase my yield by 50% while reducing water usage. It's a game-changer!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Cloud className="w-4 h-4" />
                FarmCloud™ Platform
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                FarmCloud™ — The Digital{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Nerve Center
                </span>{" "}
                for Modern Farms
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Digitize your farm, monitor everything, and connect directly to
                profitable markets. Join hundreds of farmers already using
                FarmCloud™ to maximize their agricultural potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Book a Demo
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk to a Consultant
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Cloud className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    FarmCloud™ Dashboard
                  </h3>
                  <p className="text-white/90 mb-6">
                    Real-time farm monitoring and market connectivity at your
                    fingertips
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-white/80 text-sm">Active Farmers</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">45%</div>
                      <div className="text-white/80 text-sm">Yield Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What is{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                FarmCloud™?
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              FarmCloud™ is a comprehensive digital platform that connects
              farmers to buyers, provides export compliance, and ensures
              traceability and quality assurance. It's your one-stop solution
              for modernizing agricultural operations and accessing global
              markets with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Key{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to digitize your farm and connect to profitable
              markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 group hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
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

      {/* Impact Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Proven{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from farmers using FarmCloud™ across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-10 h-10 ${metric.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                    {metric.number}
                  </div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                It Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with FarmCloud™ in three simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {howItWorks.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center gap-8`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-xl">
                        <IconComponent className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Farmers{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from farmers who transformed their operations with
              FarmCloud™
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-blue-600 text-sm">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-700">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Digital Farming Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of farmers already using FarmCloud™ to digitize
              their operations and access profitable markets
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Book a FarmCloud™ Demo
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to a Consultant
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">45%</div>
                <div className="text-white/80">Average Yield Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">60%</div>
                <div className="text-white/80">Water Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Platform Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default FarmCloud;
