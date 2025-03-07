
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import SEOSchema from '@/components/SEOSchema';
import { getTownData, getAllTowns } from '@/utils/townData';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import TownStructuredData from '@/components/town/seo/TownStructuredData';
import LazyTownPageContent from '@/components/town/layout/LazyTownPageContent';
import { createTownFAQs } from '@/components/town/data/TownFAQData';
import { Helmet } from 'react-helmet-async';

const TownPage: React.FC = () => {
  const { townSlug } = useParams<{ townSlug: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [townData, setTownData] = useState<any>(null);
  
  useScrollAnimation();
  
  console.log("TownPage rendering with townSlug:", townSlug);
  
  // Get town data and handle loading state
  useEffect(() => {
    if (!townSlug) {
      console.error("No townSlug provided");
      navigate('/not-found', { replace: true });
      return;
    }
    
    const fetchedTownData = getTownData(townSlug);
    console.log("TownPage useEffect running, fetchedTownData:", fetchedTownData);
    
    if (!fetchedTownData) {
      console.log(`Town not found for slug: ${townSlug}, redirecting to 404`);
      navigate('/not-found', { replace: true });
      return;
    }

    setTownData(fetchedTownData);
    setLoading(false);
    window.scrollTo(0, 0);
    
    console.log(`Town page loaded successfully for: ${fetchedTownData?.name} with id: ${fetchedTownData?.id}`);
  }, [townSlug, navigate]);
  
  // Log all available towns for debugging
  useEffect(() => {
    const allTowns = getAllTowns();
    console.log("All available towns:", allTowns.map(t => ({id: t.id, name: t.name})));
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-wrap-red border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-wrap-grey">Loading town information...</p>
        </div>
      </div>
    );
  }
  
  if (!townData) {
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
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
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
      
      <LazyTownPageContent 
        townData={townData}
        locationFaqs={locationFaqs}
      />
      
      <Footer />
    </>
  );
};

export default TownPage;
