
import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load the heavy TownPageContent component
const TownPageContent = React.lazy(() => import('@/components/town/layout/TownPageContent'));

interface LazyTownPageContentProps {
  townData: any;
  locationFaqs: Array<{
    question: string;
    answer: React.ReactNode;
  }>;
}

const LazyTownPageContent: React.FC<LazyTownPageContentProps> = ({ 
  townData,
  locationFaqs
}) => {
  return (
    <Suspense fallback={<TownContentSkeleton />}>
      <TownPageContent 
        townData={townData}
        locationFaqs={locationFaqs}
      />
    </Suspense>
  );
};

const TownContentSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-[50vh] bg-gray-200 mb-10"></div>
    <div className="container mx-auto px-4">
      <div className="h-8 bg-gray-200 w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-200 w-4/5 mb-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="h-40 bg-gray-200"></div>
        <div className="h-40 bg-gray-200"></div>
        <div className="h-40 bg-gray-200"></div>
      </div>
      
      <div className="h-60 bg-gray-200 mb-16"></div>
      <div className="h-60 bg-gray-200 mb-16"></div>
      <div className="h-60 bg-gray-200 mb-16"></div>
    </div>
  </div>
);

export default LazyTownPageContent;
