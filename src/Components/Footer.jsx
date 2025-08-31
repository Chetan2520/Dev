import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [mapExpanded, setMapExpanded] = useState(false);

  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1 px-4">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
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
              <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
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

          {/* Contact Info with Enhanced Map */}
          <div className="px-4">
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 text-sm font-medium">+91 9876543210</p>
                  <p className="text-amber-200 text-xs mt-1">Mon-Sat, 9am-7pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 text-sm">info@devnaturaloils.com</p>
                  <p className="text-amber-200 text-xs mt-1">We reply within 24hrs</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 text-sm">123 Oil Mill Street</p>
                  <p className="text-amber-100 text-sm">Mumbai, Maharashtra 400001</p>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="mt-6">
                <div className="bg-amber-800 rounded-lg p-4">
                  {!mapExpanded ? (
                    <div className="text-center">
                      <div className="bg-white rounded-md h-24 flex items-center justify-center mb-3 relative overflow-hidden">
                        {/* Simple map preview */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
                        <div className="relative z-10 text-center">
                          <MapPin className="w-8 h-8 mx-auto mb-1 text-red-500" />
                          <div className="text-gray-700 text-xs">
                            <div className="font-semibold">Dev Natural Oils</div>
                            <div>Oil Mill Street, Mumbai</div>
                          </div>
                        </div>
                        {/* Decorative roads */}
                        <div className="absolute top-0 left-1/4 w-px h-full bg-gray-300 opacity-50"></div>
                        <div className="absolute top-1/3 left-0 w-full h-px bg-gray-300 opacity-50"></div>
                      </div>
                      <button 
                        onClick={() => setMapExpanded(true)}
                        className="text-amber-200 text-sm hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        View larger map <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="bg-white rounded-md h-48 flex items-center justify-center mb-3 relative overflow-hidden">
                        {/* Enhanced map view */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-green-50"></div>
                        
                        {/* Grid pattern for map feel */}
                        <div className="absolute inset-0 opacity-20">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="absolute top-0 w-px h-full bg-gray-400" style={{left: `${i * 12.5}%`}}></div>
                          ))}
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="absolute left-0 w-full h-px bg-gray-400" style={{top: `${i * 16.67}%`}}></div>
                          ))}
                        </div>
                        
                        {/* Roads */}
                        <div className="absolute top-1/4 left-0 w-full h-1 bg-gray-400 opacity-60"></div>
                        <div className="absolute top-0 left-1/3 w-1 h-full bg-gray-400 opacity-60"></div>
                        <div className="absolute top-2/3 left-1/4 w-3/4 h-0.5 bg-gray-400 opacity-40"></div>
                        
                        {/* Buildings */}
                        <div className="absolute top-1/6 left-1/6 w-4 h-6 bg-gray-500 opacity-40"></div>
                        <div className="absolute top-1/5 right-1/4 w-3 h-4 bg-gray-500 opacity-40"></div>
                        <div className="absolute bottom-1/4 left-3/4 w-5 h-5 bg-gray-500 opacity-40"></div>
                        
                        {/* Main location marker */}
                        <div className="relative z-20 text-center">
                          <div className="animate-bounce">
                            <MapPin className="w-10 h-10 mx-auto mb-2 text-red-500 drop-shadow-lg" />
                          </div>
                          <div className="bg-white bg-opacity-90 rounded-md px-3 py-2 text-gray-700 text-xs shadow-lg">
                            <div className="font-bold">Dev Natural Oils</div>
                            <div>123 Oil Mill Street</div>
                            <div>Mumbai, Maharashtra</div>
                          </div>
                        </div>
                        
                        {/* Nearby landmarks */}
                        <div className="absolute top-1/3 right-1/5 text-xs text-gray-600 bg-white bg-opacity-80 rounded px-2 py-1">
                          Shaheed Sukhdev College
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