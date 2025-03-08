
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import InitImageObserver from './components/utils/ImageObserver';

// Create root and render app
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

// Production only code
if (import.meta.env.PROD) {
  // Disable console logging in production for performance
  console.log = () => {};
  console.warn = () => {};
  console.info = () => {};
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <InitImageObserver />
    <App />
  </React.StrictMode>
);
