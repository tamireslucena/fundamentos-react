// library methods
import React from 'react';
import ReactDOM from 'react-dom/client';

// pages
import Home from './pages/Home';

// styles
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

