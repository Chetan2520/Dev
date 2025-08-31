import React from 'react';
import { useState } from 'react';
import { Star, Plus, Minus, ShoppingCart, Eye, Heart, Dot, Circle, Clock } from 'lucide-react';

export default function ProductOfDay() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background with opacity */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-25 to-gray-50"
        style={{
          backgroundImage: `url("/ProductBackground.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2
        }}
      ></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left oil press illustration */}
        <div className="absolute -left-90 bottom-24 w-[1000px] h-96 opacity-30">
          <img 
            src="/LeftWell.png" 
            alt="Oil Press" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Right oil press illustration */}
        <div className="absolute -right-100 w-[1000px] h-96 opacity-30">
          <img 
            src="/RightWell.png" 
            alt="Oil Press" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-very-light-orange text-light-orange px-4 py-2 rounded-full text-md font-bold mb-6">
           <Clock className='
           mr-3'/>   Limited Time Offer
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Product of the Day</h1>
          <p className="text-gray-600 text-lg">Special pricing on our premium selection - Today only!</p>
        </div>

        {/* Main Product Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex">
            
            {/* Product Image Section */}
            <div className="w-1/2  relative bg-gray-100">
              <div className="absolute h-10 w-24 top-4 left-4 bg-[#EF4444] text-white px-3.5 py-3 rounded-full text-sm font-bold z-10">
                14% OFF
              </div>
              
              <div className="flex justify-center items-center h-full">
                <img 
                  src="/ProductImg.png" 
                  alt="Coconut Oil Bottle" 
                  className="w-full h-full object-cover "
                />
               
              </div>
            </div>

            {/* Product Details Section */}
            <div className="w-1/2 p-10  relative ">
              
              
            <div className='flex flex-column w-full'>
            <div className="absolute top-0  h-8 bg-light-orange  right-0  flex text-white px-7 py-2 rounded-bl-full text-xs font-bold  items-center  gap-2 -lg">
                 Wood Pressed 
                 <span className="text-white text-xs font-extralight">|</span>

                 <button
                 
               >
                 <Heart
                  
                 />
               </button>
                 
              
             
               
               
              </div>
             <div className='flex '>
                 {/* Wood pressed badge */}
              <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-2 mr-3">
                Wood Pressed
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
             </div>
            </div>

              {/* Product Title */}
              <h2 className="text-2xl font-bold text-[#4B5563] mb-3">Coconut Oil</h2>

              {/* Product Description */}
              <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
                Virgin cold-pressed coconut oil with natural aroma and multiple health benefits. Perfect for cooking and skin care.
              </p>

              {/* Price Section */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xl font-bold text-gray-900">₹180</span>
                <span className="text-xl text-gray-500 line-through">₹210</span>
                <span className="text-xl text-gray-500 font-medium">(14% OFF)</span>
              </div>

              {/* Stock info */}
              <p className="text-sm text-gray-500 mb-3">Starting from 250ml • Free shipping included</p>

              {/* Size options */}
              <div className="flex items-center gap-2 mb-4">
                <button className="px-3 py-2 border-2 border-gray-300 text-[#374151] rounded text-sm">500ml</button>
                <button className="px-3 py-2 bg-light-orange  text-white rounded text-sm">1L</button>
                <button className="px-3 py-2 border border-gray-300 text-[#374151] rounded text-sm">2L</button>
                <button className="px-3 py-2 border border-gray-300 text-[#374151] rounded text-sm">+ 2 more</button>
               
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full inline-block"></span>
                    Virgin Quality
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                   <span className="w-2 h-2 bg-yellow-500 rounded-full inline-block"></span>
                    Natural Aroma
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                   <span className="w-2 h-2 bg-yellow-500 rounded-full inline-block"></span>
                    Multi-purpose Use
                  </li>
                </ul>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-dark-orange w-36 h-11 text-white py-3  rounded font-bold transition-colors flex items-center justify-center gap-2 text-sm">
                  <ShoppingCart className="w-4 h-4 font-bold" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-white border border-dark-orange text-dark-orange py-3  rounded font-bold  transition-colors flex items-center justify-center gap-2 text-sm">
                  <Eye className="w-4 h-4 font-bold" />
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}