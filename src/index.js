import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Helmet } from 'react-helmet';
import { loadLanguageFile } from './translationUtils';

// react-helmet normally batches its <title>/<meta> DOM updates with
// requestAnimationFrame, which never fires in the headless Chrome tab
// used by the react-snap build step (see scripts/prerender.mjs). That
// silently left every prerendered page's <title>/description stuck on
// the generic default from public/index.html even though each page's
// own <Helmet> content was correct. Disabling defer makes Helmet commit
// synchronously so prerendering captures the real per-page title/meta.
Helmet.defaultProps.defer = false;

const App = lazy(() => import('./App'));
const preferredLang = localStorage.getItem("preferredLanguage") || "en";

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

const initApp = async () => {
  const translations = await loadLanguageFile(preferredLang);

  i18next.init({
    lng: preferredLang,
    fallbackLng: "en",
    resources: {
      [preferredLang]: { common: translations }
    }
  });

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Suspense fallback={<div className="spinner-container"><div className="custom-spinner"></div></div>}>
      <I18nextProvider i18n={i18next}>
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>
      </I18nextProvider>
    </Suspense>
  );
};

initApp();

reportWebVitals();
