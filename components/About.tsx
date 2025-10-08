"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * About Component - Manufacturing Company Profile
 * 
 * Purpose:
 * - Showcase company information and history
 * - Display manufacturing capabilities
 * - Build trust with credentials
 * - Use actual manufacturing images
 * - Professional industrial design
 * 
 * Flow:
 * 1. Component loads with company information
 * 2. Intersection observer triggers animations
 * 3. Images reveal with staggered animations
 * 4. Statistics animate on scroll
 */
export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  console.log("About component rendered. Visible:", isVisible);

  // Intersection Observer for scroll animations
  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
              console.log("About section entered viewport");
            }
          });
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    } catch (error) {
      console.error("Error in about intersection observer:", error);
    }
  }, [isVisible]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-white via-blue-50 to-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-20"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Images with real manufacturing photos */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Manufacturing Images Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group">
                <Image 
                  src="/istockphoto-1179301424-612x612.jpg"
                  alt="Modern manufacturing facility with advanced equipment"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => console.error("About image 1 failed to load:", e)}
                  onLoad={() => console.log("About image 1 loaded")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm text-shadow">Modern Manufacturing</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group">
                <Image 
                  src="/istockphoto-1438543676-612x612.jpg"
                  alt="Precision manufacturing equipment and machinery"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => console.error("About image 2 failed to load:", e)}
                  onLoad={() => console.log("About image 2 loaded")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm text-shadow">Precision Equipment</span>
                </div>
              </div>
            </div>
            
            {/* Company Info Card */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 bg-industrial-pattern opacity-10"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-shadow">Manufacturing Excellence</div>
                    <div className="text-blue-100 font-semibold">by Vedpragya bharat Pvt. Ltd.</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-3xl font-extrabold mb-1">20+</div>
                    <div className="text-xs text-blue-100 font-semibold">Years Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-3xl font-extrabold mb-1">ISO</div>
                    <div className="text-xs text-blue-100 font-semibold">Certified</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-3xl font-extrabold mb-1">500+</div>
                    <div className="text-xs text-blue-100 font-semibold">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>ABOUT OUR COMPANY</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Leading Manufacturing Company
              <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mt-2">
                Delivering Excellence Since 2003
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p className="font-medium">
                <span className="text-gray-900 font-bold">Vedpragya bharat Pvt. Ltd.</span> is a premier manufacturing company 
                specializing in precision engineering, metal fabrication, and industrial products. With over two decades of 
                experience, we serve clients across India and internationally.
              </p>
              <p>
                Our state-of-the-art facilities in <span className="font-semibold text-gray-900">Gurugram</span> and 
                <span className="font-semibold text-gray-900"> Bhiwani</span> are equipped with the latest CNC machines, 
                automated systems, and quality control equipment to ensure the highest standards of manufacturing excellence.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                { icon: "✓", text: "ISO 9001:2015 & ISO 14001 Certified Manufacturing", color: "text-green-600" },
                { icon: "✓", text: "Advanced CNC Machining & Precision Engineering", color: "text-blue-600" },
                { icon: "✓", text: "24/7 Production Capability with Expert Workforce", color: "text-orange-600" },
                { icon: "✓", text: "Serving 500+ Satisfied Clients Nationwide", color: "text-purple-600" },
              ].map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3 group">
                  <span className={`text-2xl ${point.color} font-bold flex-shrink-0 group-hover:scale-125 transition-transform`}>
                    {point.icon}
                  </span>
                  <span className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="btn-primary group text-center"
                onClick={() => console.log("About CTA: Learn More clicked")}
              >
                Learn More About Us
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="#services" 
                className="btn-outline group text-center"
                onClick={() => console.log("About CTA: View Services clicked")}
              >
                View Our Services
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Company Values / Mission with Illustrations */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              illustration: "/illustrations/quality-control.svg",
              fallbackIcon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              title: "Quality First",
              description: "ISO certified processes ensure every product meets the highest quality standards.",
              color: "from-green-500 to-emerald-600"
            },
            { 
              illustration: "/illustrations/innovation.svg",
              fallbackIcon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
              title: "Innovation Driven",
              description: "Continuous investment in latest technology and manufacturing techniques.",
              color: "from-blue-500 to-blue-600"
            },
            { 
              illustration: "/illustrations/supply-chain.svg",
              fallbackIcon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              title: "On-Time Delivery",
              description: "99.5% on-time delivery rate with efficient production and logistics.",
              color: "from-orange-500 to-red-600"
            }
          ].map((value, idx) => (
            <div 
              key={idx}
              className={`card-industrial p-8 text-center group transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(idx + 2) * 200}ms` }}
            >
              <div className="w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <Image 
                  src={value.illustration}
                  alt={`${value.title} illustration`}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain drop-shadow-lg"
                  onError={(e) => {
                    console.error(`Illustration failed to load: ${value.illustration}`);
                    // Hide image on error, fallback icon could be shown instead
                  }}
                  onLoad={() => console.log(`Illustration loaded: ${value.illustration}`)}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}