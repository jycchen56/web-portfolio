import galleryImage4 from '../assets/galleryImage4.jpg';
import galleryImage5 from '../assets/galleryImage5.jpg';

const VerticalGallery = () => {
  return (
    <div className="border-2 border-jerry-green rounded-[40px] py-[5vh] px-[2vw] bg-[#FAF7F2] flex flex-col gap-[2vw] w-[20vw] h-fit mt-[12vh] min-[1480px]:w-[16vw] min-[1480px]:py-[4vh] min-[1480px]:px-[1.6vw] min-[1480px]:gap-[1.6vw]">

      {/* Top: Horizontal Image (4x3) */}
      <div className="w-full aspect-[4/3] bg-gray-200 rounded-[25px] relative overflow-hidden group">
         <img src={galleryImage5} alt="Gallery Horizontal" className="w-full h-full object-cover" />
      </div>

      {/* Bottom: Vertical Image (3x4) */}
      <div className="w-full aspect-[3/4] bg-gray-200 rounded-[25px] relative overflow-hidden group">
         <img src={galleryImage4} alt="Gallery Vertical" className="w-full h-full object-cover" />
      </div>

    </div>
  );
};

export default VerticalGallery;
