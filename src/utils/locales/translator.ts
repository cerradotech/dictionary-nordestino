import { i18next, i18nextLanguageDetector } from '~/modules';

// import enUS from './en-US';
import ptBR from './pt-BR';

i18next.use(i18nextLanguageDetector).init({
  detection: {
    order: ['navigator'],
  },
  resources: {
    // en: enUS,
    // 'en-US': enUS,
    pt: ptBR,
    'pt-BR': ptBR,
  },
  fallbackLng: 'pt-BR',
});

export const translate = (
  key: Flatten<Translations>,
  placeholders?: Record<string, string | number>,
): string => i18next.t(key, placeholders);

export default i18next;
