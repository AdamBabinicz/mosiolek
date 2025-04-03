import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Aby uniknąć problemów z hydracją, renderujemy komponent dopiero po stronie klienta
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Zwróć pusty przycisk podczas renderowania SSR/początkowego
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition"
      >
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    );
  }

  // Przycisk przełączania trybu ciemnego/jasnego
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        console.log('Przełączanie motywu z:', theme);
        toggleTheme();
      }}
      className="rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition"
    >
      <span className="sr-only">Przełącz motyw</span>
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
