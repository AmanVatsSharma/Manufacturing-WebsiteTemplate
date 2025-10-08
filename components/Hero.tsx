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
              <span>Enterprise-Grade Web Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="block gradient-text">Manufacturing Business</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              World-class websites that drive growth, capture leads, and showcase your manufacturing excellence. Built by experts, designed for results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Get a Website Like This
                <span className="ml-2">→</span>
              </a>
              <a 
                href="#features" 
                className="bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">SEO Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">99+</div>
                <div className="text-sm text-gray-600 mt-1">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
            </div>

            {/* Analytics Integration Badge */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-700">
                🎯 All Analytics Integrated: Google Analytics • Facebook Pixel • Google Tag Manager
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
                    enterprisehero.com
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-8 md:p-12 text-white">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Your Manufacturing Excellence</h3>
                    <p className="text-blue-100">Powered by enterprise technology</p>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm text-blue-100">Support</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-sm text-blue-100">Uptime</div>
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