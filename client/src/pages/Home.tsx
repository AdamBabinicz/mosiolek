// Usunięto importy kontekstu językowego
// import { useLanguage } from "@/contexts/LanguageContext";
// import { useTranslation } from "@/hooks/useTranslation";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import CreatorSection from "@/components/CreatorSection";
import DiscographySection from "@/components/DiscographySection";
import ContactSection from "@/components/ContactSectionSimple";
import ConcertsSection from "@/components/ConcertsSection";
import { Helmet } from "react-helmet";

const Home = () => {
  // Usunięto użycie kontekstu językowego
  // const { language } = useLanguage();
  // const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Paweł Mosiołek - Oficjalna strona</title>
        <meta name="description" content="Oficjalna strona Pawła Mosiołka - muzyka, kompozytora i wokalisty" />
        <meta property="og:title" content="Paweł Mosiołek - Oficjalna strona" />
        <meta property="og:description" content="Oficjalna strona Pawła Mosiołka - muzyka, kompozytora i wokalisty" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <main className="flex-grow">
        <HeroSection />
        <PhotoGallery />
        <CreatorSection />
        <DiscographySection />
        <ContactSection />
        <ConcertsSection />
      </main>
    </>
  );
};

export default Home;
