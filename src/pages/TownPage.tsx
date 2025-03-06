
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import SEOSchema from '@/components/SEOSchema';
import { getTownData } from '@/utils/townData';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import TownStructuredData from '@/components/town/seo/TownStructuredData';
import TownPageContent from '@/components/town/layout/TownPageContent';
import { createTownFAQs } from '@/components/town/data/TownFAQData';

const TownPage: React.FC = () => {
  const { townSlug } = useParams<{ townSlug: string }>();
  const navigate = useNavigate();
  
  useScrollAnimation();
  
  console.log("TownPage rendering with townSlug:", townSlug);
  
  const townData = getTownData(townSlug || '');
  
  useEffect(() => {
    console.log("TownPage useEffect running, townData:", townData);
    
    if (!townData && townSlug) {
      console.log(`Town not found for slug: ${townSlug}, redirecting to 404`);
      navigate('/not-found', { replace: true });
      return;
    }
    
    window.scrollTo(0, 0);
    
    console.log(`Town page loaded successfully for: ${townData?.name}`);
    
  }, [townSlug, townData, navigate]);
  
  if (!townData) {
    console.log("No town data found, returning null");
    return null; // Will be redirected by the useEffect
  }
  
  const { name } = townData;
  
  const pageTitle = `Professional Vehicle Wraps & Ceramic Coatings in ${name} | Wrapping The World`;
  const pageDescription = `Premium quality vehicle wraps, ceramic coatings, and paint protection film in ${name}. Transform your business vehicles with custom wraps and protection from the world's top-rated vehicle enhancement company.`;
  const pageUrl = `https://wrappingtheworld.com/locations/${townSlug}`;
  const canonicalUrl = `https://wrappingtheworld.com/locations/${townSlug}`;

  // Generate location-specific FAQs
  const locationFaqs = createTownFAQs({ townName: name });

  return (
    <>
      <TownStructuredData 
        townData={townData}
        townSlug={townSlug || ''}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
        canonicalUrl={canonicalUrl}
      />
      
      <SEOSchema 
        townName={name}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
      />
      
      <Navbar />
      
      <TownPageContent 
        townData={townData}
        locationFaqs={locationFaqs}
      />
      
      <Footer />
    </>
  );
};

export default TownPage;
