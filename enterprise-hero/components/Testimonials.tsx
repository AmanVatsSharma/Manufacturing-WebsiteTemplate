"use client";

import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO",
      company: "Precision Engineering Works Pvt. Ltd.",
      image: "👨‍💼",
      rating: 5,
      text: "EnterpriseHero transformed our online presence completely. We've seen a 300% increase in qualified leads within just 3 months. The website is fast, professional, and exactly what our manufacturing business needed.",
      results: "+300% Leads"
    },
    {
      name: "Priya Sharma",
      position: "Director of Operations",
      company: "TechnoFab Industries",
      image: "👩‍💼",
      rating: 5,
      text: "Working with Vedpragya Bharat was a game-changer. They understood our industry challenges and delivered a website that showcases our capabilities perfectly. Our competitors are jealous!",
      results: "Industry Leader"
    },
    {
      name: "Amit Patel",
      position: "Managing Director",
      company: "Steel Forge Manufacturing",
      image: "👨‍💼",
      rating: 5,
      text: "The ROI on our website investment has been phenomenal. The lead generation system works 24/7, and the analytics dashboard helps us make data-driven decisions. Highly recommended!",
      results: "+450% ROI"
    },
    {
      name: "Sunita Mehta",
      position: "Owner",
      company: "Quality Auto Components",
      image: "👩‍💼",
      rating: 5,
      text: "From design to deployment, everything was seamless. The team's understanding of the manufacturing sector is exceptional. Our website now ranks #1 for all our target keywords!",
      results: "#1 Google Ranking"
    },
    {
      name: "Vikram Singh",
      position: "VP Marketing",
      company: "Industrial Solutions Group",
      image: "👨‍💼",
      rating: 5,
      text: "Best decision we made this year! The website not only looks stunning but performs exceptionally well. Page load times are lightning fast, and the mobile experience is flawless.",
      results: "99 Performance Score"
    },
    {
      name: "Kavita Reddy",
      position: "Founder",
      company: "GreenTech Manufacturing",
      image: "👩‍💼",
      rating: 5,
      text: "EnterpriseHero didn't just build us a website; they built us a lead generation machine. The integrated analytics and tracking help us understand our customers better than ever before.",
      results: "+200% Conversions"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Manufacturing
            <span className="block gradient-text">Leaders Across Industries</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our clients say about working with EnterpriseHero.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Results Badge */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg px-4 py-2 mb-6 inline-block">
                <span className="text-green-700 font-bold text-sm">📈 {testimonial.results}</span>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}