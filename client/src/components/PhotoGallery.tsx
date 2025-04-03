import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import PhotoModal from "./PhotoModal";

interface Photo {
  id: number;
  url: string;
  alt: string;
  caption: string;
  description: string;
}

const PhotoGallery = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Zdjęcia z koncertów muzycznych (zdjęcia dostosowane do tematyki muzycznej)
  const photos: Photo[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80",
      alt: t('photos.photo1Alt'),
      caption: "Koncert w Opolu 2023",
      description: "Występ Pawła Mosiołka na 57. Krajowym Festiwalu Polskiej Piosenki w Opolu z autorskim utworem 'Nie dla czasu'."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: t('photos.photo2Alt'),
      caption: "Koncert akustyczny 2023",
      description: "Kameralny koncert akustyczny Pawła Mosiołka, prezentujący utwory z nowej płyty."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      alt: t('photos.photo3Alt'),
      caption: "Koncert plenerowy",
      description: "Występ Pawła Mosiołka podczas letniego festiwalu muzycznego."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1574575142830-974864c83131?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: t('photos.photo4Alt'),
      caption: "Studio nagraniowe",
      description: "Paweł Mosiołek podczas sesji nagraniowej swojego nowego albumu."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1580745089072-62adec9791f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: t('photos.photo5Alt'),
      caption: "Koncert charytatywny",
      description: "Występ podczas koncertu charytatywnego na rzecz dzieci z domów dziecka."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80",
      alt: t('photos.photo6Alt'),
      caption: "Za kulisami",
      description: "Paweł Mosiołek za kulisami przed koncertem w filharmonii."
    }
  ];

  const openPhotoModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePhotoModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <section id="foto-teka" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('photos.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            {t('photos.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 transform hover:shadow-xl">
                <img 
                  src={photo.url} 
                  alt={photo.alt} 
                  className="object-cover cursor-pointer transition-all group-hover:scale-105"
                  onClick={() => openPhotoModal(photo)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{photo.caption}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
            {t('photos.viewAllButton')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Photo Modal */}
      {isModalOpen && selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          isOpen={isModalOpen} 
          onClose={closePhotoModal} 
        />
      )}
    </section>
  );
};

export default PhotoGallery;
