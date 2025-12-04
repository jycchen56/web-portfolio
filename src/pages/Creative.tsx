import { motion } from 'framer-motion';
import HorizontalGallery from '../components/HorizontalGallery';
import VerticalGallery from '../components/VerticalGallery';
import yellowCircle from '../assets/yellowCircle.png';
import redCircle from '../assets/redCircle.png';

const Creative = () => {
  // Animation Variants
  const horizontalGalleryVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 }
    }
  };

  const verticalGalleryVariant = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 1.0 }
    }
  };

  const textVariant = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 1.8 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="h-screen w-full flex flex-row justify-start items-center text-jerry-green relative overflow-hidden bg-transparent"
    >
      <div className="flex flex-row items-start gap-[8vw]">
        <div className="flex flex-col gap-[4vh] relative">
          <motion.div variants={horizontalGalleryVariant}>
            <HorizontalGallery />
          </motion.div>
          <img
            src={yellowCircle}
            alt="Yellow Circle"
            className="absolute top-[18vh] min-[1480px]:top-[8vh] w-[40vw] -z-10"
          />
          <motion.div
            variants={textVariant}
            className="flex flex-col w-[55vw] ml-[-25vw] pl-[27vw] pr-[2vw] min-[1480px]:w-[44vw] min-[1480px]:ml-[-5vw] min-[1480px]:pl-[22vw] min-[1480px]:pr-[0vw]"
          >
            <h1 className="text-[3vw] font-display text-jerry-green leading-[8vh] ml-[28vw] mt-[-2vh] min-[1480px]:text-[2.4vw] min-[1480px]:ml-[22.4vw]">
              The Pursuit of Visual<br />Identity
            </h1>
            <p className="text-[2vw] text-right leading-[4vh] mt-[-10vh] min-[1480px]:text-[1.6vw]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 300, color: '#FAF7F2' }}>
              A collection<br />
              of my life's<br />
              photography, as I<br />
              search for my<br />
              identity as an artist.
            </p>
          </motion.div>
        </div>
        <motion.div variants={verticalGalleryVariant}>
          <VerticalGallery />
        </motion.div>
      </div>

      {/* Red Circle - Bottom Right */}
      <img
        src={redCircle}
        alt="Red Circle"
        className="absolute bottom-[-10vh] right-[0vw] w-[30vw] -z-10"
      />
    </motion.section>
  );
};

export default Creative;
