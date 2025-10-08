export default function ManufacturingVisuals() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Visual Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stunning Visuals That
            <span className="block gradient-text">Showcase Your Manufacturing Excellence</span>
          </h2>
          <p className="text-xl text-gray-600">
            Professional imagery and layouts designed specifically for the manufacturing industry
          </p>
        </div>

        {/* Visual Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Factory Floor Visualization */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Factory Floor Gallery</h3>
                    <p className="text-gray-400">Full-width image showcases</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg overflow-hidden aspect-square">
                    <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&auto=format&fit=crop" alt="Factory floor" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-square">
                    <img src="https://images.unsplash.com/photo-1581092160607-ee67e7d01f9b?w=400&auto=format&fit=crop" alt="Manufacturing equipment" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-square">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop" alt="Production line" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <h4 className="font-bold text-gray-900 mb-2">High-Impact Visual Galleries</h4>
              <p className="text-sm text-gray-600">Showcase your facility, equipment, and processes with professional image galleries optimized for performance.</p>
            </div>
          </div>

          {/* Product Catalog Visualization */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Product Catalog</h3>
                  <p className="text-blue-100">Professional product displays</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-3xl">📦</div>
                  <div className="flex-1">
                    <div className="font-bold mb-1">Product Name</div>
                    <div className="text-sm text-blue-100">Specifications • Downloads • Details</div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-3xl">⚡</div>
                  <div className="flex-1">
                    <div className="font-bold mb-1">Another Product</div>
                    <div className="text-sm text-blue-100">Technical Specs • CAD Files</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <h4 className="font-bold text-gray-900 mb-2">Comprehensive Product Catalogs</h4>
              <p className="text-sm text-gray-600">Display your products with specifications, technical drawings, and downloadable resources.</p>
            </div>
          </div>

          {/* Certifications Display */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-12 text-white">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Certifications</h3>
                  <p className="text-green-100">Build trust & credibility</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["ISO 9001", "ISO 14001", "CE Mark", "RoHS"].map((cert, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="font-bold text-sm">{cert}</div>
                    <div className="text-xs text-green-100">Certified</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <h4 className="font-bold text-gray-900 mb-2">Quality Certifications Showcase</h4>
              <p className="text-sm text-gray-600">Display your ISO certifications, quality standards, and industry accreditations prominently.</p>
            </div>
          </div>

          {/* Team & Contact */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 p-12 text-white">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Team & Contact</h3>
                  <p className="text-orange-100">Build personal connections</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xl">👨‍💼</div>
                  <div>
                    <div className="font-bold">Sales Manager</div>
                    <div className="text-sm text-orange-100">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xl">📧</div>
                  <div>
                    <div className="font-bold">Email</div>
                    <div className="text-sm text-orange-100">sales@company.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xl">📍</div>
                  <div>
                    <div className="font-bold">Location</div>
                    <div className="text-sm text-orange-100">Interactive Map</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <h4 className="font-bold text-gray-900 mb-2">Complete Contact Solutions</h4>
              <p className="text-sm text-gray-600">Team profiles, multiple contact options, Google Maps integration, and instant communication channels.</p>
            </div>
          </div>
        </div>

        {/* Industry Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Manufacturing Industry Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">87%</div>
              <div className="text-blue-100">Of buyers research online before contacting</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">73%</div>
              <div className="text-blue-100">Judge credibility by website design</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5x</div>
              <div className="text-blue-100">More leads with professional website</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">62%</div>
              <div className="text-blue-100">Higher conversion with mobile optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}