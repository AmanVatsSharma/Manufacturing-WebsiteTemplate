"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Manufacturing Gallery Component
 * 
 * Purpose:
 * - Showcase actual manufacturing facilities and equipment
 * - Use real images from the public folder
 * - High-impact visual presentation
 * - Interactive hover effects
 * - Scroll-triggered animations
 * 
 * Flow:
 * 1. Component loads with manufacturing images
 * 2. Intersection Observer detects when scrolled into view
 * 3. Staggered animation for each gallery item
 * 4. Hover reveals additional information
 */
export default function ManufacturingGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  console.log("ManufacturingGallery rendered. Visible:", isVisible);

  // Intersection Observer for scroll animations
  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
              console.log("Manufacturing Gallery section entered viewport");
            }
          });
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
        console.log("Intersection observer attached to gallery");
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
          console.log("Gallery observer cleaned up");
        }
      };
    } catch (error) {
      console.error("Error in gallery intersection observer:", error);
    }
  }, [isVisible]);

  // Gallery with actual manufacturing images from public folder
  const galleryImages = [
    {
      path: "/types-of-manufacturing-processes.jpg",
      title: "Advanced Manufacturing Processes",
      description: "Multiple manufacturing techniques & processes",
      category: "PROCESSES"
    },
    {
      path: "/beverage-industry.webp",
      title: "Industrial Beverage Production",
      description: "State-of-the-art beverage manufacturing",
      category: "PRODUCTION"
    },
    {
      path: "/istockphoto-1179301424-612x612.jpg",
      title: "Modern Manufacturing Equipment",
      description: "High-tech machinery and automation",
      category: "EQUIPMENT"
    },
    {
      path: "/istockphoto-1438543676-612x612.jpg",
      title: "Quality Manufacturing Facility",
      description: "Professional production environment",
      category: "FACILITY"
    },
    {
      path: "/premium_photo-1682144509812-4734c830b486.jpeg",
      title: "Precision Manufacturing Operations",
      description: "Expert workforce & advanced technology",
      category: "OPERATIONS"
    },
    {
      path: "/20240613_BRI_ManufacturingTeam_1200x600_REDUCED-1080x600.jpg",
      title: "Professional Manufacturing Team",
      description: "Skilled workforce & collaborative environment",
      category: "TEAM"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>OUR FACILITIES & CAPABILITIES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            World-Class Manufacturing
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mt-2">
              Facilities & Equipment
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Take a look at our state-of-the-art manufacturing facilities equipped with 
            <span className="block mt-2 text-white font-semibold">
              the latest technology and expert workforce
            </span>
          </p>
        </div>

        {/* Gallery Grid with actual manufacturing images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/10 hover:border-white/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
              }}
              onMouseEnter={() => console.log(`Gallery image hovered: ${image.title}`)}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                {image.category}
              </div>

              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={image.path}
                  alt={image.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    console.error(`Gallery image failed to load: ${image.path}`, e);
                  }}
                  onLoad={() => {
                    console.log(`Gallery image loaded: ${image.path}`);
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Content Overlay - Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 text-shadow-strong group-hover:text-blue-300 transition-colors">
                  {image.title}
                </h3>
                <p className="text-sm text-blue-100 text-shadow">
                  {image.description}
                </p>

                {/* View Details Button - Appears on Hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-lg text-sm font-semibold">
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section with industrial styling */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
          {/* Background with pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600"></div>
          <div className="absolute inset-0 bg-industrial-pattern opacity-20"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-shadow-strong">
                Want to See More of Our Facility?
              </h3>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                Schedule a <span className="font-bold text-white">virtual or in-person tour</span> of our manufacturing facility 
                or request detailed product catalogs and technical specifications.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-blue-600 font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => console.log("Gallery CTA: Schedule Tour clicked")}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>📅 Schedule a Facility Tour</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="#contact" 
                  className="inline-block bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold px-10 py-5 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  onClick={() => console.log("Gallery CTA: Request Catalog clicked")}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>📄 Request Product Catalog</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold mb-2">10,000+</div>
                  <div className="text-blue-100 text-sm font-semibold">sq ft Facility</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold mb-2">50+</div>
                  <div className="text-blue-100 text-sm font-semibold">Advanced Machines</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold mb-2">100+</div>
                  <div className="text-blue-100 text-sm font-semibold">Skilled Workers</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold mb-2">24/7</div>
                  <div className="text-blue-100 text-sm font-semibold">Production</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}