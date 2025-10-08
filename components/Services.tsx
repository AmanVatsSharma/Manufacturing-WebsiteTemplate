export default function Services() {
  const services = [
    {
      title: "Custom Manufacturing Websites",
      description: "Tailored websites that showcase your manufacturing capabilities, products, and industry expertise with stunning visuals.",
      image: "🏭",
      features: [
        "Product Catalog Management",
        "Capability Showcase",
        "Quality Certifications Display",
        "Industry-Specific Design"
      ]
    },
    {
      title: "Lead Generation System",
      description: "Automated systems that capture, qualify, and route leads 24/7 to grow your pipeline and increase sales.",
      image: "📊",
      features: [
        "Smart Contact Forms",
        "Quote Request System",
        "Lead Tracking Dashboard",
        "CRM Integration"
      ]
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online stores for manufacturing businesses selling components, parts, or finished goods directly.",
      image: "🛒",
      features: [
        "Product Inventory Management",
        "Secure Payment Gateway",
        "Order Tracking",
        "B2B Bulk Ordering"
      ]
    },
    {
      title: "SEO & Digital Marketing",
      description: "Get found by customers actively searching for your services. Dominate search results in your industry.",
      image: "🎯",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Local SEO for Factories",
        "Content Marketing"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Real-time insights into website performance, visitor behavior, and lead conversion with actionable data.",
      image: "📈",
      features: [
        "Google Analytics Setup",
        "Conversion Tracking",
        "Custom Dashboards",
        "Monthly Reports"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Worry-free website management with regular updates, security patches, and dedicated technical support.",
      image: "🛠️",
      features: [
        "24/7 Monitoring",
        "Regular Backups",
        "Security Updates",
        "Priority Support"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Digital Solutions
            <span className="block gradient-text">For Manufacturing Excellence</span>
          </h2>
          <p className="text-xl text-gray-600">
            From design to deployment and beyond - we handle everything so you can focus on what you do best: manufacturing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.image}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Proven 4-Step Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understand your business goals and requirements" },
              { step: "02", title: "Design", desc: "Create stunning mockups and user experiences" },
              { step: "03", title: "Development", desc: "Build with enterprise-grade technology" },
              { step: "04", title: "Launch & Grow", desc: "Deploy, optimize, and scale your success" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}