import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

type ConcertStatus = "upcoming" | "past";
type ConcertFilter = "all" | ConcertStatus;

interface Concert {
  id: number;
  day: string;
  month: string;
  year: string;
  time: string;
  title: string;
  description: string;
  venue: string;
  price: string;
  ticketLink?: string;
  infoLink?: string;
  photoLink?: string;
  status: ConcertStatus;
}

const ConcertsSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<ConcertFilter>("all");

  const concerts: Concert[] = [
    {
      id: 1,
      day: "06",
      month: t("concerts.months.april"),
      year: "2025",
      time: "14:00",
      title: t("concerts.concert1.title"),
      description: t("concerts.concert1.description"),
      venue: t("concerts.concert1.venue"),
      price: t("concerts.freeEntry"),
      infoLink:
        "https://www.facebook.com/photo/?fbid=1217513286426405&set=a.346465643531178",
      status: "past",
    },
    {
      id: 2,
      day: "02",
      month: t("concerts.months.february"),
      year: "2020",
      time: "16:00",
      title: t("concerts.concert2.title"),
      description: t("concerts.concert2.description"),
      venue: t("concerts.concert2.venue"),
      price: t("concerts.freeEntry"),
      infoLink:
        "https://radioostrowiec.pl/2021/09/20/zmarla-mala-hania-z-kielc-na-leczenie-ktorej-zbierala-cala-polska/",
      status: "past",
    },
    {
      id: 3,
      day: "22",
      month: t("concerts.months.april"),
      year: "2019",
      time: "16:00",
      title: t("concerts.concert3.title"),
      description: t("concerts.concert3.description"),
      venue: t("concerts.concert3.venue"),
      price: "",
      photoLink:
        "https://www.lokalnatelewizja.pl/artykul/15017,ostrowiecki-rap-ma-juz-10-lat#zdjecie-2",
      infoLink:
        "https://www.lokalnatelewizja.pl/artykul/15017,ostrowiecki-rap-ma-juz-10-lat",
      status: "past",
    },
  ];

  const filterByDate = (filter: ConcertFilter) => {
    setActiveFilter(filter);
  };

  const filteredConcerts =
    activeFilter === "all"
      ? concerts
      : concerts.filter((concert) => concert.status === activeFilter);

  return (
    <section id="koncerty" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("concerts.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            {t("concerts.description")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => filterByDate("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className={
              activeFilter === "all"
                ? "px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                : "px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600"
            }
          >
            {t("concerts.filters.all")}
          </Button>
          <Button
            onClick={() => filterByDate("upcoming")}
            variant={activeFilter === "upcoming" ? "default" : "outline"}
            className={
              activeFilter === "upcoming"
                ? "px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                : "px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600"
            }
          >
            {t("concerts.filters.upcoming")}
          </Button>
          <Button
            onClick={() => filterByDate("past")}
            variant={activeFilter === "past" ? "default" : "outline"}
            className={
              activeFilter === "past"
                ? "px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                : "px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600"
            }
          >
            {t("concerts.filters.past")}
          </Button>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredConcerts.map((concert) => (
            <div
              key={concert.id}
              className="py-6 flex flex-wrap md:flex-nowrap group hover:bg-white dark:hover:bg-gray-700 transition-colors rounded-lg p-4"
            >
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 ${
                    concert.status === "upcoming"
                      ? "bg-blue-600 dark:bg-blue-600 text-white"
                      : "bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200"
                  } rounded-lg flex flex-col items-center justify-center`}
                >
                  <span className="text-2xl font-bold">{concert.day}</span>
                  <span className="text-sm uppercase">{concert.month}</span>
                  <span className="text-sm">{concert.year}</span>
                </div>
                <span className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
                  {concert.time}
                </span>
              </div>
              <div className="md:flex-grow">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  {concert.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  {concert.description}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{concert.venue}</span>
                  </div>

                  {concert.status === "upcoming" && concert.price && (
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                      </svg>
                      <span>{concert.price}</span>
                    </div>
                  )}

                  {concert.status === "past" && (
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{t("concerts.eventEnded")}</span>
                    </div>
                  )}

                  {concert.ticketLink && (
                    <a
                      href={concert.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      aria-label={`Więcej informacji o koncercie ${concert.ticketLink}`}
                    >
                      {t("concerts.buyTicket")}
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}

                  {concert.infoLink && (
                    <a
                      href={concert.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      aria-label={`Zobacz szczegóły koncertu ${concert.title} w dniu ${concert.day} ${concert.month} ${concert.year}`}
                      // aria-label={`Więcej informacji o koncercie ${concert.infoLink}`}
                    >
                      {t("concerts.moreInfo")}
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}

                  {concert.photoLink && (
                    <a
                      href={concert.photoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      aria-label={`Zobacz fotki z koncertu ${concert.photoLink}`}
                    >
                      {t("concerts.photosAndReports")}
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <Button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
            {t("concerts.viewAllButton")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button> */}
          <Button
            onClick={() => filterByDate("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className={
              activeFilter === "all"
                ? "px-6 py-3 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                : "px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600"
            }
          >
            {t("concerts.viewAllButton")}{" "}
            {/* Zmienna tłumaczenia dla przycisku */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConcertsSection;
