
import React, { useEffect } from 'react';

/**
 * Component that adjusts image paths to work with different base URLs
 */
const ImagePathFixer = () => {
  useEffect(() => {
    // Get the base URL from the environment or default to '/'
    const baseUrl = import.meta.env.BASE_URL || '/';
    console.log('ImagePathFixer: Using base URL:', baseUrl);
    
    // Fix image paths that might start with '/' but need the base URL
    const images = document.querySelectorAll('img');
    let fixedCount = 0;
    
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('/lovable-uploads/')) {
        // Remove the leading slash and prepend the base URL
        const newSrc = `${baseUrl}${src.substring(1)}`;
        console.log(`ImagePathFixer: Fixing image path from ${src} to ${newSrc}`);
        img.setAttribute('src', newSrc);
        fixedCount++;
      }
    });
    
    console.log(`ImagePathFixer: Fixed ${fixedCount} image paths`);
  }, []);
  
  return null;
};

export default ImagePathFixer;
