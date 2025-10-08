"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Features Component - Manufacturing Website Showcase
 * 
 * Purpose:
 * - Display key features and benefits for manufacturing businesses
 * - High-contrast industrial design
 * - Animated entrance effects
 * - Hover interactions for engagement
 * 
 * Flow:
 * 1. Features load with data
 * 2. Intersection Observer triggers animations when scrolled into view
 * 3. Each card animates in with delay
 * 4. Hover effects provide interactivity
 */
export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Console log for debugging
  console.log("Features component rendered. Visible:", isVisible);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
              console.log("Features section entered viewport - animations triggered");
            }
          });
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
        console.log("Intersection observer attached to Features section");
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
          console.log("Intersection observer cleaned up");
        }
      };
    } catch (error) {
      console.error("Error setting up Features intersection observer:", error);
    }
  }, [isVisible]);

  // Manufacturing-specific features
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "ISO Certified Quality",
      description: "ISO 9001:2015 and ISO 14001 certified manufacturing processes. Quality assurance at every step with 99.9% accuracy rate.",
      color: "blue",
      badge: "CERTIFIED"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Production",
      description: "State-of-the-art CNC machines and automated systems. 24/7 production capability with quick turnaround times.",
      color: "orange",
      badge: "24/7"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Precision Engineering",
      description: "Tolerances up to ±0.001mm with advanced measurement systems. Expert engineering team with 20+ years experience.",
      color: "green",
      badge: "EXPERT"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Advanced Facilities",
      description: "Modern manufacturing plants with cutting-edge equipment. Climate-controlled production areas for optimal quality.",
      color: "purple",
      badge: "MODERN"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Skilled Workforce",
      description: "Highly trained technicians and engineers. Continuous training programs to maintain excellence in manufacturing.",
      color: "indigo",
      badge: "TRAINED"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "On-Time Delivery",
      description: "99.5% on-time delivery rate. Efficient logistics and supply chain management for timely order fulfillment.",
      color: "teal",
      badge: "RELIABLE"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Quality Testing",
      description: "Rigorous multi-stage testing procedures. Complete documentation and certification for every product batch.",
      color: "red",
      badge: "VERIFIED"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Custom Solutions",
      description: "Tailored manufacturing solutions for unique requirements. From prototyping to full-scale production runs.",
      color: "yellow",
      badge: "FLEXIBLE"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock technical support and customer service. Dedicated account managers for enterprise clients.",
      color: "pink",
      badge: "SUPPORT"
    }
  ];

  const colorClasses: Record<string, { bg: string, text: string, border: string, hover: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", hover: "hover:border-blue-500" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hover: "hover:border-orange-500" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", hover: "hover:border-green-500" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hover: "hover:border-purple-500" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", hover: "hover:border-indigo-500" },
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", hover: "hover:border-red-500" },
    yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200", hover: "hover:border-yellow-500" },
    teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", hover: "hover:border-teal-500" },
    pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-200", hover: "hover:border-pink-500" },
  };

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-30"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>MANUFACTURING EXCELLENCE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why Choose
            <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mt-2">
              Vedpragya Bahrat?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Enterprise-grade manufacturing capabilities that drive results. 
            <span className="block mt-2 text-gray-900 font-semibold">
              No compromises, just excellence.
            </span>
          </p>
        </div>

        {/* Features Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            return (
              <div
                key={index}
                className={`group card-industrial p-8 transition-all duration-500 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                } ${colors.hover}`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
                }}
                onMouseEnter={() => console.log(`Feature card hovered: ${feature.title}`)}
              >
                {/* Badge */}
                <div className={`inline-block ${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-bold mb-4 border ${colors.border}`}>
                  {feature.badge}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border-2 ${colors.border}`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section with Image Background */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-orange-600/95"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-white text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-shadow-strong">
              Ready to Transform Your Manufacturing?
            </h3>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join <span className="font-bold text-white">500+ manufacturing businesses</span> that trust Vedpragya Bahrat for their production needs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300 group"
                onClick={() => console.log("Features CTA: Get Started clicked")}
              >
                Get Your Quote Now
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a 
                href="tel:+911234567890" 
                className="inline-block bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 group"
                onClick={() => console.log("Features CTA: Call Now clicked")}
              >
                📞 Call Now: +91 123 456 7890
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">500+</div>
                <div className="text-blue-100 text-sm font-semibold">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">99.9%</div>
                <div className="text-blue-100 text-sm font-semibold">Quality Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">20+</div>
                <div className="text-blue-100 text-sm font-semibold">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">24/7</div>
                <div className="text-blue-100 text-sm font-semibold">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}