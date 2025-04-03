import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

interface Album {
  id: number;
  title: string;
  year: string;
  coverUrl: string;
  tracklist: string[];
  alt: string;
}

const DiscographySection = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const albums: Album[] = [
    {
      id: 1,
      title: t('creator.album1.title'),
      year: "2023",
      coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd847f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tracklist: [
        "Przestrzeń (Intro)",
        "Nowy dzień",
        "W ciszy",
        "Zatrzymaj się na chwilę",
        "Wolność",
        "Blisko Ciebie",
        "Tajemnica",
        "Bez słów",
        "Czas na zmiany",
        "Przestrzeń (Outro)"
      ],
      alt: t('creator.album1.alt')
    },
    {
      id: 2,
      title: t('creator.album2.title'),
      year: "2020",
      coverUrl: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      tracklist: [
        "Początek",
        "Historia",
        "Dzień po dniu",
        "Wspomnienia",
        "Przyszłość",
        "Przemijanie",
        "Wieczność",
        "Moment",
        "Spotkanie",
        "Czas ucieka"
      ],
      alt: t('creator.album2.alt')
    },
    {
      id: 3,
      title: t('creator.album3.title'),
      year: "2018",
      coverUrl: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tracklist: [
        "Podróż",
        "Bez granic",
        "Horyzont",
        "Daleka droga",
        "Odkrycie",
        "Nowe miejsce",
        "Bez końca",
        "Spotkania",
        "Powrót"
      ],
      alt: t('creator.album3.alt')
    }
  ];

  return (
    <section id="dyskografia" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('creator.discographyTitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t('creator.paragraph1')}
          </p>
        </div>

        <div className="grid gap-12">
          {albums.map((album) => (
            <div key={album.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={album.coverUrl} 
                      alt={album.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-2">
                      {album.title} ({album.year})
                    </h3>
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-4 pb-4">
                      <div className="flex space-x-4">
                        <a href="#" className="flex items-center text-primary dark:text-blue-400 hover:underline">
                          <i className="fab fa-spotify mr-2"></i>
                          <span>Spotify</span>
                        </a>
                        <a href="#" className="flex items-center text-primary dark:text-blue-400 hover:underline">
                          <i className="fab fa-youtube mr-2"></i>
                          <span>YouTube</span>
                        </a>
                        <a href="#" className="flex items-center text-primary dark:text-blue-400 hover:underline">
                          <i className="fas fa-music mr-2"></i>
                          <span>Apple Music</span>
                        </a>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      {language === 'pl' ? 'Lista utworów' : 'Tracklist'}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {album.tracklist.map((track, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="mr-2 text-sm font-medium">{index + 1}.</span> {track}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <button className="px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-md transition">
                      {language === 'pl' ? 'Posłuchaj albumu' : 'Listen to the album'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscographySection;