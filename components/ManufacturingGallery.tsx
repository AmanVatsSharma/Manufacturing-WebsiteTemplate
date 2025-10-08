"use client";

export default function ManufacturingGallery() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
      title: "Modern Manufacturing Facility",
      description: "State-of-the-art production line"
    },
    {
      url: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop",
      title: "Factory Floor Operations",
      description: "Efficient production processes"
    },
    {
      url: "https://images.unsplash.com/photo-1581092160607-ee67e7d01f9b?w=800&auto=format&fit=crop",
      title: "Precision Equipment",
      description: "Advanced machinery and tools"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      title: "Quality Control",
      description: "Rigorous testing standards"
    },
    {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop",
      title: "Industrial Equipment",
      description: "Heavy-duty manufacturing"
    },
    {
      url: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&auto=format&fit=crop",
      title: "Assembly Line",
      description: "Streamlined production workflow"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Facilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Manufacturing
            <span className="block gradient-text">Facilities & Equipment</span>
          </h2>
          <p className="text-xl text-gray-600">
            Take a look at our state-of-the-art manufacturing facilities equipped with the latest technology and machinery
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-sm text-gray-200">{image.description}</p>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to See More?</h3>
            <p className="text-xl mb-8 text-blue-100">Schedule a facility tour or request detailed product information</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block">
                Schedule a Tour
              </a>
              <a href="#contact" className="bg-white/10 backdrop-blur border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 inline-block">
                Request Catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}