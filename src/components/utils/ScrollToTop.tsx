
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls the window to the top when route changes
 * Updated to work with HashRouter
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // Only scroll to top if there's no hash (which would be an anchor)
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, hash]);
  
  return null;
};

export default ScrollToTop;
