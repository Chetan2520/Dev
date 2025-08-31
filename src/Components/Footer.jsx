import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [mapExpanded, setMapExpanded] = useState(false);

  // Google Maps embed URL for the location
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9470405717895!2d72.8310607!3d19.0176147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9c0b5b7f8b%3A0x8f9f6b9b9b9b9b9b!2s123%20Oil%20Mill%20Street%2C%20Mumbai%2C%20Maharashtra%20400001%2C%20India!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin";
  
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=19.0176147,72.8310607&zoom=15&size=300x150&maptype=roadmap&markers=color:red%7Clabel:D%7C19.0176147,72.8310607&key=YOUR_API_KEY`;

  return (
    <footer className="bg-amber-900 text-white px-12">
      <div className="  px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1 w-[102%] px-4">
            <div className="flex items-center mb-6">
              <img src='/FooterLogo.png' className='w-20 h-20'></img>
              <div>
                <h3 className="font-bold text-xl">Dev Natural Oils</h3>
                <p className="text-amber-200 text-sm">Pure • Natural • Premium</p>
              </div>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed mb-8 pr-4">
              We are committed to providing the finest quality cold-pressed and wood-pressed oils, preserving traditional methods while ensuring premium nutrition and authentic flavors.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 ">
                <Facebook className="w-7 h-7 text-light-orange" />
              </a>
              <a href="#" className="w-10 h-10 ">
                <Twitter className="w-7 h-7 text-light-orange" />
              </a>
              <a href="#" className="w-10 h-10 ">
                <Instagram className="w-7 h-7 text-light-orange" />
              </a>
              <a href="#" className="w-10 h-10 ">
                <Youtube className="w-7 h-7 text-light-orange"  />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-4">
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Home</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">All Products</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Cold & Wood Pressed Oils</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">About Us</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="px-4">
            <h4 className="font-semibold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Contact Us</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">FAQ</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Shipping Info</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Return Policy</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Track Order</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="px-4">
            <h4 className="font-semibold text-lg mb-6">Policies</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Track Order</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Contact Us</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Privacy Policy</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Return Policy</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Shipping Policy</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200 block py-1">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info with Real Google Map */}
          <div className="px-4">
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-light-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 text-sm font-medium">+91 9876543210</p>
                  <p className=" text-xs mt-1">Mon-Sat, 9am-7pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-light-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 text-sm">info@devnaturaloils.com</p>
                  <p className=" text-xs mt-1">We reply within 24hrs</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-light-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 text-sm">123 Oil Mill Street</p>
                  <p className=" text-sm">Mumbai, Maharashtra 400001</p>
                </div>
              </div>

              {/* Interactive Google Map */}
              <div className="mt-6">
                <div className=" rounded-lg p-4">
                  {!mapExpanded ? (
                    <div className="text-center">
                      {/* Small map preview using Google Maps embed */}
                      <div className="rounded-md h-24 overflow-hidden mb-3 relative">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.757!2d72.8260748!3d19.0176147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5d8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1693483200000!5m2!1sen!2sin&zoom=14"
                          width="100%"
                          height="100%"
                          
                          allowFullScreen=""
                          loading="lazy"
                          
                        ></iframe>
                        {/* Overlay with company info */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center pointer-events-none">
                          <div className="text-center text-white">
                            <MapPin className="w-6 h-6 mx-auto mb-1 text-red-400" />
                            <div className="text-xs font-semibold">Dev Natural Oils</div>
                            <div className="text-xs opacity-90">Oil Mill Street, Mumbai</div>
                          </div>
                        </div>
                      </div>
                      {/* <button 
                        onClick={() => setMapExpanded(true)}
                        className="text-amber-200 text-sm hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        View larger map <ExternalLink className="w-3 h-3" />
                      </button> */}
                    </div>
                  ) : (
                    <div className="text-center">
                      {/* Full-size interactive Google Map */}
                      <div className="rounded-md h-48 overflow-hidden mb-3 relative">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9470405717895!2d72.8288660!3d19.0176147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5d8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1693483200000!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Dev Natural Oils Location"
                        ></iframe>
                        {/* Custom marker overlay */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none">
                          <div className="animate-bounce">
                            <MapPin className="w-8 h-8 text-red-500 drop-shadow-lg" />
                          </div>
                          <div className="bg-white bg-opacity-95 rounded-md px-3 py-2 text-gray-700 text-xs shadow-lg mt-1 min-w-max">
                            <div className="font-bold text-center">Dev Natural Oils</div>
                            <div className="text-center">123 Oil Mill Street</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 justify-center">
                        <button 
                          onClick={() => setMapExpanded(false)}
                          className="text-amber-200 text-sm hover:text-white transition-colors duration-200"
                        >
                          Collapse map
                        </button>
                        <span className="text-amber-300">•</span>
                        <a 
                          href="https://maps.google.com/?q=123+Oil+Mill+Street+Mumbai+Maharashtra+400001" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-amber-200 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1"
                        >
                          Open in Google Maps <ExternalLink className="w-3 h-3" />
                        </a>
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
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-amber-200 text-sm">
            © 2024 Dev Natural Oils. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;