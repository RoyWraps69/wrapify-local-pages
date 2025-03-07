
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedServices: React.FC = () => {
  const services = [
    {
      id: 'vehicle-wraps',
      title: 'Vehicle Wraps',
      description: 'Transform your vehicle with custom, high-quality vinyl wraps that protect paint and promote your business.',
      imageUrl: '/lovable-uploads/599e2f1d-44a1-44e0-9fad-0f1e68af2fef.png',
    },
    {
      id: 'fleet-graphics',
      title: 'Fleet Graphics',
      description: 'Consistent branding across your entire fleet with durable graphics designed for maximum visibility.',
      imageUrl: '/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png',
    },
    {
      id: 'color-change-wraps',
      title: 'Color Change Wraps',
      description: 'Give your vehicle a complete makeover with premium color change wraps in matte, gloss, or metallic finishes.',
      imageUrl: '/lovable-uploads/37c26304-db0e-44fd-b705-da7a4a74a012.png',
    },
    {
      id: 'paint-protection-film',
      title: 'Paint Protection Film',
      description: 'Invisible shield that protects your vehicle\'s paint from road debris, scratches, and environmental damage.',
      imageUrl: '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-wrap-blue mb-4">Our Premium Vehicle Wrap Services</h2>
          <p className="text-wrap-grey max-w-2xl mx-auto">
            We offer a complete range of vehicle wrapping solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-wrap-blue mb-2">{service.title}</h3>
                <p className="text-wrap-grey mb-4">{service.description}</p>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-wrap-red font-medium hover:text-wrap-blue transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="bg-wrap-red hover:bg-wrap-red/90 text-white py-3 px-6 rounded-md font-medium transition-colors inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
