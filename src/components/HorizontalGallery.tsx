import galleryImage1 from '../assets/galleryImage1.jpg';
import galleryImage2 from '../assets/galleryImage2.jpg';
import galleryImage3 from '../assets/galleryImage3.jpg';
import galleryImage6 from '../assets/galleryImage6.jpg';

const images = [galleryImage1, galleryImage2, galleryImage3, galleryImage6];

const HorizontalGallery = () => {
  return (
    <div className="border-2 border-jerry-green rounded-[40px] py-[5vw] pr-[3vw] pl-[27vw] bg-[#FAF7F2] flex gap-[3vw] w-[55vw] h-[30vh] ml-[-25vw] items-center justify-center mt-[12vh] min-[1480px]:w-[65vw] min-[1480px]:h-[35vh] min-[1480px]:py-[4vh] min-[1480px]:pr-[0vw] min-[1480px]:pl-[19vw] min-[1480px]:ml-[-20vw] min-[1480px]:gap-[2vw]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex-1 aspect-[3/4] bg-gray-200 rounded-[25px] relative overflow-hidden group min-[1480px]:flex-none min-[1480px]:h-full ${index >= 3 ? 'hidden min-[1480px]:block' : ''}`}
        >
           <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default HorizontalGallery;
