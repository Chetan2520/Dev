import React, { useState } from 'react'
import { FaInstagram, FaPhoneAlt, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { LuTwitter, LuYoutube } from 'react-icons/lu'
import { HiMenu, HiX } from 'react-icons/hi'
import { CiHeart, CiShoppingCart, CiUser } from 'react-icons/ci'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className=''>
      {/* Top Bar - Contact & Promo */}
      <header className='bg-dark-orange flex flex-col lg:flex-row justify-between items-center text-white py-3 px-4 lg:px-8 text-sm'>
        {/* Contact Info */}
        <div className='flex items-center gap-2 mb-2 lg:mb-0 order-1 lg:order-1'>
          <FaPhoneAlt className='text-very-light-orange' />
          <span className='whitespace-nowrap'>+91 9876543210</span>
        </div>
        
        {/* Promotional Message */}
        <div className=' text-center mb-2 lg:mb-0 order-2 lg:order-2 flex-1 lg:flex-none'>
          
          <p className=' text-xs lg:text-sm'>✨ Experience Premium Quality, Delivered Without Extra Cost - Enjoy Free Shipping on Orders Over ₹999! ✨</p>
        </div>
        
        {/* Social Media Icons */}
        <div className='flex gap-4 order-3 lg:order-3'>
          <FiFacebook className='h-5 w-5 text-very-light-orange hover:text-white transition-colors cursor-pointer' />
          <LuTwitter className='h-5 w-5 text-very-light-orange hover:text-white transition-colors cursor-pointer' />
          <FaInstagram className='h-5 w-5 text-very-light-orange hover:text-white transition-colors cursor-pointer' />
          <LuYoutube className='h-5 w-5 text-very-light-orange hover:text-white transition-colors cursor-pointer' />
        </div>
      </header>

      {/* Main Navigation */}
      <nav className='max-w-[1600px] mx-auto bg-white h-28  lg:px-8 py-1'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          
          <div>
          <img src='/Frame 42.png' alt='logo' className=' h-24 w-64' />
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
            <a href='#' className='text-dark-orange font-medium border-b-2 border-dark-orange pb-1  transition-colors'>Home</a>
            <a href='#' className='text-dark-orange font-medium  transition-colors relative group'>
              About
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-light-orange transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#' className='text-dark-orange font-medium  transition-colors relative group'>
              Products
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-light-orange transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#' className='text-dark-orange font-medium  transition-colors relative group'>
              Podcast
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-light-orange transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#' className='text-dark-orange font-medium  transition-colors relative group'>
              Testimonials
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-light-orange transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#' className='text-dark-orange font-medium  transition-colors relative group'>
              Contact
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-light-orange transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#' className='text-dark-orange font-medium  transition-colors relative group'>
              Blogs
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-light-orange transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#' className='text-dark-orange font-medium  transition-colors relative group'>
              FAQs
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-light-orange transition-all duration-300 group-hover:w-full'></span>
            </a>
          </div>

          {/* User Icons */}
          <div className='flex items-center gap-2 lg:gap-3'>
            
           
      <button className="h-8 w-10 lg:w-[86px] lg:h-14 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
        <CiHeart className="w-3 h-3 lg:w-6 lg:h-6 text-gray-700" />
      </button>
      <button className="h-8 w-10 lg:w-[86px] lg:h-14 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
        <CiShoppingCart className="w-3 h-3 lg:w-6 lg:h-6 text-gray-700" />
      </button>
      <button className="h-8 w-10 lg:w-[86px] lg:h-14 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
        <CiUser className="w-3 h-3 lg:w-6 lg:h-6 text-gray-700" />
      </button>
           
            {/* Mobile Menu Button */}
            <button 
              className='lg:hidden w-8 h-8 lg:w-10 lg:h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors'
              onClick={toggleMenu}
            >
              {isMenuOpen ? <HiX className='text-dark-orange text-sm lg:text-base' /> : <HiMenu className='text-dark-orange text-sm lg:text-base' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className='lg:hidden mt-4 pb-4 border-t border-gray-200'>
            <div className='flex flex-col space-y-3 pt-4'>
              <a href='#' className='text-dark-orange font-medium border-b-2 border-dark-orange pb-1'>Home</a>
              <a href='#' className='text-dark-orange font-medium hover:text-light-orange transition-colors py-2 border-b border-gray-100 hover:border-light-orange'>About</a>
              <a href='#' className='text-dark-orange font-medium hover:text-light-orange transition-colors py-2 border-b border-gray-100 hover:border-light-orange'>Products</a>
              <a href='#' className='text-dark-orange font-medium hover:text-light-orange transition-colors py-2 border-b border-gray-100 hover:border-light-orange'>Podcast</a>
              <a href='#' className='text-dark-orange font-medium hover:text-light-orange transition-colors py-2 border-b border-gray-100 hover:border-light-orange'>Testimonials</a>
              <a href='#' className='text-dark-orange font-medium hover:text-light-orange transition-colors py-2 border-b border-gray-100 hover:border-light-orange'>Contact</a>
              <a href='#' className='text-dark-orange font-medium hover:text-light-orange transition-colors py-2 border-b border-gray-100 hover:border-light-orange'>Blogs</a>
              <a href='#' className='text-dark-orange font-medium hover:text-light-orange transition-colors py-2 border-b border-gray-100 hover:border-light-orange'>FAQs</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
