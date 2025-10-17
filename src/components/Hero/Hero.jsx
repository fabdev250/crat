// src/components/Hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://advcloudfiles.advantech.com/cms/f31c3275-af78-45cf-9a0f-3a9762d357c6/Content/content-image-1627985071702.jpg",
      title: "Building Hardware and Software Tools for Farmers in Africa",
      description: "Crat_Agri provides an ecosystem of Smart Greenhouses and Solar Dryers equipped with FarmShield™ IoT sensors connected to our FarmCloud™ software enabling farmers to double incomes on less land, use less water, reduce post harvest losses and access premium markets."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1663076306950-f6602c629ff4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1257",
      title: "Smart Greenhouses for Modern Farming",
      description: "Our climate-controlled greenhouses protect your crops from extreme weather while optimizing growing conditions for maximum yield and quality throughout the year."
    },
    {
      image: "https://images.unsplash.com/photo-1713952160156-bb59cac789a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
      title: "IoT Technology for Precision Agriculture",
      description: "FarmShield™ sensors monitor soil moisture, temperature, and humidity in real-time, automating irrigation and climate control for optimal crop growth."
    },
    {
      image: "https://img.freepik.com/premium-photo/global-business-networking-connect-strategically-success-international-markets_937679-13551.jpg",
      title: "Connect to Premium Markets",
      description: "FarmCloud™ links farmers directly to buyers, provides export compliance documentation, and helps you access higher-value markets with traceability and quality assurance."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl text-white">
            {/* Slide Indicator */}
            <div className="flex items-center gap-2 mb-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed opacity-95 max-w-2xl">
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>navigate("/farmcloud-login")} className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105 transform">
                Login to FarmCloud™
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-medium text-lg backdrop-blur-sm hover:scale-105 transform">
                Talk to a Consultant
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">500+</div>
                <div className="text-white/80">Farmers Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">45%</div>
                <div className="text-white/80">Yield Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">60%</div>
                <div className="text-white/80">Water Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;