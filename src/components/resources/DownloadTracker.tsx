
import React from 'react';

interface DownloadTrackerProps {
  fileName: string;
  category?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Component for tracking file downloads and rendering a download button
 */
const DownloadTracker: React.FC<DownloadTrackerProps> = ({ 
  fileName, 
  category = 'resources',
  children,
  className = ''
}) => {
  const handleDownload = () => {
    // Track the download event (can be integrated with analytics)
    console.log(`Download tracked: ${fileName} from ${category}`);
    
    // Open the file in a new tab
    window.open(`/downloads/${fileName}`, '_blank');
  };

  return (
    <button
      onClick={handleDownload}
      className={className}
    >
      {children}
    </button>
  );
};

export default DownloadTracker;
