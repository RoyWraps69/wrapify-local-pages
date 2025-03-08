
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import InitImageObserver from './components/utils/ImageObserver';

// Create a global variable for assets base URL for GitHub Pages
declare global {
  interface Window {
    __assetsBaseUrl: string;
  }
}

// Set the base URL for assets based on deployment environment
window.__assetsBaseUrl = (() => {
  // Get base URL from the base tag
  const baseElement = document.querySelector('base');
  if (baseElement) {
    const href = baseElement.getAttribute('href');
    console.log("Found base element with href:", href);
    return href || '/';
  }
  
  // Fallback - check if we're on GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    const pathSegments = window.location.pathname.split('/');
    if (pathSegments.length > 1) {
      const repoName = pathSegments[1];
      if (repoName) {
        console.log("Determined base URL from hostname:", `/${repoName}/`);
        return `/${repoName}/`;
      }
    }
  }
  
  console.log("Using default base URL: /");
  return '/';
})();

console.log("Application starting with base URL:", window.__assetsBaseUrl);

// Create root and render app
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

// Log environment info
console.log("Current URL:", window.location.href);
console.log("Running in mode:", import.meta.env.MODE);
console.log("Base path from env:", import.meta.env.BASE_URL);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <InitImageObserver />
    <App />
  </React.StrictMode>
);
