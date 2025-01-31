import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

const savedLanguage = localStorage.getItem('language') || 'en'; // Get the saved language or default to English

i18n
  .use(initReactI18next) // Passes i18n instance to React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt },
    },
    lng: savedLanguage, // Use saved language
    fallbackLng: 'en', // Default to English if the language is unavailable
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
