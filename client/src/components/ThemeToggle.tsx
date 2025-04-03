import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Synchronizuj stan po stronie klienta
  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Tymczasowy przycisk podczas ładowania
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition"
      >
        <span className="sr-only">Ładowanie przełącznika motywu</span>
        <Moon className="h-5 w-5" />
      </Button>
    );
  }

  // Przycisk przełączania trybu ciemnego/jasnego
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition"
    >
      <span className="sr-only">Przełącz motyw</span>
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
