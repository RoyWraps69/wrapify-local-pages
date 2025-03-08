
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactLayout from '@/components/contact/ContactLayout';
import PageSEO from '@/components/seo/PageSEO';
import { 
  generateServiceSchema, 
  generateContactPageSchema,
  generateBreadcrumbSchema 
} from '@/utils/seo/schemaGenerator';

const Contact = () => {
  // Create structured data specifically for the contact page
  const contactSchema = generateContactPageSchema();
  
  // Create service schema for contact services
  const serviceSchema = generateServiceSchema({
    pageTitle: "Vehicle Wrap & Ceramic Coating Quote Requests",
    pageDescription: "Request quotes for professional vehicle wrapping, ceramic coating, and paint protection services in Chicago and nationwide.",
    pageUrl: "https://wrappingtheworld.com/contact",
    townName: "Chicago"
  });
  
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wrappingtheworld.com" },
    { name: "Contact", url: "https://wrappingtheworld.com/contact" }
  ]);

  return (
    <>
      <PageSEO 
        title="Contact Wrapping The World | Request Vehicle Wrap Quote"
        description="Request a free quote for professional vehicle wrapping services. Contact our team of expert installers for fleet graphics, commercial wraps, and custom vehicle branding solutions."
        canonicalUrl="/contact"
        keywords="vehicle wrap quote, car wrap estimate, fleet graphics contact, commercial vehicle branding quote, ceramic coating estimate, paint protection film quote, wrap installation consultation, free vehicle wrap estimate, Chicago vehicle wrap quotes, professional wrap installers contact"
        location="Chicago"
        structuredData={[contactSchema, serviceSchema, breadcrumbSchema]}
      />
      <Navbar />
      <ContactLayout />
      <Footer />
    </>
  );
};

export default Contact;
