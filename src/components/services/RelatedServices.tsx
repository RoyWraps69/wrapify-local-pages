
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import serviceData from '@/data/serviceData';

interface RelatedServicesProps {
  currentService?: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentService }) => {
  // Get all service keys, filter out the current service, and take up to 3 related services
  const allServices = Object.keys(serviceData);
  
  // For vehicle wraps page, prioritize showing wrapping-related services
  const wrapRelatedServices = ['color-change-wraps', 'commercial-fleet-wraps', 'vehicle-graphics'];
  const ppfAndCoatingServices = ['paint-protection-film', 'ceramic-coatings'];
  
  let relatedServiceKeys: string[] = [];
  
  if (currentService === 'vehicle-wraps') {
    // For vehicle wraps, prioritize showing PPF and coating services
    relatedServiceKeys = ppfAndCoatingServices.concat(
      allServices.filter(key => 
        key !== currentService && 
        !ppfAndCoatingServices.includes(key)
      )
    ).slice(0, 3);
  } else if (ppfAndCoatingServices.includes(currentService || '')) {
    // For PPF or coating pages, prioritize vehicle wraps and other wrap services
    relatedServiceKeys = ['vehicle-wraps'].concat(
      allServices.filter(key => 
        key !== currentService && 
        key !== 'vehicle-wraps' && 
        wrapRelatedServices.includes(key)
      )
    ).slice(0, 3);
  } else {
    // For other services, show a mix of services
    relatedServiceKeys = allServices
      .filter(key => key !== currentService)
      .slice(0, 3);
  }
  
  // Map the keys to service data
  const relatedServices = relatedServiceKeys.map(key => ({
    key,
    ...serviceData[key]
  }));
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue">
            Related Services
          </h2>
          <p className="text-wrap-grey mt-4 max-w-3xl mx-auto">
            Explore our other vehicle enhancement and protection services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service) => (
            <div key={service.key} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <img 
                src={service.hero} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-wrap-blue mb-2">
                  {service.title}
                </h3>
                <p className="text-wrap-grey mb-4">
                  {service.description}
                </p>
                <Link 
                  to={`/services/${service.key}`} 
                  className="inline-flex items-center text-wrap-red font-medium hover:underline"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-wrap-blue hover:bg-wrap-blue/90 text-white px-6 py-3 rounded-md transition-colors"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
