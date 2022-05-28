import React from 'react';
import ReactDOM from 'react-dom/client';
import './Sass/header.scss';
import "./Sass/homepage.scss";
import "./Sass/footer.scss";
import "./Sass/appartInfo.scss"
import "./Sass/about.scss"
import "./Sass/error.scss";
import "./Sass/avatar.scss";
import "./Sass/appartement.scss"
import "./Sass/dropdown.scss"
import "./Sass/stars.scss"
import "./Sass/caroussel.scss"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

