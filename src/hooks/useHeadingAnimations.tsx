
import { useEffect } from 'react';

const useHeadingAnimations = () => {
  useEffect(() => {
    // Function to handle the h1 expansion animation on scroll
    const animateHeadings = () => {
      const h1Elements = document.querySelectorAll('h1');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the class that triggers the 3% expansion
            entry.target.classList.add('h1-expand');
          } else {
            // Remove the class when heading is not visible
            entry.target.classList.remove('h1-expand');
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the heading is visible
        rootMargin: '0px' // No margin
      });
      
      // Observe all h1 elements
      h1Elements.forEach(heading => {
        observer.observe(heading);
      });
      
      // Cleanup function
      return () => {
        h1Elements.forEach(heading => {
          observer.unobserve(heading);
        });
      };
    };
    
    // Run animation setup
    const cleanup = animateHeadings();
    
    // Add event listener for window resize to recalculate
    window.addEventListener('resize', animateHeadings);
    
    return () => {
      cleanup();
      window.removeEventListener('resize', animateHeadings);
    };
  }, []);
};

export default useHeadingAnimations;
