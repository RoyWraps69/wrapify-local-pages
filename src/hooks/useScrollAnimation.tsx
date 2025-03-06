
import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  onlyOnce?: boolean;
}

const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', onlyOnce = true } = options;

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              if (onlyOnce) {
                observer.unobserve(entry.target);
              }
            } else if (!onlyOnce) {
              entry.target.classList.remove('animated');
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );
      
      elements.forEach((element) => {
        observer.observe(element);
      });
      
      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    };
    
    // Initial animation setup
    const cleanup = animateElements();
    
    // Re-run animations when content changes
    window.addEventListener('resize', animateElements);
    
    return () => {
      cleanup();
      window.removeEventListener('resize', animateElements);
    };
  }, [threshold, rootMargin, onlyOnce]);
};

export default useScrollAnimation;
