
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Português
import ptCommon from '../locales/pt/common.json';
import ptHero from '../locales/pt/hero.json';
import ptFeatures from '../locales/pt/features.json';
import ptTokenomics from '../locales/pt/tokenomics.json';
import ptFooter from '../locales/pt/footer.json';

// Inglês
import enCommon from '../locales/en/common.json';
import enHero from '../locales/en/hero.json';
import enFeatures from '../locales/en/features.json';
import enTokenomics from '../locales/en/tokenomics.json';
import enFooter from '../locales/en/footer.json';

// Espanhol
import esCommon from '../locales/es/common.json';
import esHero from '../locales/es/hero.json';
import esFeatures from '../locales/es/features.json';
import esTokenomics from '../locales/es/tokenomics.json';
import esFooter from '../locales/es/footer.json';

const resources = {
  pt: {
    common: ptCommon,
    hero: ptHero,
    features: ptFeatures,
    tokenomics: ptTokenomics,
    footer: ptFooter,
  },
  en: {
    common: enCommon,
    hero: enHero,
    features: enFeatures,
    tokenomics: enTokenomics,
    footer: enFooter,
  },
  es: {
    common: esCommon,
    hero: esHero,
    features: esFeatures,
    tokenomics: esTokenomics,
    footer: esFooter,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'hero', 'features', 'tokenomics', 'footer'],
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
