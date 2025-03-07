
import React from 'react';
import GalleryShowcase from '@/components/GalleryShowcase';

export interface RegionalPageContentProps {
  regionName: string;
  regionDescription?: string;
  regionFocus?: string;
  regionImage?: string;
  citiesServed?: string[];
  adjacentRegions?: string[];
}

const RegionalPageContent: React.FC<RegionalPageContentProps> = ({
  regionName,
  regionDescription = "Providing professional vehicle wrapping services throughout the region.",
  regionFocus = "Commercial fleet branding, color change wraps, and paint protection",
  regionImage = "/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png",
  citiesServed = [],
  adjacentRegions = []
}) => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-wrap-blue mb-6">
            Vehicle Wrapping Services in {regionName}
          </h1>
          <p className="text-lg text-wrap-grey mb-6">
            {regionDescription}
          </p>
          <div className="bg-wrap-blue/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-wrap-blue mb-3">Our {regionName} Focus</h2>
            <p className="text-wrap-grey">{regionFocus}</p>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
          <img 
            src={regionImage || "/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png"} 
            alt={`Vehicle wrapping in ${regionName}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <span className="bg-wrap-red text-white px-3 py-1 rounded-full text-sm font-medium">
              {regionName} Service Area
            </span>
          </div>
        </div>
      </div>
      
      {/* Photo Gallery Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-wrap-blue mb-6">Recent Projects in {regionName}</h2>
        <GalleryShowcase townName={regionName} itemLimit={6} />
      </div>
      
      {citiesServed.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-wrap-blue mb-4">Cities We Serve in {regionName}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {citiesServed.map((city, index) => (
              <div key={index} className="bg-white p-3 rounded shadow-sm border border-gray-100 flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png" 
                  alt="Location pin" 
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {adjacentRegions.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-wrap-blue mb-4">We Also Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {adjacentRegions.map((region, index) => (
              <a 
                key={index}
                href={`/regions/${region.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition-all flex items-center space-x-3"
              >
                <img 
                  src={`/lovable-uploads/${[
                    "590d1c5f-1242-4641-8775-d67442eb5985.png",
                    "da66fc1b-34ee-4085-b73c-49b58773faf2.png",
                    "b74857d0-710d-4089-9183-4df0575dc986.png",
                    "ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png"
                  ][index % 4]}`} 
                  alt={region} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-wrap-blue font-medium">{region}</span>
              </a>
            ))}
          </div>
        </div>
      )}
      
      {/* Before & After Showcase */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-wrap-blue mb-6">Before & After Transformations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png" 
                alt="Before vehicle wrap" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full">
                Before
              </div>
            </div>
            <h3 className="font-medium text-wrap-blue">White Luxury Vehicle</h3>
            <p className="text-wrap-grey">Original factory paint before customization</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png" 
                alt="After vehicle wrap" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-wrap-red text-white px-3 py-1 rounded-full">
                After
              </div>
            </div>
            <h3 className="font-medium text-wrap-blue">Blue Sport Luxury Vehicle</h3>
            <p className="text-wrap-grey">Complete color change wrap with premium vinyl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalPageContent;
