import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Photo {
  id: number;
  url: string;
  alt: string;
  caption: string;
  description: string;
}

interface PhotoModalProps {
  photo: Photo;
  isOpen: boolean;
  onClose: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photo, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-hidden">
        <Button 
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-70 transition"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <div className="p-2">
          <img 
            src={photo.url} 
            alt={photo.alt} 
            className="max-h-[80vh] mx-auto"
          />
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-900 dark:text-white">{photo.caption}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{photo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
