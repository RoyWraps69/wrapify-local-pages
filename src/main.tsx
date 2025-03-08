
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import InitImageObserver from './components/utils/ImageObserver';
import ChatbotWithSchema from './components/chatbot/ChatbotWithSchema.tsx';

// Add console log to debug base path
console.log('Application starting with base URL:', import.meta.env.BASE_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InitImageObserver />
    <App />
  </React.StrictMode>
);
