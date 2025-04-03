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

  // Zdjęcia z koncertów Pawła Mosiołka
  const photos: Photo[] = [
    {
      id: 1,
      url: "https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/414254606_914068430743660_8162276663390495089_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kz6UNfOAubcAX-aANAX&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfC8kN2LF3r5U8qdG25TNcg89qgOFDnnqLF1Sg4q3j7y_Q&oe=6648BB9A",
      alt: t('photos.photo1Alt'),
      caption: "Koncert w Opolu 2023",
      description: "Występ Pawła Mosiołka na 57. Krajowym Festiwalu Polskiej Piosenki w Opolu z autorskim utworem 'Nie dla czasu'."
    },
    {
      id: 2,
      url: "https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/350568551_655471186595367_2782984231690622570_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0tMsdtV6NkIAX8_q8EW&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfALwTXj7K7m4kLYxNJWL_CQzQfWkgf9WfN1tnN6dWkC1A&oe=6648C1D6",
      alt: t('photos.photo2Alt'),
      caption: "Koncert akustyczny 2023",
      description: "Kameralny koncert akustyczny Pawła Mosiołka, prezentujący utwory z nowej płyty."
    },
    {
      id: 3,
      url: "https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/342347684_910903846875481_4766765094715693716_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4q8TfHtUdAMAX_vIXVL&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfC0KHfJYH2s7j09mXfQ0ztw6sSQkdgH_9UkSLWkCwCyNg&oe=6648C1C3",
      alt: t('photos.photo3Alt'),
      caption: "Koncert plenerowy",
      description: "Występ Pawła Mosiołka podczas letniego festiwalu muzycznego."
    },
    {
      id: 4,
      url: "https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/307732688_625222099328296_7225556330384235455_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QNO13vXcVNsAX-lGbgH&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfCMPXl98Ee5TY-qL_g0rXtpk71eTtTYbZXIHrCpjQz2KA&oe=6649EAD8",
      alt: t('photos.photo4Alt'),
      caption: "Studio nagraniowe",
      description: "Paweł Mosiołek podczas sesji nagraniowej swojego nowego albumu."
    },
    {
      id: 5,
      url: "https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/279301080_551847703332403_8253392866934968841_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HmgvBP_QGpkAX_BNEki&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfAj7wUL3ZwQnV2lZ0NRcRdQT9ZCxTlcSQsrAXFIgbIgKA&oe=664A0055",
      alt: t('photos.photo5Alt'),
      caption: "Koncert charytatywny",
      description: "Występ podczas koncertu charytatywnego na rzecz dzieci z domów dziecka."
    },
    {
      id: 6,
      url: "https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/342095979_1374632356731232_3651507348735905553_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=i1LdBzLZ1EMAZ9MJT-n&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfCShXnJ9c5eSG43CmZxqHQqI6MdQDQ-dV3fHEfqf6HxsQ&oe=6649FE14",
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
