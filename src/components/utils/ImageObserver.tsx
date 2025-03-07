
import { useEffect, useRef } from 'react';

// Helper function to lazy load images
export const useImageObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // If browser doesn't support IntersectionObserver, load all images immediately
    if (!('IntersectionObserver' in window)) {
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => {
        const dataElement = img as HTMLImageElement;
        if (dataElement.dataset.src) {
          dataElement.src = dataElement.dataset.src;
        }
        if (dataElement.dataset.srcset) {
          dataElement.srcset = dataElement.dataset.srcset;
        }
      });
      return;
    }
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
          }
          observerRef.current?.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px',
      threshold: 0.01
    });
    
    // Get all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      observerRef.current?.observe(img);
    });
    
    return () => {
      if (observerRef.current) {
        lazyImages.forEach(img => {
          observerRef.current?.unobserve(img);
        });
      }
    };
  }, []);
  
  return null;
};

// Hook to initialize the observer
export const InitImageObserver: React.FC = () => {
  useImageObserver();
  return null;
};

export default InitImageObserver;
