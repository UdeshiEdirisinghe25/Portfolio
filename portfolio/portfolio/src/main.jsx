import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import the provider
import App from './App.jsx';
import './index.css';
import './App.css';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap the entire App here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);