"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Contact Component - Manufacturing Website
 * 
 * Purpose:
 * - Display contact information
 * - Interactive Google Maps integration
 * - Social media links
 * - Business hours and locations
 * - Professional industrial design
 * - Scroll-triggered animations
 * 
 * Flow:
 * 1. Component loads with contact information
 * 2. Intersection observer triggers animations
 * 3. User can interact with contact methods
 * 4. Google Maps shows facility locations
 */
export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  console.log("Contact component rendered. Visible:", isVisible);

  // Intersection Observer for scroll animations
  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
              console.log("Contact section entered viewport");
            }
          });
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
        console.log("Contact intersection observer attached");
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
          console.log("Contact observer cleaned up");
        }
      };
    } catch (error) {
      console.error("Error in contact intersection observer:", error);
    }
  }, [isVisible]);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>GET IN TOUCH</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Let's Discuss Your
            <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mt-2">
              Manufacturing Project
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Have questions? Need a quote?
            <span className="block mt-2 text-gray-900 font-semibold">
              Our expert team is ready to help you succeed
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left - Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="card-industrial p-8 bg-gradient-to-br from-blue-50 to-orange-50">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-orange-500 rounded-full mr-4"></span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Corporate Address */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Corporate Headquarters</h4>
                    <p className="text-gray-600 font-medium">
                      Vedpragya Bahrat Pvt. Ltd.<br />
                      131, Sector 22<br />
                      Gurugram, Haryana 122001<br />
                      India
                    </p>
                    <h4 className="font-bold text-gray-900 mb-2 mt-4 text-lg">Registered Office</h4>
                    <p className="text-gray-600 font-medium">
                      Opposite Bansilal Park<br />
                      Bhiwani, Haryana<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Phone Numbers</h4>
                    <p className="text-gray-600 font-medium space-y-1">
                      <a href="tel:+919963730111" className="block hover:text-blue-600 transition-colors font-semibold">
                        +91 9963730111
                      </a>
                      <a href="tel:+919812268980" className="block hover:text-blue-600 transition-colors font-semibold">
                        +91 9812268980
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Email Address</h4>
                    <p className="text-gray-600">
                      <a 
                        href="mailto:vedpragyabharat@gmail.com" 
                        className="hover:text-blue-600 transition-colors font-semibold text-lg"
                        onClick={() => console.log("Email link clicked")}
                      >
                        vedpragyabharat@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Business Hours</h4>
                    <p className="text-gray-600 font-medium space-y-1">
                      <span className="block">Monday - Friday: 9:00 AM - 6:00 PM</span>
                      <span className="block">Saturday: 10:00 AM - 4:00 PM</span>
                      <span className="block">Sunday: Closed</span>
                      <span className="block mt-2 text-blue-600 font-bold">🔄 24/7 Production Support Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-industrial p-8 bg-gradient-to-br from-gray-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: "facebook", color: "from-blue-600 to-blue-700", label: "Facebook" },
                  { icon: "twitter", color: "from-blue-400 to-blue-500", label: "Twitter" },
                  { icon: "linkedin", color: "from-blue-700 to-blue-800", label: "LinkedIn" },
                  { icon: "instagram", color: "from-pink-600 to-pink-700", label: "Instagram" },
                ].map((social) => (
                  <a 
                    key={social.icon}
                    href="#" 
                    className={`w-full aspect-square bg-gradient-to-br ${social.color} hover:scale-110 rounded-2xl flex items-center justify-center text-white transition-all transform shadow-lg hover:shadow-2xl`}
                    onClick={() => console.log(`Social link clicked: ${social.label}`)}
                    aria-label={social.label}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon === "facebook" && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
                      {social.icon === "twitter" && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
                      {social.icon === "linkedin" && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                      {social.icon === "instagram" && <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Google Map */}
          <div className={`h-full min-h-[600px] transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="card-industrial p-0 overflow-hidden h-full shadow-2xl">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-white font-bold text-lg">Find Us on Map</span>
                </div>
                <span className="text-blue-200 text-sm font-semibold">Gurugram, Haryana</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.4897286629!2d76.84324849999999!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sSector%2022%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "556px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vedpragya Bahrat Corporate Office - Gurugram, Haryana"
                onLoad={() => console.log("Google Maps iframe loaded successfully")}
                onError={() => console.error("Google Maps iframe failed to load")}
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16">
          <div className="card-industrial p-12 bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-industrial-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-shadow-strong">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free consultation and quote. Our manufacturing experts are standing by to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919963730111" 
                  className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
                  onClick={() => console.log("CTA: Call Now clicked")}
                >
                  📞 Call Now: +91 9963730111
                </a>
                <a 
                  href="mailto:vedpragyabharat@gmail.com" 
                  className="inline-block bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  onClick={() => console.log("CTA: Send Email clicked")}
                >
                  📧 Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}