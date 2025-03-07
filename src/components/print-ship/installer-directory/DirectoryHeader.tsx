
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
    <div className="mb-4 text-center">
      <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-2">
        Find Local Wrap Installers
      </h3>
      <p className="text-wrap-grey max-w-3xl mx-auto text-sm mb-3">
        Professional installation rates vary by location. Connect with top-rated wrap installers in major cities across the USA.
      </p>
      <Button 
        variant="outline" 
        onClick={() => setShowSubmissionForm(!showSubmissionForm)}
        className="mx-auto text-xs"
        size="sm"
      >
        <UserPlus className="mr-1 h-3 w-3" />
        {showSubmissionForm ? "Hide Application Form" : "Apply to Join Our Installer Network"}
      </Button>
    </div>
  );
};

export default DirectoryHeader;
