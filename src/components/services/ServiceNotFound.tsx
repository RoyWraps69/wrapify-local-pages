
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceNotFound: React.FC = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-wrap-blue mb-6">
          Service Not Found
        </h1>
        <p className="text-wrap-grey text-lg mb-8 max-w-2xl mx-auto">
          We couldn't find the service you're looking for. Please check our available services below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link to="/services/vehicle-wraps" className="p-4 bg-wrap-blue/5 rounded-lg hover:bg-wrap-blue/10 transition-colors">
            <h3 className="font-semibold text-wrap-blue mb-2">Vehicle Wraps</h3>
            <p className="text-sm text-wrap-grey">Transform your vehicle with high-quality wraps</p>
          </Link>
          <Link to="/services/commercial-fleet-wraps" className="p-4 bg-wrap-blue/5 rounded-lg hover:bg-wrap-blue/10 transition-colors">
            <h3 className="font-semibold text-wrap-blue mb-2">Commercial Fleet Wraps</h3>
            <p className="text-sm text-wrap-grey">Brand your business fleet with custom wraps</p>
          </Link>
          <Link to="/services/ceramic-coatings" className="p-4 bg-wrap-blue/5 rounded-lg hover:bg-wrap-blue/10 transition-colors">
            <h3 className="font-semibold text-wrap-blue mb-2">Ceramic Coatings</h3>
            <p className="text-sm text-wrap-grey">Protect your vehicle with advanced coating</p>
          </Link>
        </div>
        <Link to="/services" className="inline-flex items-center mt-10 px-6 py-3 bg-wrap-blue text-white rounded-md hover:bg-wrap-blue/90 transition-colors">
          View All Services
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </main>
  );
};

export default ServiceNotFound;
