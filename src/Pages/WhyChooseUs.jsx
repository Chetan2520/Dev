import React from 'react';
import { Droplets, Award, Truck, Users, Sun, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <Droplets className="w-8 h-8 text-orange-500" />,
      title: '100% Pure & Natural',
      description: 'No chemicals, no additives - just pure natural oils extracted using traditional methods.'
    },
    {
      id: 2,
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Premium Quality',
      description: 'Carefully sourced from the finest farms and processed with utmost care for superior quality.'
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Quality Assured',
      description: 'Every batch is tested for purity and quality to ensure you get the best products.'
    },
    {
      id: 4,
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: 'Fast Delivery',
      description: 'Quick and secure delivery to your doorstep with careful packaging to preserve freshness.'
    },
    {
      id: 5,
      icon: <Sun className="w-8 h-8 text-orange-500" />,
      title: 'Trusted by Thousands',
      description: 'Join thousands of satisfied customers who trust us for their daily cooking oil needs.'
    },
    {
      id: 6,
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: 'Health Focused',
      description: 'Our oils retain all essential nutrients and flavors, promoting better health for you and your family.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 my-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl
         md:text-3xl font-bold text-light-orange mb-4">
          Why Choose Dev Natural Oils?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're committed to providing the finest quality oils that bring authentic taste and 
          nutrition to your kitchen.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14 ">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white text-start rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#AE5D01]">
            {/* Icon */}
            <div className="mb-4 bg-[#FEF3C7] flex justify-center items-center h-20 w-20 rounded-full ">
              {feature.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-semibold text-[#111827] mb-3">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-dark-orange rounded-2xl p-8 text-center text-white ">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Experience the Difference
        </h3>
        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
          Taste the purity, feel the quality, and enjoy the health benefits of our premium oils.
        </p>
        <button className="bg-white text-dark-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;