import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import CreatorSection from "@/components/CreatorSection";
// import DiscographySection from "@/components/DiscographySection";
import ContactSection from "@/components/ContactSectionSimple";
import ConcertsSection from "@/components/ConcertsSection";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Odroczony scroll, żeby komponenty miały czas się wyrenderować
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
  const { language } = useLanguage();
  const { t } = useTranslation();

  const title =
    language === "en"
      ? t("seo.homeTitle")
      : "Paweł Mosiołek - Muzyk, Artysta | Oficjalna strona";
  const description =
    language === "en"
      ? t("seo.homeDescription")
      : "Oficjalna strona Pawła Mosiołka, artysty, kompozytora i muzyka. Poznaj jego twórczość, koncerty, galerie zdjęć oraz projekty artystyczne. +48604103409";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        <html lang={language} />
      </Helmet>

      <main className="flex-grow">
        <HeroSection />
        <PhotoGallery />
        <CreatorSection />
        <ContactSection />
        <ConcertsSection />
      </main>
    </>
  );
};

export default Home;
