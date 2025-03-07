
import React from 'react';
import { MapPin, Users, Briefcase, ExternalLink } from 'lucide-react';
import { TownData } from '@/utils/townTypes';

interface TownDescriptionProps {
  townName: string;
  townData: TownData;
}

const TownDescription: React.FC<TownDescriptionProps> = ({ townName, townData }) => {
  const {
    state,
    description,
    population,
    businessCount,
    governmentUrl,
    businessStats
  } = townData;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-serif font-semibold text-wrap-blue mb-3">
              Vehicle Wrap Services in {townName}, {state}
            </h1>
            
            <div className="flex items-center text-wrap-grey mb-6">
              <MapPin className="text-wrap-red mr-1" size={18} />
              <span>{townName}, {state}</span>
            </div>
            
            <div className="prose text-wrap-grey max-w-none mb-6" dangerouslySetInnerHTML={{ __html: description }} />
            
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <h2 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
                Why Vehicle Wraps Work in {townName}
              </h2>
              <p className="text-wrap-grey mb-4">
                In a vibrant community like {townName}, vehicle wraps offer an unmatched opportunity to reach local customers. 
                Your wrapped vehicles become moving billboards, generating thousands of impressions daily as they travel through town.
              </p>
              <p className="text-wrap-grey">
                Whether you're a local business looking to increase visibility or a national brand targeting the {townName} market, 
                our custom vehicle wraps deliver eye-catching designs that drive results. We understand the local market and create 
                wraps that resonate with {townName} residents and visitors alike.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
                {townName} at a Glance
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="text-wrap-red mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium text-wrap-blue">Population</h3>
                    <p className="text-wrap-grey">{population.toLocaleString()} residents</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="text-wrap-red mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium text-wrap-blue">Business Community</h3>
                    <p className="text-wrap-grey">
                      {businessCount.toLocaleString()} local businesses
                      {businessStats && <span className="block mt-1 text-sm">{businessStats}</span>}
                    </p>
                  </div>
                </div>
                
                {governmentUrl && (
                  <div className="flex items-start">
                    <ExternalLink className="text-wrap-red mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-medium text-wrap-blue">Official Resources</h3>
                      <a 
                        href={governmentUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-wrap-red hover:underline"
                      >
                        {townName} Official Website
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-wrap-blue text-white rounded-lg p-6">
              <h2 className="text-xl font-serif font-semibold mb-4">
                Ready to Wrap in {townName}?
              </h2>
              <p className="mb-4 text-white/90">
                We offer professional vehicle wrap design and installation services throughout {townName} and surrounding areas.
              </p>
              <a 
                href="/contact" 
                className="block w-full bg-white text-wrap-blue text-center py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TownDescription;
