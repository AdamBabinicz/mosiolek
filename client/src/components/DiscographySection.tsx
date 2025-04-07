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

const DiscographySection = () => {
  const { t } = useTranslation();

  const albums: Album[] = [
    {
      id: 1,
      title: t("discography.album2.title"),
      year: "2021-03-19",
      feat: t("discography.album2.feat"),
      coverUrl: "/assets/10.avif",
      listenUrl: "https://www.youtube.com/watch?v=pyNEZH2duPs",
      tracklist: [
        // t("discography.album2.track1"),
        // t("discography.album2.track2"),
        // t("discography.album2.track3"),
        // t("discography.album2.track4"),
        // t("discography.album2.track5"),
        // t("discography.album2.track6"),
        // t("discography.album2.track7"),
        // t("discography.album2.track8"),
        // t("discography.album2.track9"),
        // t("discography.album2.track10"),
      ],
      alt: t("discography.album2.alt"),
    },
    {
      id: 2,
      title: t("discography.album19.title"),
      year: "2021-11-24",
      feat: t("discography.album19.feat"),
      coverUrl: "/assets/9.avif",
      listenUrl: "https://www.youtube.com/watch?v=jieUXgnNpHU",
      tracklist: [
        // t("discography.album2.track1"),
        // t("discography.album2.track2"),
        // t("discography.album2.track3"),
        // t("discography.album2.track4"),
        // t("discography.album2.track5"),
        // t("discography.album2.track6"),
        // t("discography.album2.track7"),
        // t("discography.album2.track8"),
        // t("discography.album2.track9"),
        // t("discography.album2.track10"),
      ],
      alt: t("discography.album19.alt"),
    },
    {
      id: 3,
      title: t("discography.album20.title"),
      year: "2022-10-09",
      feat: t("discography.album2.feat"),
      coverUrl: "/assets/11.avif",
      listenUrl: "https://www.youtube.com/watch?v=pExOWE2r7JI",
      tracklist: [
        // t("discography.album2.track1"),
        // t("discography.album2.track2"),
        // t("discography.album2.track3"),
        // t("discography.album2.track4"),
        // t("discography.album2.track5"),
        // t("discography.album2.track6"),
        // t("discography.album2.track7"),
        // t("discography.album2.track8"),
        // t("discography.album2.track9"),
        // t("discography.album2.track10"),
      ],
      alt: t("discography.album20.alt"),
    },
    {
      id: 4,
      title: t("discography.album22.title"),
      year: "2022-11-16",
      feat: "",
      coverUrl: "/assets/13.avif",
      listenUrl: "https://www.youtube.com/watch?v=bKwYjenojjw",
      tracklist: [
        // t("discography.album20.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album22.alt"),
    },
    {
      id: 5,
      title: t("discography.album18.title"),
      year: "2023-01-24",
      feat: t("discography.album2.feat"),
      coverUrl: "/assets/8.avif",
      listenUrl: "https://www.youtube.com/watch?v=-DQWY3D9SPI",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album18.alt"),
    },
    {
      id: 6,
      title: t("discography.album13.title"),
      year: "2023-05-30",
      feat: "",
      coverUrl: "/assets/3.avif",
      listenUrl: "https://www.youtube.com/watch?v=AGnFP2oUZxk",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album13.alt"),
    },
    {
      id: 7,
      title: t("discography.album1.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/1.avif",
      listenUrl: "https://www.youtube.com/watch?v=j6WheaJyHPg",
      tracklist: [
        // t("discography.album1.track1"),
        // t("discography.album1.track2"),
        // t("discography.album1.track3"),
        // t("discography.album1.track4"),
        // t("discography.album1.track5"),
        // t("discography.album1.track6"),
        // t("discography.album1.track7"),
        // t("discography.album1.track8"),
        // t("discography.album1.track9"),
        // t("discography.album1.track10"),
      ],
      alt: t("discography.album1.alt"),
    },
    {
      id: 8,
      title: t("discography.album4.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/5.avif",
      listenUrl: "https://www.youtube.com/watch?v=vtNqKiMl5UI",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album4.alt"),
    },
    {
      id: 9,
      title: t("discography.album5.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/6.avif",
      listenUrl: "https://www.youtube.com/watch?v=El4HHwxI2Do",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album5.alt"),
    },
    {
      id: 10,
      title: t("discography.album14.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/7.avif",
      listenUrl: "https://www.youtube.com/watch?v=itQuj9twpwM",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album14.alt"),
    },
    {
      id: 11,
      title: t("discography.album15.title"),
      year: "2023-08-01",
      feat: "",
      coverUrl: "/assets/14.avif",
      listenUrl: "https://www.youtube.com/watch?v=ZDX52ZcAA1I",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album15.alt"),
    },
    {
      id: 12,
      title: t("discography.album12.title"),
      year: "2024-01-03",
      feat: t("discography.album12.feat"),
      coverUrl: "/assets/15.avif",
      listenUrl: "https://www.youtube.com/watch?v=fxXBxSGcgdg",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album12.alt"),
    },
    {
      id: 13,
      title: t("discography.album11.title"),
      year: "2024-05-03",
      feat: t("discography.album11.feat"),
      coverUrl: "/assets/16.avif",
      listenUrl: "https://www.youtube.com/watch?v=Dwt3fHhL17E",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album11.alt"),
    },
    {
      id: 14,
      title: t("discography.album21.title"),
      year: "2024-07-26",
      feat: t("discography.album21.feat"),
      coverUrl: "/assets/17.avif",
      listenUrl: "https://www.youtube.com/watch?v=bKwYjenojjw",
      tracklist: [
        // t("discography.album20.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album21.alt"),
    },
    {
      id: 15,
      title: t("discography.album10.title"),
      year: "2024-07-29",
      feat: "",
      coverUrl: "/assets/18.avif",
      listenUrl: "https://www.youtube.com/watch?v=GYNPujyw_oY",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album10.alt"),
    },
    {
      id: 16,
      title: t("discography.album3.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/19.avif",
      listenUrl: "https://www.youtube.com/watch?v=br_BGIsVeCw",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album3.alt"),
    },

    {
      id: 17,
      title: t("discography.album6.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/20.avif",
      listenUrl: "https://www.youtube.com/watch?v=X1eVW80mdKU",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album6.alt"),
    },
    {
      id: 18,
      title: t("discography.album16.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/21.avif",
      listenUrl: "https://www.youtube.com/watch?v=GYEiZr9uq4E",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album16.alt"),
    },
    {
      id: 19,
      title: t("discography.album17.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/22.avif",
      listenUrl: "https://www.youtube.com/watch?v=scvBZZ72hSQ",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album17.alt"),
    },
    {
      id: 20,
      title: t("discography.album8.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/23.avif",
      listenUrl: "https://www.youtube.com/watch?v=VbpAeKZMypM",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album8.alt"),
    },
    {
      id: 21,
      title: t("discography.album9.title"),
      year: "2024-07-30",
      feat: "",
      coverUrl: "/assets/24.avif",
      listenUrl: "https://www.youtube.com/watch?v=U4KO8yjpkV8",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album9.alt"),
    },
    {
      id: 22,
      title: t("discography.album7.title"),
      year: "2024-08-30",
      feat: "",
      coverUrl: "/assets/25.avif",
      listenUrl: "https://www.youtube.com/watch?v=A0pRGE6W5vo",
      tracklist: [
        // t("discography.album3.track1"),
        // t("discography.album3.track2"),
        // t("discography.album3.track3"),
        // t("discography.album3.track4"),
        // t("discography.album3.track5"),
        // t("discography.album3.track6"),
        // t("discography.album3.track7"),
        // t("discography.album3.track8"),
        // t("discography.album3.track9"),
      ],
      alt: t("discography.album7.alt"),
    },
  ];

  return (
    <section id="dyskografia" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("navbar.discography")}
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
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                          </svg> */}
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
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg> */}
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
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12.04 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm3.85 13.15c-.2.2-.5.2-.7 0l-2.15-2.15V18c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v2.79l1.15-1.15c.2-.2.5-.2.7 0s.2.51 0 .71zm3.02-10.66c-.83-.37-3.7-1.49-7.91-1.49s-7.08 1.12-7.91 1.49c-.82.37-1.09.7-1.09 1.47v12.08c0 .77.27 1.1 1.09 1.47.83.37 3.7 1.49 7.91 1.49s7.08-1.12 7.91-1.49c.82-.37 1.09-.7 1.09-1.47V6.96c0-.77-.27-1.1-1.09-1.47zm0 13.55c0 .41-.03.53-.41.7-.79.35-3.39 1.26-6.5 1.26s-5.71-.91-6.5-1.26c-.38-.17-.41-.29-.41-.7V6.96c0-.41.03-.53.41-.7.79-.35 3.39-1.26 6.5-1.26s5.71.91 6.5 1.26c.38.17.41.29.41.7v12.08z" />
                          </svg> */}
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
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      {t("discography.tracklist")}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {album.tracklist.map((track, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <span className="mr-2 text-sm font-medium">
                            {index + 1}.
                          </span>
                          {track}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={() => window.open(album.listenUrl, "_blank")}
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

export default DiscographySection;
