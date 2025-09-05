import { ArrowBigRightIcon, Calendar } from 'lucide-react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "blogimg1.png",
      category: "Health & Wellness",
      date: "August 11, 2025",
      title: "The Golden Elixir: 5 Surprising Benefits of Cold-Pressed Mustard Oil",
      excerpt: "Discover why this pungent oil is more than just a cooking medium. From boosting heart health to fighting inflammation, learn how it can elevate your wellness journey.",
      categoryColor: "bg-yellow-200 text-yellow-800"
    },
    {
      id: 2,
      image: "Blog2.png",
      category: "Know Your Oils",
      date: "August 11, 2025",
      title: "Cold-Pressed vs. Wood-Pressed: Which Oil is Right For You?",
      excerpt: "Both methods preserve nutrients, but they have subtle differences. We break down the processes and benefits to help you choose for your kitchen.",
      categoryColor: "bg-orange-200 text-orange-800"
    },
    {
      id: 3,
      image: "Blog3.png",
      category: "Recipes",
      date: "August 11, 2025",
      title: "A Chef's Secret: Perfect Crispy Dosas with Wood-Pressed Groundnut Oil",
      excerpt: "Unlock the secret to flawlessly crispy dosas. Our recipe highlights how the high smoke point of wood-pressed groundnut oil makes all the difference.",
      categoryColor: "bg-green-200 text-green-800"
    }
  ];

  return (
    <div
      className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/backgroundLines.png)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-lg lg:text-3xl sm:text-4xl font-semibold text-dark-orange mb-3 sm:mb-4">
            From Our Blog
          </h2>
          <p className="text-gray-600 text-xs lg:text-base sm:text-lg max-w-xl mx-auto leading-relaxed px-2">
            Stay updated with the latest in health, nutrition, and traditional wellness practices.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white border-2 border-[#FCE289] rounded-xl shadow-md text-start overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-[348px] h-[362px] lg:h-[500px] lg:w-[480px]"
              />
              
              <div className="p-4 sm:p-5 md:p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs lg:text-base font-bold uppercase tracking-wide text-light-orange bg-very-light-orange`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-light-orange text-xs font-thin">
                  <Calendar/>
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-5">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <button className="text-amber-600 font-medium text-xs  sm:text-base hover:text-amber-700 transition-colors duration-200 gap-2 sm:gap-3 flex items-center group">
                  Read More 
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center">
          <button className="bg-dark-orange text-white  px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors duration-200 shadow-md hover:shadow-lg">
            View All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;