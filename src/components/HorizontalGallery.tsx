import galleryImage1 from '../assets/galleryImage1.jpg';
import galleryImage2 from '../assets/galleryImage2.jpg';
import galleryImage3 from '../assets/galleryImage3.jpg';

const images = [galleryImage1, galleryImage2, galleryImage3];

const HorizontalGallery = () => {
  return (
    <div className="border-2 border-jerry-green rounded-[40px] py-[5vw] pr-[3vw] pl-[27vw] bg-[#FAF7F2] flex gap-[3vw] w-[55vw] h-[30vh] ml-[-25vw] items-center justify-center mt-[12vh]">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-1 aspect-[3/4] bg-gray-200 rounded-[25px] relative overflow-hidden group"
        >
           <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default HorizontalGallery;
