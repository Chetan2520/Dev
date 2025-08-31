import React from 'react';
import { Users, Video, Heart, MessageCircle } from 'lucide-react';

const NutritionExpertsSection = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-amber-600 mb-6">
            Partner with Nutrition Experts
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Looking to take your health and wellness journey to the next level? At <span className="font-semibold">Dev Natural Oils</span>, we believe in holistic well-being, which goes beyond just choosing the right oils. That's why we're excited to introduce upcoming partnerships with certified <span className="font-semibold">nutritionists, health coaches, and doctors</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Personalized Guidance */}
          <div className="bg-white rounded-xl border-2 border-amber-200 p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Personalized Guidance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get customized advice on incorporating pure, natural oils into your diet and lifestyle from trusted nutrition experts.
            </p>
          </div>

          {/* Workshops & Webinars */}
          <div className="bg-white rounded-xl border-2 border-amber-200 p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Workshops & Webinars
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Participate in exclusive online events, health talks, and Q&A sessions hosted by renowned professionals.
            </p>
          </div>

          {/* Tailored Wellness Plans */}
          <div className="bg-white rounded-xl border-2 border-amber-200 p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tailored Wellness Plans
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Collaborate with health coaches to develop meal plans and wellness routines best suited for your needs.
            </p>
          </div>
        </div>

        {/* Consultations Section */}
        <div className="bg-white rounded-xl border-2 border-amber-200 p-8 mb-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <MessageCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Consultations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Book one-on-one sessions with certified nutritionists and doctors for dietary advice, cooking tips, and answers to your health queries.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-xl border-l-4 border-amber-500 p-8 shadow-lg shadow-[0_-6px_15px_rgba(0,0,0,0.2)]">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Coming Soon!
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Stay tuned for our expert partner program, designed to empower you with knowledge and support for healthy living. Whether you're a long-time customer or new to exploring natural oils, this initiative will connect you directly with health professionals ready to help you make informed choices.
          </p>
          
          <div className="mb-4">
            <p className="text-gray-700 text-sm font-medium mb-2">
              Interested in being one of the first to participate or partner with us?
            </p>
            <p className="text-gray-600 text-sm">
              Contact us at <a href="mailto:info@devnaturaloils.com" className="text-amber-600 hover:text-amber-700 font-medium">info@devnaturaloils.com</a> or call <a href="tel:+919876543210" className="text-amber-600 hover:text-amber-700 font-medium">+91 9876543210</a> for early access and more information.
            </p>
          </div>

          <p className="text-gray-700 text-sm font-medium">
            Together, let's make nutrition simple, authentic, and accessible for everyone!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NutritionExpertsSection;