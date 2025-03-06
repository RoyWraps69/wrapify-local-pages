
import React from 'react';

interface MapSectionProps {
  townName?: string;
  mapEmbedUrl?: string;
}

const MapSection: React.FC<MapSectionProps> = ({ 
  townName = 'Chicago',
  mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33858851965!2d-87.73196395!3d41.83373645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1652278414042!5m2!1sen!2sus'
}) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Our Location
          </span>
          <h2 className="section-title">
            Serving {townName} and Surrounding Areas
          </h2>
          <p className="section-subtitle">
            Chicago Fleet Wraps is conveniently located to serve vehicle owners throughout {townName} and nearby communities.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-soft h-96">
          <iframe 
            src={mapEmbedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing Chicago Fleet Wraps service area including ${townName}`}
          ></iframe>
        </div>

        <div className="mt-8 max-w-4xl mx-auto text-center">
          <p className="text-wrap-grey">
            We provide mobile vehicle wrapping services throughout the Chicago metropolitan area, including {townName} and all surrounding communities.
            Contact us today to schedule your consultation or installation appointment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
