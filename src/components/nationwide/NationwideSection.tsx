
import React from 'react';
import { Truck, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const NationwideSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-wrap-red/20 text-wrap-red rounded-full text-sm font-medium mb-4">
            Beyond Chicago
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Nationwide Vehicle Wrap Services
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            From Chicago to coast-to-coast, we provide premium vehicle wrapping solutions for businesses and individuals across the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center">
            <div className="mx-auto w-14 h-14 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-7 h-7 text-wrap-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">National Coverage</h3>
            <p className="text-white/70">
              Professional vehicle wrapping services available in all 50 states through our trusted installation network.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center">
            <div className="mx-auto w-14 h-14 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-7 h-7 text-wrap-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Print & Ship</h3>
            <p className="text-white/70">
              High-quality printed wraps designed in Chicago and shipped directly to your door or preferred installer.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center">
            <div className="mx-auto w-14 h-14 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-wrap-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Installer Network</h3>
            <p className="text-white/70">
              Access our curated network of certified vehicle wrap installers across the country for professional application.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/print-ship" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-wrap-red text-white font-medium shadow-xl hover:bg-red-600 transition-all duration-300"
          >
            Explore Print & Ship Options
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NationwideSection;
