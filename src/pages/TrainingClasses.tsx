
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

const TrainingClasses: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Professional Vinyl Wrap Installation Training | 30 Years Experience"
        description="Master the art of vinyl wrap installation with our professional training classes. Choose from 1, 3, or 5-day intensive courses taught by industry experts with 30+ years of experience."
        canonicalUrl="/training-classes"
        keywords="vinyl wrap training, car wrap installation classes, professional wrap courses, vehicle wrap certification, wrap installation techniques"
      />
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
