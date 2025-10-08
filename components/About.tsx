export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            {/* Manufacturing Images Collage */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
                <img 
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&auto=format&fit=crop" 
                  alt="Manufacturing facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm">Modern Factory Floor</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee67e7d01f9b?w=600&auto=format&fit=crop" 
                  alt="Precision machinery" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm">Precision Equipment</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Manufacturing Solutions</div>
                    <div className="text-blue-100">by Vedpragya Bahrat Pvt. Ltd.</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">20+</div>
                    <div className="text-xs text-blue-100">Years Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">ISO</div>
                    <div className="text-xs text-blue-100">Certified</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">100+</div>
                    <div className="text-xs text-blue-100">Products</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leading India's Manufacturing
                <span className="block gradient-text">Industry Forward</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Vedpragya Bahrat Pvt. Ltd.</strong> is a leading manufacturing company dedicated to delivering high-quality products and services through cutting-edge technology and precision engineering.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              With state-of-the-art facilities in Gurugram and Bhiwani, we specialize in manufacturing excellence, serving diverse industries with innovative solutions and maintaining the highest quality standards.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise-Grade Quality</h3>
                  <p className="text-gray-600">Built with cutting-edge technology, optimized for performance, security, and scalability.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Expertise</h3>
                  <p className="text-gray-600">Deep understanding of manufacturing sector needs, challenges, and opportunities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Results-Driven Approach</h3>
                  <p className="text-gray-600">Every website is engineered to generate leads, increase visibility, and maximize ROI.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="btn-primary inline-block">
                Partner With Us
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}