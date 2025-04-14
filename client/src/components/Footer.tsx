import { useTranslation } from "@/hooks/useTranslation";
import { FaTiktok, FaAmazon } from "react-icons/fa";
import { GrAmazon } from "react-icons/gr";
import { Link } from "wouter";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="font-serif text-xl font-bold text-blue-600 dark:text-blue-400">
                {t("footer.name")}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">{t("footer.bio")}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/PAWELMOSIOLEK1976"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="Przejdź do profilu Pawła Mosiołka na Facebooku"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/pawelmosiolek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="Przejdź do profilu Pawła Mosiołka na Instagramie"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/user/pawelmosiolek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="Zobacz filmy Pawła Mosiołka na YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@pawelmosiolek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="Odwiedź profil Pawła Mosiołka na TikToku"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.amazon.com/Tylko-dla-nas-Pawel-Mosiolek/dp/B0CDCJHKGS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="Kup singiel 'Tylko dla nas' Pawła Mosiołka na Amazonie"
              >
                <GrAmazon />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#start"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t("footer.start")}
                </a>
              </li>
              <li>
                <a
                  href="/#foto-teka"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t("footer.photos")}
                </a>
              </li>
              <li>
                <a
                  href="/#tworca"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t("footer.creator")}
                </a>
              </li>
              <li>
                <a
                  href="/#kontakt"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t("footer.contact")}
                </a>
              </li>
              <li>
                <a
                  href="/#koncerty"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t("footer.concerts")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">
              {t("footer.contactTitle")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">
                  {t("footer.contactEmail")}
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">
                  {t("footer.contactPhone")}
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">Radom, Polska</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            {t("footer.copyright")}
            <span className="ml-1">2025 - {currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
