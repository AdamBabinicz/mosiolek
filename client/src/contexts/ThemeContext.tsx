import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Inicjalizacja motywu po zamontowaniu komponentu
  useEffect(() => {
    // Próba odczytania zapisanego motywu
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      // Jeśli nie ma zapisanego motywu, sprawdź preferencje systemu
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      
      // Zastosuj nowy motyw natychmiast
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Zapisz preferencję w localStorage
      localStorage.setItem('theme', newTheme);
      
      return newTheme;
    });
  };

  const value = {
    theme,
    toggleTheme
  };

  // Nie renderuj dzieci, dopóki nie zostanie ustalony początkowy motyw
  // aby uniknąć błysku niepokolorowanej zawartości
  return (
    <ThemeContext.Provider value={value}>
      {mounted ? children : null}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}
