
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/base.css';
import './styles/components.css';
import './styles/animations.css';
import InitImageObserver from './components/utils/ImageObserver';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InitImageObserver />
    <App />
  </React.StrictMode>
);
