import React from 'react';
import { useState } from 'react';
import { Star, Plus, Minus, ShoppingCart, Eye, Heart, Dot, Circle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductOfDay() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="w-full relative overflow-hidden h-[45rem] lg:h-screen">
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
        <div className="absolute -left-100 bottom-0 lg:-bottom-8 w-[1000px] h-64 lg:h-96 opacity-30">
          <img 
            src="/LeftWell.png" 
            alt="Oil Press" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Right oil press illustration */}
        <div className="absolute -left-40  h-64 lg:left-[80rem] w-[1000px] lg:h-96 opacity-30">
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
          <div className="inline-flex items-center bg-very-light-orange text-light-orange px-4 py-1 rounded-full text-[8px] lg:text-xl font-bold mb-6">
           <Clock className=' 
           mr-3'/>   Limited Time Offer
          </div>
          <h1 className="lg:text-4xl text-[18px] font-bold text-gray-800 mb-3">Product of the Day</h1>
          <p className="text-gray-600 text-xs lg:text-lg">Special pricing on our premium selection - Today only!</p>
        </div>

        {/* Main Product Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex">
            
            {/* Product Image Section */}
            <div className="w-1/2  relative bg-gray-100">
              <div className="absolute h-5 w-11 lg:h-10 lg:w-24 top-4 left-4 bg-[#EF4444] text-white px-1.5 lg:px-3.5 py-1 lg:py-3 rounded-full text-[7px] lg:text-sm font-bold z-10">
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
            <div className="w-1/2 p-4 py-5 lg:p-10  relative ">
              
              
            <div className='flex flex-column w-full'>
            <div className="absolute top-0 right-0 h-3 lg:h-5 w-[70px]  lg:w-44 bg-light-orange flex items-center gap-1 lg:px-4 px-1 py-[2.8px] rounded-bl-full text-white text-[5.5px] lg:text-xs font-bold">
  Wood Pressed
  <span className="text-white text-7px lg:text-[10px] font-extralight leading-none">|</span>

  <span  className='flex justify-center items-center w-3 h-3'>
    <Heart size={14} className="text-white " />
  </span>
</div>

             <div className='flex '>
                 {/* Wood pressed badge */}
              <div className="inline-flex items-center bg-green-100 text-green-700 px-1.5 lg:px-4 py-[1.5px] lg:py-2 rounded-full text-[5.3px] lg:text-sm font-medium mb-2 mr-3">
                Wood Pressed
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="lg:w-4 lg:h-4 h-1.5 w-1.5 fill-current" />
                  ))}
                </div>
              </div>
             </div>
            </div>

              {/* Product Title */}
              <h2 className="lg:text-2xl text-xs font-bold text-[#4B5563] mb-1  lg:mb-3">Coconut Oil</h2>

              {/* Product Description */}
              <p className="text-[#4B5563] text-[6px] lg:text-sm leading-2.5 lg:leading-relaxed mb-1 lg:mb-4">
                Virgin cold-pressed coconut oil with natural aroma and multiple health benefits. Perfect for cooking and skin care.
              </p>

              {/* Price Section */}
              <div className="flex items-baseline gap-2 mb-1 lg:mb-4">
                <span className="lg:text-xl text-xs font-bold text-gray-900">₹180</span>
                <span className="lg:text-xl text-[8px] text-gray-500 line-through">₹210</span>
                <span className="lg:text-xl text-[8px] text-gray-500 font-medium">(14% OFF)</span>
              </div>

              {/* Stock info */}
              <p className="lg:text-sm text-[6px]  text-gray-500 mb-1  lg:mb-3">Starting from 250ml • Free shipping included</p>

              {/* Size options */}
              <div className="flex items-center gap-2 mb-1 lg:mb-4">
                <span className="px-[5.72px] lg:px-3 py-[2.3px] lg:py-2 border-2 border-gray-300 text-[#374151] rounded text-[6px] lg:text-sm">500ml</span>
                <span className="px-[5.72px] lg:px-3 py-[2.3px] lg:py-2 bg-light-orange  text-white rounded text-[6px] lg:text-sm">1L</span>
                <span className="px-[5.72px] lg:px-3 py-[2.3px] lg:py-2 border border-gray-300 text-[#374151] text-[6px]  rounded lg:text-sm">2L</span>
                <span className="px-[5.72px] lg:px-3 py-[2.3px] lg:py-2 border border-gray-300 text-[#374151] text-[6px]  rounded lg:text-sm">+ 2 more</span>
              
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 text-[6.3px] lg:text-sm mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-[5.3px] lg:text-sm text-gray-600">
                  <span className="w-[3.2px] h-[3.2px] lg:w-2 lg:h-2 bg-yellow-500 rounded-full inline-block"></span>
                    Virgin Quality
                  </li>
                  <li className=" flex items-center gap-2 text-[5.3px] lg:text-sm text-gray-600">
                   <span className=" w-[3.2px] h-[3.2px] lg:w-2 lg:h-2 bg-yellow-500 rounded-full inline-block"></span>
                    Natural Aroma
                  </li>
                  <li className="flex items-center gap-2 text-[5.3px] lg:text-sm text-gray-600">
                   <span className=" w-[3.2px] h-[3.2px] lg:w-2 lg:h-2 bg-yellow-500 rounded-full inline-block"></span>
                    Multi-purpose Use
                  </li>
                </ul>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-3">
  <span className="flex-1 bg-dark-orange lg:w-36 lg:h-12 h-7 min-w-16 text-white rounded font-bold transition-colors flex items-center justify-center gap-1 lg:text-sm  text-[6px]">
    <ShoppingCart className="w-3 h-3 font-bold" />
    Add to Cart
  </span>
  <span className="flex-1 border text-dark-orange border-dark-orange lg:w-36 lg:h-12 h-7 min-w-16 bg-white rounded font-bold transition-colors flex items-center justify-center gap-1 text-[6px] lg:text-sm">
    <Eye className="w-3 h-3 font-bold" />
    View Details
  </span>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}