import React from 'react';
import { Users, Video, Heart, MessageCircle } from 'lucide-react';

const NutritionExpertsSection = () => {
  return (
    <div className="py-16 px-4" style={{
      backgroundImage: 'url(/backgroundLines.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl text-lg font-semibold text-dark-orange mb-6">
            Partner with Nutrition Experts
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
            Looking to take your health and wellness journey to the next level? At <span className="font-semibold">Dev Natural Oils</span>, we believe in holistic well-being, which goes beyond just choosing the right oils. That's why we're excited to introduce upcoming partnerships with certified <span className="font-semibold">nutritionists, health coaches, and doctors</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 lg:mb-8">
          {/* Personalized Guidance */}
          <div className="bg-white rounded-xl border-2 border-light-orange lg:p-8 p-4 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="lg:w-32 lg:h-32 w-[74.6px] h-[74.6px] bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-6">
              {/* <Users className="w-8 h-8 text-light-orange" /> */}
              <img src='/presentation.png' className='w-9 h-8 lg:w-16 lg:h-16' ></img>
            </div>
            <h3 className="lg:text-2xl text-base font-bold text-gray-800 mb-2 lg:mb-4">
              Personalized Guidance
            </h3>
            <p className="text-gray-600 lg:text-sm text-lg leading-relaxed">
              Get customized advice on incorporating pure, natural oils into your diet and lifestyle from trusted nutrition experts.
            </p>
          </div>

          {/* Workshops & Webinars */}
          <div className="bg-white rounded-xl border-2 border-light-orange lg:p-8 p-4 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="lg:w-32 lg:h-32 w-[74.6px] h-[74.6px] bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-6">
              {/* <Users className="w-8 h-8 text-light-orange" /> */}
              <img src='/Workshops.png' className='w-9 h-8 lg:w-16 lg:h-16' ></img>
            </div>
            <h3 className="lg:text-2xl text-base font-bold text-gray-800 mb-2 lg:mb-4">
            Workshops & Webinars
            </h3>
            <p className="text-gray-600 lg:text-sm text-lg leading-relaxed">
            Participate in exclusive online events, health talks, and Q&A sessions hosted by renowned professionals.</p>
          </div>

          {/* Tailored Wellness Plans */}
          <div className="bg-white rounded-xl border-2 border-light-orange lg:p-8 p-4 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="lg:w-32 lg:h-32 w-[74.6px] h-[74.6px] bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-6">
              {/* <Users className="w-8 h-8 text-light-orange" /> */}
              <img src='/Planes.png' className='w-9 h-8 lg:w-16 lg:h-16' ></img>
            </div>
            <h3 className="lg:text-2xl text-base font-bold text-gray-800 mb-2 lg:mb-4">
            Tailored Wellness Plans
            </h3>
            <p className="text-gray-600 lg:text-sm text-lg leading-relaxed">
            Collaborate with health coaches to develop meal plans and wellness routines best suited for your needs.</p>
          </div>











        </div>

        {/* Consultations Section */}
        <div className="bg-white rounded-xl border-2 border-light-orange p-8 mb-4 lg:mb-8 shadow-lg">
          <div className="flex items-start gap-4">
           
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1 lg:mb-3">
                Consultations
              </h3>
              <p className="text-gray-600 text-xs lg:text-2xl leading-relaxed">
                Book one-on-one sessions with certified nutritionists and doctors for dietary advice, cooking tips, and answers to your health queries.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-xl border-l-6 border-light-orange p-10 shadow-lg ">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
            Coming Soon!
          </h3>
          <p className="text-gray-600 text-xs lg:text-lg leading-relaxed mb-3 lg:mb-6">
            Stay tuned for our expert partner program, designed to empower you with knowledge and support for healthy living. Whether you're a long-time customer or new to exploring natural oils, this initiative will connect you directly with health professionals ready to help you make informed choices.
          </p>
          
          <div className="mb-4">
            <p className="text-gray-700 text-xs lg:text-lg font-bold mb-0.5  lg:mb-2">
              Interested in being one of the first to participate or partner with us?
            </p>
            <p className="text-gray-600 text-xs lg:text-lg">
              Contact us at <a href="mailto:info@devnaturaloils.com" className=" font-bold">info@devnaturaloils.com</a> or call <a href="tel:+919876543210" className=" font-bold">+91 9876543210</a> for early access and more information.
            </p>
          </div>

          <p className="text-gray-700 text-xs lg:text-lg font-bold">
            Together, let's make nutrition simple, authentic, and accessible for everyone!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NutritionExpertsSection;