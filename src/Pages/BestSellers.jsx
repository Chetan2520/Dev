import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Zap, TrendingUp, Pipette, SeparatorVertical } from 'lucide-react';
import { BiSolidZap } from 'react-icons/bi';

const BestSellers = () => {
  const [favorites, setFavorites] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Mustard Oil",
      rating: 4.0,
      reviews: 4.0,
      price: 120,
      originalPrice: 140,
      discount: "14% OFF",
      description: "Pure cold-pressed mustard oil with natural pungency and authentic...",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop&auto=format",
     
      
      sizes: ["500ml", "1L", "2L", "+ 2 more"]
    },
    {
      id: 2,
      name: "Mustard Oil",
      rating: 4.0,
      reviews: 4.0,
      price: 120,
      originalPrice: 140,
      discount: "14% OFF",
      description: "Pure cold-pressed mustard oil with natural pungency and authentic...",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop&auto=format",
      badge: "Cold pressed",
      
      sizes: ["500ml", "1L", "2L", "+ 2 more"]
    },
    {
      id: 3,
      name: "Mustard Oil",
      rating: 4.0,
      reviews: 4.0,
      price: 120,
      originalPrice: 140,
      discount: "14% OFF",
      description: "Pure cold-pressed mustard oil with natural pungency and authentic...",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop&auto=format",
     
      
      sizes: ["500ml", "1L", "2L", "+ 2 more"]
    },
    {
      id: 4,
      name: "Mustard Oil",
      rating: 2.0,
      reviews: 2.0,
      price: 120,
      originalPrice: 140,
      discount: "14% OFF",
      description: "Pure cold-pressed mustard oil with natural pungency and authentic...",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop&auto=format",
     
      
      sizes: ["500ml", "1L", "2L", "+ 2 more"]
    }
  ];

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div 
      className="py-10 lg:py-16 px-2  sm:px-6 lg:px-20 relative min-h-screen"
      style={{
        backgroundImage: `url("/backgroundLines.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Light background overlay */}
      <div className=" "></div>
      
      <div className="relative z-10 ">
        {/* Mobile Only Section */}
        <div className="block lg:hidden mb-4">
          <div className=" rounded-2xl p-6 ">
            <div className="text-center">
              <h3 className="text-lg font-bold text-dark-orange mb-3">
                Welcome to Dev Natural Oils!
              </h3>
              <p className="text-light-orange text-xs leading-relaxed">
                Experience pure, natural wellness - start your journey to healthier living today.
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-very-light-orange text-light-orange px-5 py-1 rounded-full text-[8px] lg:text-base font-medium mb-4">
            <TrendingUp  className="w-4 h-4 fill-current" />
            Most Popular
          </div>
          <h2 className="lg:text-4xl text-lg  md:text-5xl font-bold  mb-4">
            Best Sellers
          </h2>
          <p className="text-[#4B5563] text-lg max-w-2xl mx-auto leading-relaxed">
            Our customers' favorite oils, loved for their exceptional quality and authentic taste
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-2 lg:gap-4 sm:gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white lg:pb-8 pb-2 rounded-3xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-dark-orange max-w-sm mx-auto w-full"
            >
              {/* Product Image Container */}
              <div className="relative bg-red-50">
                {/* Badge */}
                
                <div className="h-3.5  pr-0 lg:h-9 lg:pl-5 lg:pr-5  absolute top-0 bg-light-orange right-0 flex text-white  rounded-bl-full text-xs font-bold items-center gap-0 lg:gap-2">
                 <span className='text-[5.6px] lg:text-xs'> {product.name} </span>
                  <span className="text-white text-[5.6px] lg:text-xs font-extralight">|</span>

                  <span
                    onClick={() => toggleFavorite(product.id)}
                    className="text-[5.6px] lg:text-xs"
                  >
                    <Heart
                      className={`h-1.5 w-1.5 lg:w-4 lg:h-4 sm:w-5 sm:h-5 ${
                        favorites.has(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-white'
                      }`}
                    />
                  </span>
                </div>
<div className='h-40 w-40 lg:w-[380px] lg:h-[385px]'>
  
<img src='/image.png' className='w-full h-auto object-cover' alt={product.name} />
</div>
              </div>

              {/* Enhanced Product Info */}
              <div className="px-3 sm:px-5 mt-2">
                <h3 className="text-[10px] font-extralight lg:text-xl sm:text-2xl lg:font-bold text-gray-900">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="flex items-center ">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-[9px] lg:text-xs  sm:text-base text-gray-600 font-semibold">({product.reviews}.0)</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-[8px] lg:text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 sm:gap-3 mb-1 lg:mb-3">
                  <span className="text-xs lg:text-lg sm:text-2xl font-semibold text-gray-900">
                    ₹ {product.price}
                  </span>
                  <span className="lg:text-base text-[8px] sm:text-lg text-gray-500 line-through">
                    ₹ {product.originalPrice}
                  </span>
                  <span className="lg:text-sm text-[8px]  sm:text-base text-gray-500 font-bold">
                    ({product.discount})
                  </span>
                </div>

                {/* Available Sizes */}
                <div className="lg:mb-4 mb-1">
                  <p className="lg:text-sm text-[8px] sm:text-base text-[#374151] font-semibold mb-1 lg:mb-3">Available sizes:</p>
                  <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 flex-wrap">
                    {product.sizes.map((size, index) => (
                      <span
                        key={index}
                        className={`   py-1 px-[3px] sm:px-2 lg:px-2 text-[6px] sm:text-xs lg:text-xs rounded-sm transition-all duration-200 ${
                          index === 1
                            ? 'bg-light-orange text-white shadow-lg transform scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <span className="w-full h-7   sm:h-10 lg:h-[59px] text-white py-1 sm:py-2 lg:py-4 bg-dark-orange px-2 sm:px-4 lg:px-6 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-[8px] sm:text-sm lg:text-lg transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 hover:shadow-2xl transform hover:-translate-y-1">
                    <ShoppingCart className="w-3 h-2 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    <span className="text-[8px] sm:text-sm lg:text-base">Add to Cart</span>
                  </span>
                  <span className="w-full h-6 sm:h-10 lg:h-[59px] text-dark-orange bg-white border border-dark-orange hover:bg-amber-50 py-1 sm:py-2 lg:py-4 px-2 sm:px-4 lg:px-6 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-[8px] sm:text-sm lg:text-lg transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-3">
                    <BiSolidZap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    <span className="text-[8px] sm:text-sm lg:text-base">Buy Now</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;