
import React from 'react';

interface MapSectionProps {
  townName: string;
  mapUrl?: string;
}

const MapSection: React.FC<MapSectionProps> = ({ townName, mapUrl }) => {
  // Default map URL if none provided
  const defaultMapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=vehicle+wraps+${encodeURIComponent(townName)}`;
  const embedUrl = mapUrl || defaultMapUrl;
  
  return (
    <section className="py-12 bg-gray-50" id="find-us-near-you">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-wrap-blue">
            Where to Find Vehicle Wraps Near {townName}
          </h2>
          <p className="text-wrap-grey mt-3 max-w-2xl mx-auto">
            Looking for "vehicle wraps near me" in the {townName} area? 
            Visit our facility for a consultation or to see our work in person. 
            We're conveniently located and ready to serve you.
          </p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          <iframe 
            src={embedUrl}
            title={`Map of vehicle wrap services near ${townName}`}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-wrap-blue font-medium">
            Wrapping The World - {townName} Vehicle Wrap Location
          </p>
          <p className="text-wrap-grey">
            4711 N. Lamon Ave, Chicago, IL 60630
          </p>
          <p className="mt-2">
            <a 
              href="tel:+13125971286" 
              className="text-wrap-red hover:underline"
            >
              (312) 597-1286
            </a>
          </p>
          <p className="mt-4 text-wrap-grey max-w-xl mx-auto text-sm">
            Serving customers throughout {townName} and surrounding areas. 
            Our vehicle wrap experts provide mobile consultations 
            and can recommend the best wrapping solutions for your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
