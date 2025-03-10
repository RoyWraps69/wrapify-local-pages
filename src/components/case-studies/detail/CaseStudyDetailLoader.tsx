
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';

const CaseStudyDetailLoader: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-wrap-red border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-wrap-grey">Loading case study...</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudyDetailLoader;
