import React from 'react';
import ReactDOM from 'react-dom/client';
import './Sass/header.scss';
import "./Sass/container.scss";
import "./Sass/footer.scss";
import "./Sass/about.scss"
import "./Sass/appartement.scss"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

