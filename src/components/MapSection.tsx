
import React from 'react';

interface MapSectionProps {
  townName: string;
  mapUrl?: string;
}

const MapSection: React.FC<MapSectionProps> = ({ townName, mapUrl }) => {
  // Default map URL if none provided
  const defaultMapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(townName)}`;
  const embedUrl = mapUrl || defaultMapUrl;
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-wrap-blue">
            Find Us in {townName}
          </h2>
          <p className="text-wrap-grey mt-3 max-w-2xl mx-auto">
            Visit our facility in {townName} for a consultation or to see our work in person. 
            We're conveniently located and ready to serve you.
          </p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          <iframe 
            src={embedUrl}
            title={`Map of ${townName}`}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-wrap-blue font-medium">
            Wrapping The World - {townName} Location
          </p>
          <p className="text-wrap-grey">
            123 Wrap Avenue, {townName}, IL 60007
          </p>
          <p className="mt-2">
            <a 
              href={`tel:+1234567890`} 
              className="text-wrap-red hover:underline"
            >
              (123) 456-7890
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
