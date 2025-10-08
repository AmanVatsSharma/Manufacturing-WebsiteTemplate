"use client";

export default function ManufacturingShowcase() {
  const industries = [
    {
      name: "CNC & Precision Machining",
      icon: "⚙️",
      description: "Showcase your precision engineering capabilities"
    },
    {
      name: "Metal Fabrication",
      icon: "🔧",
      description: "Display your metal working excellence"
    },
    {
      name: "Automotive Parts",
      icon: "🚗",
      description: "Highlight your automotive manufacturing"
    },
    {
      name: "Industrial Equipment",
      icon: "🏭",
      description: "Present your heavy machinery products"
    },
    {
      name: "Electronics Manufacturing",
      icon: "💻",
      description: "Feature your electronics assembly services"
    },
    {
      name: "Plastic Injection Molding",
      icon: "🧪",
      description: "Promote your molding capabilities"
    },
    {
      name: "Sheet Metal Works",
      icon: "📐",
      description: "Exhibit your sheet metal expertise"
    },
    {
      name: "Assembly & Integration",
      icon: "🔩",
      description: "Demonstrate your assembly services"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)`,
          backgroundSize: '100% 4px'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)`,
          backgroundSize: '4px 100%'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
            Industry Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perfect for All Manufacturing
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Industries & Specializations</span>
          </h2>
          <p className="text-xl text-blue-100">
            Whether you're in automotive, electronics, metal fabrication, or any manufacturing sector - we've got you covered with industry-specific templates.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
              <p className="text-sm text-blue-200">{industry.description}</p>
            </div>
          ))}
        </div>

        {/* Manufacturing Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Factory Visualization */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/50">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Factory Showcase</h3>
            <p className="text-blue-200">Display your facility, equipment, and manufacturing process with stunning galleries</p>
          </div>

          {/* Product Catalog */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/50">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Product Catalog</h3>
            <p className="text-blue-200">Professional product galleries with specifications, technical drawings, and CAD downloads</p>
          </div>

          {/* Quality Certifications */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Certifications</h3>
            <p className="text-blue-200">Prominently display ISO, quality certifications, and industry accreditations</p>
          </div>
        </div>
      </div>
    </section>
  );
}