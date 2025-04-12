import { useTranslation } from "@/hooks/useTranslation";
import { FaSpotify, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

interface Album {
  id: number;
  title: string;
  year: string;
  feat: string;
  coverUrl: string;
  rating: number;
  alt: string;
}

const CreatorSection = () => {
  const { t } = useTranslation();

  // const albums: Album[] = [
  //   {
  //     id: 1,
  //     title: "Nowa Droga",
  //     year: "2023",
  //     coverUrl: "/assets/1.jfif",
  //     rating: 4.5,
  //     alt: "Okładka albumu 'Nowa Droga'",
  //   },
  //   {
  //     id: 2,
  //     title: "Echa Przeszłości",
  //     year: "2020",
  //     coverUrl:
  //       "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  //     rating: 4.0,
  //     alt: "Okładka albumu 'Echa Przeszłości'",
  //   },
  //   {
  //     id: 3,
  //     title: "Światło i Cień",
  //     year: "2018",
  //     coverUrl:
  //       "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     rating: 5.0,
  //     alt: "Okładka albumu 'Światło i Cień'",
  //   },
  // ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`star-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half-star"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L10 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L9.328 2.42A.75.75 0 0110 2zm0 2.445L7.385 9.667a.75.75 0 01-.565.41l-5.159.75 3.736 3.642a.75.75 0 01.216.664l-.88 5.135 4.617-2.426a.75.75 0 01.698 0l4.618 2.426-.881-5.135a.75.75 0 01.216-.664l3.736-3.642-5.16-.75a.75.75 0 01-.564-.41L10 4.445z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section id="tworca" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="lg:order-2 mb-12 lg:mb-0">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {t("creator.title")}
              </h2>
              <div className="mt-6 text-gray-800 dark:text-gray-100 space-y-4">
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{ __html: t("creator.paragraph1") }}
                ></p>
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{ __html: t("creator.paragraph2") }}
                ></p>
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{ __html: t("creator.paragraph3") }}
                ></p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://open.spotify.com/artist/1PvGZp6n4B360g4hBVpGjz"
                  className="flex items-center text-green-700 dark:text-green-300 hover:underline "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spotify link"
                >
                  <FaSpotify className="h-5 w-5 mr-2" />
                  <p>Spotify</p>
                </a>
                <a
                  href="https://www.youtube.com/user/pawelmosiolek"
                  className="flex items-center text-red-600 dark:text-red-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube link"
                >
                  <FaYoutube className="h-5 w-5 mr-2" />
                  <p>YouTube</p>
                </a>
                <a
                  href="https://www.facebook.com/PAWELMOSIOLEK1976"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook link"
                >
                  <FaFacebook className="h-5 w-5 mr-2" />
                  <p>Facebook</p>
                </a>
                <a
                  href="https://www.instagram.com/pawelmosiolek"
                  className="flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 hover:underline transition-all duration-500 delay-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram link"
                >
                  <FaInstagram className="h-5 w-5 mr-2" />
                  <p>Instagram</p>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:order-1 relative">
            <div className="aspect-w-3 aspect-h-4 lg:aspect-w-10 lg:aspect-h-12 rounded-lg shadow-xl overflow-hidden">
              <img
                src="/assets/img/1.avif"
                alt="Paweł Mosiołek - portret"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-gray-700 p-3 md:p-4 rounded-md shadow-lg max-w-xs">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic">
                  {t("creator.quote")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-24">
          <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white text-center mb-12">
            {t("creator.discographyTitle")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={album.coverUrl}
                    alt={album.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {album.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {album.year}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-500">
                      {renderStars(album.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      {album.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CreatorSection;
