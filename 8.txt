import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import CreatorSection from "@/components/CreatorSection";
import DiscographySection from "@/components/DiscographySection";
import ContactSection from "@/components/ContactSectionSimple";
import ConcertsSection from "@/components/ConcertsSection";
import { Helmet } from "react-helmet";

const Home = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.homeTitle")}</title>
        <meta name="description" content={t("seo.homeDescription")} />
        <meta property="og:title" content={t("seo.homeTitle")} />
        <meta property="og:description" content={t("seo.homeDescription")} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        <html lang={language} />
      </Helmet>

      <main className="flex-grow">
        <HeroSection />
        <PhotoGallery />
        <CreatorSection />
        {/* <DiscographySection /> */}
        <ContactSection />
        <ConcertsSection />
      </main>
    </>
  );
};

export default Home;
