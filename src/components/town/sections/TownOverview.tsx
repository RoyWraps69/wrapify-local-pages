
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Car, Star } from 'lucide-react';
import TownStats from './TownStats';
import TownActionButtons from './TownActionButtons';

interface TownOverviewProps {
  townName: string;
  townData: any;
}

const TownOverview: React.FC<TownOverviewProps> = ({ townName, townData }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">
        Where can I find the best vehicle wraps in {townName}?
      </h2>
      
      <div className="mb-4">
        <p className="text-wrap-grey mb-3">
          Looking for professional vehicle wraps and commercial fleet graphics in {townName}? Wrapping The World provides premium vehicle wrapping services for businesses and individuals throughout the {townName} area. Our team of certified installers delivers exceptional quality and customer service.
        </p>
        
        <div className="flex items-center my-4 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-wrap-grey">
            <span className="font-medium">4.9/5</span> - Highest rated vehicle wrap shop near {townName}
          </span>
        </div>
      </div>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-start">
            <MapPin className="text-wrap-red shrink-0 mt-1 mr-2 h-5 w-5" />
            <div>
              <h3 className="font-medium text-wrap-blue">Where are we located?</h3>
              <p className="text-wrap-grey text-sm">
                Our main facility serves all of {townName} and surrounding areas with expert vehicle wrap installation services.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-start">
            <Car className="text-wrap-blue shrink-0 mt-1 mr-2 h-5 w-5" />
            <div>
              <h3 className="font-medium text-wrap-blue">Do you come to my location?</h3>
              <p className="text-wrap-grey text-sm">
                Yes! We offer mobile consultations and can provide on-site services for fleet vehicles throughout the {townName} region.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <TownStats townName={townName} townData={townData} />
      <TownActionButtons townName={townName} />
      
      <div className="mt-6 text-center">
        <Link to="/services" className="text-wrap-blue hover:text-wrap-red transition-colors text-sm font-medium">
          See all vehicle wrap services available in {townName}
        </Link>
      </div>
    </div>
  );
};

export default TownOverview;
