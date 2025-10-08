"use client";

import { useState, useEffect, useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

/**
 * WhatYouGet Component - Comprehensive Feature Showcase
 * 
 * Purpose:
 * - Display all website features and capabilities
 * - Manufacturing-specific functionality showcase
 * - Value proposition demonstration
 * - Scroll-triggered animations
 * - High-contrast professional design
 * 
 * Flow:
 * 1. Load feature categories
 * 2. Intersection Observer triggers animations
 * 3. Staggered entrance animations for each card
 * 4. Interactive hover effects
 * 5. Animated statistics counters
 */
export default function WhatYouGet() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  console.log("WhatYouGet component rendered. Visible:", isVisible);

  // Intersection Observer for scroll animations
  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
              console.log("WhatYouGet section entered viewport");
            }
          });
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
        console.log("WhatYouGet intersection observer attached");
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
          console.log("WhatYouGet observer cleaned up");
        }
      };
    } catch (error) {
      console.error("Error in WhatYouGet intersection observer:", error);
    }
  }, [isVisible]);

  // Manufacturing-focused feature categories
  const features = [
    {
      category: "🎨 Professional Design",
      items: [
        "Premium, mobile-first responsive design",
        "Industrial color schemes matching manufacturing brand",
        "Professional typography and spacing",
        "Smooth animations and micro-interactions",
        "Stunning hero sections with high-impact visuals",
        "Interactive UI components for engagement"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "📊 Lead Generation System",
      items: [
        "Smart contact forms with validation",
        "Quote request functionality for manufacturing inquiries",
        "Admin dashboard to manage leads effectively",
        "Email notifications for new business leads",
        "Lead status tracking (New, Contacted, Qualified)",
        "Export leads to CSV/Excel for analysis"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "🚀 Performance & SEO",
      items: [
        "Lightning-fast page load times (< 1 second)",
        "100/100 Lighthouse SEO score guaranteed",
        "Schema.org structured data for manufacturing",
        "Open Graph tags for social media sharing",
        "XML sitemap generation for search engines",
        "Optimized images with lazy loading"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "📈 Analytics & Tracking",
      items: [
        "Google Analytics 4 integration for insights",
        "Facebook Pixel tracking for advertising",
        "Google Tag Manager setup for flexibility",
        "Conversion tracking & business goals",
        "Heatmap integration ready for user behavior",
        "Custom event tracking for KPIs"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "🏭 Manufacturing Features",
      items: [
        "Product/Service catalog with specifications",
        "Equipment & capabilities showcase",
        "Quality certifications prominent display (ISO)",
        "Professional photo/video galleries",
        "Technical specifications viewer",
        "CAD/PDF document downloads for clients"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "💼 Business Pages",
      items: [
        "About Us with comprehensive company history",
        "Services/Capabilities detailed pages",
        "Manufacturing case studies & portfolio",
        "Client testimonials section",
        "Team member profiles and expertise",
        "Contact page with Google Maps integration"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "🔒 Security & Reliability",
      items: [
        "SSL/HTTPS encryption for all pages",
        "DDoS protection for uptime",
        "Regular automated backups daily",
        "99.9% uptime guarantee SLA",
        "Secure form submissions",
        "GDPR compliance ready"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      category: "⚡ Technical Excellence",
      items: [
        "Built with Next.js 15 (latest technology)",
        "TypeScript for code type safety",
        "Server-side rendering (SSR) for speed",
        "API routes for backend logic",
        "Modular component architecture",
        "Easy to maintain & scale for growth"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "📱 Content Management",
      items: [
        "Easy-to-update content sections",
        "Image optimization system built-in",
        "Blog/news section ready for announcements",
        "Multi-language support ready",
        "Custom admin panel included",
        "No coding required for content updates"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      category: "🎯 Marketing Tools",
      items: [
        "Call-to-action buttons optimized for conversion",
        "Newsletter signup forms",
        "Social media integration complete",
        "WhatsApp/Phone click-to-call functionality",
        "Live chat widget ready",
        "Email marketing integration"
      ],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-bounce-in">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>⭐ COMPLETE PACKAGE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Everything You Get With
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent mt-2">
              Your Manufacturing Website
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            A complete, enterprise-grade website solution with <strong className="text-blue-600 font-extrabold">60+ Premium Features</strong> included. 
            <span className="block mt-2 text-gray-900 font-semibold">
              Not just a website - a complete digital transformation for manufacturing!
            </span>
          </p>
        </div>

        {/* Features Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-industrial p-8 transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } hover:scale-105 group`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
              }}
              onMouseEnter={() => console.log(`Feature card hovered: ${feature.category}`)}
            >
              {/* Category Header with gradient */}
              <div className={`inline-block bg-gradient-to-r ${feature.color} text-white px-5 py-2.5 rounded-xl font-bold text-sm mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                {feature.category}
              </div>

              {/* Feature Items with checkmarks */}
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start group/item">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Value Proposition Banner with animations */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 animate-gradient"></div>
          <div className="absolute inset-0 bg-industrial-pattern opacity-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-32 translate-y-32 animate-float" style={{ animationDelay: "2s" }}></div>
          
          <div className="relative z-10 p-12 md:p-16 text-white text-center">
            <div className="text-5xl md:text-6xl font-extrabold mb-6 text-shadow-strong">
              <AnimatedCounter end={250000} prefix="₹" suffix="+" className="inline-block" /> Value
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-6">
              If You Built All This Separately
            </div>
            <div className="max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { amount: 80000, label: "Website Design" },
                  { amount: 60000, label: "Development" },
                  { amount: 40000, label: "SEO Setup" },
                  { amount: 70000, label: "Annual Maintenance" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-extrabold mb-2">
                      <AnimatedCounter end={item.amount} prefix="₹" className="inline-block" />
                    </div>
                    <div className="text-sm text-blue-100 font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get everything in one comprehensive package - 
              <span className="block mt-2 text-white font-bold text-2xl">
                The smart choice for manufacturing businesses!
              </span>
            </div>
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-600 px-12 py-6 rounded-2xl font-extrabold text-xl shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300 group"
              onClick={() => console.log("WhatYouGet CTA: Get Started clicked")}
            >
              Get Started Now - Limited Offer
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Trust Indicators with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { end: 60, suffix: "+", label: "Features Included", color: "text-blue-600" },
            { end: 100, suffix: "%", label: "Customizable", color: "text-orange-600" },
            { end: 24, suffix: "/7", label: "Support", color: "text-green-600" },
            { end: 99.9, suffix: "%", label: "Uptime", decimals: 1, color: "text-purple-600" },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className={`card-industrial p-8 transition-all duration-500 transform ${
                isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
              style={{ transitionDelay: `${(idx + features.length) * 100}ms` }}
            >
              <div className={`text-5xl font-extrabold ${stat.color} mb-3`}>
                <AnimatedCounter 
                  end={stat.end} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-gray-600 font-bold text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}