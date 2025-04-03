import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl'); // Domyślnie polski
  const [mounted, setMounted] = useState(false);

  // Inicjalizacja języka po stronie klienta
  useEffect(() => {
    // Sprawdź zapisany język
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage === 'pl' || savedLanguage === 'en') {
      setLanguage(savedLanguage as Language);
    } else {
      // Sprawdź język przeglądarki
      try {
        const browserLang = navigator.language.split('-')[0].toLowerCase();
        if (browserLang === 'en') {
          setLanguage('en');
        }
        // W przeciwnym razie zostaw domyślny polski
      } catch (error) {
        console.error('Błąd podczas wykrywania języka przeglądarki:', error);
      }
    }
    
    setMounted(true);
  }, []);

  // Funkcja do zmiany języka
  const changeLanguage = (lang: Language) => {
    console.log('Zmiana języka na:', lang);
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  // Wartość kontekstu
  const value = {
    language,
    changeLanguage
  };

  // Nie renderuj dzieci, dopóki nie zostanie ustalony początkowy język
  return (
    <LanguageContext.Provider value={value}>
      {mounted ? children : null}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}
