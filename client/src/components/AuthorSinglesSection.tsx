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

const AuthorSinglesSection = () => {
  const { t } = useTranslation();

  const albums: Album[] = [
    {
      id: 4,
      title: t("discography.album22.title"),
      year: "2022-11-16",
      feat: "",
      coverUrl: "/assets/13.avif",
      listenUrl: "https://www.youtube.com/watch?v=Q6OyiJmIC9s",
      spotifyUrl: "",
      youtubeUrl: "https://www.youtube.com/watch?v=Q6OyiJmIC9s",
      appleMusicUrl:
        "https://music.apple.com/pl/album/na-uk%C5%82ady-nie-ma-rady/1654991436?i=1654991438",
      empikUrl:
        "https://www.empik.com/na-uklady-nie-ma-rady,p1350531657,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/album/4ix6UhMbxajwxH49htoLyL",
      youtubeUrl: "https://www.youtube.com/watch?v=AGnFP2oUZxk",
      appleMusicUrl:
        "https://music.apple.com/pl/album/dzikie-konie-single/1690208258",
      empikUrl: "https://www.empik.com/dzikie-konie,p1388837819,ebooki-i-mp3-p",
      tracklist: [],
      alt: t("discography.album13.alt"),
    },
    {
      id: 7,
      title: t("discography.album1.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/1.avif",
      listenUrl: "https://www.youtube.com/watch?v=4-pHUVmWd6c",
      spotifyUrl: "https://open.spotify.com/track/6y9Z4LaHPFPph2AkCGsRjT",
      youtubeUrl: "https://www.youtube.com/watch?v=j6WheaJyHPg",
      appleMusicUrl:
        "https://music.apple.com/us/album/nie-dla-czasu-single/1700477644",
      empikUrl:
        "https://www.empik.com/nie-dla-czasu,p1518365191,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/track/6oAto2FSHw8kF35B3DjK1l",
      youtubeUrl: "https://www.youtube.com/watch?v=-TetyPYx-Ug",
      appleMusicUrl:
        "https://music.apple.com/us/album/skrzyd%C5%82a-nadziei-single/1700477174",
      empikUrl:
        "https://www.empik.com/skrzydla-nadziei,p1403820378,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/track/0Ukd1YE7eRlpmQXZO9vBP4",
      youtubeUrl: "https://www.youtube.com/watch?v=-TetyPYx-Ug",
      appleMusicUrl: "",
      empikUrl:
        "https://www.empik.com/tylko-dla-nas,p1403820916,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/album/5ikkTIXr5In3QzYjOgNmoP",
      youtubeUrl: "https://www.youtube.com/watch?v=itQuj9twpwM",
      appleMusicUrl:
        "https://music.apple.com/us/album/moja-wolno%C5%9B%C4%87-protest-song-single/1700476882",
      empikUrl:
        "https://www.empik.com/moja-wolnosc-protest-song,p1403820396,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/track/1tbJQiRYoP8Monn7FttME0",
      youtubeUrl: "https://www.youtube.com/watch?v=SWvF0aP4zdc",
      appleMusicUrl:
        "https://music.apple.com/pl/album/ci-co-odeszli/1700476384?i=1700476391",
      empikUrl:
        "https://www.empik.com/ci-co-odeszli,p1403821128,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/album/287oaUzrQPNtNa3qWvub7G",
      youtubeUrl: "https://www.youtube.com/watch?v=eQwr2Gm_Z7E",
      appleMusicUrl:
        "https://music.apple.com/us/album/tylko-ty-single/1760179211",
      empikUrl: "https://www.empik.com/tylko-ty,p1517410689,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/track/4IMERyF0zoSj5kmaHH88Ku",
      youtubeUrl: "https://www.youtube.com/watch?v=UtCB2-0nGwY",
      appleMusicUrl: "",
      empikUrl:
        "https://www.empik.com/dla-prawdziwych,p1517415860,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/track/4h67x3haqt3nmscts8QWrT",
      youtubeUrl: "https://www.youtube.com/watch?v=X1eVW80mdKU",
      appleMusicUrl:
        "https://music.apple.com/us/album/moment-single/1760375380",
      empikUrl: "https://www.empik.com/moment,p1517773454,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/track/1v3lMtG0XUkxoJ5Bn3EYlV",
      youtubeUrl: "https://www.youtube.com/watch?v=7LT8T91FURE",
      appleMusicUrl: "",
      empikUrl: "https://www.empik.com/chwila,p1517415912,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/track/5dRaQ5sG5jDirDbulVjh3l",
      youtubeUrl: "https://www.youtube.com/watch?v=lJf_2SPQX6A",
      appleMusicUrl: "",
      empikUrl:
        "https://www.empik.com/odlece-z-toba,p1517415897,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/album/63NsiRZt0rrtl20r2JeXsF",
      youtubeUrl: "https://www.youtube.com/watch?v=4u8hwwZt_NM",
      appleMusicUrl:
        "https://music.apple.com/pl/album/nie-dla-czasu-remix-single/1760570560",
      empikUrl:
        "https://www.empik.com/nie-dla-czasu,p1518365191,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/album/4aycjevZWzr19Xmfv8qhMA",
      youtubeUrl: "https://www.youtube.com/watch?v=U4KO8yjpkV8",
      appleMusicUrl:
        "https://music.apple.com/pl/album/w-lunaparku-wielkichmiast-single/1760569123",
      empikUrl:
        "https://www.empik.com/w-lunaparku-wielkichmiast,p1518364925,ebooki-i-mp3-p",
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
      spotifyUrl: "https://open.spotify.com/album/6RkSDPpITmOUgwBsd2aHRu",
      youtubeUrl: "https://www.youtube.com/watch?v=G4pQC7Z8EBU",
      appleMusicUrl:
        "https://music.apple.com/pl/album/piosenka-o-radomiu-single/1765850949",
      empikUrl:
        "https://www.empik.com/piosenka-o-radomiu,p1528216964,ebooki-i-mp3-p",
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
            {t("discography.description.authorSingles")}
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
                          rel={album.spotifyUrl ? "noopener noreferrer" : ""}
                          className={`flex items-center ${
                            album.spotifyUrl
                              ? "text-green-700 dark:text-green-300 hover:underline"
                              : "text-gray-300 cursor-not-allowed pointer-events-none"
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
                          rel={album.youtubeUrl ? "noopener noreferrer" : ""}
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
                          // rel="noopener noreferrer"
                          rel={album.appleMusicUrl ? "noopener noreferrer" : ""}
                          className={`flex items-center ${
                            album.appleMusicUrl
                              ? "text-pink-700 dark:text-pink-300 hover:underline"
                              : "text-gray-300 cursor-not-allowed pointer-events-none"
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
                          // rel="noopener noreferrer"
                          rel={album.empikUrl ? "noopener noreferrer" : ""}
                          className={`flex items-center ${
                            album.empikUrl
                              ? "text-yellow-700 dark:text-yellow-300 hover:underline"
                              : "text-gray-300 cursor-not-allowed pointer-events-none"
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

export default AuthorSinglesSection;
