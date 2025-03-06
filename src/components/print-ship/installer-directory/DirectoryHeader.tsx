
import React from 'react';
import { UserPlus } from 'lucide-react';
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
    <div className="mb-8 text-center px-4 sm:px-0">
      <h3 className="text-xl sm:text-2xl font-serif font-semibold text-wrap-blue mb-3">
        Find Local Wrap Installers
      </h3>
      <p className="text-wrap-grey max-w-3xl mx-auto text-sm sm:text-base">
        Professional installation rates vary by location. Connect with top-rated wrap installers in major cities across the USA.
      </p>
      <div className="mt-4">
        <Button 
          variant="outline" 
          onClick={() => setShowSubmissionForm(!showSubmissionForm)}
          className="mx-auto text-xs sm:text-sm"
          size="sm"
        >
          <UserPlus className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          {showSubmissionForm ? "Hide Application Form" : "Apply to Join Our Installer Network"}
        </Button>
      </div>
    </div>
  );
};

export default DirectoryHeader;
