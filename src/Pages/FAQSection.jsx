import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "What makes your oils different from regular store-bought oils?",
      answer: "Our oils are extracted using traditional cold-press and wood-press methods that preserve natural nutrients, flavors, and aromas. Unlike commercial oils that use heat and chemicals, our process maintains the oil's natural properties and health benefits."
    },
    {
      id: 1,
      question: "How long do your oils stay fresh?",
      answer: "Our cold-pressed oils typically stay fresh for 12-18 months when stored in a cool, dark place. We recommend using them within 6 months of opening for optimal flavor and nutritional benefits."
    },
    {
      id: 2,
      question: "What is the difference between cold-pressed and wood-pressed oils?",
      answer: "Cold-pressed oils are extracted at room temperature using mechanical pressure, while wood-pressed oils use traditional wooden machines that generate minimal heat. Both methods preserve nutrients, but wood-pressing is an ancient technique that some believe enhances the oil's natural properties."
    },
    {
      id: 3,
      question: "Are your oils organic and chemical-free?",
      answer: "Yes, all our oils are 100% organic and chemical-free. We source our raw materials from certified organic farms and use only mechanical extraction methods without any chemical solvents or additives."
    },
    {
      id: 4,
      question: "Do you have any certifications for quality?",
      answer: "Yes, we hold multiple certifications including organic certification, FSSAI license, and ISO quality standards. All our products undergo rigorous testing to ensure purity and quality."
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-light-orange mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-2xl">
            Everything you need to know about our premium oils and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="bg-white rounded-lg border border-light-orange shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-amber-25 transition-colors duration-200"
              >
                <span className="text-gray-800 font-medium text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-light-orange transition-transform duration-200 flex-shrink-0 ${
                    openQuestion === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openQuestion === faq.id && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-amber-100">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All FAQs Button */}
        <div className="text-center">
          <button className="bg-white text-light-orange border-2 border-light-orange hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 shadow-sm hover:shadow-md">
            View All FAQs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;