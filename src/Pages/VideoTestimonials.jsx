import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

const VideoTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  const videoTestimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      thumbnail: '/image.png',
      videoId: 'dQw4w9WgXcQ' // Sample YouTube video ID
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi, NCR',
      rating: 5,
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 3,
      name: 'Meera Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 4,
      name: 'Amit Singh',
      location: 'Bangalore, Karnataka',
      rating: 5,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 5,
      name: 'Sunita Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 6,
      name: 'Vikram Gupta',
      location: 'Pune, Maharashtra',
      rating: 5,
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face',
      videoId: 'dQw4w9WgXcQ'
    }
  ];

  // Calculate slides for responsive display
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 3; // default
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const totalSlides = Math.ceil(videoTestimonials.length / itemsPerSlide);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={14} 
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} 
      />
    ));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * itemsPerSlide;
    return videoTestimonials.slice(start, start + itemsPerSlide);
  };

  const handlePlayVideo = (videoId) => {
    setPlayingVideo(videoId);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!playingVideo) { // Pause auto-slide when video is playing
        nextSlide();
      }
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentSlide, playingVideo, totalSlides]);

  return (
    <div className="w-full bg-[url('/backgroundLines.png')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-[100rem] mx-auto p-4 sm:p-6  py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="lg:text-3xl text-lg md:text-4xl font-bold text-dark-orange mb-4">
          Hear Directly from Our Customers
        </h2>
        <p className="text-gray-600 text-xs lg:text-lg max-w-3xl mx-auto">
          Experience the stories firsthand – watch inspiring video testimonials from people whose lives have 
          been positively impacted by Dev Natural Oils across India.
        </p>
      </div>

      {/* Video Testimonials Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          disabled={totalSlides <= 1}
          className={`flex absolute -left-6 md:-left-8 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all duration-200 border border-orange-200 ${
            totalSlides <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-orange-300'
          }`}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
        </button>

        <button 
          onClick={nextSlide}
          disabled={totalSlides <= 1}
          className={`flex absolute -right-6 md:-right-8 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all duration-200 border border-orange-200 ${
            totalSlides <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-orange-300'
          }`}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
        </button>

        {/* Video Cards Slider */}
        <div className="overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {videoTestimonials.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="bg-white rounded-2xl overflow-hidden transition-all duration-300 w-full max-w-[340px] sm:max-w-[360px] border-2 border-yellow-200 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      {/* Video Thumbnail */}
                      <div className="relative w-full h-72 sm:h-80 bg-gray-100">
                        {playingVideo === testimonial.videoId ? (
                          // Embedded YouTube video
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`}
                            title={`${testimonial.name} testimonial`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        ) : (
                          <>
                            <img 
                              src={testimonial.thumbnail}
                              alt={`${testimonial.name} testimonial`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=f97316&color=fff&size=400&format=png`;
                              }}
                            />
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-200">
                              <button 
                                onClick={() => handlePlayVideo(testimonial.videoId)}
                                className="w-16 h-16 bg-yellow-200 border-2 border-orange-400 rounded-full flex items-center justify-center  shadow-lg hover:shadow-xl hover:scale-110"
                              >
                                <Play className="w-6 h-6 text-orange-600 ml-1" fill="currentColor" />
                              </button>
                            </div>

                          
                          </>
                        )}
              </div>

              {/* Customer Info */}
              <div className="p-4 text-start">
                <h4 className="text-xs lg:text-xl font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                <p className="lg:text-sm text-[10px]  text-gray-600 mb-3">{testimonial.location}</p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-2">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Video Play Status */}
                {/* {playingVideo === testimonial.videoId ? (
                  <button 
                    onClick={() => setPlayingVideo(null)}
                    className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Close video
                  </button>
                ) : (
                  <button 
                    onClick={() => handlePlayVideo(testimonial.videoId)}
                    className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1"
                  >
                    <Play size={12} fill="currentColor" />
                    Watch testimonial
                  </button>
                )} */}
              </div>
            </div>
          ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 px-2">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-0.5 h-0.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full transition-colors flex-shrink-0 ${
        i === currentSlide ? 'bg-light-orange' : 'bg-very-light-orange'
      }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Rating Summary */}
      {/* <div className="flex justify-center mt-12">
        <div className="bg-yellow-100 px-8 py-4 rounded-full flex items-center gap-4 border border-yellow-200 shadow-sm">
          <div className="flex gap-1">
            {renderStars(5)}
          </div>
          <span className="font-bold text-gray-800 text-lg">4.9/5</span>
          <span className="text-gray-600">from 2,500+ video reviews</span>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default VideoTestimonials;