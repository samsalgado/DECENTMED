import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',

    supportedLngs: ['en', 'fr', 'es', 'hi', 'ar', 'zh-CN', 'zh-HK', 'ja', 'ko', 'th', 'pt', 'ru', 'sw', 'de', 'it', 'ro', 'pl', 'nl', 'sv', 'sk'],

    detection: {
      order: ['queryString', 'localStorage', 'navigator'],
      cache: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
  });

export default i18n;