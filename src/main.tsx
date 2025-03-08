
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import InitImageObserver from './components/utils/ImageObserver';

// Extended debugging for page load issues
console.log('===== APPLICATION STARTUP =====');
console.log('Application starting with base URL:', import.meta.env.BASE_URL);
console.log('Environment:', import.meta.env.MODE);
console.log('Window location:', window.location.href);
console.log('Document title:', document.title);
console.log('Document readyState:', document.readyState);

// Fix public URL paths in runtime if needed
const fixPublicUrl = () => {
  // Get all image tags that might reference public assets
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.src && img.src.startsWith('/lovable-uploads/')) {
      console.log('Fixing image path:', img.src);
      img.src = import.meta.env.BASE_URL + img.src.substring(1);
    }
  });
  console.log('Public URL path check complete');
};

// Check for the DOM element
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found in DOM!');
} else {
  console.log('Root element found, rendering app...');
  
  // Attempt to fix any path issues before rendering
  fixPublicUrl();
  
  // Create root and render app
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <InitImageObserver />
      <App />
    </React.StrictMode>
  );
  
  console.log('App rendered successfully');
}
