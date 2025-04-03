import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "wouter";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="font-serif text-xl font-bold text-primary dark:text-blue-400">Paweł Mosiołek</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/PAWELMOSIOLEK1976" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary dark:hover:text-blue-400 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-blue-400 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-blue-400 transition">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-blue-400 transition">
                <i className="fab fa-spotify"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li><a href="#start" className="text-gray-400 hover:text-white transition">{t('navbar.start')}</a></li>
              <li><a href="#foto-teka" className="text-gray-400 hover:text-white transition">{t('navbar.photos')}</a></li>
              <li><a href="#tworca" className="text-gray-400 hover:text-white transition">{t('navbar.creator')}</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-white transition">{t('navbar.contact')}</a></li>
              <li><a href="#koncerty" className="text-gray-400 hover:text-white transition">{t('navbar.concerts')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.contactTitle')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary dark:text-blue-400 mt-1 mr-2"></i>
                <span className="text-gray-400">{t('contact.contactInfo.email')}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-primary dark:text-blue-400 mt-1 mr-2"></i>
                <span className="text-gray-400">{t('contact.contactInfo.phone')}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary dark:text-blue-400 mt-1 mr-2"></i>
                <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: t('contact.contactInfo.address') }}></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Paweł Mosiołek. {t('footer.copyright')}
          </p>
          <div className="mt-4 sm:mt-0 space-x-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">{t('footer.privacyPolicy')}</Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
