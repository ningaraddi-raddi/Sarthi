import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import UserContext from './context/UserContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </React.StrictMode>
);
