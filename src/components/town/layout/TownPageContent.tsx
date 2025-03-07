
import React from 'react';
import TownPageSections from '@/components/town/sections/TownPageSections';
import { generateTownFeaturedProjects } from '@/components/town/sections/TownPageFeaturedProjects';

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
  
  // Generate featured projects for this town
  const featuredProjects = generateTownFeaturedProjects(townData.name);
  
  return (
    <div className="town-page py-8" itemScope itemType="https://schema.org/WebPage">
      <div className="container mx-auto px-4 space-y-16">
        <TownPageSections 
          townData={townData}
          locationFaqs={locationFaqs}
          featuredProjects={featuredProjects}
        />
      </div>
    </div>
  );
};

export default TownPageContent;
