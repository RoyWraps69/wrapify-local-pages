import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls the window to the top when route changes
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL, let the browser handle the scrolling
    if (hash) return;
    
    // Otherwise, scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Changed from 'smooth' for immediate positioning
    });
  }, [pathname, hash]);
  
  return null;
};

export default ScrollToTop;
