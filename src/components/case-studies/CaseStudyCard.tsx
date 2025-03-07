
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase, BarChart } from 'lucide-react';

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  industry: string;
  location: string;
  results: string;
  slug: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  description,
  image,
  industry,
  location,
  results,
  slug
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-white/80 backdrop-blur-sm text-wrap-blue text-xs font-medium px-2 py-1 rounded">
            {industry}
          </span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-wrap-blue mb-3">{title}</h3>
        <p className="text-wrap-grey text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex justify-between items-center text-sm mb-4">
          <div className="flex items-center">
            <MapPin size={14} className="text-wrap-grey mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-wrap-red font-medium">
            <BarChart size={14} className="mr-1" />
            <span>{results}</span>
          </div>
        </div>
        
        <Link 
          to={`/case-studies/${slug}`}
          className="inline-flex items-center text-wrap-red hover:text-wrap-red/80 font-medium transition-colors mt-auto"
        >
          Read Case Study <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
