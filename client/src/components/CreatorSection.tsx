import { useTranslation } from "@/hooks/useTranslation";

interface Album {
  id: number;
  title: string;
  year: string;
  coverUrl: string;
  rating: number;
  alt: string;
}

const CreatorSection = () => {
  const { t } = useTranslation();

  const albums: Album[] = [
    {
      id: 1,
      title: t('creator.album1.title'),
      year: "2023",
      coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd847f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 4.5,
      alt: t('creator.album1.alt')
    },
    {
      id: 2,
      title: t('creator.album2.title'),
      year: "2020",
      coverUrl: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      rating: 4.0,
      alt: t('creator.album2.alt')
    },
    {
      id: 3,
      title: t('creator.album3.title'),
      year: "2018",
      coverUrl: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 5.0,
      alt: t('creator.album3.alt')
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <section id="tworca" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="lg:order-2 mb-12 lg:mb-0">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {t('creator.title')}
              </h2>
              <div className="mt-6 text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  {t('creator.paragraph1')}
                </p>
                <p>
                  {t('creator.paragraph2')}
                </p>
                <p>
                  {t('creator.paragraph3')}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#" className="flex items-center text-primary dark:text-blue-400 hover:underline">
                  <i className="fab fa-spotify mr-2"></i>
                  <span>Spotify</span>
                </a>
                <a href="#" className="flex items-center text-primary dark:text-blue-400 hover:underline">
                  <i className="fab fa-youtube mr-2"></i>
                  <span>YouTube</span>
                </a>
                <a href="https://www.facebook.com/PAWELMOSIOLEK1976" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary dark:text-blue-400 hover:underline">
                  <i className="fab fa-facebook mr-2"></i>
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center text-primary dark:text-blue-400 hover:underline">
                  <i className="fab fa-instagram mr-2"></i>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:order-1 relative">
            <div className="aspect-w-3 aspect-h-4 lg:aspect-w-10 lg:aspect-h-12 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551734413-5943d61e982f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                alt={t('creator.portraitAlt')} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-gray-700 p-3 md:p-4 rounded-md shadow-lg max-w-xs">
              <div className="flex items-center gap-3">
                <i className="fas fa-quote-left text-primary dark:text-blue-400"></i>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic">
                  {t('creator.quote')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white text-center mb-12">
            {t('creator.discographyTitle')}
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
                  <h4 className="font-medium text-gray-900 dark:text-white">{album.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{album.year}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-500">
                      {renderStars(album.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{album.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
