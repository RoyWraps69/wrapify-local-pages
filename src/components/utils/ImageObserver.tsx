
import { useEffect } from 'react';

/**
 * Component to initialize image lazy loading observers on mount
 * This automatically observes image elements with data-src attributes
 * and replaces the src when they come into view
 */
const InitImageObserver = () => {
  useEffect(() => {
    // Check if IntersectionObserver is available
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[data-src]');
      const lazyBackgrounds = document.querySelectorAll('.lazy-background');
      
      // Observer callback for images
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });
      
      // Observer callback for background images
      const bgObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            if (element.dataset.background) {
              element.style.backgroundImage = `url('${element.dataset.background}')`;
              element.classList.remove('lazy-background');
              bgObserver.unobserve(element);
            }
          }
        });
      });
      
      // Observe all lazy images
      lazyImages.forEach((img) => {
        imageObserver.observe(img);
      });
      
      // Observe all lazy backgrounds
      lazyBackgrounds.forEach((bg) => {
        bgObserver.observe(bg);
      });
      
      return () => {
        // Cleanup observers
        lazyImages.forEach((img) => {
          imageObserver.unobserve(img);
        });
        
        lazyBackgrounds.forEach((bg) => {
          bgObserver.unobserve(bg);
        });
      };
    }
    
    return undefined;
  }, []);
  
  return null;
};

export default InitImageObserver;
