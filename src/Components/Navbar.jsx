import React, { useState } from 'react'
import { FaInstagram, FaPhoneAlt, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { LuPhone, LuTwitter, LuYoutube } from 'react-icons/lu'
import { HiMenu, HiX } from 'react-icons/hi'
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import { HiHome, HiUserGroup, HiCube, HiMicrophone, HiDocumentText, HiPhone, HiComputerDesktop, HiQuestionMarkCircle, HiHomeModern } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { Phone } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className=''>
      {/* Top Bar - Contact & Promo - Hidden on Mobile */}
      <header className="hidden lg:flex bg-dark-orange flex-col lg:flex-row justify-between items-center text-white py-3 px-4 lg:px-8 text-sm">
        {/* Contact Info */}
        <div className="items-center gap-2 flex  mb-2 lg:mb-0 order-1 lg:order-1">
          <FaPhoneAlt className="text-very-light-orange" />
          <span className="whitespace-nowrap">+91 9876543210</span>
        </div>
        
        {/* Promotional Message */}
        <div className="text-center mb-2 lg:mb-0 order-2 lg:order-2 flex-1 lg:flex-none">
          <p className="text-xs lg:text-sm">
            ✨ Experience Premium Quality, Delivered Without Extra Cost - Enjoy Free Shipping on Orders Over ₹999! ✨
          </p>
        </div>
        
        {/* Social Media Icons */}
        <div className="gap-4 order-3 lg:order-3 flex">
          <FiFacebook className="h-5 w-5 text-very-light-orange hover:text-white transition-colors cursor-pointer" />
          <LuTwitter className="h-5 w-5 text-very-light-orange hover:text-white transition-colors cursor-pointer" />
          <FaInstagram className="h-5 w-5 text-very-light-orange hover:text-white transition-colors cursor-pointer" />
          <LuYoutube className="h-5 w-5 text-very-light-orange hover:text-white transition-colors cursor-pointer" />
        </div>
      </header>

      {/* Main Navigation */}
      <nav className='max-w-[1600px] mx-auto bg-white h-20 lg:h-28 lg:px-8 py-1 px-2.5'>
        <div className='flex items-center justify-between h-full gap-2.5'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <img src='/Frame 42.png' alt='logo' className='h-16 w-48 lg:h-24 lg:w-64' />
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
          <div className="flex items-center  lg:gap-3 flex-shrink-0">
  {/* Heart icon (only desktop) */}
  <button className="hidden lg:flex h-8 w-10 lg:w-[86px] lg:h-14 items-center justify-center lg:rounded-full lg:border lg:border-gray-300 lg:hover:bg-gray-100 transition">
    <CiHeart className="w-4 h-4  lg:w-6 lg:h-6 text-dark-orange lg:text-gray-700" />
  </button>

  {/* Search icon (mobile + desktop) */}
  <button className="flex h-8 w-10 lg:w-[86px] lg:h-14 items-center lg:hidden justify-center rounded-full lg:border lg:border-gray-300 lg:hover:bg-gray-100 transition">
    <CiSearch className="w-7 h-7 font-extrabold lg:w-6 lg:h-6 text-dark-orange lg:text-gray-700" />
  </button> 

  {/* Cart icon (mobile + desktop) */}
  <button className="flex h-8 w-10 lg:w-[86px] lg:h-14 items-center justify-center rounded-full lg:border lg:border-gray-300 lg:hover:bg-gray-100 transition">
    <CiShoppingCart className="w-7 h-7 font-extrabold lg:w-6 lg:h-6 text-dark-orange lg:text-gray-700" />
  </button>

  {/* User icon (only desktop) */}
  <button className="hidden lg:flex h-8 w-10 lg:w-[86px] lg:h-14 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
    <CiUser className="w-7 h-7 font-extrabold lg:w-6 lg:h-6 text-gray-700" />
  </button>

  {/* Mobile Menu Button */}
  <button
    className="lg:hidden w-8 h-8  flex items-center justify-center "
    onClick={toggleMenu}
  >
    {isMenuOpen ? (
      <HiX className="text-dark-orange text-lg" />
    ) : (
      <HiMenu className="text-dark-orange text-lg" />
    )}
  </button>
</div>

        </div>

        {/* Full Screen Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className='lg:hidden fixed inset-0 bg-white z-50 w-full h-full overflow-hidden' style={{ width: '100vw', height: '100vh' }}>
            {/* Mobile Menu Header */}
            <div className='flex items-center justify-between '>
              <button 
                onClick={toggleMenu}
                className=' flex items-center justify-center  '
              >
                <HiX className='w-7 h-7 font-extrabold text-dark-orange text-sm' />
              </button>
              
              {/* Logo in center */}
              <div className='flex-1 flex justify-center'>
                <img src='/Frame 42.png' alt='logo' className='h-12 w-32' />
              </div>
              
              {/* Action Icons */}
              <div className='flex items-center gap-2'>
                {/* Search icon (mobile + desktop) */}
 <button className="flex h-8 w-10 lg:w-[86px] lg:h-14 items-center lg:hidden justify-center rounded-full lg:border lg:border-gray-300 lg:hover:bg-gray-100 transition">
    <CiSearch className="w-7 h-7 font-extrabold lg:w-6 lg:h-6 text-dark-orange lg:text-gray-700" />
  </button> 
                 {/* Cart icon (mobile + desktop) */}
  <button className="flex h-8 w-10 lg:w-[86px] lg:h-14 items-center justify-center rounded-full lg:border lg:border-gray-300 lg:hover:bg-gray-100 transition">
    <CiShoppingCart className="w-7 h-7 font-extrabold lg:w-6 lg:h-6 text-dark-orange lg:text-gray-700" />
  </button>
              </div>
            </div>
 

 

{/* Mobile Navigation Links */}
<div className="flex flex-col p-4 h-full overflow-y-auto">
  <div className=" divide-y divide-gray-100">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `flex items-center gap-4 py-4 font-medium border-b border-gray-300 ${
          isActive ? "text-light-orange" : "text-dark-orange"
        }`
      }
    >
      <img src="/Home.png" className="w-5 h-5" />
      <span>Home</span>
    </NavLink>

    <NavLink
      to="/about"
      className={({ isActive }) =>
        `flex items-center gap-4 py-4 font-medium border-b border-gray-300 ${
          isActive ? "text-light-orange" : "text-dark-orange"
        }`
      }
    >
      <img src="/About.png" className="w-5 h-5" />
      <span>About</span>
    </NavLink>

    <NavLink
      to="/products"
      className={({ isActive }) =>
        `flex items-center gap-4 py-4 font-medium border-b border-gray-300 ${
          isActive ? "text-light-orange" : "text-dark-orange"
        }`
      }
    >
      <img src="/Product.png" className="w-5 h-5" />
      <span>Products</span>
    </NavLink>

    <NavLink
      to="/podcast"
      className={({ isActive }) =>
        `flex items-center gap-4 py-4 font-medium border-b border-gray-300 ${
          isActive ? "text-light-orange" : "text-dark-orange"
        }`
      }
    >
      <img src="/Podcast.png" className="w-5 h-5" />
      <span>Podcast</span>
    </NavLink>

    <NavLink
      to="/testimonials"
      className={({ isActive }) =>
        `flex items-center gap-4 py-4 font-medium border-b border-gray-300 ${
          isActive ? "text-light-orange" : "text-dark-orange"
        }`
      }
    >
      <img src="/Testimonials.png" className="w-5 h-5" />
      <span>Testimonials</span>
    </NavLink>

    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `flex items-center gap-4 py-4 font-medium border-b border-gray-300 ${
          isActive ? "text-light-orange" : "text-dark-orange"
        }`
      }
    >
      <img src="/Contact.png" className="w-5 h-5" />
      <span>Contact</span>
    </NavLink>

    <NavLink
      to="/blogs"
      className={({ isActive }) =>
        `flex items-center gap-4 py-4 font-medium border-b border-gray-300 ${
          isActive ? "text-light-orange" : "text-dark-orange"
        }`
      }
    >
      <img src="/Blog.png" className="w-5 h-5" />
      <span>Blogs</span>
    </NavLink>

    <NavLink
      to="/faqs"
      className={({ isActive }) =>
        `flex items-center gap-4 py-4 font-medium border-b border-gray-300 ${
          isActive ? "text-light-orange" : "text-dark-orange"
        }`
      }
    >
      <img src="/faq.png" className="w-5 h-5" />
      <span>FAQs</span>
    </NavLink>
  </div>

  {/* Login/Sign Up Button */}
  <div className=" mt-8 flex justify-center">
    <button className="bg-dark-orange text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors">
      Login / Sign Up
    </button>
  </div>

  {/* Contact Information */}
  <div className="mt-8 text-center">
    <p className="text-dark-orange font-semibold text-xl mb-2">Contact us:</p>
    <div className="flex items-center justify-center gap-2 text-dark-orange mb-4">
      <LuPhone className="w-5 h-5"/>
      <span className="font-semibold text-xl">+91 9876543210</span>
    </div>
    
    {/* Social Media Links */}
    <div className="mt-8 flex justify-center gap-6 ">
      <FiFacebook className="h-7 w-7 text-[#FFAB4A] cursor-pointer font-extrabold" />
      <LuTwitter className="h-7 w-7 text-[#FFAB4A] cursor-pointer font-extrabold" />
      <FaInstagram className="h-7 w-7 text-[#FFAB4A] cursor-pointer font-extrabold" />
      <LuYoutube className="h-7 w-7 text-[#FFAB4A] cursor-pointer font-extrabold" />
    </div>
  </div>

 
</div>


          </div>
        )}
      </nav>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            height: 78px !important;
            padding: 10px !important;
          }
          
          nav > div {
            gap: 10px !important;
          }
          
          .mobile-menu {
            width: 100vw !important;
            height: 100vh !important;
            max-width: 100vw !important;
            max-height: 100vh !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Navbar
