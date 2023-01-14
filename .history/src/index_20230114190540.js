import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form } from 'react-router-dom';
import App from './App';
import * as ServiceWorker from './serviceWorker'
import './styles/App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


