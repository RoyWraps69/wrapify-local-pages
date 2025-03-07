
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTowns } from '@/utils/townData';

interface ServiceAreasSectionProps {
  townName?: string;
}

const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ townName = 'Chicago' }) => {
  const [showTowns, setShowTowns] = useState(false);
  const towns = getAllTowns();
  
  return (
    <section className="py-16 bg-gray-50" id="service-areas">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-semibold text-wrap-blue mb-4">Serving {townName} and Surrounding Areas</h2>
        <p className="text-wrap-grey text-lg mb-6 max-w-2xl mx-auto">Professional vehicle wrapping, ceramic coating, and paint protection services available throughout the {townName} metropolitan area.</p>
        
        <button 
          onClick={() => setShowTowns(!showTowns)}
          className="inline-flex items-center text-wrap-blue hover:text-wrap-red mb-8 transition-colors text-sm font-medium"
          aria-expanded={showTowns}
          aria-controls="town-list"
        >
          <span>{showTowns ? 'Hide' : 'View'} Service Locations</span>
          <svg className={`ml-1 w-4 h-4 transition-transform ${showTowns ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div id="town-list" className={showTowns ? 'block' : 'hidden'}>
          <p className="text-wrap-grey mb-4">Click on any location to view specific vehicle wrapping and ceramic coating services for that area:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-left">
            {towns.map((town) => (
              <Link 
                key={town.id}
                to={`/locations/${town.id}`}
                className="p-3 text-sm rounded-md bg-white shadow-md hover:bg-wrap-blue hover:text-white group transition-all duration-300"
              >
                <p className="font-medium">{town.name}</p>
                <p className="text-xs text-wrap-grey/80 group-hover:text-white/80">
                  {town.distance} miles from {townName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
