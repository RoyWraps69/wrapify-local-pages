
import React from 'react';
import DynamicHeroSection from '@/components/DynamicHeroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProcessSection from '@/components/ProcessSection';
import GalleryShowcase from '@/components/GalleryShowcase';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TownDescription from '@/components/TownDescription';
import MapSection from '@/components/MapSection';

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
  if (!townData) return null;
  
  const { name, mapUrl } = townData;
  
  return (
    <main className="town-page" itemScope itemType="https://schema.org/WebPage">
      <DynamicHeroSection townName={name} />
      
      <div className="animate-on-scroll fade-up">
        <TownDescription townName={name} townData={townData} />
      </div>
      
      <div className="services-section animate-on-scroll fade-up">
        <ServicesSection townName={name} />
      </div>
      
      <div className="animate-on-scroll fade-up">
        <BenefitsSection townName={name} />
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
        <CTASection townName={name} />
      </div>
    </main>
  );
};

export default TownPageContent;
