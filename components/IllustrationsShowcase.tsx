"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Illustrations Showcase Component
 * 
 * Purpose:
 * - Display key manufacturing illustrations prominently
 * - Show capabilities and services visually
 * - Professional animated entrance
 * - High-impact visual communication
 */
export default function IllustrationsShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  console.log("IllustrationsShowcase rendered. Visible:", isVisible);

  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
              console.log("Illustrations showcase entered viewport");
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
      console.error("Error in illustrations showcase observer:", error);
    }
  }, [isVisible]);

  const illustrations = [
    {
      src: "/illustrations/factory-worker.svg",
      title: "Expert Workforce",
      description: "Skilled manufacturing professionals",
      color: "from-blue-500 to-blue-600"
    },
    {
      src: "/illustrations/industrial-robot.svg",
      title: "Advanced Automation",
      description: "State-of-the-art robotic systems",
      color: "from-purple-500 to-purple-600"
    },
    {
      src: "/illustrations/engineering.svg",
      title: "Precision Engineering",
      description: "High-accuracy manufacturing",
      color: "from-orange-500 to-orange-600"
    },
    {
      src: "/illustrations/quality-control.svg",
      title: "Quality Assurance",
      description: "ISO certified quality processes",
      color: "from-green-500 to-green-600"
    },
    {
      src: "/illustrations/cnc-machine.svg",
      title: "CNC Machining",
      description: "Advanced CNC capabilities",
      color: "from-red-500 to-red-600"
    },
    {
      src: "/illustrations/customer-support.svg",
      title: "24/7 Support",
      description: "Round-the-clock assistance",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>OUR CAPABILITIES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Complete Manufacturing
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Solutions & Services
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            From concept to completion - we provide comprehensive manufacturing services
            <span className="block mt-2 text-gray-900 font-semibold">
              backed by advanced technology and expert workforce
            </span>
          </p>
        </div>

        {/* Illustrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {illustrations.map((item, idx) => (
            <div
              key={idx}
              className={`card-industrial p-8 text-center group transition-all duration-700 transform hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
              onMouseEnter={() => console.log(`Illustration card hovered: ${item.title}`)}
            >
              {/* Illustration Image */}
              <div className="w-48 h-48 mx-auto mb-6 relative group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={item.src}
                  alt={`${item.title} - Manufacturing illustration`}
                  width={192}
                  height={192}
                  className="w-full h-full object-contain drop-shadow-xl"
                  onError={(e) => {
                    console.error(`Illustration failed to load: ${item.src}`);
                  }}
                  onLoad={() => {
                    console.log(`Illustration loaded successfully: ${item.src}`);
                  }}
                />
              </div>

              {/* Badge */}
              <div className={`inline-block bg-gradient-to-r ${item.color} text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-md`}>
                {item.title}
              </div>

              {/* Description */}
              <p className="text-gray-600 font-medium text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Illustrations Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { src: "/illustrations/certification.svg", label: "ISO Certified" },
            { src: "/illustrations/security.svg", label: "Secure Operations" },
            { src: "/illustrations/analytics-dashboard.svg", label: "Data Analytics" },
            { src: "/illustrations/factory-building.svg", label: "Modern Facilities" }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`card-industrial p-6 text-center transition-all duration-500 transform hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${(idx + 6) * 100}ms` : '0ms' }}
            >
              <div className="w-24 h-24 mx-auto mb-3">
                <Image 
                  src={item.src}
                  alt={`${item.label} illustration`}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  onError={(e) => console.error(`Small illustration failed: ${item.src}`)}
                  onLoad={() => console.log(`Small illustration loaded: ${item.src}`)}
                />
              </div>
              <p className="text-sm font-bold text-gray-900">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="btn-primary inline-block group"
            onClick={() => console.log("Illustrations CTA clicked")}
          >
            Explore Our Full Capabilities
            <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
