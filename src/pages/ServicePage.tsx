
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import RegionalHero from '@/components/regions/hero/RegionalHero';
import CTASection from '@/components/CTASection';
import ProcessSection from '@/components/ProcessSection';
import ServicesBreadcrumb from '@/components/ServicesBreadcrumb';
import { getServiceData } from '@/data/serviceData';
import ServiceDescription from '@/components/services/ServiceDescription';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQs from '@/components/services/ServiceFAQs';
import RelatedServices from '@/components/services/RelatedServices';
import PageSEO from '@/components/seo/PageSEO';
import ServiceNotFound from '@/components/services/ServiceNotFound';
import VehicleWrapsContent from '@/components/services/VehicleWrapsContent';
import { generateServiceSchemas } from '@/components/services/ServiceSchemaGenerator';
import { generateServiceKeywords } from '@/components/services/ServiceKeywordsGenerator';
import { generateOrganizationSchema } from '@/utils/seo/schemaGenerator';

// Define a set of additional vehicle images to supplement service-specific images
const additionalHeroImages = [
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png', // Pink Dodge
  '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png', // Silver Mercedes
  '/lovable-uploads/1caa5cd6-72b9-428d-a535-c34684e282f1.png', // Blue Camaro
  '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png', // Pink car
  '/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png', // Green car
];

const ServicePage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  useEffect(() => {
    // Log which service we're trying to render
    console.log(`Rendering service page for: "${serviceSlug}"`);
    
    // Scroll to top when service page changes
    window.scrollTo(0, 0);
  }, [serviceSlug]);
  
  const service = getServiceData(serviceSlug);
  
  // Log whether we found the service or not
  console.log(`Service found:`, service.title !== 'Service Not Found');
  
  // Select a random image if the service doesn't have one, or if we want a random one
  const getRandomHeroImage = () => {
    const randomIndex = Math.floor(Math.random() * additionalHeroImages.length);
    return additionalHeroImages[randomIndex];
  };
  
  // Make sure we have a valid hero image - use service.hero, or fall back to a random one
  const heroImage = service.hero || getRandomHeroImage();
  
  // Check if we're on vehicle-wraps page to show additional content
  const isVehicleWraps = serviceSlug === 'vehicle-wraps';
  
  // Show a friendly message if the service is not found
  if (service.title === 'Service Not Found') {
    return (
      <>
        <PageSEO
          title="Service Not Found | Wrapping The World"
          description="The service you're looking for isn't available. Please check our main services page for all available vehicle wrapping and protection services."
          canonicalUrl="/services"
          ogImage="/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png"
          keywords="vehicle wraps, commercial fleet wraps, ceramic coating, paint protection film"
          structuredData={[generateOrganizationSchema()]}
          location="Chicago"
        />
        
        <Navbar />
        <ServiceNotFound />
        <Footer />
      </>
    );
  }

  // Generate the service page title and description
  const pageTitle = `${service.title} | Professional Vehicle Enhancement Services`;
  const pageDescription = service.description;
  const pageUrl = `/services/${serviceSlug}`;
  const canonicalUrl = `https://wrappingtheworld.com/services/${serviceSlug}`;

  // Generate structured data
  const structuredData = generateServiceSchemas({
    serviceTitle: service.title,
    serviceDescription: service.description,
    pageUrl: canonicalUrl,
    heroImage: heroImage,
    faqs: service.faqs || []
  });

  // Generate keywords
  const keywords = generateServiceKeywords({ serviceTitle: service.title });

  return (
    <>
      <PageSEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={pageUrl}
        ogImage={heroImage}
        keywords={keywords}
        structuredData={structuredData}
        location="Chicago"
        publishedTime="2023-01-15T08:00:00+08:00"
        modifiedTime={new Date().toISOString()}
      />
      
      <Navbar />
      <main className="service-page">
        <RegionalHero 
          regionName={service.title} 
          regionImage={heroImage}
        />
        
        <ServicesBreadcrumb 
          currentPage={service.title} 
          parentPage={{
            name: "Services",
            path: "/services"
          }}
        />
        
        <section className="py-16 bg-gradient-to-b from-wrap-blue/5 to-transparent">
          <div className="container mx-auto px-4">
            <ServiceDescription 
              title={service.title}
              description={service.description}
              longDescription={service.longDescription}
            />
            
            {isVehicleWraps && <VehicleWrapsContent />}
            
            <ServiceBenefits 
              benefits={service.benefits}
              serviceName={service.title}
            />
          </div>
        </section>
        
        <ProcessSection />
        <RelatedServices currentService={serviceSlug} />
        <ServiceFAQs service={service} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
