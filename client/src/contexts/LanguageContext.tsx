import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGE } from '@/lib/constants';

export type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

// Create a context with a default value to avoid undefined checks
const defaultValue: LanguageContextType = {
  language: 'pl', // Default to Polish
  changeLanguage: () => {}, // Empty function as placeholder
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl'); // Default to Polish initially

  // Initialize the language after component mounts (client-side only)
  useEffect(() => {
    // Check for saved language preference or use browser language
    const savedLanguage = localStorage.getItem(LANGUAGE.STORAGE_KEY);
    if (savedLanguage === LANGUAGE.OPTIONS.POLISH || savedLanguage === LANGUAGE.OPTIONS.ENGLISH) {
      setLanguage(savedLanguage as Language);
      return;
    }
    
    // Use browser's language if available, otherwise default to Polish
    try {
      const browserLang = navigator.language.split('-')[0];
      setLanguage(browserLang === 'en' ? 'en' : 'pl');
    } catch (error) {
      console.error('Error detecting browser language:', error);
      // Keep the default 'pl'
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem(LANGUAGE.STORAGE_KEY, lang);
    } catch (error) {
      console.error('Error saving language to localStorage:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}
