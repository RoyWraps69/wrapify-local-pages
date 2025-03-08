
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicHeroSection from '@/components/DynamicHeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import NationwideSection from '@/components/nationwide/NationwideSection';
import ChatbotWithSchema from '@/components/chatbot/ChatbotWithSchema';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import HomePageSchema from '@/components/home/HomePageSchema';
import { getAllTowns } from '@/utils/townData';

const Index = () => {
  console.log("Index component rendering - GitHub Pages Test");
  
  useEffect(() => {
    console.log("Index component mounted");
    console.log("Current URL:", window.location.href);
    console.log("Base URL:", document.baseURI);
    
    // Debug environment
    console.log("Environment:", import.meta.env.MODE);
    console.log("Base path:", import.meta.env.BASE_URL);
  }, []);
  
  const towns = getAllTowns();
  console.log("Towns data count:", towns.length);
  
  // Create list of town names for SEO
  const topTownNames = towns.slice(0, 15).map(town => town.name).join(", ");
  
  return (
    <>
      <HomePageSchema townName="Chicago" topTownNames={topTownNames} />
      
      <Navbar />
      <main>
        <DynamicHeroSection townName="Chicago" />
        <ServicesSection townName="Chicago" />
        <WhyChooseUsSection townName="Chicago" />
        <TestimonialSection townName="Chicago" />
        <NationwideSection />
        <FAQSection townName="Chicago" />
        <ServiceAreasSection townName="Chicago" />
      </main>
      <ChatbotWithSchema initialMessage="Hello! How can I help you with vehicle wraps or ceramic coatings today? Ask me about services, pricing, or locations near you." />
      <Footer />
    </>
  );
};

export default Index;
