
import React from 'react';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProcessSection from '@/components/ProcessSection';
import GalleryShowcase from '@/components/GalleryShowcase';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TownDescription from '@/components/town/sections/TownDescription';
import MapSection from '@/components/MapSection';
import NearbyTownsSection from '@/components/town/sections/NearbyTownsSection';

interface TownPageContentProps {
  townData: any;
  locationFaqs: Array<{
    question: string;
    answer: React.ReactNode;
  }>;
}

const TownPageContent: React.FC<TownPageContentProps> = ({ 
  townData,
  locationFaqs
}) => {
  if (!townData) {
    console.error("TownPageContent: townData is null or undefined");
    return (
      <div className="py-10 text-center">
        <p className="text-wrap-grey">Town information unavailable.</p>
      </div>
    );
  }
  
  console.log("TownPageContent rendering with town:", townData.name);
  
  const { id, name, mapUrl } = townData;
  
  // Featured project images specific to this town
  const featuredProjects = [
    {
      image: "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png",
      title: "Blue Sports Car Wrap",
      description: `Complete color change wrap in ${name}`,
    },
    {
      image: "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png",
      title: "Custom Green Design",
      description: `Custom graphics for a local ${name} business`,
    },
    {
      image: "/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png",
      title: "Commercial Fleet Branding",
      description: `Fleet branding solution for ${name} company`,
    }
  ];
  
  return (
    <main className="town-page" itemScope itemType="https://schema.org/WebPage">
      <div className="animate-on-scroll fade-up">
        <TownDescription townName={name} townData={townData} />
      </div>
      
      {/* Featured Projects Photo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold text-center text-wrap-blue mb-6">
            Our Work in {name}
          </h2>
          <p className="text-center text-wrap-grey max-w-2xl mx-auto mb-10">
            Take a look at some of our recent vehicle transformation projects in {name} and surrounding areas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-xl shadow-md relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-lg font-medium mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="services-section animate-on-scroll fade-up">
        <ServicesSection townName={name} />
      </div>
      
      <div className="animate-on-scroll fade-up">
        <BenefitsSection townName={name} />
      </div>
      
      {/* Before & After Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold text-center text-wrap-blue mb-6">
            Transformations in {name}
          </h2>
          <p className="text-center text-wrap-grey max-w-2xl mx-auto mb-10">
            See the dramatic difference our wrapping services make on vehicles in {name}.
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
      
      <div className="animate-on-scroll fade-up">
        <ProcessSection townName={name} />
      </div>
      
      <div className="animate-on-scroll fade-up">
        <GalleryShowcase townName={name} itemLimit={6} />
      </div>
      
      <div className="animate-on-scroll fade-up">
        <TestimonialSection townName={name} />
      </div>
      
      <div className="animate-on-scroll fade-up">
        <FAQSection townName={name} faqs={locationFaqs} />
      </div>
      
      <div className="animate-on-scroll fade-up">
        <MapSection townName={name} mapUrl={mapUrl} />
      </div>
      
      <div className="animate-on-scroll fade-up">
        <NearbyTownsSection townId={id} townName={name} maxDistance={50} />
      </div>
      
      <div className="animate-on-scroll fade-up">
        <CTASection townName={name} />
      </div>
    </main>
  );
};

export default TownPageContent;
