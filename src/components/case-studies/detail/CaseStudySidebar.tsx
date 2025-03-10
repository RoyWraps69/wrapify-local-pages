
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudySidebarProps {
  caseStudy: CaseStudy;
}

const CaseStudySidebar: React.FC<CaseStudySidebarProps> = ({ caseStudy }) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-xl font-bold text-wrap-blue mb-4">Project Details</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-wrap-grey">Client</h4>
            <p>{caseStudy.client}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-wrap-grey">Completion Date</h4>
            <p>{new Date(caseStudy.completionDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long'
            })}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-wrap-grey">Location</h4>
            <p>{caseStudy.location}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-wrap-grey">Industry</h4>
            <p>{caseStudy.industry}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-wrap-blue text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Ready to discuss your project?</h3>
        <p className="mb-6">Contact our team today to get started on your vehicle wrap or fleet branding project.</p>
        
        <div className="space-y-4">
          <Link 
            to="/contact"
            className="w-full bg-white text-wrap-blue py-3 px-4 rounded-md font-medium flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            Request a Consultation <ArrowRight size={18} className="ml-2" />
          </Link>
          
          <a 
            href="tel:+13125971286"
            className="w-full bg-wrap-red text-white py-3 px-4 rounded-md font-medium flex items-center justify-center hover:bg-wrap-red/90 transition-colors"
          >
            <Phone size={18} className="mr-2" />
            Call 312-597-1286
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySidebar;
