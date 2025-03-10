
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import RegionalHero from '@/components/regions/hero/RegionalHero';
import TownPageContent from '@/components/town/layout/TownPageContent';
import ChatbotWithSchema from '@/components/chatbot/ChatbotWithSchema';
import InitImageObserver from '@/components/utils/ImageObserver';

interface TownPageLayoutProps {
  townData: any;
  townBackgroundImage: string;
  locationFaqs: Array<{
    question: string;
    answer: React.ReactNode;
  }>;
}

const TownPageLayout: React.FC<TownPageLayoutProps> = ({
  townData,
  townBackgroundImage,
  locationFaqs
}) => {
  const stateFullName = 
    townData.state === 'IL' ? 'Illinois' : 
    townData.state === 'MI' ? 'Michigan' : 
    townData.state === 'IN' ? 'Indiana' : 
    townData.state === 'WI' ? 'Wisconsin' : townData.state;

  return (
    <div className="flex flex-col min-h-screen">
      <InitImageObserver />
      <Navbar />
      
      <main className="flex-grow">
        <RegionalHero regionName={townData.name} regionImage={townBackgroundImage} />
        
        <TownPageContent 
          townData={townData}
          locationFaqs={locationFaqs}
        />
      </main>
      
      <ChatbotWithSchema 
        initialMessage={`Hello! I'm your virtual assistant for ${townData.name}, ${stateFullName}. How can I help you with vehicle wraps, ceramic coatings, or paint protection services in your area?`} 
      />
      
      <Footer />
    </div>
  );
};

export default TownPageLayout;
