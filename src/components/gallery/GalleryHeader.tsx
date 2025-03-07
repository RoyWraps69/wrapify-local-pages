
import React from 'react';

interface GalleryHeaderProps {
  townName: string;
}

const GalleryHeader: React.FC<GalleryHeaderProps> = ({ townName }) => {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
        Our Work
      </span>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
        Recent Vehicle Wrap Projects in {townName} and Nearby Areas
      </h2>
      <p className="text-wrap-grey max-w-2xl mx-auto">
        Browse our gallery of recent vehicle wraps including customer submissions from {townName} and surrounding communities.
      </p>
    </div>
  );
};

export default GalleryHeader;
