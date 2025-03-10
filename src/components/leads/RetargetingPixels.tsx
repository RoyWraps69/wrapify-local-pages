
import React, { useEffect } from 'react';

// Define global window properties for tracking scripts
declare global {
  interface Window {
    fbq?: any;
    gtag?: any;
    _fbq?: any;
    dataLayer?: any;
  }
}

interface RetargetingPixelsProps {
  facebookPixelId?: string;
  googleTagId?: string;
  children: React.ReactNode;
}

const RetargetingPixels: React.FC<RetargetingPixelsProps> = ({
  facebookPixelId = '123456789012345', // Replace with your actual FB Pixel ID in production
  googleTagId = 'G-XXXXXXXXXX', // Replace with your actual Google Tag ID in production
  children
}) => {
  useEffect(() => {
    // Facebook Pixel
    if (facebookPixelId && typeof window !== 'undefined') {
      // Initialize Facebook Pixel if it doesn't exist
      if (!window.fbq) {
        window.fbq = function() {
          window._fbq = window._fbq || [];
          window._fbq.push(arguments);
        };
      }
      
      // Load the Facebook pixel script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://connect.facebook.net/en_US/fbevents.js`;
      document.head.appendChild(script);
      
      // Initialize the pixel
      window.fbq('init', facebookPixelId);
      window.fbq('track', 'PageView');
      
      // Clean up
      return () => {
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      };
    }
  }, [facebookPixelId]);
  
  useEffect(() => {
    // Google Tag Manager
    if (googleTagId && typeof window !== 'undefined') {
      // Initialize Google Tag Manager if it doesn't exist
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      
      // Load the Google Tag Manager script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleTagId}`;
      document.head.appendChild(script);
      
      // Initialize GTM
      window.gtag('js', new Date());
      window.gtag('config', googleTagId);
      
      // Clean up
      return () => {
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      };
    }
  }, [googleTagId]);
  
  return <>{children}</>;
};

export default RetargetingPixels;
