
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';
import TrainingHeader from '../components/training/TrainingHeader';
import TrainingCourses from '../components/training/TrainingCourses';
import TrainingBenefits from '../components/training/TrainingBenefits';
import TrainingInstructors from '../components/training/TrainingInstructors';
import TrainingTestimonials from '../components/training/TrainingTestimonials';
import TrainingFAQ from '../components/training/TrainingFAQ';
import TrainingCTA from '../components/training/TrainingCTA';
import PageSEO from '../components/seo/PageSEO';
import { Helmet } from 'react-helmet-async';

const TrainingClasses: React.FC = () => {
  // Create structured data for the training course
  const trainingSchemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Professional Vinyl Wrap Installation Training",
    "description": "Master the art of vinyl wrap installation with our professional training classes. Choose from 1, 3, or 5-day intensive courses taught by industry experts with 30+ years of experience.",
    "provider": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "sameAs": "https://wrappingtheworld.com"
    },
    "offers": [
      {
        "@type": "Offer",
        "price": "750.00",
        "priceCurrency": "USD",
        "name": "1-Day Intensive Training",
        "description": "Basic introduction to vinyl wrap installation techniques"
      },
      {
        "@type": "Offer",
        "price": "1200.00",
        "priceCurrency": "USD",
        "name": "3-Day Comprehensive Training",
        "description": "Intermediate vinyl wrap installation techniques for more complex applications"
      },
      {
        "@type": "Offer",
        "price": "1800.00",
        "priceCurrency": "USD",
        "name": "5-Day Master Class",
        "description": "Advanced vinyl wrap installation techniques for professional installers"
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Professional Vinyl Wrap Installation Training | 30 Years Experience"
        description="Master the art of vinyl wrap installation with our professional training classes. Choose from 1, 3, or 5-day intensive courses taught by industry experts with 30+ years of experience."
        canonicalUrl="/training-classes"
        keywords="vinyl wrap training, car wrap installation classes, professional wrap courses, vehicle wrap certification, wrap installation techniques, chicago wrap training, vehicle wrap classes"
        structuredData={[trainingSchemaData]}
      >
        <meta property="og:image" content="https://wrappingtheworld.com/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png" />
        <meta name="twitter:image" content="https://wrappingtheworld.com/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wrapping The World" />
        <meta property="og:locale" content="en_US" />
      </PageSEO>

      <Navbar />
      <main className="pt-20">
        <TrainingHeader />
        <TrainingCourses />
        <TrainingBenefits />
        <TrainingInstructors />
        <TrainingTestimonials />
        <TrainingFAQ />
        <TrainingCTA />
      </main>
      <Footer />
    </>
  );
};

export default TrainingClasses;
