
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase, BarChart } from 'lucide-react';

interface FeaturedCaseStudyProps {
  title: string;
  description: string;
  image: string;
  industry: string;
  location: string;
  results: string;
  slug: string;
}

const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({
  title,
  description,
  image,
  industry,
  location,
  results,
  slug
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 p-8 flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block bg-wrap-red/10 text-wrap-red text-sm font-medium px-3 py-1 rounded-full mb-4">
              Featured Case Study
            </span>
            <h3 className="text-2xl font-bold text-wrap-blue mb-4">{title}</h3>
            <p className="text-wrap-grey mb-6">{description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <span className="flex items-center text-sm text-wrap-grey mb-1">
                  <Briefcase size={14} className="mr-1" />
                  Industry
                </span>
                <span className="font-medium">{industry}</span>
              </div>
              <div>
                <span className="flex items-center text-sm text-wrap-grey mb-1">
                  <MapPin size={14} className="mr-1" />
                  Location
                </span>
                <span className="font-medium">{location}</span>
              </div>
              <div>
                <span className="flex items-center text-sm text-wrap-grey mb-1">
                  <BarChart size={14} className="mr-1" />
                  Results
                </span>
                <span className="font-medium text-wrap-red">{results}</span>
              </div>
            </div>
          </div>
          
          <Link 
            to={`/case-studies/${slug}`}
            className="inline-flex items-center text-wrap-red hover:text-wrap-red/80 font-medium transition-colors mt-auto"
          >
            Read Full Case Study <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
