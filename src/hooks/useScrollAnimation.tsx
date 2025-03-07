
import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = 
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && 
          rect.bottom >= 0;
        
        if (isVisible) {
          if (element.classList.contains('fade-up')) {
            element.classList.add('animate-fade-in');
            element.classList.remove('opacity-0');
          }
          
          element.classList.remove('animate-on-scroll');
        }
      });
    };
    
    // Initialize elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      if (!element.classList.contains('opacity-0')) {
        element.classList.add('opacity-0');
      }
    });
    
    // Run once on mount
    setTimeout(() => {
      animateOnScroll();
    }, 100);
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
};

export default useScrollAnimation;
