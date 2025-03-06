
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProcessSection from '@/components/ProcessSection';
import GalleryShowcase from '@/components/GalleryShowcase';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SEOSchema from '@/components/SEOSchema';
import TownDescription from '@/components/TownDescription';
import MapSection from '@/components/MapSection';
import { getTownData } from '@/utils/townData';
import { Helmet } from 'react-helmet-async';

const TownPage: React.FC = () => {
  const { townSlug } = useParams<{ townSlug: string }>();
  const navigate = useNavigate();
  
  console.log("TownPage rendering with townSlug:", townSlug);
  
  const townData = getTownData(townSlug || '');
  
  useEffect(() => {
    console.log("TownPage useEffect running, townData:", townData);
    
    if (!townData && townSlug) {
      console.log(`Town not found for slug: ${townSlug}, redirecting to 404`);
      navigate('/not-found', { replace: true });
      return;
    }
    
    // Scroll to top on town page load
    window.scrollTo(0, 0);
    
    // Add structured data for this specific town
    const townStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${townData?.name} Vehicle Wraps & Ceramic Coatings`,
      "description": `Professional vehicle wrapping and ceramic coating services in ${townData?.name}. We specialize in commercial fleet wraps, custom vehicle graphics, ceramic coatings, and paint protection film.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Wrapping The World",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chicago",
          "addressRegion": "IL"
        },
        "telephone": "312-597-1286",
        "url": "https://wrappingtheworld.com"
      },
      "areaServed": {
        "@type": "City",
        "name": townData?.name
      },
      "serviceType": "Vehicle Wraps & Protection"
    };
    
    // Log successful town page load for analytics
    console.log(`Town page loaded successfully for: ${townData?.name}`);
    
  }, [townSlug, townData, navigate]);
  
  if (!townData) {
    console.log("No town data found, returning null");
    return null; // Will be redirected by the useEffect
  }
  
  const { name, mapUrl } = townData;
  
  const pageTitle = `Professional Vehicle Wraps & Ceramic Coatings in ${name} | Wrapping The World`;
  const pageDescription = `Premium quality vehicle wraps, ceramic coatings, and paint protection film in ${name}. Transform your business vehicles with custom wraps and protection from the world's top-rated vehicle enhancement company.`;
  const pageUrl = `https://wrappingtheworld.com/locations/${townSlug}`;
  const canonicalUrl = `https://wrappingtheworld.com/locations/${townSlug}`;

  const locationFaqs = [
    {
      question: `Where can I get professional vehicle wraps in ${name}?`,
      answer: (
        <p>
          Wrapping The World provides premium vehicle wrapping services in {name} and surrounding areas. 
          Our team serves all {name} businesses and residents with high-quality commercial fleet wraps, 
          color change wraps, ceramic coatings, and custom vehicle graphics. Contact us today for 
          a free consultation about your {name} vehicle wrapping project.
        </p>
      )
    },
    {
      question: `How much does ceramic coating cost in ${name}?`,
      answer: (
        <div>
          <p className="mb-3">
            The cost of ceramic coating for vehicles in {name} depends on several factors:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vehicle size and type</li>
            <li>Current condition of the paint</li>
            <li>Level of preparation required</li>
            <li>Grade of ceramic coating selected</li>
            <li>Additional services (paint correction, etc.)</li>
          </ul>
          <p className="mt-3">
            Our ceramic coating packages for {name} clients typically range from $699 for basic 
            protection to $1,899+ for our premium ceramic coating with multi-year protection. 
            Contact us for a personalized quote for your specific vehicle.
          </p>
        </div>
      )
    },
    {
      question: `What businesses in ${name} benefit most from fleet wraps?`,
      answer: (
        <div>
          <p className="mb-3">
            Many types of businesses in {name} see significant benefits from professional fleet wraps:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Service businesses (plumbing, electrical, HVAC, landscaping)</li>
            <li>Construction and contracting companies</li>
            <li>Food trucks and catering businesses</li>
            <li>Delivery services and couriers</li>
            <li>Real estate agencies</li>
            <li>Local retailers with delivery vehicles</li>
            <li>Home service providers</li>
          </ul>
          <p className="mt-3">
            Any {name} business with vehicles that travel throughout the area can transform them into 
            powerful mobile billboards, generating thousands of local impressions daily.
          </p>
        </div>
      )
    },
    {
      question: `What's the difference between ceramic coating and paint protection film for my ${name} vehicle?`,
      answer: (
        <p>
          For {name} vehicle owners, both ceramic coating and paint protection film (PPF) offer distinct benefits. 
          Ceramic coating provides chemical resistance, hydrophobic properties (making cleaning easier), and enhanced gloss, 
          but minimal physical protection. Paint Protection Film offers superior physical protection against rock chips 
          and scratches with self-healing technology. Many {name} clients choose to combine both: PPF on high-impact areas 
          (front bumper, hood) and ceramic coating over the entire vehicle for complete protection against Chicago's harsh weather 
          and road conditions.
        </p>
      )
    },
    {
      question: `How long do vehicle wraps last in the ${name} climate?`,
      answer: (
        <p>
          In {name}'s climate, professionally installed vehicle wraps typically last 5-7 years. Our premium 
          3M and Avery Dennison vinyl materials are specifically engineered to withstand the Midwest's extreme 
          temperature variations, from hot summers to frigid winters. To maximize longevity, we recommend 
          regular gentle washing and keeping wrapped vehicles garaged when possible. Our {name} clients 
          enjoy excellent durability, with proper maintenance ensuring your wrap maintains its vibrant 
          appearance for years.
        </p>
      )
    },
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content={name} />
        <meta name="geo.position" content={`${townData.latitude};${townData.longitude}`} />
        <meta name="ICBM" content={`${townData.latitude}, ${townData.longitude}`} />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>
      
      <SEOSchema 
        townName={name}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
      />
      <Navbar />
      <main className="town-page" itemScope itemType="https://schema.org/WebPage">
        <HeroSection townName={name} />
        <TownDescription townName={name} townData={townData} />
        <ServicesSection townName={name} />
        <BenefitsSection townName={name} />
        <ProcessSection townName={name} />
        <GalleryShowcase townName={name} itemLimit={6} />
        <TestimonialSection townName={name} />
        <FAQSection townName={name} faqs={locationFaqs} />
        <MapSection townName={name} mapEmbedUrl={mapUrl} />
        <CTASection townName={name} />
      </main>
      <Footer />
    </>
  );
};

export default TownPage;
