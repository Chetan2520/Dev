import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [mapExpanded, setMapExpanded] = useState(false);

  // Google Maps embed URL for Mittal Alliance location
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.757!2d75.8843361!3d22.717985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3bbb3e7773%3A0x98b2eaf977fdf2d6!2sMittal%20Alliance%20Limited!5e0!3m2!1sen!2sin!4v1693483200000!5m2!1sen!2sin";
  
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=22.717985,75.8843361&zoom=15&size=300x150&maptype=roadmap&markers=color:red%7Clabel:M%7C22.717985,75.8843361&key=YOUR_API_KEY`;

  return (
    <footer className="bg-amber-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-7">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 w-full px-2 sm:px-4">
            <div className="flex items-center mb-4 sm:mb-6">
              <img src='/FooterLogo.png' className='w-16 h-16 sm:w-20 sm:h-20'></img>
              <div className="ml-3 sm:ml-0">
                <h3 className="font-bold text-lg sm:text-xl">Dev Natural Oils</h3>
                <p className="text-amber-200 text-sm sm:text-lg">Pure • Natural • Premium</p>
              </div>
            </div>
            <p className="text-[#D1D5DB] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 pr-2 sm:pr-4">
              We are committed to providing the finest quality cold-pressed and wood-pressed oils, preserving traditional methods while ensuring premium nutrition and authentic flavors.
            </p>
            {/* Social Media Icons */}
            <div className="flex  sm:space-x-4">
              <Link to="#" className="w-8 h-8 sm:w-10 sm:h-10">
                <Facebook className="w-5 h-5 sm:w-7 sm:h-7 text-light-orange" />
              </Link>
              <Link to="#" className="w-8 h-8 sm:w-10 sm:h-10">
                <Twitter className="w-5 h-5 sm:w-7 sm:h-7 text-light-orange" />
              </Link>
              <Link to="#" className="w-8 h-8 sm:w-10 sm:h-10">
                <Instagram className="w-5 h-5 sm:w-7 sm:h-7 text-light-orange" />
              </Link>
              <Link to="#" className="w-8 h-8 sm:w-10 sm:h-10">
                <Youtube className="w-5 h-5 sm:w-7 sm:h-7 text-light-orange" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-2 sm:px-4">
            <h4 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 underline sm:no-underline">Quick Links</h4>
            <ul className="">
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Home</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">All Products</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Cold & Wood Pressed Oils</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">About Us</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="px-2 sm:px-4">
            <h4 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 underline sm:no-underline">Customer Service</h4>
            <ul className="">
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Contact Us</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">FAQ</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Shipping Info</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Return Policy</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Track Order</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="px-2 sm:px-4">
            <h4 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 underline sm:no-underline">Policies</h4>
            <ul className="">
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Track Order</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Contact Us</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Privacy Policy</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Return Policy</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Shipping Policy</Link></li>
              <li><Link to="#" className="text-[#D1D5DB] hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-200 block">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info with Real Google Map */}
          <div className="sm:col-span-2 lg:col-span-2 px-2 sm:px-4">
            <h4 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 underline sm:no-underline">Contact Info</h4>
            <div className="">
              {/* Phone */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-light-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#D1D5DB] text-sm sm:text-base lg:text-lg font-medium">+91 9876543210</p>
                  <p className="text-xs sm:text-sm mt-1">Mon-Sat, 9am-7pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-light-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#D1D5DB] text-sm sm:text-base lg:text-lg">info@devnaturaloils.com</p>
                  <p className="text-xs sm:text-sm mt-1">We reply within 24hrs</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-light-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#D1D5DB] text-sm sm:text-base lg:text-lg">Mittal Alliance Limited</p>
                  <p className="text-sm sm:text-base lg:text-lg">Indore, Madhya Pradesh</p>
                </div>
              </div>

              {/* Interactive Google Map */}
              <div className="mt-4 sm:mt-6">
                <div className="rounded-lg p-2 sm:p-4">
                  {!mapExpanded ? (
                    <div className="text-center">
                      {/* lgall map preview using Google Maps embed */}
                      <div className="rounded-md h-20 sm:h-24 overflow-hidden mb-2 sm:mb-3 relative">
                        <iframe
                          src={mapEmbedUrl}
                          width="100%"
                          height="100%"
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                        {/* Overlay with company info */}
                        <div className="absolute inset-0    bg-opacity-40 flex items-center justify-center pointer-events-none">
                          <div className="text-center text-white">
                            <MapPin className="w-4 h-4 sm:w-6 sm:h-6 mx-auto mb-1 text-red-400" />
                            <div className="text-xs sm:text-xs font-semibold">Mittal Alliance Limited</div>
                            <div className="text-xs sm:text-xs opacity-90">Indore, Madhya Pradesh</div>
                          </div>
                        </div>
                      </div>
                      {/* <button 
                        onClick={() => setMapExpanded(true)}
                        className="text-amber-200 text-lg hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        View larger map <ExternalLink className="w-3 h-3" />
                      </button> */}
                    </div>
                  ) : (
                    <div className="text-center">
                      {/* Full-size interactive Google Map */}
                      <div className="rounded-md h-40 sm:h-48 overflow-hidden mb-2 sm:mb-3 relative">
                        <iframe
                          src={mapEmbedUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Mittal Alliance Limited Location"
                        ></iframe>
                        {/* Custom marker overlay */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none">
                          <div className="animate-bounce">
                            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 drop-shadow-lg" />
                          </div>
                          <div className="bg-white bg-opacity-95 rounded-md px-2 sm:px-3 py-1 sm:py-2 text-gray-700 text-xs shadow-lg mt-1 min-w-max">
                            <div className="font-bold text-center">Mittal Alliance Limited</div>
                            <div className="text-center">Indore, Madhya Pradesh</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <button 
                          onClick={() => setMapExpanded(false)}
                          className="text-amber-200 text-sm sm:text-lg hover:text-white transition-colors duration-200"
                        >
                          Collapse map
                        </button>
                        <span className="text-amber-300 hidden sm:inline">•</span>
                        <Link 
                          to="https://www.google.com/maps/place/%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%B2+%E0%A4%85%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A4%BE%E0%A4%AF%E0%A4%82%E0%A4%B8%E0%A5%87%E0%A4%9C+%E0%A4%B2%E0%A4%BF%E0%A4%AE%E0%A4%BF%E0%A4%9F%E0%A5%87%E0%A4%A1/@22.717985,75.8843361,3a,59y,62.74h,92.87t/data=!3m7!1e1!3m5!1s90q45nt3x-da6iQL_lFcUA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-2.873528666897627%26panoid%3D90q45nt3x-da6iQL_lFcUA%26yaw%3D62.74246542223541!7i13312!8i6656!4m10!1m2!2m1!1smittal+alliance!3m6!1s0x3962fd3bbb3e7773:0x98b2eaf977fdf2d6!8m2!3d22.7179297!4d75.8845262!15sCg9taXR0YWwgYWxsaWFuY2VaESIPbWl0dGFsIGFsbGlhbmNlkgEMbWFudWZhY3R1cmVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU10YVdGWFYwMTNFQUWqAU0QASoTIg9taXR0YWwgYWxsaWFuY2UoADIfEAEiG7_XJG6Z_Lll2Ii2ZUGjLIY-17giIou5oNEwMzITEAIiD21pdHRhbCBhbGxpYW5jZeABAPoBBAgAEBM!16s%2Fg%2F1tfzf4t0?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-amber-200 text-sm sm:text-lg hover:text-white transition-colors duration-200 flex items-center gap-1"
                        >
                          Open in Google Maps <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6 py-4 sm:py-6">
          <p className="text-center text-amber-200 text-sm sm:text-base lg:text-lg">
            © 2024 Dev Natural Oils. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;