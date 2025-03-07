
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
import TownFeaturedProjects from '@/components/town/sections/TownFeaturedProjects';
import TownTransformationsSection from '@/components/town/sections/TownTransformationsSection';

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
    <div className="town-page py-8" itemScope itemType="https://schema.org/WebPage">
      <div className="container mx-auto px-4 space-y-16">
        <div className="animate-on-scroll fade-up">
          <TownDescription townName={name} townData={townData} />
        </div>
        
        <div className="animate-on-scroll fade-up">
          <TownFeaturedProjects townName={name} featuredProjects={featuredProjects} />
        </div>
        
        <div className="animate-on-scroll fade-up">
          <ServicesSection townName={name} />
        </div>
        
        <div className="animate-on-scroll fade-up">
          <BenefitsSection townName={name} />
        </div>
        
        <div className="animate-on-scroll fade-up">
          <TownTransformationsSection townName={name} />
        </div>
        
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
      </div>
    </div>
  );
};

export default TownPageContent;
