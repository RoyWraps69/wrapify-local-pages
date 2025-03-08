
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import InitImageObserver from './components/utils/ImageObserver';

// Add console logs to debug deployment
console.log('Application starting with base URL:', import.meta.env.BASE_URL);
console.log('Environment:', import.meta.env.MODE);
console.log('Window location:', window.location.href);

// Check for the DOM element
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found in DOM!');
} else {
  console.log('Root element found, rendering app...');
}

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <InitImageObserver />
    <App />
  </React.StrictMode>
);
