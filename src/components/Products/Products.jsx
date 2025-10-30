import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Cloud,
  Shield,
  Wind,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
} from "lucide-react";
import PriceEstimateModal from "../PriceEstimateModal";

const Products = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());
  const partnersContainerRef = useRef(null);

  // Memoized product data to prevent unnecessary re-renders
  const products = useMemo(() => [
    {
      id: "smart-greenhouses",
      title: "Smart Greenhouses",
      description: "Protect your farm and increase your crop yield with a Smart Greenhouse",
      icon: Home,
      gradient: "from-emerald-500 to-green-600",
      features: [
        "Optimized growing conditions",
        "Weather protection",
        "Increased yield potential",
      ],
      buttonText: "Get a price estimate",
      linkText: "Learn more",
      buttonAction: "modal",
      linkPath: "/smart-greenhouses",
    },
    {
      id: "farmcloud",
      title: "FarmCloud™",
      description: "Save time and control your farm or Greenhouse activity with FarmCloud™",
      icon: Cloud,
      gradient: "from-blue-500 to-cyan-600",
      features: [
        "Digitize your farm records",
        "Access marketplace",
        "Get export compliant",
      ],
      buttonText: "Book a FarmCloud Demo",
      linkText: "Learn More",
      buttonAction: "navigate",
      linkPath: "/farmcloud",
    },
    {
      id: "farmshield",
      title: "FarmShield™",
      description: "Increase efficiency and take the guesswork out of farm management",
      icon: Shield,
      gradient: "from-purple-500 to-indigo-600",
      features: [
        "Real-time monitoring",
        "Automated corrections",
        "Data-driven insights",
      ],
      buttonText: "View Pricing",
      linkText: "Explore FarmShield",
      buttonAction: "navigate",
      linkPath: "/farmshield",
    },
  ], []);

  const partners = useMemo(() => [
    {
      id: "crat",
      name: "CRAT",
      logo: "https://www.hblab.rw/assets/CRAT-5i5aQfy5.png",
      description: "Center for Research and Agricultural Technology",
    }, {
      id: "crat",
      name: "CRAT",
      logo: "https://www.hblab.rw/assets/CRAT-5i5aQfy5.png",
      description: "Center for Research and Agricultural Technology",
    },
     {
      id: "crat",
      name: "CRAT",
      logo: "https://www.hblab.rw/assets/CRAT-5i5aQfy5.png",
      description: "Center for Research and Agricultural Technology",
    },
   
  ], []);

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = useMemo(() => [...partners, ...partners], [partners]);

  // Memoized event handlers
  const handleProductAction = useCallback((product) => {
    if (product.buttonAction === "modal") {
      setIsModalOpen(true);
    } else if (product.buttonAction === "navigate") {
      navigate(product.linkPath);
    }
  }, [navigate]);

  const handleLearnMore = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const handleImgError = useCallback((partnerId) => (e) => {
    // Prevent infinite error loop
    e.currentTarget.onerror = null;
    
    // Add to error set to prevent retries
    setImageErrors(prev => new Set(prev).add(partnerId));
    
    // Apply fallback styling
    e.currentTarget.src = '/icons/72.png';
    e.currentTarget.classList.add('opacity-60', 'grayscale');
  }, []);

  const isImageErrored = useCallback((partnerId) => {
    return imageErrors.has(partnerId);
  }, [imageErrors]);

  // Render individual product card
  const renderProductCard = (product) => {
    const IconComponent = product.icon;
    
    return (
      <div
        key={product.id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group hover:-translate-y-2 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2"
        role="article"
        aria-label={`Product: ${product.title}`}
      >
        {/* Card Header with Gradient */}
        <div
          className={`bg-gradient-to-br ${product.gradient} p-6 relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" aria-hidden="true" />
          <div className="relative z-10">
            <div 
              className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
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

          <ul className="space-y-3 mb-8" aria-label={`Features of ${product.title}`}>
            {product.features.map((feature, idx) => (
              <li
                key={`${product.id}-feature-${idx}`}
                className="flex items-start gap-3 text-gray-700 group/item"
              >
                <CheckCircle2 
                  className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" 
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleProductAction(product)}
              className={`bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current`}
              aria-label={`${product.buttonText} for ${product.title}`}
            >
              {product.buttonText}
            </button>
            <button
              onClick={() => handleLearnMore(product.linkPath)}
              className="text-green-600 hover:text-green-700 font-semibold group/link flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:underline"
              aria-label={`Learn more about ${product.title}`}
            >
              {product.linkText}
              <ArrowRight 
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render partner logo for the scrolling section
  const renderScrollingPartnerLogo = (partner, index) => (
    <div 
      key={`${partner.id}-${index}`} 
      className="flex-shrink-0 group relative mx-4"
    >
      <div 
        className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center h-28 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 w-48 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2"
        tabIndex={0}
        aria-label={`Partner: ${partner.name} - ${partner.description}`}
      >
        {partner.name === "CRAT" && !isImageErrored(partner.id) ? (
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            loading="lazy"
            crossOrigin="anonymous"
            onError={handleImgError(partner.id)}
            className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
          />
        ) : (
          <div className="text-center">
            <div 
              className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
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
      <div 
        className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none z-20"
        role="tooltip"
      >
        <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-xl">
          {partner.description}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
      aria-labelledby="products-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16 lg:mb-20">
          <div 
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            aria-label="Featured section"
          >
            <Zap className="w-4 h-4" aria-hidden="true" />
            Products & Services
          </div>
          <h2 
            id="products-heading"
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Innovative{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Farming Solutions
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming agriculture with cutting-edge technology and
            sustainable practices
          </p>
        </header>

        {/* Main Products */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          role="list"
          aria-label="Main products"
        >
          {products.map(renderProductCard)}
        </div>

        {/* Partners Section */}
        <section 
          className="bg-gradient-to-br from-green-600 to-green-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
          aria-labelledby="partners-heading"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative z-10">
            <header className="text-center mb-12">
              <div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
                aria-label="Partners section"
              >
                <Users className="w-4 h-4" aria-hidden="true" />
                Our Partners
              </div>
              <h3 
                id="partners-heading"
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
              >
                Our mission is supported by
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We collaborate with leading organizations to bring innovative
                farming solutions to African farmers
              </p>
            </header>

            {/* Infinite Scroll Container */}
            <div className="relative overflow-hidden">
              <div 
                ref={partnersContainerRef}
                className="flex items-center space-x-0 animate-scroll-infinite"
                style={{
                  animation: 'scrollLeft 30s linear infinite'
                }}
              >
                {duplicatedPartners.map((partner, index) => 
                  renderScrollingPartnerLogo(partner, index)
                )}
              </div>
            </div>

            {/* Static grid for smaller screens */}
            <div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 place-items-center-safe lg:hidden mt-8"
              role="list"
              aria-label="Our partners"
            >
              {partners.map((partner, index) => 
                renderScrollingPartnerLogo(partner, index)
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Price Estimate Modal */}
      <PriceEstimateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Add CSS for the animation */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 1024px) {
          .animate-scroll-infinite {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;