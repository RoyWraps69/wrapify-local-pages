
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
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Award, Users } from 'lucide-react';
import { generateTrainingClassesSchemas } from '@/utils/seo/schemaGenerator';

const TrainingClasses: React.FC = () => {
  // Use the schema generator to create structured data
  const { courseSchema, orgSchema, webPageSchema } = generateTrainingClassesSchemas();

  return (
    <>
      <PageSEO
        title="Professional Vinyl Wrap Installation Training | 30 Years Experience"
        description="Master the art of vinyl wrap installation with our professional training classes. Choose from 1, 3, or 5-day intensive courses taught by industry experts with 30+ years of experience."
        canonicalUrl="/training-classes"
        keywords="vinyl wrap training, car wrap installation classes, professional wrap courses, vehicle wrap certification, wrap installation techniques, chicago wrap training, vehicle wrap classes, wrap certification program, automotive wrap installation, commercial wrap training"
        structuredData={[courseSchema, orgSchema, webPageSchema]}
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
        
        {/* Breadcrumb navigation */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex text-sm">
              <Link to="/" className="text-wrap-grey hover:text-wrap-red">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <Link to="/resources" className="text-wrap-grey hover:text-wrap-red">Resources</Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <span className="text-wrap-blue font-medium">Training Classes</span>
            </nav>
          </div>
        </div>
        
        <div className="bg-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-md">
                <Calendar className="h-4 w-4 text-wrap-red mr-2" />
                <span className="text-sm text-wrap-grey">Next Class: June 15, 2023</span>
              </div>
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-md">
                <Users className="h-4 w-4 text-wrap-red mr-2" />
                <span className="text-sm text-wrap-grey">Limited to 6 Students Per Class</span>
              </div>
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-md">
                <Award className="h-4 w-4 text-wrap-red mr-2" />
                <span className="text-sm text-wrap-grey">Certification Provided</span>
              </div>
            </div>
          </div>
        </div>
        
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
