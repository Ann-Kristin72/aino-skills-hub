import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationNB from './locales/nb/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  nb: {
    translation: translationNB,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'nb', // default language
    fallbackLng: 'nb',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n; 