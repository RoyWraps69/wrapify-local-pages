
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
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = `/downloads/${fileName}`;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={className}
      aria-label={`Download ${fileName}`}
    >
      {children}
    </button>
  );
};

export default DownloadTracker;
