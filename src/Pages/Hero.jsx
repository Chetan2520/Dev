import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Where Taste Meets Tradition - Pressed Oils for a Healthier Life",
    },
    {
      title: "Pure Goodness, Cold-Pressed for Your Wellbeing",
    },
    {
      title: "From Nature to Your Kitchen – Fresh, Healthy, Authentic",
    },
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
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80  md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url("./src/assets/hero.png")`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 transition-all duration-700 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
     
      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className=""
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-white" />
        </button>

        {/* Text Content - Left aligned like the image */}
        <div className="px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl w-full">
          <div className="">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-7xl  text-white mb-2 sm:mb-4 transition-all duration-700 transform leading-tight">
             " {slides[currentSlide].title}"
            </h1>
           
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className='ml-50'
          aria-label="Next slide"
        >
          <ChevronRight className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-white" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Touch Indicators */}
      <div className="lg:hidden absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;