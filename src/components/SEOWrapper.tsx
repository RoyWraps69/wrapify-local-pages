
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOWrapperProps {
  children: React.ReactNode;
}

const SEOWrapper: React.FC<SEOWrapperProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        {/* Performance optimization meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Preconnect to essential domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Font display optimization */}
        <link 
          rel="preload" 
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" 
        />
        
        {/* Core web vitals optimization */}
        <meta name="theme-color" content="#1D3557" />
        
        {/* Cache control */}
        <meta httpEquiv="Cache-Control" content="max-age=3600" />
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
