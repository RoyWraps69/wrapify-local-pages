
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import ProcessSection from '@/components/ProcessSection';

interface ServiceInfo {
  title: string;
  description: string;
  hero: string;
}

const ServicePage: React.FC = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  
  const serviceInfo: Record<string, ServiceInfo> = {
    'commercial-fleet-wraps': {
      title: 'Commercial Fleet Wraps',
      description: 'Turn your company vehicles into moving billboards with our high-quality commercial fleet wraps. We help businesses of all sizes stand out and get noticed.',
      hero: 'https://images.unsplash.com/photo-1625323509397-1d47b13d6cb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    'ceramic-coatings': {
      title: 'Ceramic Coatings',
      description: 'Protect your vehicle's paint with our long-lasting ceramic coatings. These coatings repel water, resist scratches, and make cleaning easier while keeping your car looking shiny.',
      hero: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    'paint-protection': {
      title: 'Paint Protection Film',
      description: 'Shield your car from rocks, bugs, and road debris with our strong paint protection film. This clear film helps prevent chips and scratches while being nearly invisible.',
      hero: 'https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    'color-change-wraps': {
      title: 'Color Change Wraps',
      description: 'Change the look of your car without painting it! Our color change wraps come in many colors and finishes to transform your vehicle completely.',
      hero: 'https://images.unsplash.com/photo-1626668893527-1e1be2a61cb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    'vehicle-graphics': {
      title: 'Vehicle Graphics',
      description: 'Add custom graphics to your vehicle with our professional design and installation services. From small logos to partial wraps, we can make your vision come to life.',
      hero: 'https://images.unsplash.com/photo-1600064719456-2a2a29fe461b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  };

  const service = serviceInfo[serviceType || ''] || {
    title: 'Service Not Found',
    description: 'The service you're looking for isn't available. Please check our main services page.',
    hero: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  };

  const pageTitle = `${service.title} | Chicago Fleet Wraps`;
  const pageDescription = service.description;

  const serviceFaqs = [
    {
      question: `How much does ${service.title} cost?`,
      answer: (
        <p>
          The cost of {service.title.toLowerCase()} depends on your vehicle size, the job complexity, and your specific needs. 
          We offer options for all budgets. Contact us for a free quote tailored to your situation.
        </p>
      )
    },
    {
      question: `How long does ${service.title} last?`,
      answer: (
        <p>
          With proper care, our {service.title.toLowerCase()} typically last 5-7 years. 
          We use top-quality materials designed to handle Chicago's weather conditions.
          Regular cleaning and avoiding harsh car washes can help your service last even longer.
        </p>
      )
    },
    {
      question: `Do you offer warranties for ${service.title}?`,
      answer: (
        <p>
          Yes, we provide warranties for all our {service.title.toLowerCase()}. The exact terms depend on 
          the service and materials used. Our team will explain the warranty details before we start work.
        </p>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://chicagofleetwraps.com/services/${serviceType}`} />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection 
          townName="" 
          backgroundImage={service.hero}
        />
        
        <section className="py-16 bg-gradient-to-b from-wrap-blue/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h1 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
                {service.title}
              </h1>
              <p className="mb-6 text-wrap-grey text-lg">
                {service.description}
              </p>
              <p className="mb-6 text-wrap-grey text-lg">
                At Chicago Fleet Wraps, we take pride in delivering top-quality {service.title.toLowerCase()} that meet your needs. 
                Our team uses the best materials and skilled techniques to make sure you get great results.
              </p>
              <p className="mb-6 text-wrap-grey text-lg">
                We understand that each client has unique needs, and we work with you to create custom solutions.
                Whether you're a business owner looking to promote your company or a car owner wanting to protect your vehicle,
                we're here to help.
              </p>
            </div>
          </div>
        </section>
        
        <ProcessSection />
        <FAQSection faqs={serviceFaqs} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
