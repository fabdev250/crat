import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Cloud,
  Shield,
  Sun,
  Wind,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";
import PriceEstimateModal from "../PriceEstimateModal";

const Products = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      title: "Smart Greenhouses",
      description:
        "Protect your farm and increase your Crop yield with a Smart Greenhouse",
      icon: Home,
      gradient: "from-emerald-500 to-green-600",
      features: [
        "Optimized growing conditions",
        "Weather protection",
        "Increased yield potential",
      ],
      buttonText: "Get a price estimate",
      linkText: "Learn more",
    },
    {
      title: "FarmCloud™",
      description:
        "Save time and control your farm or Greenhouse activity with FarmCloud™",
      icon: Cloud,
      gradient: "from-blue-500 to-cyan-600",
      features: [
        "Digitize your farm records",
        "Access marketplace",
        "Get export compliant",
      ],
      buttonText: "Book a FarmCloud Demo",
      linkText: "Learn More",
    },
    {
      title: "FarmShield™",
      description:
        "Increase efficiency and take the guesswork out of farm management",
      icon: Shield,
      gradient: "from-purple-500 to-indigo-600",
      features: [
        "Real-time monitoring",
        "Automated corrections",
        "Data-driven insights",
      ],
      buttonText: "View Pricing",
      linkText: "Explore FarmShield",
    },
  ];

  const otherProducts = [
    {
      title: "Screenhouses",
      description:
        "To us buying a screenhouse is a partnership that ensures we provide farming solutions to help you succeed and grow.",
      icon: Wind,
    },
    {
      title: "Drip Irrigation kits",
      description:
        "Our drip irrigation kits are designed to provide a durable space to grow your vegetables, flowers and fruits all year round.",
      icon: Droplets,
    },
  ];

  const partners = [
    {
      name: "CRAT",
      logo: "https://www.hblab.rw/assets/CRAT-5i5aQfy5.png",
      description: "Center for Research and Agricultural Technology",
    },
    {
      name: "HB Lab Ltd",
      logo: "https://www.hblab.rw/assets/CRAT-5i5aQfy5.png",
      description: "Strategic Partner",
    }
  ];

  // Fallback handler for external partner images (handles hotlink blocks/404s)
  const handleImgError = (e) => {
    try {
      e.currentTarget.onerror = null;
      e.currentTarget.src = '/icons/72.png';
      e.currentTarget.classList.add('opacity-60');
    } catch (err) {
      // ignore
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Products & Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Innovative{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Farming Solutions
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming agriculture with cutting-edge technology and
            sustainable practices
          </p>
        </div>

        {/* Main Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group hover:-translate-y-2"
              >
                {/* Card Header with Gradient */}
                <div
                  className={`bg-gradient-to-br ${product.gradient} p-6 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 group/item"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={() => {
                        if (product.title === "Smart Greenhouses") {
                          setIsModalOpen(true);
                        } else if (product.title === "FarmCloud™") {
                          navigate("/farmcloud");
                        } else {
                          // Handle other product buttons as needed
                          console.log(
                            `${product.buttonText} clicked for ${product.title}`
                          );
                        }
                      }}
                      className={`bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold transform hover:scale-105`}
                    >
                      {product.buttonText}
                    </button>
                    <button
                      onClick={() => {
                        if (product.title === "Smart Greenhouses") {
                          navigate("/smart-greenhouses");
                        } else if (product.title === "FarmCloud™") {
                          navigate("/farmcloud");
                        } else {
                          // Handle other product links as needed
                          console.log(
                            `${product.linkText} clicked for ${product.title}`
                          );
                        }
                      }}
                      className="text-green-600 hover:text-green-700 font-semibold group/link flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      {product.linkText}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Products */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Other Crat_Agri Products
            </h3>
            <p className="text-gray-600 text-lg">
              Comprehensive solutions for every farming need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 group hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-green-100 to-green-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors flex-1 pt-2">
                      {product.title}
                    </h4>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <button className="text-green-600 hover:text-green-700 font-semibold group/link flex items-center gap-2 transition-all duration-300">
                    {product.linkText}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden place-items-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Users className="w-4 h-4" />
                Our Partners
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our mission is supported by
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We collaborate with leading organizations to bring innovative
                farming solutions to African farmers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="group relative place-items-center">
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center h-28 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 w-full max-w-[12rem]">
                      {partner.name === "CRAT" ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        loading="lazy"
                        crossOrigin="anonymous"
                        onError={handleImgError}
                        className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <span className="text-white font-bold text-lg">
                            {partner.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-gray-700 font-semibold text-sm">
                          {partner.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Partner Tooltip */}
                  <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                    <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-xl">
                      {partner.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Price Estimate Modal */}
      <PriceEstimateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Products;
