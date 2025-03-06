
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEOSchema';
import CTASection from '@/components/CTASection';
import CaseStudiesHeader from '@/components/case-studies/CaseStudiesHeader';
import FeaturedCaseStudy from '@/components/case-studies/FeaturedCaseStudy';
import CaseStudyList from '@/components/case-studies/CaseStudyList';
import IndustrySolutions from '@/components/case-studies/IndustrySolutions';
import ClientTestimonial from '@/components/case-studies/ClientTestimonial';
import { caseStudies } from '@/data/caseStudies';

const CaseStudies = () => {
  return (
    <>
      <SEO 
        townName="Chicago"
        pageTitle="Vehicle Wrap & Protection Case Studies | Wrapping The World"
        pageDescription="See real results from our vehicle wrap and protection projects. Browse our case studies featuring commercial fleet branding, color change wraps, ceramic coatings, and paint protection film installations."
        pageUrl="https://wrappingtheworld.com/case-studies"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <CaseStudiesHeader 
            title="Vehicle Wrap & Protection Case Studies"
            description="Explore real-world examples of our vehicle transformation projects. These case studies showcase our expertise in commercial fleet branding, custom vehicle wraps, ceramic coatings, and paint protection film installations."
          />
          
          {/* Featured Case Study */}
          <FeaturedCaseStudy caseStudy={caseStudies[0]} />
          
          {/* Case Studies Grid */}
          <CaseStudyList caseStudies={caseStudies.slice(1)} />
          
          {/* Industry Solutions Section */}
          <IndustrySolutions />
          
          {/* Client Testimonial */}
          <ClientTestimonial />
        </div>
        
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudies;
