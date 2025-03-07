
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageSEO from '@/components/seo/PageSEO';
import WarrantyContent from '@/components/warranty/WarrantyContent';
import { generateWarrantySchemas } from '@/utils/seo/schemas/productSchemas';

const WarrantyInformation = () => {
  // Generate all schemas for the warranty page
  const { warrantySchema, orgSchema, webPageSchema } = generateWarrantySchemas();
  
  // Create array of all schemas for the page
  const structuredData = [warrantySchema, orgSchema, webPageSchema];
  
  // Keywords for better SEO
  const keywords = "vehicle wrap warranty, ceramic coating warranty, paint protection film warranty, wrap guarantee, 5-year warranty, professional installation warranty, Chicago vehicle wrap warranty, vehicle enhancement warranty";
  
  return (
    <>
      <PageSEO
        title="Warranty Information | Wrapping The World"
        description="Our comprehensive 5-year warranty covers all professional vehicle wraps, ceramic coatings, and paint protection film installations performed by certified Wrapping The World technicians."
        canonicalUrl="/warranty-information"
        keywords={keywords}
        structuredData={structuredData}
        location="Chicago"
        publishedTime="2023-01-15T08:00:00+08:00"
        modifiedTime={new Date().toISOString()}
      />
      
      <Navbar />
      <WarrantyContent />
      <Footer />
    </>
  );
};

export default WarrantyInformation;
