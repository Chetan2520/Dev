import React from 'react';

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
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=220&fit=crop&crop=center",
      category: "Know Your Oils",
      date: "August 11, 2025",
      title: "Cold-Pressed vs. Wood-Pressed: Which Oil is Right For You?",
      excerpt: "Both methods preserve nutrients, but they have subtle differences. We break down the processes and benefits to help you choose for your kitchen.",
      categoryColor: "bg-orange-200 text-orange-800"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=220&fit=crop&crop=center",
      category: "Recipes",
      date: "August 11, 2025",
      title: "A Chef's Secret: Perfect Crispy Dosas with Wood-Pressed Groundnut Oil",
      excerpt: "Unlock the secret to flawlessly crispy dosas. Our recipe highlights how the high smoke point of wood-pressed groundnut oil makes all the difference.",
      categoryColor: "bg-green-200 text-green-800"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-amber-600 mb-4">
            From Our Blog
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
            Stay updated with the latest in health, nutrition, and traditional wellness practices.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-md text-start overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[500px] object-cover"
              />
              
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <button className="text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors duration-200 flex items-center group">
                  Read More 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center">
          <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
            View All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;