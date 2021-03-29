import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en.json';
import es from './lang/es.json';

const resources = { en, es };

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',

    // keySeparator: true,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    debug: true,
  });

export default i18n;
