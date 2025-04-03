import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

// Uproszczona wersja bez ThemeProvider i LanguageProvider
const AppWithProviders = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

// Inicjacja theme na podstawie preferencji zapisanych w localStorage lub preferencji systemu
const initTheme = () => {
  // Sprawdź localStorage
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    // Jeśli nie ma zapisanego motywu, sprawdź preferencje systemowe
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }
};

// Inicjalizacja motywu
initTheme();

// Wait for DOM to be ready before rendering
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<AppWithProviders />);
}
