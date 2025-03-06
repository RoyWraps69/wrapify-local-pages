
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProcessSection from '@/components/ProcessSection';
import GalleryShowcase from '@/components/GalleryShowcase';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SEOSchema from '@/components/SEOSchema';
import { getTownData } from '@/utils/townData';

const TownPage: React.FC = () => {
  const { townSlug } = useParams<{ townSlug: string }>();
  const townData = getTownData(townSlug || '');
  
  if (!townData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Town Not Found</h1>
          <p className="mb-6">We couldn't find information for this location.</p>
          <a href="/" className="bg-wrap-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all">
            Return Home
          </a>
        </div>
      </div>
    );
  }
  
  const { 
    name, 
    description, 
    heroTitle, 
    heroSubtitle,
    serviceIntro,
    benefits,
    testimonials
  } = townData;
  
  const pageTitle = `Professional Vehicle Wraps in ${name} | Chicago Fleet Wraps`;
  const pageDescription = `Premium quality vehicle wraps and fleet graphics in ${name}. Transform your business vehicles with custom wraps from Chicago's top-rated wrap company.`;
  const pageUrl = `https://chicagofleetwraps.com/locations/${townSlug}`;

  return (
    <>
      <SEOSchema 
        townName={name}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
      />
      <Navbar />
      <main>
        <HeroSection title={heroTitle} subtitle={heroSubtitle} townName={name} />
        <ServicesSection intro={serviceIntro} townName={name} />
        <BenefitsSection benefits={benefits} townName={name} />
        <ProcessSection townName={name} />
        <GalleryShowcase townName={name} />
        <TestimonialSection testimonials={testimonials} townName={name} />
        <FAQSection townName={name} />
        <MapSection townName={name} />
        <CTASection townName={name} />
      </main>
      <Footer />
    </>
  );
};

export default TownPage;
