"use client";

export default function WhatYouGet() {
  const features = [
    {
      category: "🎨 Design & User Experience",
      items: [
        "Premium, modern, mobile-first responsive design",
        "Custom color schemes matching your brand",
        "Professional typography and spacing",
        "Smooth animations and micro-interactions",
        "Stunning hero sections with CTAs",
        "Interactive UI components"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "📊 Lead Generation System",
      items: [
        "Smart contact forms with validation",
        "Quote request functionality",
        "Admin dashboard to manage leads",
        "Email notifications for new leads",
        "Lead status tracking (New, Contacted, Qualified)",
        "Export leads to CSV/Excel"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "🚀 Performance & SEO",
      items: [
        "Lightning-fast page load times (< 1 second)",
        "100/100 Lighthouse SEO score",
        "Schema.org structured data markup",
        "Open Graph tags for social sharing",
        "XML sitemap generation",
        "Optimized images with lazy loading"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "📈 Analytics & Tracking",
      items: [
        "Google Analytics 4 integration",
        "Facebook Pixel tracking",
        "Google Tag Manager setup",
        "Conversion tracking & goals",
        "Heatmap integration ready",
        "Custom event tracking"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "🏭 Manufacturing Features",
      items: [
        "Product/Service catalog pages",
        "Equipment & capabilities showcase",
        "Quality certifications display",
        "Photo/video galleries",
        "Technical specifications viewer",
        "CAD/PDF document downloads"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "💼 Business Pages",
      items: [
        "About Us with company history",
        "Services/Capabilities pages",
        "Case studies & portfolio",
        "Client testimonials section",
        "Team member profiles",
        "Contact page with Google Maps"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "🔒 Security & Reliability",
      items: [
        "SSL/HTTPS encryption",
        "DDoS protection",
        "Regular automated backups",
        "99.9% uptime guarantee",
        "Secure form submissions",
        "GDPR compliance ready"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      category: "⚡ Technical Excellence",
      items: [
        "Built with Next.js 15 (latest)",
        "TypeScript for type safety",
        "Server-side rendering (SSR)",
        "API routes for backend logic",
        "Modular component architecture",
        "Easy to maintain & scale"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "📱 Content Management",
      items: [
        "Easy-to-update content sections",
        "Image optimization system",
        "Blog/news section ready",
        "Multi-language support ready",
        "Custom admin panel included",
        "No coding required for updates"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      category: "🎯 Marketing Tools",
      items: [
        "Call-to-action buttons optimized",
        "Newsletter signup forms",
        "Social media integration",
        "WhatsApp/Phone click-to-call",
        "Live chat widget ready",
        "Email marketing integration"
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      category: "🛠️ Support & Maintenance",
      items: [
        "24/7 technical support",
        "Regular security updates",
        "Performance monitoring",
        "Bug fixes & improvements",
        "Training videos & documentation",
        "Priority response time"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      category: "🌐 Domain & Hosting",
      items: [
        "Custom domain setup (.com/.in)",
        "Enterprise-grade hosting",
        "CDN for global speed",
        "Unlimited bandwidth",
        "Professional email addresses",
        "DNS management"
      ],
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            ⭐ COMPLETE PACKAGE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Get With
            <span className="block gradient-text">EnterpriseHero Website</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            A complete, enterprise-grade website solution with <strong className="text-blue-600">70+ Premium Features</strong> included. Not just a website - a complete digital transformation package!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200"
            >
              {/* Category Header */}
              <div className={`inline-block bg-gradient-to-r ${feature.color} text-white px-4 py-2 rounded-lg font-bold text-sm mb-6 shadow-md`}>
                {feature.category}
              </div>

              {/* Feature Items */}
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
          
          <div className="relative z-10">
            <div className="text-5xl md:text-6xl font-bold mb-6">
              ₹2,50,000+ Value
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              If You Built All This Separately
            </div>
            <div className="max-w-3xl mx-auto mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-2xl font-bold">₹80,000</div>
                  <div className="text-sm text-blue-100">Website Design</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-2xl font-bold">₹60,000</div>
                  <div className="text-sm text-blue-100">Development</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-2xl font-bold">₹40,000</div>
                  <div className="text-sm text-blue-100">SEO Setup</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-2xl font-bold">₹70,000</div>
                  <div className="text-sm text-blue-100">Annual Maintenance</div>
                </div>
              </div>
            </div>
            <div className="text-xl text-blue-100 mb-8">
              Get everything in one comprehensive package with EnterpriseHero - the smart choice for manufacturing businesses!
            </div>
            <a href="#contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300">
              Get Started Now - Limited Offer
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">70+</div>
            <div className="text-gray-600 font-semibold">Features Included</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600 font-semibold">Customizable</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-semibold">Support</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
            <div className="text-gray-600 font-semibold">Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
}