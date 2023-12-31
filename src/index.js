import React from 'react';
import ReactDOM from 'react-dom/client';

// App
import { App } from './App';


// Arquivo de estilo
import './styles/global.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);