import React from 'react';
import { Droplets, Award, Truck, Users, Sun, Heart } from 'lucide-react';
import { BiLeaf } from 'react-icons/bi';
import { LuShield } from 'react-icons/lu';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <BiLeaf  className="lg:w-8 lg:h-8 w-[10.35px] h-[10.95px] text-light-orange" />,
      title: '100% Pure & Natural',
      description: 'No chemicals, no additives - just pure natural oils extracted using traditional methods.'
    },
    {
      id: 2,
      icon: <Award className="lg:w-8 lg:h-8 w-[10.35px] h-[10.95px] text-light-orange" />,
      title: 'Premium Quality',
      description: 'Carefully sourced from the finest farms and processed with utmost care for superior quality.'
    },
    {
      id: 3,
      icon: <LuShield className="lg:w-8 lg:h-8 w-[10.35px] h-[10.95px] text-light-orange" />,
      title: 'Quality Assured',
      description: 'Every batch is tested for purity and quality to ensure you get the best products.'
    },
    {
      id: 4,
      icon: <Truck className="lg:w-8 lg:h-8 w-[10.35px] h-[10.95px] text-light-orange" />,
      title: 'Fast Delivery',
      description: 'Quick and secure delivery to your doorstep with careful packaging to preserve freshness.'
    },
    {
      id: 5,
      icon: <Users className="lg:w-8 lg:h-8 w-[10.35px] h-[10.95px] text-light-orange" />,
      title: 'Trusted by Thousands',
      description: 'Join thousands of satisfied customers who trust us for their daily cooking oil needs.'
    },
    {
      id: 6,
      icon: <Heart className="lg:w-8 lg:h-8 w-[10.35px] h-[10.95px] text-light-orange" />,
      title: 'Health Focused',
      description: 'Our oils retain all essential nutrients and flavors, promoting better health for you and your family.'
    }
  ];

  return (
    <div 
      className="lg:px-48 lg:py-28 py-10 px-3"
      style={{
        backgroundImage: 'url(/backgroundLines.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-lg lg:text-4xl
         md:text-3xl font-bold text-dark-orange mb-4">
          Why Choose Dev Natural Oils?
        </h2>
        <p className="text-xs lg:text-2xl text-gray-500 max-w-2xl mx-auto">
          We're committed to providing the finest quality oils that bring authentic taste and 
          nutrition to your kitchen.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-10 mb-14 ">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white text-start rounded-xl p-2 lg:p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-[#AE5D01]">
            {/* Icon */}
            <div className="lg:mb-4 mb-1 bg-[#FEF3C7] flex justify-center items-center h-7 w-7 lg:h-20 lg:w-20 rounded-full ">
              {feature.icon}
            </div>
            
            {/* Title */}
            <h3 className="lg:text-2xl text-xs font-semibold text-[#111827] mb-1 lg:mb-3">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="lg:text-sm text-[6.7px] text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-dark-orange rounded-2xl p-8 text-center text-white ">
        <h3 className="lg:text-xl text-[19px] md:text-2xl font-bold mb-4">
          Experience the Difference
        </h3>
        <p className="text-xs lg:text-2xl text-amber-100 mb-6 max-w-2xl mx-auto">
          Taste the purity, feel the quality, and enjoy the health benefits of our premium oils.
        </p>
        <button className="text-[10.24px] lg:text-xl bg-white text-dark-orange py-1 px-4 lg:px-8 lg:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;