
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '@/types/case-study';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="h-48 overflow-hidden">
        <img 
          src={study.image} 
          alt={study.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="inline-block px-3 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-xs font-medium">
            {study.industry}
          </span>
        </div>
        <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-3 line-clamp-2">
          {study.title}
        </h3>
        <p className="text-wrap-grey text-sm mb-4 line-clamp-3">
          {study.excerpt}
        </p>
        <div className="mb-4">
          <p className="text-wrap-blue font-medium text-sm mb-2">Key Results:</p>
          <ul className="space-y-1">
            {study.results.slice(0, 2).map((result, index) => (
              <li key={index} className="flex items-start text-xs text-wrap-grey">
                <span className="text-wrap-red mr-1">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link to={`/case-studies/${study.id}`} className="text-wrap-blue hover:text-wrap-red inline-flex items-center text-sm font-medium">
          View Project Details
          <ArrowRight className="ml-1" size={14} />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
