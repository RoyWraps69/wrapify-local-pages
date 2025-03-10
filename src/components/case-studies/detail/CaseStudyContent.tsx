
import React from 'react';
import { CaseStudy } from '@/data/caseStudies';
import { InlineLeadForm } from '@/components/leads';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ caseStudy }) => {
  return (
    <div className="lg:col-span-2">
      <div className="mb-8">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
      </div>
      
      {/* Inline Lead Capture Form */}
      <InlineLeadForm 
        service={caseStudy.industry}
        location={caseStudy.location}
      />
      
      {/* Image Gallery */}
      {caseStudy.gallery && caseStudy.gallery.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-wrap-blue mb-6">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.gallery.map((image, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src={image} 
                  alt={`${caseStudy.title} - Gallery image ${idx + 1}`}
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyContent;
