
import React from 'react';
import { Link } from 'react-router-dom';

interface RegionalCTAProps {
  regionName: string;
}

const RegionalCTA: React.FC<RegionalCTAProps> = ({ regionName }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4">
          Ready to Transform Your Vehicles in {regionName}?
        </h2>
        <p className="text-wrap-grey text-lg mb-8 max-w-2xl mx-auto">
          Contact our team today for a free consultation and quote on premium vehicle wrapping, ceramic coating, and paint protection services throughout {regionName}.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-wrap-red hover:bg-wrap-red/90 text-white px-8 py-3 rounded-md transition-colors">
            Get a Free Quote
          </Link>
          <Link to="/gallery" className="bg-gray-200 hover:bg-gray-300 text-wrap-blue px-8 py-3 rounded-md transition-colors">
            View Our Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegionalCTA;
