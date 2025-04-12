import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="start"
      className="relative overflow-hidden bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Paweł</span>
              <span className="block text-blue-700 dark:text-blue-300">
                Mosiołek
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
              {t("hero.description")}
            </p>
            <div className="mt-10 sm:flex">
              <div className="rounded-md shadow">
                <Button
                  asChild
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  <a href="#koncerty">{t("hero.buttonConcerts")}</a>
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-gray-50 hover:bg-gray-100 dark:text-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  <a href="#tworca">{t("hero.buttonAbout")}</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="aspect-w-3 aspect-h-4 rounded-lg shadow-xl overflow-hidden">
              <img
                src="/assets/2.avif"
                alt={t("hero.imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 p-4 rounded-md shadow-lg z-10 max-w-xs dark:text-white">
              <div className="flex items-center space-x-2">
                <div className="text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{t("hero.latestSingle")}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t("hero.singleTitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 -z-10 opacity-50 dark:opacity-30"></div>
    </section>
  );
};

export default HeroSection;
