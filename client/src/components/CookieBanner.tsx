import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const CookieBanner = () => {
  const { t } = useTranslation();
  const { acceptCookies, declineCookies } = useCookieConsent();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg z-50 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm mb-4 md:mb-0">
          <p className="font-medium mb-1">{t('cookieBanner.title')}</p>
          <p className="text-gray-600 dark:text-gray-300 text-xs">
            {t('cookieBanner.description')}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={declineCookies}
            variant="outline"
            className="px-4 py-2 text-xs bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {t('cookieBanner.essential')}
          </Button>
          <Button
            onClick={acceptCookies}
            className="px-4 py-2 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {t('cookieBanner.acceptAll')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
