
import React from 'react';
import { Link } from 'react-router-dom';

const IndustrySolutions: React.FC = () => {
  return (
    <div className="bg-wrap-blue/5 rounded-xl p-8 md:p-12 mb-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-6 text-center">
          Industry-Specific Vehicle Wrap Solutions
        </h2>
        <p className="text-wrap-grey mb-8 text-center">
          We understand different industries have unique vehicle branding requirements. Explore our tailored solutions for these sectors:
        </p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link to="/industries/construction" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="font-medium text-wrap-blue mb-2">Home Services</h3>
            <p className="text-xs text-wrap-grey mb-2">HVAC, Plumbing, Electrical</p>
          </Link>
          <Link to="/industries/food-beverage" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="font-medium text-wrap-blue mb-2">Food & Beverage</h3>
            <p className="text-xs text-wrap-grey mb-2">Food Trucks, Delivery, Catering</p>
          </Link>
          <Link to="/industries/construction" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="font-medium text-wrap-blue mb-2">Construction</h3>
            <p className="text-xs text-wrap-grey mb-2">Contractors, Equipment, Services</p>
          </Link>
          <Link to="/industries/real-estate" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="font-medium text-wrap-blue mb-2">Real Estate</h3>
            <p className="text-xs text-wrap-grey mb-2">Agents, Brokers, Property Management</p>
          </Link>
          <Link to="/services/commercial-fleet-wraps" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="font-medium text-wrap-blue mb-2">Retail</h3>
            <p className="text-xs text-wrap-grey mb-2">Delivery, Mobile Stores, Promotions</p>
          </Link>
          <Link to="/services/vehicle-graphics" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="font-medium text-wrap-blue mb-2">Automotive</h3>
            <p className="text-xs text-wrap-grey mb-2">Dealerships, Auto Services, Rentals</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions;
