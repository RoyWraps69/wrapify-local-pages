
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ExternalLink } from 'lucide-react';

const RegionalCoverageSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Regional Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Serving the Entire Midwest Region
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
            Our premium vehicle wrapping and protection services extend throughout the Midwest, with special focus on Illinois, Michigan, Indiana, and Wisconsin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}></div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-2">Illinois</h3>
              <p className="text-wrap-grey mb-4">
                Comprehensive vehicle wrapping services throughout Illinois, with special focus on Chicago and surrounding suburbs.
              </p>
              <Link 
                to="/regions/illinois" 
                className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
              >
                <span className="mr-2">View Illinois Services</span>
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534270804882-7b71aaece2e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}></div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-2">Michigan</h3>
              <p className="text-wrap-grey mb-4">
                Professional vehicle wrapping and ceramic coating services across Michigan, from Detroit to Grand Rapids.
              </p>
              <Link 
                to="/regions/michigan" 
                className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
              >
                <span className="mr-2">View Michigan Services</span>
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1676280128518-f314ba87a5ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}></div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-2">Indiana</h3>
              <p className="text-wrap-grey mb-4">
                Premium vehicle wrapping solutions for Indiana businesses, from Indianapolis to Northwest Indiana.
              </p>
              <Link 
                to="/regions/indiana" 
                className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
              >
                <span className="mr-2">View Indiana Services</span>
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596720685811-58ec259bfd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}></div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-2">Wisconsin</h3>
              <p className="text-wrap-grey mb-4">
                Expert vehicle wrapping and protection services across Wisconsin, including Milwaukee, Madison, and Green Bay.
              </p>
              <Link 
                to="/regions/wisconsin" 
                className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
              >
                <span className="mr-2">View Wisconsin Services</span>
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-wrap-grey mb-6">
            Beyond the Midwest, our Print & Ship service delivers professional vehicle wraps nationwide
          </p>
          <Link
            to="/print-ship"
            className="inline-flex items-center bg-wrap-blue text-white px-6 py-3 rounded-md hover:bg-wrap-blue-dark transition-colors"
          >
            <span className="mr-2">Learn About Nationwide Services</span>
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegionalCoverageSection;
