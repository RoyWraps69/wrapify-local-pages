
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
  const baseElement = document.querySelector('base');
  if (baseElement) {
    return baseElement.getAttribute('href') || '/';
  }
  return '/';
})();

console.log("Application starting with base URL:", window.__assetsBaseUrl);

// Create root and render app
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

// Production only code
if (import.meta.env.PROD) {
  // Log some info but disable other logs
  console.log("Running in production mode");
  console.log("Base path:", import.meta.env.BASE_URL);
  
  // Only disable non-essential logs
  const originalConsoleLog = console.log;
  console.log = function() {
    if (arguments[0] && typeof arguments[0] === 'string' && 
        (arguments[0].includes('GitHub Pages') || 
         arguments[0].includes('Application starting'))) {
      originalConsoleLog.apply(console, arguments);
    }
  };
  console.warn = () => {};
  console.info = () => {};
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <InitImageObserver />
    <App />
  </React.StrictMode>
);
