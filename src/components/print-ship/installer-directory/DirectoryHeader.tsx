
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
    <div className="mb-8 text-center">
      <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-3">
        Find Local Wrap Installers
      </h3>
      <p className="text-wrap-grey max-w-3xl mx-auto">
        Professional installation rates vary by location. Connect with top-rated wrap installers in major cities across the USA.
      </p>
      <div className="mt-4">
        <Button 
          variant="outline" 
          onClick={() => setShowSubmissionForm(!showSubmissionForm)}
          className="mx-auto"
        >
          <UserPlus className="mr-2 h-4 w-4" />
          {showSubmissionForm ? "Hide Application Form" : "Apply to Join Our Installer Network"}
        </Button>
      </div>
    </div>
  );
};

export default DirectoryHeader;
