
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
      hero: '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png' // Bratcher fleet vans
    },
    'ceramic-coatings': {
      title: 'Ceramic Coatings',
      description: "Protect your vehicle's paint with our long-lasting ceramic coatings. These coatings repel water, resist scratches, and make cleaning easier while keeping your car looking shiny.",
      hero: '/lovable-uploads/6f06c0f2-2138-4d06-87b1-52a216974632.png' // Blue Lexus
    },
    'paint-protection': {
      title: 'Paint Protection Film',
      description: 'Shield your car from rocks, bugs, and road debris with our strong paint protection film. This clear film helps prevent chips and scratches while being nearly invisible.',
      hero: '/lovable-uploads/15b9c65f-a662-4712-a305-d20c02f5ca70.png' // Blue Ford truck
    },
    'color-change-wraps': {
      title: 'Color Change Wraps',
      description: 'Change the look of your car without painting it! Our color change wraps come in many colors and finishes to transform your vehicle completely.',
      hero: '/lovable-uploads/39af2f7f-a89b-42b4-833b-75a980a647ba.png' // Red convertible
    },
    'vehicle-graphics': {
      title: 'Vehicle Graphics',
      description: 'Add custom graphics to your vehicle with our professional design and installation services. From small logos to partial wraps, we can make your vision come to life.',
      hero: '/lovable-uploads/712c766b-dd74-41af-942c-ef67e92c62c8.png' // Rivian with Blue Origin graphics
    }
  };

  const service = serviceInfo[serviceType || ''] || {
    title: 'Service Not Found',
    description: "The service you're looking for isn't available. Please check our main services page.",
    hero: '/lovable-uploads/9523f1f5-8b31-4d2f-b869-620325b6ea59.png' // Fleet of Rivian trucks as default
  };

  const pageTitle = `${service.title} | Wrapping The World`;
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
        <link rel="canonical" href={`https://wrappingtheworld.com/services/${serviceType}`} />
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
                At Wrapping The World, we take pride in delivering top-quality {service.title.toLowerCase()} that meet your needs. 
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
