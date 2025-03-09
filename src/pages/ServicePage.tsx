
// Only modifying parts that handle the faqs property

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
import { ArrowRight } from 'lucide-react';
import { 
  generateServiceSchema, 
  generateWebPageSchema, 
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema
} from '@/utils/seo/schemaGenerator';

const ServicePage: React.FC = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  
  useEffect(() => {
    // Scroll to top when service page changes
    window.scrollTo(0, 0);
  }, [serviceType]);
  
  const service = getServiceData(serviceType);
  
  // Make sure we have a valid hero image
  const heroImage = service.hero || '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png';
  
  // Check if we're on vehicle-wraps page to show additional content
  const isVehicleWraps = serviceType === 'vehicle-wraps';
  
  // Generate the service page title and description
  const pageTitle = `${service.title} | Professional Vehicle Enhancement Services`;
  const pageDescription = service.description;
  const pageUrl = `/services/${serviceType}`;
  const canonicalUrl = `https://wrappingtheworld.com/services/${serviceType}`;
  
  // Create structured data for the service page
  const serviceSchema = generateServiceSchema({
    pageTitle: service.title,
    pageDescription: service.description,
    pageUrl: canonicalUrl,
    townName: "Chicago"
  });
  
  const webPageSchema = generateWebPageSchema({
    pageTitle: pageTitle,
    pageDescription: pageDescription,
    pageUrl: canonicalUrl,
    imageUrl: heroImage,
    datePublished: "2023-01-15T08:00:00+08:00",
    dateModified: new Date().toISOString()
  });
  
  const orgSchema = generateOrganizationSchema();
  
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wrappingtheworld.com" },
    { name: "Services", url: "https://wrappingtheworld.com/services" },
    { name: service.title, url: canonicalUrl }
  ]);
  
  // Convert service FAQs to the format needed for schema
  // Handle the case where service.faqs might be undefined
  const serviceFAQs = service.faqs ? service.faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })) : [];
  
  const faqSchema = generateFAQSchema(serviceFAQs);
  
  // Keywords for the service
  const keywords = `${service.title.toLowerCase()}, ${service.title.toLowerCase()} Chicago, professional ${service.title.toLowerCase()}, ${service.title.toLowerCase()} cost, ${service.title.toLowerCase()} installation, premium ${service.title.toLowerCase()}, ${service.title.toLowerCase()} services, Chicago ${service.title.toLowerCase()}, best ${service.title.toLowerCase()} company, vehicle enhancements Midwest`;

  return (
    <>
      <PageSEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={pageUrl}
        ogImage={heroImage}
        keywords={keywords}
        structuredData={[serviceSchema, webPageSchema, orgSchema, breadcrumbSchema, faqSchema]}
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
        
        {service.title !== 'Service Not Found' && (
          <section className="py-16 bg-gradient-to-b from-wrap-blue/5 to-transparent">
            <div className="container mx-auto px-4">
              <ServiceDescription 
                title={service.title}
                description={service.description}
                longDescription={service.longDescription}
              />
              
              {isVehicleWraps && (
                <div className="max-w-4xl mx-auto mt-8 mb-12">
                  <div className="bg-wrap-blue/5 rounded-lg p-6 border border-wrap-blue/10">
                    <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
                      Professional Vehicle Wraps for Every Need
                    </h3>
                    <p className="text-wrap-grey mb-4">
                      Whether you're looking to transform your personal vehicle with a stunning color change, 
                      create eye-catching branding for your business fleet, or add protective elements to 
                      preserve your vehicle's value, our expert team delivers exceptional results.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <a href="/services/color-change-wraps" className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Color Change Wraps</span>
                      </a>
                      <a href="/services/commercial-fleet-wraps" className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Commercial Fleet Wraps</span>
                      </a>
                      <a href="/services/paint-protection-film" className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Paint Protection Film</span>
                      </a>
                      <a href="/services/partial-wraps" className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Partial Wraps</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              
              <ServiceBenefits 
                benefits={service.benefits}
                serviceName={service.title}
              />
            </div>
          </section>
        )}
        
        <ProcessSection />
        <RelatedServices currentService={serviceType} />
        <ServiceFAQs service={service} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
