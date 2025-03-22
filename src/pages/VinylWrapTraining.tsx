
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VinylTrainingHero from '../components/vinyl-training/VinylTrainingHero';
import VinylTrainingCourses from '../components/vinyl-training/VinylTrainingCourses';
import VinylTrainingProcess from '../components/vinyl-training/VinylTrainingProcess';
import VinylTrainingAdvantages from '../components/vinyl-training/VinylTrainingAdvantages';
import VinylTrainingTestimonials from '../components/vinyl-training/VinylTrainingTestimonials';
import VinylTrainingFAQ from '../components/vinyl-training/VinylTrainingFAQ';
import VinylTrainingCTA from '../components/vinyl-training/VinylTrainingCTA';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PageSEO from '../components/seo/PageSEO';
import { generateVinylWrapTrainingSchemas } from '@/utils/seo/schemaGenerator';

const VinylWrapTraining: React.FC = () => {
  // Generate structured data for the vinyl wrap training page
  const { courseSchema, faqSchema, reviewSchema } = generateVinylWrapTrainingSchemas();
  const structuredData = [courseSchema, faqSchema, reviewSchema];

  return (
    <>
      <PageSEO
        title="Professional Vinyl Wrap Installation Training | Hands-On Courses"
        description="Master the art of vinyl wrap installation with our hands-on professional training courses. Learn from industry experts with decades of experience in vehicle wrapping."
        canonicalUrl="/vinyl-wrap-training"
        keywords="vinyl wrap training, vehicle wrap installation course, car wrapping classes, professional wrap training, vinyl installation techniques, wrap certification program, hands-on wrap training"
        structuredData={structuredData}
      >
        <meta property="og:image" content="https://wrappingtheworld.com/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png" />
        <meta name="twitter:image" content="https://wrappingtheworld.com/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wrapping The World" />
        <meta property="og:locale" content="en_US" />
      </PageSEO>

      <Navbar />
      
      <main className="pt-20">
        <VinylTrainingHero />
        
        {/* Breadcrumb navigation */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex text-sm">
              <Link to="/" className="text-wrap-grey hover:text-wrap-red">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <Link to="/training" className="text-wrap-grey hover:text-wrap-red">Training</Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <span className="text-wrap-blue font-medium">Vinyl Wrap Training</span>
            </nav>
          </div>
        </div>
        
        <VinylTrainingCourses />
        <VinylTrainingProcess />
        <VinylTrainingAdvantages />
        <VinylTrainingTestimonials />
        <VinylTrainingFAQ />
        <VinylTrainingCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default VinylWrapTraining;
