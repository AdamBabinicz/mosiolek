import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

interface Photo {
  id: number;
  url: string;
  alt: string;
  caption: string;
  description: string;
}

const PhotoGallery = () => {
  const { t } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false); // Stan do kontrolowania, czy pokazujemy wszystkie zdjęcia

  // Zdjęcia z tłumaczeniami
  const photos: Photo[] = [
    {
      id: 1,
      url: "/assets/20.jpg",
      alt: t("photos.photo1Alt"),
      caption: t("photos.photo1Caption"),
      description: t("photos.photo1Description"),
    },
    {
      id: 2,
      url: "/assets/24.jpg",
      alt: t("photos.photo2Alt"),
      caption: t("photos.photo2Caption"),
      description: t("photos.photo2Description"),
    },
    {
      id: 3,
      url: "/assets/23.jpg",
      alt: t("photos.photo3Alt"),
      caption: t("photos.photo3Caption"),
      description: t("photos.photo3Description"),
    },
    {
      id: 4,
      url: "/assets/17.jpg",
      alt: t("photos.photo4Alt"),
      caption: t("photos.photo4Caption"),
      description: t("photos.photo4Description"),
    },
    {
      id: 5,
      url: "/assets/22.jpg",
      alt: t("photos.photo5Alt"),
      caption: t("photos.photo5Caption"),
      description: t("photos.photo5Description"),
    },
    {
      id: 6,
      url: "/assets/38.jpg",
      alt: t("photos.photo6Alt"),
      caption: t("photos.photo6Caption"),
      description: t("photos.photo6Description"),
    },
    {
      id: 7,
      url: "/assets/1.jpeg",
      alt: t("photos.photo7Alt"),
      caption: t("photos.photo7Caption"),
      description: t("photos.photo7Description"),
    },
    // Możesz dodać kolejne zdjęcia tutaj, jeśli masz więcej
  ];

  // Funkcja pokazująca podgląd zdjęcia
  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    // Tu można dodać logikę wyświetlania modal
  };

  // Funkcja do obsługi kliknięcia w przycisk "Pokaż wszystkie zdjęcia"
  const handleShowAllClick = () => {
    setShowAllPhotos(!showAllPhotos); // Zmienia stan, aby pokazać wszystkie zdjęcia
  };

  // Wybieramy zdjęcia do wyświetlenia (6 pierwszych lub wszystkie)
  const photosToDisplay = showAllPhotos ? photos : photos.slice(0, 6);

  return (
    <section id="foto-teka" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("photos.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            {t("photos.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photosToDisplay.map((photo) => (
            <div key={photo.id} className="group relative">
              <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-48 w-full object-cover cursor-pointer transition-all duration-500 group-hover:scale-105"
                  onClick={() => handlePhotoClick(photo)}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {photo.caption}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Przycisk do pokazywania wszystkich zdjęć */}
        <div className="text-center mt-12">
          <Button
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            onClick={handleShowAllClick} // Obsługuje kliknięcie
          >
            {showAllPhotos
              ? t("photos.showLessButton")
              : t("photos.viewAllButton")}{" "}
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
          </Button>
        </div>
      </div>

      {/* Tu można dodać modal do wyświetlania zdjęć */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full">
            <div className="relative">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedPhoto.caption}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {selectedPhoto.description}
              </p>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
              >
                {t("photos.closeButton")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
