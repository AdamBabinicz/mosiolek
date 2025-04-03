import React, { createContext, useContext, useEffect, useState } from 'react';
import { THEME } from '@/lib/constants';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create a context with a default value to avoid undefined checks
const defaultValue: ThemeContextType = {
  theme: 'light', // Default to light theme
  toggleTheme: () => {}, // Empty function as placeholder
};

const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light'); // Default to light theme initially
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme after component mounts (client-side only)
  useEffect(() => {
    try {
      // Check for saved theme preference or use device preference
      const savedTheme = localStorage.getItem(THEME.STORAGE_KEY);
      if (savedTheme && (savedTheme === THEME.OPTIONS.LIGHT || savedTheme === THEME.OPTIONS.DARK)) {
        setTheme(savedTheme as Theme);
      } else {
        // Use system preference
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(isDarkMode ? 'dark' : 'light');
      }
    } catch (error) {
      console.error('Error initializing theme:', error);
      // Keep the default light theme
    }

    setIsInitialized(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!isInitialized) return;

    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Save theme preference
      localStorage.setItem(THEME.STORAGE_KEY, theme);
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  }, [theme, isInitialized]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
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
