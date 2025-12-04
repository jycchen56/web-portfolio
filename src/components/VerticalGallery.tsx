import galleryImage4Srcset from '../assets/galleryImage4.jpg?w=640;1024;1920&format=webp&as=srcset';
import galleryImage4Fallback from '../assets/galleryImage4.jpg?w=1920&format=jpg';
import galleryImage5Srcset from '../assets/galleryImage5.jpg?w=640;1024;1920&format=webp&as=srcset';
import galleryImage5Fallback from '../assets/galleryImage5.jpg?w=1920&format=jpg';

const VerticalGallery = () => {
  return (
    <div className="border-2 border-jerry-green rounded-[40px] py-[5vh] px-[2vw] bg-[#FAF7F2] flex flex-col gap-[2vw] w-[20vw] h-fit mt-[12vh] min-[1480px]:w-[16vw] min-[1480px]:py-[4vh] min-[1480px]:px-[1.6vw] min-[1480px]:gap-[1.6vw]">

      {/* Top: Horizontal Image (4x3) */}
      <div className="w-full aspect-[4/3] bg-gray-200 rounded-[25px] relative overflow-hidden group">
         <img 
           src={galleryImage5Fallback} 
           srcSet={galleryImage5Srcset}
           sizes="(min-width: 1480px) 16vw, 20vw"
           alt="Gallery Horizontal" 
           className="w-full h-full object-cover" 
           loading="lazy"
         />
      </div>

      {/* Bottom: Vertical Image (3x4) */}
      <div className="w-full aspect-[3/4] bg-gray-200 rounded-[25px] relative overflow-hidden group">
         <img 
           src={galleryImage4Fallback} 
           srcSet={galleryImage4Srcset}
           sizes="(min-width: 1480px) 16vw, 20vw"
           alt="Gallery Vertical" 
           className="w-full h-full object-cover" 
           loading="lazy"
         />
      </div>

    </div>
  );
};

export default VerticalGallery;
