
import React from 'react';

interface TownTransformationsSectionProps {
  townName: string;
}

const TownTransformationsSection: React.FC<TownTransformationsSectionProps> = ({ 
  townName 
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold text-center text-wrap-blue mb-6">
          Transformations in {townName}
        </h2>
        <p className="text-center text-wrap-grey max-w-2xl mx-auto mb-10">
          See the dramatic difference our wrapping services make on vehicles in {townName}.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-md mb-4">
              <img 
                src="/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png" 
                alt="Before wrap" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full">Before</div>
            </div>
            <h3 className="text-lg font-medium text-wrap-blue">Stock Vehicle</h3>
            <p className="text-wrap-grey">Original factory finish before our premium wrap service</p>
          </div>
          
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-md mb-4">
              <img 
                src="/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png" 
                alt="After wrap" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-wrap-red text-white px-3 py-1 rounded-full">After</div>
            </div>
            <h3 className="text-lg font-medium text-wrap-blue">Custom Wrapped Finish</h3>
            <p className="text-wrap-grey">Transformed with our premium vinyl wrap and expert installation</p>
          </div>
          
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-md mb-4">
              <img 
                src="/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png" 
                alt="Before commercial wrap" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full">Before</div>
            </div>
            <h3 className="text-lg font-medium text-wrap-blue">Unmarked Commercial Vehicle</h3>
            <p className="text-wrap-grey">Plain vehicle before business branding</p>
          </div>
          
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-md mb-4">
              <img 
                src="/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png" 
                alt="After commercial wrap" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-wrap-red text-white px-3 py-1 rounded-full">After</div>
            </div>
            <h3 className="text-lg font-medium text-wrap-blue">Branded Fleet Vehicle</h3>
            <p className="text-wrap-grey">Professionally branded with custom graphics and company identity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TownTransformationsSection;
