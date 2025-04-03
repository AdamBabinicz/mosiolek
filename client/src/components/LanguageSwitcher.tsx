import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

type LanguageSwitcherProps = {
  isMobile?: boolean;
};

const LanguageSwitcher = ({ isMobile = false }: LanguageSwitcherProps) => {
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Zapewniamy, że kod działa tylko po stronie klienta
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Zwróć pusty przycisk podczas renderowania SSR/początkowego
    if (isMobile) {
      return <div className="flex space-x-2"></div>;
    }
    return (
      <Button 
        variant="ghost" 
        className="flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 focus:outline-none transition"
      >
        <span>--</span>
      </Button>
    );
  }

  if (isMobile) {
    return (
      <div className="flex space-x-2">
        <button
          type="button"
          className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
            language === 'pl'
              ? 'text-primary dark:text-blue-400'
              : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400'
          } transition`}
          onClick={() => {
            console.log('Zmiana języka na PL');
            changeLanguage('pl');
          }}
        >
          PL
        </button>
        <span className="text-gray-300 dark:text-gray-600">|</span>
        <button
          type="button"
          className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
            language === 'en'
              ? 'text-primary dark:text-blue-400'
              : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400'
          } transition`}
          onClick={() => {
            console.log('Zmiana języka na EN');
            changeLanguage('en');
          }}
        >
          EN
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 focus:outline-none transition"
          onClick={() => console.log('Wybieranie języka, aktualny:', language)}
        >
          <span>{language.toUpperCase()}</span>
          <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-24 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
        <DropdownMenuItem 
          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          onClick={() => {
            console.log('Wybrano język: Polski');
            changeLanguage('pl');
          }}
        >
          Polski
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          onClick={() => {
            console.log('Wybrano język: English');
            changeLanguage('en');
          }}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
