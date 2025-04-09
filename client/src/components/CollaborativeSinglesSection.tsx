import { useTranslation } from "@/hooks/useTranslation";
import { SiApplemusic, SiSpotify, SiYoutube } from "react-icons/si";
import { BsShop } from "react-icons/bs";

interface Album {
  id: number;
  title: string;
  year: string;
  feat: string;
  coverUrl: string;
  tracklist: string[];
  alt: string;
  listenUrl: string;
}

const CollaborativeSinglesSection = () => {
  const { t } = useTranslation();

  const albums: Album[] = [
    {
      id: 1,
      title: t("discography.album2.title"),
      year: "2021-03-19",
      feat: t("discography.album2.feat"),
      coverUrl: "/assets/10.avif",
      listenUrl: "https://www.youtube.com/watch?v=pyNEZH2duPs",
      tracklist: [],
      alt: t("discography.album2.alt"),
    },
    {
      id: 2,
      title: t("discography.album19.title"),
      year: "2021-11-24",
      feat: t("discography.album19.feat"),
      coverUrl: "/assets/9.avif",
      listenUrl: "https://www.youtube.com/watch?v=jieUXgnNpHU",
      tracklist: [],
      alt: t("discography.album19.alt"),
    },
    {
      id: 3,
      title: t("discography.album20.title"),
      year: "2022-10-09",
      feat: t("discography.album20.feat"),
      coverUrl: "/assets/11.avif",
      listenUrl: "https://www.youtube.com/watch?v=pExOWE2r7JI",
      tracklist: [],
      alt: t("discography.album20.alt"),
    },
    {
      id: 4,
      title: t("discography.album18.title"),
      year: "2023-01-24",
      feat: t("discography.album18.feat"),
      coverUrl: "/assets/img/39.avif",
      listenUrl: "https://www.youtube.com/watch?v=l_J3nklH9E8",
      tracklist: [],
      alt: t("discography.album18.alt"),
    },
    {
      id: 5,
      title: t("discography.album12.title"),
      year: "2024-01-03",
      feat: t("discography.album12.feat"),
      coverUrl: "/assets/15.avif",
      listenUrl: "https://www.youtube.com/watch?v=fxXBxSGcgdg",
      tracklist: [],
      alt: t("discography.album12.alt"),
    },
    {
      id: 6,
      title: t("discography.album11.title"),
      year: "2024-05-03",
      feat: t("discography.album11.feat"),
      coverUrl: "/assets/16.avif",
      listenUrl: "https://www.youtube.com/watch?v=Dwt3fHhL17E",
      tracklist: [],
      alt: t("discography.album11.alt"),
    },
    {
      id: 7,
      title: t("discography.album21.title"),
      year: "2024-07-26",
      feat: t("discography.album21.feat"),
      coverUrl: "/assets/17.avif",
      listenUrl: "https://www.youtube.com/watch?v=bKwYjenojjw",
      tracklist: [],
      alt: t("discography.album21.alt"),
    },
  ].sort((a, b) => new Date(a.year).getTime() - new Date(b.year).getTime());

  return (
    <section id="single-wspolne" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("navbar.collaborationSingles")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t("discography.description")}
          </p>
        </div>

        <div className="grid gap-12">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
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
                    <p className="mb-6">{album.feat}</p>
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-4 pb-4">
                      <div className="flex space-x-4">
                        <a
                          href="https://open.spotify.com/artist/1PvGZp6n4B360g4hBVpGjz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <SiSpotify className="h-5 w-5 mr-2" />
                          <span>
                            {t("discography.streamingService.spotify")}
                          </span>
                        </a>
                        <a
                          href="https://www.youtube.com/user/pawelmosiolek/videos"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <SiYoutube className="h-5 w-5 mr-2" />
                          <span>
                            {t("discography.streamingService.youtube")}
                          </span>
                        </a>
                        <a
                          href="https://music.apple.com/pl/artist/pawe%C5%82-mosio%C5%82ek/574232241"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <SiApplemusic className="h-5 w-5 mr-2" />
                          <span>
                            {t("discography.streamingService.appleMusic")}
                          </span>
                        </a>
                        <a
                          href="https://www.empik.com/szukaj/produkt?author=pawe%C5%82+mosio%C5%82ek"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <BsShop className="h-5 w-5 mr-2" />
                          <span>{t("discography.streamingService.empik")}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={() =>
                        window.open(
                          album.listenUrl,
                          "_blank",
                          "noopener noreferrer"
                        )
                      }
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                    >
                      {t("discography.listenButton")}
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

export default CollaborativeSinglesSection;
