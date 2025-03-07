
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes,
  priority = false,
}) => {
  // Format the alt text for better SEO
  const formattedAlt = alt || 'Wrapping The World - Premium Vehicle Wraps and Protection';
  
  // Generate srcset for responsive images
  const generateSrcSet = () => {
    if (!src) return '';
    
    // Skip srcset for external images
    if (src.startsWith('http') && !src.includes('wrappingtheworld.com')) {
      return '';
    }
    
    const imageSrc = src.split('?')[0]; // Remove any query parameters
    return `${imageSrc} 1x, ${imageSrc} 2x`;
  };
  
  return (
    <img
      src={src}
      alt={formattedAlt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : loading}
      decoding={priority ? 'sync' : 'async'}
      sizes={sizes}
      srcSet={generateSrcSet()}
      data-src={loading === 'lazy' ? src : undefined}
      onError={(e) => {
        console.error(`Failed to load image: ${src}`);
        const imgElement = e.currentTarget;
        imgElement.onerror = null; // Prevent infinite error loop
        imgElement.style.opacity = '0.5';
      }}
    />
  );
};

export default OptimizedImage;
