"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Hero Section Component - Manufacturing Website
 * 
 * Features:
 * - High-impact hero with actual manufacturing images
 * - Animated statistics and badges
 * - Professional gradient overlays
 * - Smooth entrance animations
 * - Mobile-responsive design
 * - Industrial color palette
 * 
 * Flow:
 * 1. Component mounts and triggers visibility animations
 * 2. Text content slides in from left
 * 3. Image slides in from right
 * 4. Statistics animate with count-up effect
 * 5. User can interact with CTAs
 */
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsAnimated, setStatsAnimated] = useState(false);

  // Console log for debugging
  console.log("Hero component rendered. Visible:", isVisible, "Stats animated:", statsAnimated);

  useEffect(() => {
    try {
      // Trigger entrance animations
      const timer = setTimeout(() => {
        setIsVisible(true);
        console.log("Hero visibility animation triggered");
      }, 100);

      // Trigger stats animation after hero is visible
      const statsTimer = setTimeout(() => {
        setStatsAnimated(true);
        console.log("Statistics animation triggered");
      }, 800);

      return () => {
        clearTimeout(timer);
        clearTimeout(statsTimer);
        console.log("Hero component cleanup");
      };
    } catch (error) {
      console.error("Error in Hero useEffect:", error);
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20"
    >
      {/* Animated background elements with industrial feel */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Subtle grid pattern for industrial feel */}
        <div className="absolute inset-0 bg-industrial-pattern opacity-10"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Text and CTAs */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            
            {/* ISO Certification Badge with pulse effect */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse-glow">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span>ISO 9001:2015 Certified Manufacturing</span>
            </div>

            {/* Main Headline - Powerful and Direct */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Precision Engineering
              <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400 bg-clip-text text-transparent mt-2">
                Manufacturing Excellence
              </span>
            </h1>

            {/* Subheadline with strong value proposition */}
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
              Leading manufacturer of high-quality industrial products and components. 
              <span className="block mt-2 text-white font-semibold">
                Delivering precision, reliability, and innovation across India.
              </span>
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="btn-primary text-center group"
                onClick={() => console.log("Hero CTA: Request a Quote clicked")}
              >
                Request a Quote
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a 
                href="#features" 
                className="btn-outline text-center group bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => console.log("Hero CTA: View Products clicked")}
              >
                View Our Products
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Statistics - Animated counters */}
            <div className={`grid grid-cols-3 gap-6 pt-8 ${statsAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-1">20+</div>
                <div className="text-sm text-blue-100 font-semibold">Years Experience</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-1">ISO</div>
                <div className="text-sm text-blue-100 font-semibold">Certified Quality</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-green-400 mb-1">1000+</div>
                <div className="text-sm text-blue-100 font-semibold">Products Delivered</div>
              </div>
            </div>

            {/* Quality Certifications Bar */}
            <div className="bg-gradient-to-r from-blue-600/30 to-orange-600/30 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-2xl">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-2xl">🏆</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white mb-1">Quality Certifications</p>
                  <p className="text-xs text-blue-100">
                    ISO 9001 • ISO 14001 • CE Certified • Made in India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Manufacturing Image with effects */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              
              {/* Main Manufacturing Image Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                
                {/* Browser-style header for modern look */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center space-x-2 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-slate-700/50 rounded mx-4 px-4 py-2 text-xs text-gray-300 font-mono">
                    vedpragyabharat.com
                  </div>
                </div>
                
                {/* Manufacturing Team/Facility Image */}
                <div className="relative h-[500px] group">
                  <Image 
                    src="/20240613_BRI_ManufacturingTeam_1200x600_REDUCED-1080x600.jpg"
                    alt="Vedpragya Bahrat Manufacturing Team - Professional industrial workforce"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    onError={(e) => {
                      console.error("Hero image failed to load:", e);
                    }}
                    onLoad={() => {
                      console.log("Hero manufacturing image loaded successfully");
                    }}
                  />
                  
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent flex flex-col justify-end p-8 text-white">
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-shadow-strong">
                        State-of-the-Art Manufacturing
                      </h3>
                      <p className="text-blue-100 text-lg font-medium text-shadow">
                        Advanced facilities • Expert workforce • Quality assurance
                      </p>
                      
                      {/* Quick Stats in Image */}
                      <div className="grid grid-cols-2 gap-3 pt-3">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                          <div className="text-2xl font-bold text-blue-300">99.9%</div>
                          <div className="text-xs text-blue-100">Quality Rate</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                          <div className="text-2xl font-bold text-orange-300">24/7</div>
                          <div className="text-xs text-blue-100">Production</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Success Badge - Top Right */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-2xl p-5 animate-float border-4 border-white">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-green-100 font-semibold">Lead Captured</div>
                    <div className="text-sm font-bold text-white">New Inquiry</div>
                  </div>
                </div>
              </div>

              {/* Floating Growth Badge - Bottom Left */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-5 animate-float border-4 border-white" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-blue-100 font-semibold">Business Growth</div>
                    <div className="text-sm font-bold text-white">+250% Traffic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Animated */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Scroll Down</span>
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}