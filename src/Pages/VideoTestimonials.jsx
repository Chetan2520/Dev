import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';
import { LiaPlaySolid } from 'react-icons/lia';
import { FaPlay } from 'react-icons/fa';

const VideoTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videoTestimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face',
      videoId: '480x686'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi, NCR',
      rating: 5,
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face',
      videoId: 'video2'
    },
    {
      id: 3,
      name: 'Meera Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face',
      videoId: 'video3'
    }
  ];

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
    setCurrentSlide((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 my-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-orange  mb-4">
          Hear Directly from Our Customers
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Experience the stories firsthand – watch inspiring video testimonials from people whose lives have 
          been positively impacted by Dev Natural Oils across India.
        </p>
      </div>

      {/* Video Testimonials Container */}
      <div className="relative ">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow border border-light-orange"
        >
          <ChevronLeft className="w-6 h-6 text-light-orange" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow border border-light-orange"
        >
          <ChevronRight className="w-6 h-6 text-light-orange" />
        </button>

        {/* Video Cards Grid */}
        <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
          {videoTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl overflow-hidden   transition-all   duration-300 
                w-80
                  border-2 border-[#FCE289] shadow-lg " 
                  
              
            >
              {/* Video Thumbnail */}
              <div className="relative h-80 w-80  aspect-video bg-gray-100">
                <img 
                  src="/rajesh.png"
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-20">
                  <button className="w-16 h-16 bg-[#FCE289] border-2 border-light-orange  rounded-full flex items-center justify-center transition-colors shadow-lg">
                    <FaPlay  className="w-5 h-5 text-light-orange ml-1" fill="brown" />
                  </button>
                </div>

                
              </div>

              {/* Customer Info */}
              <div className="p-4 text-start">
                <h4 className="font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{testimonial.location}</p>
                
                {/* Rating */}
                <div className="flex gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: 5 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === 1 ? 'bg-orange-500' : 'bg-gray-300'
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
          <span className="text-gray-600">from 2,500+ reviews</span>
        </div>
      </div> */}
    </div>
  );
};

export default VideoTestimonials;