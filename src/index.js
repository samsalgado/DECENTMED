import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';


import english from './lang/en.json';
import dutch from './lang/nl.json';
import espanol from './lang/es.json';
import francais from './lang/fr.json';
import hindi from './lang/hi.json';
const preferredLang = localStorage.getItem("preferredLanguage") || "en";

i18next.init({
 lng: preferredLang,
  fallbackLng: "en",
  resources: {
    en: {
      common: english
    },
    nl: {
      common: dutch
    },
    es: {
      common: espanol
    },
    fr: {
      common: francais
    },
    hi: {
      common: hindi
    },
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
  </I18nextProvider>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

