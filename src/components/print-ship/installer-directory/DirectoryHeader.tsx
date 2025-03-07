
import React from 'react';
import { UserPlus, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DirectoryHeaderProps {
  showSubmissionForm: boolean;
  setShowSubmissionForm: (show: boolean) => void;
}

const DirectoryHeader: React.FC<DirectoryHeaderProps> = ({ 
  showSubmissionForm, 
  setShowSubmissionForm 
}) => {
  return (
    <div className="mb-6 text-center relative">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-wrap-blue text-white p-3 rounded-full shadow-lg">
        <Map className="h-6 w-6" />
      </div>
      
      <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-3 pt-4">
        Find Local Wrap Installers
      </h3>
      
      <div className="w-24 h-1 bg-gradient-to-r from-wrap-red to-wrap-blue mx-auto mb-4"></div>
      
      <p className="text-wrap-grey max-w-3xl mx-auto text-sm mb-5">
        Professional installation rates vary by location. Connect with top-rated wrap installers in major cities across the USA.
      </p>
      
      <Button 
        variant="outline" 
        onClick={() => setShowSubmissionForm(!showSubmissionForm)}
        className="mx-auto text-xs group transition-all duration-300 hover:border-wrap-red/70"
        size="sm"
      >
        <UserPlus className="mr-1 h-3 w-3 group-hover:text-wrap-red transition-colors" />
        {showSubmissionForm ? "Hide Application Form" : "Apply to Join Our Installer Network"}
      </Button>
    </div>
  );
};

export default DirectoryHeader;
