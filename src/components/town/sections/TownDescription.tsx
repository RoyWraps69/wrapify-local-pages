
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Store, Clock, Phone, Star, Navigation } from 'lucide-react';

interface TownDescriptionProps {
  townName: string;
  townData: any;
}

const TownDescription: React.FC<TownDescriptionProps> = ({ townName, townData }) => {
  if (!townData) {
    return <div>Loading town information...</div>;
  }
  
  const { description, population, businessCount, state, distance } = townData;
  
  // Format state name fully
  const stateFullName = 
    state === 'IL' ? 'Illinois' : 
    state === 'MI' ? 'Michigan' : 
    state === 'IN' ? 'Indiana' : 
    state === 'WI' ? 'Wisconsin' : state;
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <MapPin className="text-wrap-red mr-2" size={24} />
            <h1 className="text-3xl font-serif font-semibold text-wrap-blue">
              Vehicle Wrapping Services in {townName}, {stateFullName}
            </h1>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-100 shadow-sm">
            <div className="flex flex-wrap gap-6 text-wrap-grey mb-4">
              <div className="flex items-center">
                <Store className="text-wrap-blue mr-2" size={18} />
                <span>Population: {population.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <Store className="text-wrap-blue mr-2" size={18} />
                <span>Local Businesses: ~{businessCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <Navigation className="text-wrap-blue mr-2" size={18} />
                <span>{distance} miles from Chicago</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-wrap-blue mr-2" size={18} />
                <span>312-597-1286</span>
              </div>
              <div className="flex items-center">
                <Star className="text-wrap-red mr-2" size={18} />
                <span>Premium Vehicle Wrapping Services</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-wrap-grey mb-6">
              <span className="text-wrap-blue font-bold">WRAPPING THE WORLD</span> provides premium vehicle wrapping and protection services to businesses and individuals throughout <span className="font-medium">{townName}, {stateFullName}</span>. {description}
            </p>
            
            <p className="text-wrap-grey mb-6">
              With a population of {population.toLocaleString()} and approximately {businessCount.toLocaleString()} local businesses, {townName} is a thriving community with growing demand for professional vehicle branding and protection services.
            </p>
            
            <p className="text-wrap-grey mb-6">
              Our services in {townName} include commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom vehicle graphics. We understand the specific needs of {townName} businesses and provide tailored solutions that help you stand out in your local market.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors inline-block"
              >
                Get a Free Quote for Your {townName} Vehicle
              </Link>
              
              <Link 
                to="/services" 
                className="bg-wrap-blue hover:bg-wrap-blue/90 text-white px-6 py-3 rounded-md transition-colors inline-block"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TownDescription;
