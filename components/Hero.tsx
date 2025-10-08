"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span>ISO Certified Manufacturing Excellence</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Precision Engineering
              <span className="block gradient-text">Manufacturing Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Leading manufacturer of high-quality industrial products and components. Delivering precision, reliability, and innovation to industries across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Request a Quote
                <span className="ml-2">→</span>
              </a>
              <a 
                href="#features" 
                className="bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                View Products
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">ISO</div>
                <div className="text-sm text-gray-600 mt-1">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600">1000+</div>
                <div className="text-sm text-gray-600 mt-1">Products</div>
              </div>
            </div>

            {/* Quality Badge */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-700">
                🏆 Quality Certifications: ISO 9001 • ISO 14001 • CE Certified • Made in India
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Browser mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-700 rounded mx-4 px-3 py-1 text-xs text-gray-300">
                    vedpragyabharat.com
                  </div>
                </div>
                {/* Manufacturing Image */}
                <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop" 
                    alt="Manufacturing facility" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent flex flex-col justify-end p-8 text-white">
                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold">Manufacturing Excellence</h3>
                      <p className="text-blue-100">State-of-the-art facilities & precision engineering</p>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                          <div className="text-2xl font-bold">ISO</div>
                          <div className="text-sm text-blue-100">Certified</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                          <div className="text-2xl font-bold">20+</div>
                          <div className="text-sm text-blue-100">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Lead Captured</div>
                    <div className="text-sm font-bold text-gray-900">New Inquiry</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Traffic</div>
                    <div className="text-sm font-bold text-gray-900">+250% Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}