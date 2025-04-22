
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './styles/index.css';
import ScrollToTop from './components/utils/ScrollToTop';
import InitImageObserver from './components/utils/ImageObserver';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <InitImageObserver />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
