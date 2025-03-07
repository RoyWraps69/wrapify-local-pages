
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import './App.css'; // Make sure App.css is imported

console.log('main.tsx executing');

// Get the root element
const rootElement = document.getElementById('root');
console.log('Root element found:', !!rootElement);

if (!rootElement) {
  console.error('Failed to find the root element');
} else {
  try {
    // Create root and render the app
    const root = ReactDOM.createRoot(rootElement);
    console.log('ReactDOM.createRoot called successfully');
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('React rendering completed');
  } catch (error) {
    console.error('Error rendering React application:', error);
  }
}
