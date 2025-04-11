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
  spotifyUrl: string;
  youtubeUrl: string;
  appleMusicUrl: string;
  empikUrl: string;
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
      spotifyUrl: "https://open.spotify.com/track/6ghtqRm5SGBqSbltsfCP5x",
      youtubeUrl: "https://www.youtube.com/watch?v=i9jE9lRq5TI",
      appleMusicUrl:
        "https://music.apple.com/us/album/b%C4%85d%C5%BA-zawsze-sob%C4%85/1559011023?i=1559011025",
      empikUrl: "",
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
      spotifyUrl: "https://open.spotify.com/track/15RvmEJgjqMrQb10KcvsaQ",
      youtubeUrl: "https://www.youtube.com/watch?v=IE2mRRT1t6g",
      appleMusicUrl:
        "https://music.apple.com/us/album/dzie%C5%84-dobry-feat-soberman-pawe%C5%82-mosio%C5%82ek-single/1596777594",
      empikUrl:
        "https://www.empik.com/dzien-dobry-feat-soberman-pawel-mosiolek,p1288252297,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/track/7a0vhwjil4FFVGSbyztO2X",
      youtubeUrl: "https://www.youtube.com/watch?v=5lhDDRRQzbs",
      appleMusicUrl:
        "https://music.apple.com/pl/album/marzenia-si%C4%99-spe%C5%82niaj%C4%85-feat-pawe%C5%82-mosio%C5%82ek-single/1661319579",
      empikUrl: "",
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
      spotifyUrl: "https://open.spotify.com/track/1Z1xRRgxLyLooCZEe5W3gH",
      youtubeUrl: "https://www.youtube.com/watch?v=l_J3nklH9E8",
      appleMusicUrl:
        "https://music.apple.com/us/song/lustro-feat-pawe%C5%82-mosio%C5%82ek/1704986799",
      empikUrl: "",
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
      spotifyUrl: "https://open.spotify.com/track/74FCVZVHYXURMot1eBHl00",
      youtubeUrl: "https://www.youtube.com/watch?v=TPl0UnThJsY",
      appleMusicUrl:
        "https://music.apple.com/pl/album/nie-narzekam-single/1747318355",
      empikUrl: "https://www.empik.com/nie-narzekam,p1488960743,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/track/5cfqMp1qWXrX3uu0AkxYkQ",
      youtubeUrl: "https://www.youtube.com/watch?v=Dwt3fHhL17E",
      appleMusicUrl:
        "https://music.apple.com/us/album/wygrywasz-kiedy-walczysz-single/1792944568",
      empikUrl: "",
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
      spotifyUrl: "https://open.spotify.com/track/2DhjeHfn2JFpyDRQ3t8m4N",
      youtubeUrl: "https://www.youtube.com/watch?v=bKwYjenojjw",
      appleMusicUrl:
        "https://music.apple.com/pl/album/to-co-by%C5%82o-instrumental-feat-pawe%C5%82-mosio%C5%82ek-tomasz/1765099247",
      empikUrl: "",
      tracklist: [],
      alt: t("discography.album21.alt"),
    },
    {
      id: 8,
      title: t("discography.album23.title"),
      year: "2019-05-25",
      feat: t("discography.album23.feat"),
      coverUrl: "/assets/img/40.avif",
      listenUrl: "https://www.youtube.com/watch?v=unFQ2mYBPsk",
      spotifyUrl: "https://open.spotify.com/artist/5ZuJ3VYHkT5xBXnhmGeNkn",
      youtubeUrl: "https://www.youtube.com/watch?v=unFQ2mYBPsk",
      appleMusicUrl: "https://music.apple.com/pl/artist/popuon/1585363134",
      empikUrl: "",
      tracklist: [],
      alt: t("discography.album23.alt"),
    },
    {
      id: 9,
      title: t("discography.album24.title"),
      year: "2018-06-11",
      feat: t("discography.album24.feat"),
      coverUrl: "/assets/img/41.avif",
      listenUrl: "https://www.youtube.com/watch?v=_jJ2v7X7Wug",
      spotifyUrl: "",
      youtubeUrl: "https://www.youtube.com/watch?v=_jJ2v7X7Wug",
      appleMusicUrl: "",
      empikUrl: "",
      tracklist: [],
      alt: t("discography.album24.alt"),
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
            {t("discography.description.collaborationSingles")}
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
                          href={album.spotifyUrl || "#"}
                          target={album.spotifyUrl ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`flex items-center ${
                            album.spotifyUrl
                              ? "text-green-600 dark:text-green-400 hover:underline"
                              : "text-gray-400 cursor-not-allowed pointer-events-none"
                          }`}
                        >
                          <SiSpotify className="h-5 w-5 mr-2" />
                          <span>
                            {t("discography.streamingService.spotify")}
                          </span>
                        </a>
                        <a
                          href={album.youtubeUrl || "#"}
                          target={album.youtubeUrl ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`flex items-center ${
                            album.youtubeUrl
                              ? "text-red-600 dark:text-red-400 hover:underline"
                              : "text-gray-400 cursor-not-allowed pointer-events-none"
                          }`}
                        >
                          <SiYoutube className="h-5 w-5 mr-2" />
                          <span>
                            {t("discography.streamingService.youtube")}
                          </span>
                        </a>
                        <a
                          href={album.appleMusicUrl || "#"}
                          target={album.appleMusicUrl ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`flex items-center ${
                            album.appleMusicUrl
                              ? "text-pink-600 dark:text-pink-400 hover:underline"
                              : "text-gray-400 cursor-not-allowed pointer-events-none"
                          }`}
                        >
                          <SiApplemusic className="h-5 w-5 mr-2" />
                          <span>
                            {t("discography.streamingService.appleMusic")}
                          </span>
                        </a>
                        <a
                          href={album.empikUrl || "#"}
                          target={album.empikUrl ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`flex items-center ${
                            album.empikUrl
                              ? "text-yellow-600 dark:text-yellow-400 hover:underline"
                              : "text-gray-400 cursor-not-allowed pointer-events-none"
                          }`}
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
