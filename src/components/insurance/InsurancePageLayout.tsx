
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';

interface InsurancePageLayoutProps {
  children: React.ReactNode;
  insuranceSchema: any;
  faqSchema: any;
}

const InsurancePageLayout: React.FC<InsurancePageLayoutProps> = ({
  children,
  insuranceSchema,
  faqSchema
}) => {
  return (
    <>
      <Helmet>
        <title>Wrap Insurance Plans | Wrapping The World</title>
        <meta name="description" content="Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service." />
        <link rel="canonical" href="https://wrappingtheworld.com/wrap-insurance" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wrappingtheworld.com/wrap-insurance" />
        <meta property="og:title" content="Vehicle Wrap Insurance Plans | Wrapping The World" />
        <meta property="og:description" content="Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service." />
        <meta property="og:image" content="https://wrappingtheworld.com/images/wrap-insurance-plans.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wrappingtheworld.com/wrap-insurance" />
        <meta name="twitter:title" content="Vehicle Wrap Insurance Plans | Wrapping The World" />
        <meta name="twitter:description" content="Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service." />
        <meta name="twitter:image" content="https://wrappingtheworld.com/images/wrap-insurance-plans.jpg" />
        
        <meta name="keywords" content="vehicle wrap insurance, wrap protection plan, wrap damage coverage, wrap removal guarantee, car wrap insurance, vehicle wrap protection, auto wrap warranty, vehicle graphics insurance, wrap maintenance plan, Chicago wrap insurance" />
        
        <script type="application/ld+json">
          {JSON.stringify(insuranceSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Vehicle Wrap Insurance Plans | Wrapping The World"
        pageDescription="Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service."
        pageUrl="https://wrappingtheworld.com/wrap-insurance"
      />
      
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InsurancePageLayout;
