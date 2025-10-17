import React, { useState } from 'react';
import { 
  Quote, 
  MapPin, 
  Briefcase, 
  ChevronLeft, 
  ChevronRight,
  Star,
  PlayCircle,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Majyambere esperance",
      location: "Rubavu",
      role: "Telephone Farmer",
      content: "Yeah, I think FarmCloud, to be honest, as an app for just capturing farming activities makes it so seamless. I don't know, maybe sometimes just explaining it to another person, they may not get that appreciation...",
      rating: 5,
      avatar: "J"
    },
    {
      name: "Spice World",
      location: "Nairobi",
      role: "Spice World Limited Kenya",
      content: "We export crops grown by over 60,000 farmers and FarmCloud helps our agronomists to review farm activities and ensure all our outgrowers are compliant with our quality management system...",
      rating: 5,
      avatar: "S"
    },
    {
      name: "Chemondin Group",
      location: "West Pokot",
      role: "Farmer",
      content: "You would see as if this structure is small. But if you compare growing this tomatoes on a two acre open field, you would harvest more from a greenhouse. Crops in a greenhouse will survive in heavy rains than in open field.",
      rating: 5,
      avatar: "C"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto leading-tight">
            Don't Take our word for it, here's what our{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              users have to say
            </span>
          </h2>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-green-600/10 p-8 lg:p-12 border border-gray-100 relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-6 right-6 opacity-5">
                <Quote className="w-32 h-32 text-green-600" />
              </div>
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[currentSlide].content}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-green-600/30">
                    {testimonials[currentSlide].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentSlide].name}
                    </h4>
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {testimonials[currentSlide].location}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {testimonials[currentSlide].role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-green-600 hover:scale-110 border border-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-green-600 hover:scale-110 border border-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-green-600 w-8' 
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm font-medium">
              {currentSlide + 1} / {testimonials.length}
            </span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Video CTA */}
            <a 
              href="#videos"
              className="group bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-600/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Explore more videos
                </h3>
                <p className="text-green-50 mb-4">
                  Watch real stories from our farmers
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Watch now
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </a>

            {/* Blog CTA */}
            <a 
              href="#blog"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Visit our blog
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to make complex farming simple
              </p>
              <span className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                Read articles
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;