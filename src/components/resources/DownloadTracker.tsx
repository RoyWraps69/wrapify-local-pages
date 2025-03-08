
import React from 'react';
import { toast } from '@/hooks/use-toast';
import { DownloadCloud, AlertTriangle } from 'lucide-react';

interface DownloadTrackerProps {
  fileName: string;
  displayName: string;
  category?: string;
  isAvailable?: boolean;
  unavailableMessage?: string;
  className?: string;
  iconSize?: number;
  showIcon?: boolean;
}

/**
 * Component for tracking file downloads with availability status
 */
const DownloadTracker: React.FC<DownloadTrackerProps> = ({ 
  fileName, 
  displayName,
  category = 'resources',
  isAvailable = true,
  unavailableMessage = "This document is currently unavailable. Please check back later.",
  className = 'inline-flex items-center gap-2 text-wrap-blue hover:text-wrap-red transition-colors',
  iconSize = 18,
  showIcon = true
}) => {
  const handleDownload = () => {
    // Track the download event (can be integrated with analytics)
    console.log(`Download tracked: ${fileName} from ${category}`);
    
    if (!isAvailable) {
      // Show toast notification for unavailable PDF
      toast({
        title: "Document Unavailable",
        description: unavailableMessage,
        variant: "destructive",
      });
      return;
    }
    
    // Open the file in a new tab
    window.open(`/downloads/${fileName}`, '_blank');
  };

  return (
    <button
      onClick={handleDownload}
      className={`${className} ${!isAvailable ? 'opacity-75 cursor-not-allowed' : ''}`}
      aria-disabled={!isAvailable}
    >
      {showIcon && (
        isAvailable ? (
          <DownloadCloud size={iconSize} className="flex-shrink-0" />
        ) : (
          <AlertTriangle size={iconSize} className="flex-shrink-0 text-yellow-600" />
        )
      )}
      <span>{displayName}</span>
    </button>
  );
};

export default DownloadTracker;
