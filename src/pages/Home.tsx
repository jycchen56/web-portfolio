// src/pages/Home.tsx
import { motion } from 'framer-motion';
import circle1 from '../assets/circle1.png';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-screen w-full flex flex-col justify-center items-center text-jerry-green relative overflow-hidden bg-transparent"
    >

      {/* --- CENTER TYPOGRAPHY STACK --- */}
      <div className="relative flex flex-col items-center">

        {/* Top Row: "20" and "JERRY" */}
        <div className="relative">
          {/* The "20" */}
          <span className="absolute -top-[-3vw] -left-[0.5vw] font-serif text-[1vw]">
            20
          </span>
          <h1 className="font-serif text-[8vw] leading-[0.8] font-light">
            JERRY
          </h1>
        </div>

        {/* Middle Row: "DESIGNER & DEVELOPER" */}
        <div className="text-jerry-blue font-sans font-black text-[1vw] uppercase tracking-[0.4em] -mt-[12vh] -mb-[9vh]" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 900 }}>
          Designer & Developer
        </div>

        {/* Bottom Row: "CHEN" and "Plano, TX" */}
        <div className="relative">
          <h1 className="font-serif text-[8vw] leading-[0.8] font-light">
            CHEN
          </h1>
          {/* The "Plano, TX" */}
          <span className="absolute -bottom-[-4.5vw] -right-[1.5vw] font-serif text-[1vw]">
            Plano, TX
          </span>
        </div>

      </div>

      {/* --- BOTTOM LEFT FOOTER --- */}
      <div className="absolute bottom-[2vh] left-[24vw] right-[22vw] flex flex-row justify-between items-center">
        <div className="flex flex-col items-start">
          <p className="font-serif text-[clamp(12px,1.1vw,18px)] leading-tight">
            Aspiring UI designer and Software Engineer
          </p>
          <p className="font-serif text-[clamp(12px,1.1vw,18px)] leading-tight -mt-[2vh]">
            Student at The University of Texas at Dallas
          </p>
        </div>
        <img src={circle1} className="w-[12vw] h-auto" alt="decoration" />
      </div>

    </motion.section>
  );
};

export default Home;