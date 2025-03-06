
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '@/types/case-study';

interface FeaturedCaseStudyProps {
  caseStudy: CaseStudy;
}

const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ caseStudy }) => {
  return (
    <div className="bg-wrap-blue rounded-xl overflow-hidden text-white mb-16">
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-3 h-full">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
          <span className="inline-block px-3 py-1 bg-wrap-red/20 text-wrap-red rounded-full text-sm font-medium mb-4">
            Featured Case Study
          </span>
          <h2 className="text-3xl font-serif font-semibold mb-4">
            {caseStudy.title}
          </h2>
          <p className="text-wrap-light/90 mb-6 text-lg">
            {caseStudy.excerpt}
          </p>
          <div className="mb-6">
            <p className="text-wrap-light font-medium mb-2">Results:</p>
            <ul className="space-y-2">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span className="text-wrap-light/90">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link to={`/case-studies/${caseStudy.id}`} className="btn-secondary inline-flex items-center justify-center">
            Read Full Case Study
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
