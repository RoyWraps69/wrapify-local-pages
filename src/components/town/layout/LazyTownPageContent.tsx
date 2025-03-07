
import React, { lazy, Suspense } from 'react';

// Lazy load the TownPageContent component
const TownPageContent = lazy(() => import('./TownPageContent'));

interface LazyTownPageContentProps {
  townData: any;
  locationFaqs: Array<{
    question: string;
    answer: React.ReactNode;
  }>;
}

const LazyTownPageContent: React.FC<LazyTownPageContentProps> = (props) => {
  return (
    <Suspense fallback={
      <div className="py-10 text-center">
        <div className="w-16 h-16 border-4 border-t-wrap-red border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-wrap-grey">Loading town information...</p>
      </div>
    }>
      <TownPageContent {...props} />
    </Suspense>
  );
};

export default LazyTownPageContent;
