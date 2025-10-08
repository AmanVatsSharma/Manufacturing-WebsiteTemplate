export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">EnterpriseHero</div>
                    <div className="text-blue-100">by Vedpragya Bharat Pvt. Ltd.</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                    <div className="text-4xl font-bold mb-2">10+</div>
                    <div className="text-blue-100">Years of Excellence</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                      <div className="text-3xl font-bold mb-1">500+</div>
                      <div className="text-sm text-blue-100">Projects Delivered</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                      <div className="text-3xl font-bold mb-1">98%</div>
                      <div className="text-sm text-blue-100">Client Satisfaction</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 bg-white/30 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs font-bold">👤</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-blue-100">Join 500+ happy manufacturing businesses</div>
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
                Empowering Manufacturing
                <span className="block gradient-text">Excellence Online</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Vedpragya Bharat Pvt. Ltd.</strong> is a pioneering technology company dedicated to transforming the manufacturing industry through cutting-edge digital solutions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our flagship brand, <strong className="text-blue-600">EnterpriseHero</strong>, specializes in creating world-class, enterprise-grade websites that help manufacturing businesses establish a powerful online presence, capture quality leads, and drive sustainable growth.
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