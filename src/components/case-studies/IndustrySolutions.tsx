
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface IndustrySolution {
  name: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

interface IndustrySolutionsProps {
  industries: IndustrySolution[];
}

const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ industries }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {industries.map((industry, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
          <div className="flex justify-center">
            {industry.icon}
          </div>
          <h3 className="text-xl font-bold text-wrap-blue mb-3">
            {industry.name} Solutions
          </h3>
          <p className="text-wrap-grey mb-6">
            {industry.description}
          </p>
          <Link 
            to={industry.link}
            className="inline-flex items-center text-wrap-red hover:text-wrap-red/80 font-medium transition-colors"
          >
            View Solutions <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IndustrySolutions;
