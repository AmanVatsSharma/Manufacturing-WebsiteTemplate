"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Manufacturing Showcase Component
 * 
 * Purpose:
 * - Highlight manufacturing specializations and expertise
 * - Showcase industry capabilities with images
 * - Professional industrial design
 * - Interactive hover effects
 * 
 * Flow:
 * 1. Component loads with industry specializations
 * 2. Scroll animations trigger when visible
 * 3. Hover interactions reveal more details
 * 4. Display actual manufacturing images
 */
export default function ManufacturingShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  console.log("Manufacturing Showcase rendered. Visible:", isVisible);

  // Intersection Observer for scroll animations
  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
              console.log("Manufacturing Showcase entered viewport");
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
      console.error("Error in showcase intersection observer:", error);
    }
  }, [isVisible]);

  // Manufacturing industry specializations
  const industries = [
    {
      name: "CNC & Precision Machining",
      icon: "⚙️",
      description: "High-precision CNC machining with tolerances up to ±0.001mm",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Metal Fabrication",
      icon: "🔧",
      description: "Expert metal working, welding, and fabrication services",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Automotive Components",
      icon: "🚗",
      description: "OEM automotive parts manufacturing with strict quality standards",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Industrial Equipment",
      icon: "🏭",
      description: "Heavy-duty industrial machinery and equipment manufacturing",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Electronics Assembly",
      icon: "💻",
      description: "PCB assembly and electronics manufacturing services",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Plastic Injection Molding",
      icon: "🧪",
      description: "High-volume plastic injection molding and tooling",
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Sheet Metal Works",
      icon: "📐",
      description: "Precision sheet metal cutting, bending, and forming",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Assembly & Integration",
      icon: "🔩",
      description: "Complete product assembly and system integration services",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-30"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>INDUSTRY EXPERTISE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Manufacturing Excellence Across
            <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mt-2">
              Multiple Industries
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            We specialize in diverse manufacturing sectors with expertise spanning across
            <span className="block mt-2 text-gray-900 font-semibold">
              8+ industry specializations and 1000+ successful projects
            </span>
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`card-industrial p-8 text-center transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
              }}
              onMouseEnter={() => console.log(`Industry card hovered: ${industry.name}`)}
            >
              {/* Icon with gradient background */}
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {industry.icon}
              </div>
              
              {/* Industry name */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {industry.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Manufacturing Capabilities with actual images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Factory Showcase with real image */}
          <div className="group card-industrial overflow-hidden p-0">
            <div className="relative h-64">
              <Image 
                src="/types-of-manufacturing-processes.jpg"
                alt="Manufacturing processes and facility"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => console.error("Factory image failed to load:", e)}
                onLoad={() => console.log("Factory image loaded successfully")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8 text-center bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Multiple Manufacturing Processes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive manufacturing capabilities including CNC machining, metal fabrication, plastic molding, and assembly services.
              </p>
            </div>
          </div>

          {/* Product Catalog with beverage industry example */}
          <div className="group card-industrial overflow-hidden p-0">
            <div className="relative h-64">
              <Image 
                src="/beverage-industry.webp"
                alt="Beverage industry manufacturing"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => console.error("Beverage image failed to load:", e)}
                onLoad={() => console.log("Beverage image loaded successfully")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/95 via-orange-900/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8 text-center bg-gradient-to-br from-orange-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Industry-Specific Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized manufacturing for beverage, automotive, electronics, and other industries with custom solutions and quality standards.
              </p>
            </div>
          </div>

          {/* Quality Certifications */}
          <div className="group card-industrial overflow-hidden p-0">
            <div className="relative h-64 bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            <div className="p-8 text-center bg-gradient-to-br from-green-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                ISO Certified Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ISO 9001:2015 and ISO 14001 certified processes. Every product meets international quality and environmental standards.
              </p>
            </div>
          </div>
        </div>

        {/* Large CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="relative h-96">
            <Image 
              src="/premium_photo-1682144509812-4734c830b486.jpeg"
              alt="Professional manufacturing operations"
              fill
              className="object-cover"
              onError={(e) => console.error("CTA background image failed to load:", e)}
              onLoad={() => console.log("CTA background image loaded")}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
          </div>

          {/* CTA Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-8 max-w-4xl">
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-shadow-strong">
                Ready to Start Your Manufacturing Project?
              </h3>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                Get a <span className="font-bold text-white">free consultation</span> and quote for your manufacturing needs. 
                Our experts are ready to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="btn-primary group"
                  onClick={() => console.log("Showcase CTA: Get Free Quote clicked")}
                >
                  Get Free Quote Now
                  <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="tel:+911234567890" 
                  className="btn-secondary group"
                  onClick={() => console.log("Showcase CTA: Call clicked")}
                >
                  📞 Call: +91 123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}