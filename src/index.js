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
import chinese from './lang/ch.json';
import hindi from './lang/hi.json';
import arabic from './lang/ar.json';

const preferredLang = localStorage.getItem("preferredLanguage") || "en";

i18next.init({
  lng: preferredLang,
  fallbackLng: "en",
  resources: {
    en: { common: english },
    nl: { common: dutch },
    es: { common: espanol },
    fr: { common: francais },
    ch: { common: chinese },
    hi: { common: hindi },
    ar: { common: arabic },
  }
});

// 🔹 Missing key handler
i18next.on("missingKey", async (lng, namespace, key) => {
  console.log("Missing translation key:", key, "in language:", lng);

  // Example: auto-generate a dummy translation
  const translatedText = `[${lng}] ${key}`;

  // Save it in localStorage so it persists temporarily
  const storageKey = `translations_${lng}`;
  const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
  stored[key] = translatedText;
  localStorage.setItem(storageKey, JSON.stringify(stored));

  // Add it dynamically to i18next
  i18next.addResource(lng, namespace, key, translatedText);

  console.log(`Added translation for "${key}" in "${lng}": ${translatedText}`);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </I18nextProvider>
);

reportWebVitals();
