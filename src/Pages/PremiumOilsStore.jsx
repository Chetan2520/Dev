import React, { useState } from 'react';
import { Search, Star, Heart, ShoppingCart } from 'lucide-react';
import { BiSolidZap } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// MustardOilCard component - exact same design as your original
const MustardOilCard = ({ oils, renderStars }) => {
  const [wishlistedItems, setWishlistedItems] = useState(new Set());
  const [selectedSizes, setSelectedSizes] = useState({});

  const sizes = [
    { label: '500ml', value: '500ml' },
    { label: '1L', value: '1L' },
    { label: '2L', value: '2L' },
    { label: '+ 2 more', value: 'more', disabled: false }
  ];

  const toggleWishlist = (id) => {
    const newWishlisted = new Set(wishlistedItems);
    if (newWishlisted.has(id)) {
      newWishlisted.delete(id);
    } else {
      newWishlisted.add(id);
    }
    setWishlistedItems(newWishlisted);
  };

  const setSelectedSize = (oilId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [oilId]: size
    }));
  };

  return (
    <div className="max-w-[1600px] mx-auto min-h-screen ">
      {/* Grid Container - 2 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 px-4 md:px-6">
        {oils.map((oil) => (
          <div
            key={oil.id}
            className="w-full max-w-[686px] border-2 border-dark-orange shadow-xl mx-auto flex  md:flex-row rounded-2xl overflow-hidden relative"
            style={{ backgroundColor: oil.backgroundColor }}
          >
                <div className="absolute top-0 right-0 h-3 lg:h-5 w-[70px]  lg:w-44 bg-light-orange flex items-center gap-1 lg:px-4 px-1 py-[2.8px] rounded-bl-full text-white text-[5.5px] lg:text-[9.5px] font-bold">
  Wood Pressed
  <span className="text-white text-7px lg:text-[10px] font-extralight leading-none">|</span>

  <span  className='flex justify-center items-center w-3 h-3'>
    <Heart size={14} className="text-white " />
  </span>
</div>

            {/* Product Image Section */}
            <div className="lg:pt-8 md:pt-16  w-1/2    lg:px-4 ">
              <div className="flex justify-center w-full md:w-[345px] h-full">
                <img 
                  src={oil.image}
                  alt={`${oil.name} Bottle`}
                  className="w-full h-auto  object-cover drop-shadow-xl rounded-lg"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='345' height='300' viewBox='0 0 345 300'%3E%3Crect width='345' height='300' fill='%23f3f4f6'/%3E%3Ctext x='172.5' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3EOil Bottle%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="bg-white w-1/2  lg:px-4 px-2 md:px-6 py-6 md:py-8 space-y-4 text-start flex-1">
              {/* Title and Rating */}
              <div>
                <h2 className=" text-[9.5px] font-[400] lg:text-2xl text-gray-800 mb-1 lg:mb-2">{oil.name}</h2>
                <div className="flex items-center gap-2 mb-1 lg:mb-3">
                  <div className="flex gap-1 text-[9.5px]">
                    {renderStars(oil.rating)}
                  </div>
                  <span className="lg:text-sm text-[9.5px] text-gray-600 font-medium">({oil.rating})</span>
                </div>
              </div>

              {/* Description */}
              <p className="lg:text-sm text-[9.5px] text-gray-600 leading-relaxed">
                {oil.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="lg:text-2xl text-sm font-bold text-gray-800">₹ {oil.price}</span>
                <span className="lg:text-lg text-[9.5px] text-gray-500 line-through">₹ {oil.originalPrice}</span>
                <span className="lg:text-lg text-[9.5px] text-gray-500 font-medium">({oil.discount})</span>
              </div>

              {/* Available Sizes */}
              <div>
                <p className="lg:text-sm text-[9.5px] font-medium text-gray-700 mb-0.5 lg:mb-3">Available sizes:</p>
                <div className="flex gap-1 lg:gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <span
                      key={size.value}
                      onClick={() => !size.disabled && setSelectedSize(oil.id, size.value)}
                      disabled={size.disabled}
                      className={`px-[6.58px] lg:px-3 border border-gray-400 lg:py-2 py-[2.63px] rounded-sm text-[6.5px] lg:text-sm font-medium transition-colors ${
                        (selectedSizes[oil.id] || '1L') === size.value
                          ? 'bg-light-orange text-white'
                          : size.disabled 
                          ? ' text-gray-400 cursor-not-allowed'
                          : ' text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <span className="w-full h-8 text-[10.52px] lg:text-xl bg-dark-orange text-white lg:py-3 lg:px-4 py-1 px-4 rounded-lg font-medium hover:bg-amber-800 transition-colors duration-200 flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </span>
                
                <span className="w-full h-8 border-2 text-dark-orange border-dark-orange text-[10.52px] lg:text-xl   lg:py-3 lg:px-4 py-1 px-4  rounded-lg font-medium  flex items-center justify-center gap-2">
                  <BiSolidZap size={18} />
                  Buy Now
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PremiumOilsStore = () => {
  const [sortBy, setSortBy] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const oils = [
    {
      id: 1,
      name: 'Mustard Oil',
      rating: 5.0,
      reviews: 31,
      description: 'Pure cold-pressed mustard oil with natural pungency and authentic flavor for traditional cooking.',
      price: 110,
      originalPrice: 140,
      discount: '14% OFF',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-orange-500',
      image: './bottle.png',
      bgColor: 'bg-yellow-100',
      backgroundColor: '#FCE289',
      available: true,
      stock: 200
    },
    {
      id: 2,
      name: 'Groundnut Oil',
      rating: 4.0,
      reviews: 24,
      description: 'Premium groundnut oil perfect for deep frying and high-temperature cooking with neutral taste.',
      price: 120,
      originalPrice: 140,
      discount: '14% OFF',
      badge: 'BEST SELLER',
      badgeColor: 'bg-red-500',
      image: './bottle.png',
      bgColor: 'bg-yellow-100',
      backgroundColor: '#FCE289',
      available: true,
      stock: 150
    },
    {
      id: 3,
      name: 'Sunflower Oil',
      rating: 4.8,
      reviews: 67,
      description: 'Light and healthy sunflower oil rich in vitamin E, perfect for salads and light cooking.',
      price: 1120,
      originalPrice: 140,
      discount: '14% OFF',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-orange-500',
      image: './bottle.png',
      bgColor: 'bg-green-100',
      backgroundColor: '#BAFFC0',
      available: true,
      stock: 300
    },
    {
      id: 4,
      name: 'Coconut Oil',
      rating: 4.8,
      reviews: 45,
      description: 'Virgin coconut oil with natural aroma, ideal for both cooking and skincare applications.',
      price: 230,
      originalPrice: 140,
      discount: '14% OFF',
      badge: '',
      badgeColor: '',
      image: './bottle.png',
      bgColor: 'bg-green-100',
      backgroundColor: '#BAFFC0',
      available: true,
      stock: 180
    },
    {
      id: 5,
      name: 'Safflower Oil',
      rating: 5.0,
      reviews: 23,
      description: 'Premium safflower oil with high smoke point, excellent for high-heat cooking and frying.',
      price: 120,
      originalPrice: 140,
      discount: '14% OFF',
      badge: '',
      badgeColor: '',
      image: './bottle.png',
      bgColor: 'bg-orange-100',
      backgroundColor: '#FFE0BA',
      available: true,
      stock: 120
    },
    {
      id: 6,
      name: 'Sesame Oil (White)',
      rating: 4.0,
      reviews: 18,
      description: 'Pure white sesame oil with mild flavor, perfect for tempering and light cooking.',
      price: 120,
      originalPrice: 140,
      discount: '14% OFF',
      badge: '',
      badgeColor: '',
      image: './bottle.png',
      bgColor: 'bg-orange-100',
      backgroundColor: '#FFE0BA',
      available: true,
      stock: 90
    }
  ];

  const sortOptions = [
    'Featured',
    'Price: High to Low',
    'Price: Low to High',
    'Name: A to Z'
  ];

  const getSortedOils = () => {
    let filtered = oils.filter(oil => 
      oil.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      oil.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch(sortBy) {
      case 'Price: High to Low':
        return filtered.sort((a, b) => b.price - a.price);
      case 'Price: Low to High':
        return filtered.sort((a, b) => a.price - b.price);
      case 'Name: A to Z':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={14} 
        className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} 
      />
    ));
  };

  const sortedOils = getSortedOils();

  return (
    <div className="relative min-h-screen px-3 lg:px-44 mt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ 
         
          backgroundImage: 'url(/backgroundLines.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        }}
      ></div>
    
      {/* Content */}
      <div className="relative z-10">
        {/* Search Bar */}
        <div className="relative  mb-6 lg:mx-[2%] lg:px-2 md:px-0">
          <Search className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Oils..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xl h-14 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
    
        {/* Header with Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mb-6 lg:mx-[2%] lg:px-2 md:px-0">
          <h1 className="lg:text-2xl text-lg  font-semibold text-gray-800">
            Discover All Premium Oils ({sortedOils.length})
          </h1>
          <div className="relative lg:w-1/2  w-full flex flex-row-reverse">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none h-12 lg:h-[50px]  bg-white border text-[9.5px] lg:text-lg border-gray-300 rounded-lg px-4 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  Sort by: {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
    
        {/* Products Grid */}
        <MustardOilCard oils={sortedOils} renderStars={renderStars} />
    
        {/* View All Products Button */}
        {sortedOils.length > 0 && (
          <div className="flex justify-center mt-10">
            <button className="px-6 py-2 border-2 border-dark-orange text-dark-orange font-semibold rounded-md">
              View All Products
            </button>
          </div>
        )}
    
        {/* No Results */}
        {sortedOils.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No oils found matching your search.
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumOilsStore;