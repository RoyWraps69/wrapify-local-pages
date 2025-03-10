
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeadCaptureForm from './LeadCaptureForm';

interface LeadCapturePopupProps {
  delay?: number; // Delay in milliseconds before showing popup
  exitIntentOnly?: boolean; // Only show on exit intent
  scrollDepth?: number; // Show after scrolling X% of page (0-100)
  maxDisplayCount?: number; // Maximum times to show popup
  location?: string;
}

const LeadCapturePopup: React.FC<LeadCapturePopupProps> = ({
  delay = 10000,
  exitIntentOnly = false,
  scrollDepth = 30,
  maxDisplayCount = 2,
  location = "Chicago"
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  
  // Load display count from localStorage
  useEffect(() => {
    const count = parseInt(localStorage.getItem('lead_popup_count') || '0');
    setDisplayCount(count);
    
    // Check if lead was already captured
    const leadCaptured = localStorage.getItem('lead_captured') === 'true';
    if (leadCaptured) {
      return; // Don't show popup if lead already captured
    }
    
    // Setup exit intent detection
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showPopup && displayCount < maxDisplayCount) {
        setShowPopup(true);
        incrementDisplayCount();
      }
    };
    
    // Setup scroll depth detection
    const handleScroll = () => {
      if (exitIntentOnly) return;
      
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage >= scrollDepth && !showPopup && displayCount < maxDisplayCount) {
        setShowPopup(true);
        incrementDisplayCount();
      }
    };
    
    // Show after delay if not exit intent only
    let timeoutId: number;
    if (!exitIntentOnly && displayCount < maxDisplayCount) {
      timeoutId = window.setTimeout(() => {
        setShowPopup(true);
        incrementDisplayCount();
      }, delay);
    }
    
    // Add event listeners
    document.addEventListener('mouseleave', handleExitIntent);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleExitIntent);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay, exitIntentOnly, scrollDepth, maxDisplayCount, displayCount, showPopup]);
  
  const incrementDisplayCount = () => {
    const newCount = displayCount + 1;
    setDisplayCount(newCount);
    localStorage.setItem('lead_popup_count', newCount.toString());
  };
  
  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <LeadCaptureForm onClose={handleClose} location={location} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadCapturePopup;
