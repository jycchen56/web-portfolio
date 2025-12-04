import galleryImage1Srcset from '../assets/galleryImage1.jpg?w=640;1024;1920&format=webp&as=srcset';
import galleryImage1Fallback from '../assets/galleryImage1.jpg?w=1920&format=jpg';
import galleryImage2Srcset from '../assets/galleryImage2.jpg?w=640;1024;1920&format=webp&as=srcset';
import galleryImage2Fallback from '../assets/galleryImage2.jpg?w=1920&format=jpg';
import galleryImage3Srcset from '../assets/galleryImage3.jpg?w=640;1024;1920&format=webp&as=srcset';
import galleryImage3Fallback from '../assets/galleryImage3.jpg?w=1920&format=jpg';
import galleryImage6Srcset from '../assets/galleryImage6.jpg?w=640;1024;1920&format=webp&as=srcset';
import galleryImage6Fallback from '../assets/galleryImage6.jpg?w=1920&format=jpg';

const images = [
  { srcset: galleryImage1Srcset, src: galleryImage1Fallback },
  { srcset: galleryImage2Srcset, src: galleryImage2Fallback },
  { srcset: galleryImage3Srcset, src: galleryImage3Fallback },
  { srcset: galleryImage6Srcset, src: galleryImage6Fallback },
];

const HorizontalGallery = () => {
  return (
    <div className="border-2 border-jerry-green rounded-[40px] py-[5vw] pr-[3vw] pl-[27vw] bg-[#FAF7F2] flex gap-[3vw] w-[55vw] h-[30vh] ml-[-25vw] items-center justify-center mt-[12vh] min-[1480px]:w-[65vw] min-[1480px]:h-[35vh] min-[1480px]:py-[4vh] min-[1480px]:pr-[0vw] min-[1480px]:pl-[19vw] min-[1480px]:ml-[-20vw] min-[1480px]:gap-[2vw]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex-1 aspect-[3/4] bg-gray-200 rounded-[25px] relative overflow-hidden group min-[1480px]:flex-none min-[1480px]:h-full ${index >= 3 ? 'hidden min-[1480px]:block' : ''}`}
        >
           <img 
             src={image.src} 
             srcSet={image.srcset}
             sizes="(min-width: 1480px) 20vw, 30vw"
             alt={`Gallery ${index + 1}`} 
             className="w-full h-full object-cover" 
             loading="lazy"
           />
        </div>
      ))}
    </div>
  );
};

export default HorizontalGallery;
