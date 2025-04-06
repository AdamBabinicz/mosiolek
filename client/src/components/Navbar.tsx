import { useState } from "react";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import ThemeToggle from "./ThemeToggle";
import SimpleLanguageSwitcher from "./SimpleLanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Tłumaczone etykiety
  const navItems = [
    { href: "#start", label: t("navbar.start") },
    { href: "#foto-teka", label: t("navbar.photos") },
    { href: "#tworca", label: t("navbar.creator") },
    { href: "#dyskografia", label: t("navbar.discography") },
    { href: "#kontakt", label: t("navbar.contact") },
    { href: "#koncerty", label: t("navbar.concerts") },
  ];

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-serif text-xl font-bold text-blue-600 dark:text-blue-400">
                Paweł Mosiołek
              </span>
              <img
                src="/assets/2.avif"
                alt="..."
                className="w-full max-w-[3rem] h-auto ml-6"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <div className="border-l border-gray-200 dark:border-gray-700 h-6 mx-2"></div>

            <SimpleLanguageSwitcher />
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

          <div className="flex items-center justify-between px-3">
            <SimpleLanguageSwitcher isMobile />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
