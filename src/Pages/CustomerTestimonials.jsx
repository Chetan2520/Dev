import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const CustomerTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      review: '"The mustard oil from Dev Natural Oils has that authentic taste I remember from my childhood. The quality is exceptional and you can really taste the difference!"',
      avatar: 'priya.png'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi, NCR',
      rating: 5,
      review: '"I have been using their coconut oil for cooking and it\'s amazing. Pure, natural, and the aroma is just perfect. Highly recommended for health-conscious families."',
      avatar: 'rajesh.png'
    },
    {
      id: 3,
      name: 'Meera Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      review: '"The groundnut oil is excellent for deep frying. It doesn\'t break down at high temperatures and gives food a wonderful taste. Great quality at reasonable prices."',
      avatar: 'meera.jpg'
    },
    {
      id: 4,
      name: 'Amit Singh',
      location: 'Bangalore, Karnataka',
      rating: 5,
      review: '"Best sesame oil I\'ve ever used. The traditional wood-pressed method really makes a difference in taste and nutritional value."',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Sunita Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      review: '"Their sunflower oil is perfect for everyday cooking. Light, healthy, and maintains the natural flavor of food. Highly satisfied!"',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Meera Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      review: '"The groundnut oil is excellent for deep frying. It doesn\'t break down at high temperatures and gives food a wonderful taste. Great quality at reasonable prices."',
      avatar: 'meera.jpg'
    },
    {
      id: 7,
      name: 'Amit Singh',
      location: 'Bangalore, Karnataka',
      rating: 5,
      review: '"Best sesame oil I\'ve ever used. The traditional wood-pressed method really makes a difference in taste and nutritional value."',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 8,
      name: 'Sunita Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      review: '"Their sunflower oil is perfect for everyday cooking. Light, healthy, and maintains the natural flavor of food. Highly satisfied!"',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} 
      />
    ));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#703102] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-lg">
          Don't just take our word for it - hear from thousands of satisfied customers 
          across India
        </p>
      </div>

      {/* Testimonials Slider Container */}
      <div className="relative">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
          {getVisibleTestimonials().map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-md border-2 border-orange-200 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-4xl text-orange-200 font-serif">
                "
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed text-sm italic">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentSlide ? 'bg-orange-500' : 'bg-orange-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Rating Summary */}
      <div className="flex justify-center mt-12">
        <div className="bg-yellow-100 px-6 py-3 rounded-full flex items-center gap-3 border border-yellow-200">
          <div className="flex gap-1">
            {renderStars(5)}
          </div>
          <span className="font-bold text-gray-800">4.9/5</span>
          <span className="text-gray-600">from 2,500+ reviews</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;