
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

const ServicePage: React.FC = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);
  
  const service = getServiceData(serviceType);
  const pageTitle = `${service.title} | Wrapping The World`;
  const pageDescription = service.description;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://wrappingtheworld.com/services/${serviceType}`} />
      </Helmet>
      <Navbar />
      <main className="service-page">
        <RegionalHero 
          regionName={service.title} 
          regionImage={service.hero}
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
            
            <ServiceBenefits 
              benefits={service.benefits}
              serviceName={service.title}
            />
          </div>
        </section>
        
        <ProcessSection />
        <RelatedServices />
        <ServiceFAQs service={service} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
