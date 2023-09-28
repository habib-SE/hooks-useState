import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Events from './components/Events';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Events />
  </React.StrictMode>
);
