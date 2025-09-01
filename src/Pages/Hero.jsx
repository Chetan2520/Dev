import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Where Taste Meets Tradition - Pressed Oils for a Healthier Life" },
    { title: "Pure Goodness, Cold-Pressed for Your Wellbeing" },
    { title: "From Nature to Your Kitchen – Fresh, Healthy, Authentic" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url("/Hero.png")`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 transition-all duration-700 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full justify-between px-3 sm:px-6 lg:px-12">
        {/* Previous Button - now visible in mobile too */}
        <button
          onClick={prevSlide}
          className="z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-white" />
        </button>

        {/* Text Content */}
        <div className="text-left  lg:px-2 sm:px-6">
          <h1 className="text-md sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight transition-all duration-700">
            "{slides[currentSlide].title}"
          </h1>
        </div>

        {/* Next Button - now visible in mobile too */}
        <button
          onClick={nextSlide}
          className="z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-white" />
        </button>
      </div>

      {/* Smaller Line Indicators */}
      <div className="absolute bottom-2 flex justify-center sm:bottom-4 left-0 right-0 px-8 sm:px-16">
        <div className="flex space-x-1 w-20  lg:w-80  sm:space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-1 h-0.5 rounded-full cursor-pointer transition-all duration-500 ${
                index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Mobile Touch Gradients */}
      <div className="lg:hidden absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-black/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
