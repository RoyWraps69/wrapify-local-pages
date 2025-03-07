
import React from 'react';
import DynamicHeroSection from '@/components/DynamicHeroSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import AboutSection from '@/components/home/AboutSection';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import CTASection from '@/components/CTASection';
import LocationsSection from '@/components/home/LocationsSection';

const HomePageContent: React.FC = () => {
  return (
    <main className="home-page">
      <DynamicHeroSection />
      <FeaturedServices />
      <AboutSection />
      <TestimonialSlider />
      <FeaturedProjects />
      <LocationsSection />
      <CTASection />
    </main>
  );
};

export default HomePageContent;
