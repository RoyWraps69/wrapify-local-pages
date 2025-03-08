
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls the window to the top when route changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    console.log('ScrollToTop: Navigation to path:', pathname);
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      console.log('ScrollToTop: Successfully scrolled to top');
    } catch (error) {
      console.error('ScrollToTop: Error scrolling to top:', error);
    }
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;
