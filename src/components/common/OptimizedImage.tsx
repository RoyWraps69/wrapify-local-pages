
import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes = '100vw',
  priority = false,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Check for SVG or already optimized images
  const isSvg = src.endsWith('.svg');
  const isOptimized = src.includes('?w=') || src.includes('?width=');
  
  // Add width parameter to images that aren't SVGs or already optimized
  const imageSrc = !isSvg && !isOptimized && width 
    ? `${src}?w=${width}&q=80` 
    : src;
  
  // Generate srcset for responsive images (except SVGs)
  const generateSrcSet = () => {
    if (isSvg) return undefined;
    if (isOptimized) return undefined;
    
    const widths = [640, 750, 828, 1080, 1200, 1920];
    const srcSet = widths
      .map(w => `${src}?w=${w}&q=80 ${w}w`)
      .join(', ');
    return srcSet;
  };
  
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };
  
  const handleError = () => {
    setError(true);
    console.error(`Failed to load image: ${src}`);
  };
  
  // Use intersection observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') return;
    
    const imgElement = document.querySelector(`img[data-src="${src}"]`);
    if (!imgElement) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLImageElement;
          if (element.dataset.src) {
            element.src = element.dataset.src;
            if (element.dataset.srcset) {
              element.srcset = element.dataset.srcset;
            }
            observer.unobserve(element);
          }
        }
      });
    }, { rootMargin: '200px' });
    
    observer.observe(imgElement);
    return () => {
      if (imgElement) observer.unobserve(imgElement);
    };
  }, [src, priority, loading]);
  
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <img
        src={priority || loading === 'eager' ? imageSrc : undefined}
        data-src={priority || loading === 'eager' ? undefined : imageSrc}
        srcSet={priority || loading === 'eager' ? generateSrcSet() : undefined}
        data-srcset={priority || loading === 'eager' ? undefined : generateSrcSet()}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        sizes={sizes}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
          Image not found
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
