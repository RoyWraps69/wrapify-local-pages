
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, BarChart } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ caseStudy }) => {
  return (
    <section className="bg-wrap-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/case-studies"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Case Studies
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            {caseStudy.title}
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            {caseStudy.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <span className="flex items-center text-white/80 text-sm mb-1">
                <Briefcase size={16} className="mr-2" />
                Industry
              </span>
              <span className="font-medium">{caseStudy.industry}</span>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <span className="flex items-center text-white/80 text-sm mb-1">
                <MapPin size={16} className="mr-2" />
                Location
              </span>
              <span className="font-medium">{caseStudy.location}</span>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <span className="flex items-center text-white/80 text-sm mb-1">
                <BarChart size={16} className="mr-2" />
                Results
              </span>
              <span className="font-medium text-wrap-red">{caseStudy.results}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHeader;
