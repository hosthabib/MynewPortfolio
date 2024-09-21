import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css'; // Import the global CSS file
import App from './App';

// Use the new React 18 render method
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
