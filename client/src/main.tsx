import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Create a wrapper component to ensure proper provider hierarchy and initialization
const AppWithProviders = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <App />
          <Toaster />
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

// Wait for DOM to be ready before rendering
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<AppWithProviders />);
}
