
import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { CaseStudy } from '@/types/case-study';

interface CaseStudyListProps {
  caseStudies: CaseStudy[];
}

const CaseStudyList: React.FC<CaseStudyListProps> = ({ caseStudies }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </div>
  );
};

export default CaseStudyList;
