import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Zap, TrendingUp, Pipette, SeparatorVertical } from 'lucide-react';

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
     
      badgeColor: "bg-amber-700",
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
      rating: 4.0,
      reviews: 4.0,
      price: 120,
      originalPrice: 140,
      discount: "14% OFF",
      description: "Pure cold-pressed mustard oil with natural pungency and authentic...",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop&auto=format",
     
      badgeColor: "bg-amber-700",
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
      className="py-16 px-4 sm:px-6 lg:px-8 relative min-h-screen"
      style={{
        backgroundImage: `url("/backgroundLines.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Light background overlay */}
      <div className=" "></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-very-light-orange text-light-orange px-5 py-1 rounded-full text-sm font-medium mb-4">
            <TrendingUp  className="w-4 h-4 fill-current" />
            Most Popular
          </div>
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            Best Sellers
          </h2>
          <p className="text-[#4B5563] text-lg max-w-2xl mx-auto leading-relaxed">
            Our customers' favorite oils, loved for their exceptional quality and authentic taste
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-dark-orange max-w-sm mx-auto"
            >
              {/* Product Image Container */}
              <div className="relative bg-red-50 h-80">
                {/* Badge */}
               
                <div className="absolute top-0 bg-light-orange left-35  w-full flex text-white px-4 py-1 rounded-bl-full text-xs font-bold  items-center  gap-2 shadow-lg">
                 
                  {product.badge} 
                  <span className="text-white text-xs font-extralight">|</span>

                  <button
                  onClick={() => toggleFavorite(product.id)}
                  className=""
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.has(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-white'
                    }`}
                  />
                </button>
                  
               
              
                
                
               </div>

               <img src='/image.png'></img>
              </div>

              {/* Enhanced Product Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-base text-gray-600 font-semibold">({product.reviews}.0)</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹ {product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹ {product.originalPrice}
                  </span>
                  <span className="text-base text-green-600 font-bold">
                    ({product.discount})
                  </span>
                </div>

                {/* Available Sizes */}
                <div className="mb-8">
                  <p className="text-base text-gray-800 font-semibold mb-4">Available sizes:</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        className={`px-2 py-2 text-sm rounded-sm font-semibold transition-all duration-200 ${
                          index === 1
                            ? 'bg-light-orange text-white shadow-lg transform scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button className="w-full h-[59px] text-white py-4 bg-dark-orange px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="w-full text-dark-orange bg-white border-1 border-dark-orange  hover:bg-amber-50 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                    <Zap className="w-5 h-5 "  />
                    Buy Now
                  </button>
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