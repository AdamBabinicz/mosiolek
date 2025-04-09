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

const AuthorSinglesSection = () => {
  const { t } = useTranslation();

  const albums: Album[] = [
    {
      id: 4,
      title: t("discography.album22.title"),
      year: "2022-11-16",
      feat: "",
      coverUrl: "/assets/13.avif",
      listenUrl: "https://www.youtube.com/watch?v=bKwYjenojjw",
      tracklist: [],
      alt: t("discography.album22.alt"),
    },
    {
      id: 6,
      title: t("discography.album13.title"),
      year: "2023-05-30",
      feat: "",
      coverUrl: "/assets/3.avif",
      listenUrl: "https://www.youtube.com/watch?v=AGnFP2oUZxk",
      tracklist: [],
      alt: t("discography.album13.alt"),
    },
    {
      id: 7,
      title: t("discography.album1.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/1.avif",
      listenUrl: "https://www.youtube.com/watch?v=j6WheaJyHPg",
      tracklist: [],
      alt: t("discography.album1.alt"),
    },
    {
      id: 8,
      title: t("discography.album4.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/5.avif",
      listenUrl: "https://www.youtube.com/watch?v=vtNqKiMl5UI",
      tracklist: [],
      alt: t("discography.album4.alt"),
    },
    {
      id: 9,
      title: t("discography.album5.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/6.avif",
      listenUrl: "https://www.youtube.com/watch?v=El4HHwxI2Do",
      tracklist: [],
      alt: t("discography.album5.alt"),
    },
    {
      id: 10,
      title: t("discography.album14.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/7.avif",
      listenUrl: "https://www.youtube.com/watch?v=itQuj9twpwM",
      tracklist: [],
      alt: t("discography.album14.alt"),
    },
    {
      id: 11,
      title: t("discography.album15.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/14.avif",
      listenUrl: "https://www.youtube.com/watch?v=ZDX52ZcAA1I",
      tracklist: [],
      alt: t("discography.album15.alt"),
    },
    {
      id: 15,
      title: t("discography.album10.title"),
      year: "2024-07-29",
      feat: "",
      coverUrl: "/assets/18.avif",
      listenUrl: "https://www.youtube.com/watch?v=GYNPujyw_oY",
      tracklist: [],
      alt: t("discography.album10.alt"),
    },
    {
      id: 16,
      title: t("discography.album3.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/19.avif",
      listenUrl: "https://www.youtube.com/watch?v=br_BGIsVeCw",
      tracklist: [],
      alt: t("discography.album3.alt"),
    },
    {
      id: 17,
      title: t("discography.album6.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/20.avif",
      listenUrl: "https://www.youtube.com/watch?v=X1eVW80mdKU",
      tracklist: [],
      alt: t("discography.album6.alt"),
    },
    {
      id: 18,
      title: t("discography.album16.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/21.avif",
      listenUrl: "https://www.youtube.com/watch?v=GYEiZr9uq4E",
      tracklist: [],
      alt: t("discography.album16.alt"),
    },
    {
      id: 19,
      title: t("discography.album17.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/22.avif",
      listenUrl: "https://www.youtube.com/watch?v=scvBZZ72hSQ",
      tracklist: [],
      alt: t("discography.album17.alt"),
    },
    {
      id: 20,
      title: t("discography.album8.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/23.avif",
      listenUrl: "https://www.youtube.com/watch?v=VbpAeKZMypM",
      tracklist: [],
      alt: t("discography.album8.alt"),
    },
    {
      id: 21,
      title: t("discography.album9.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/24.avif",
      listenUrl: "https://www.youtube.com/watch?v=U4KO8yjpkV8",
      tracklist: [],
      alt: t("discography.album9.alt"),
    },
    {
      id: 22,
      title: t("discography.album7.title"),
      year: "2024-08-30",
      feat: "",
      coverUrl: "/assets/25.avif",
      listenUrl: "https://www.youtube.com/watch?v=A0pRGE6W5vo",
      tracklist: [],
      alt: t("discography.album7.alt"),
    },
  ];

  return (
    <section id="single-autorskie" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("navbar.authorSingles")}
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
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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

export default AuthorSinglesSection;
