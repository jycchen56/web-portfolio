import { motion } from 'framer-motion';
import HorizontalGallery from '../components/HorizontalGallery';
import VerticalGallery from '../components/VerticalGallery';
import yellowCircle from '../assets/yellowCircle.png';
import redCircle from '../assets/redCircle.png';

const Creative = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="h-screen w-full flex flex-row justify-start items-center text-jerry-green relative overflow-hidden bg-transparent"
    >
      <div className="flex flex-row items-start gap-[8vw]">
        <div className="flex flex-col gap-[4vh] relative">
          <HorizontalGallery />
          <img
            src={yellowCircle}
            alt="Yellow Circle"
            className="absolute top-[18vh] w-[40vw] -z-10"
          />
          <div className="flex flex-col w-[55vw] ml-[-25vw] pl-[27vw] pr-[2vw]">
            <h1 className="text-[3vw] font-display text-jerry-green leading-[8vh] ml-[28vw] mt-[-2vh]">
              The Pursuit of Visual<br />Identity
            </h1>
            <p className="text-[2vw] text-right leading-[4vh] mt-[-10vh]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 300, color: '#FAF7F2' }}>
              A collection<br />
              of my life's<br />
              photography, as I<br />
              search for my<br />
              identity as an artist.
            </p>
          </div>
        </div>
        <VerticalGallery />
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
