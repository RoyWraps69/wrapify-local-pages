
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

interface TownPageSectionsProps {
  townData: any;
  locationFaqs: Array<{
    question: string;
    answer: React.ReactNode;
  }>;
  featuredProjects: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

const TownPageSections: React.FC<TownPageSectionsProps> = ({ 
  townData,
  locationFaqs,
  featuredProjects
}) => {
  const { id, name, mapUrl } = townData;
  
  return (
    <>
      <div className="animate-on-scroll fade-up">
        <TownDescription 
          townName={townData.name}
          description={townData.description || ''}
          population={townData.population || 0}
          businessCount={townData.businessCount || 0}
          townData={townData}
        />
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
    </>
  );
};

export default TownPageSections;
