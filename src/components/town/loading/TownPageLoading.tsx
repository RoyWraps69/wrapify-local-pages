
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';

interface TownPageLoadingProps {
  townSlug?: string;
}

const TownPageLoading: React.FC<TownPageLoadingProps> = ({ townSlug }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-wrap-red border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-wrap-grey">Loading information for {townSlug}...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TownPageLoading;
