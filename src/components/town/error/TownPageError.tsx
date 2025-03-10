
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import { useNavigate } from 'react-router-dom';

interface TownPageErrorProps {
  townSlug?: string;
}

const TownPageError: React.FC<TownPageErrorProps> = ({ townSlug }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <h1 className="text-3xl font-bold text-wrap-blue mb-4">Town Not Found</h1>
          <p className="text-wrap-grey mb-6">
            We couldn&apos;t find information for &quot;{townSlug}&quot;. This location may not be in our service area yet.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => navigate('/locations')} 
              className="bg-wrap-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
            >
              See All Locations
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TownPageError;
