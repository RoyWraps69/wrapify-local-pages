
import React, { useState } from 'react';
import DirectoryHeader from './DirectoryHeader';
import SearchForm from './SearchForm';
import InstallerSubmissionForm from '../InstallerSubmissionForm';
import DirectorySearchResults from './DirectorySearchResults';
import { installers } from '../data/installers';

const DirectoryContent: React.FC = () => {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<typeof installers>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchPerformed(true);
    
    // Simulate API call
    setTimeout(() => {
      const filtered = installers.filter(installer => 
        installer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        installer.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        installer.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setResults(filtered);
      setIsLoading(false);
    }, 800);
  };
  
  return (
    <div className="p-4">
      <DirectoryHeader 
        showSubmissionForm={showSubmissionForm}
        setShowSubmissionForm={setShowSubmissionForm}
      />
      
      {showSubmissionForm ? (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-4">
          <InstallerSubmissionForm />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mt-4">
          <SearchForm 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />
          
          <DirectorySearchResults 
            results={results}
            isLoading={isLoading}
            searchPerformed={searchPerformed}
          />
        </div>
      )}
    </div>
  );
};

export default DirectoryContent;
