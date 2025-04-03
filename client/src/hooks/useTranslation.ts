import { useLanguage } from '@/contexts/LanguageContext';
import { translations as plTranslations } from '@/lib/i18n/pl';
import { translations as enTranslations } from '@/lib/i18n/en';

type TranslationKey = keyof typeof plTranslations;

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    const translations = language === 'pl' ? plTranslations : enTranslations;
    const translation = translations[key];
    
    if (!translation) {
      console.warn(`Translation not found for key: ${key}`);
      return key;
    }

    return translation;
  };

  return { t };
};
