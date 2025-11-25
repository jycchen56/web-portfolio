// src/pages/Home.tsx
import { motion } from 'framer-motion';
import circle1 from '../assets/circle1.png';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="h-screen w-full flex flex-col justify-center items-center text-jerry-green relative overflow-hidden bg-transparent"
    >

      {/* --- ANCHOR CENTER --- */}
      <div className="relative flex justify-center items-center w-0 h-0">

        {/* --- CENTER TEXT (Fixed Anchor) --- */}
        <div
          className="absolute z-20 flex justify-center items-center w-[100vw]"
        >
           <span
             className="text-jerry-blue font-black text-[1vw] uppercase tracking-[0.5em] bg-transparent"
             style={{ fontFamily: '"Inter", sans-serif', fontWeight: 900 }}
           >
             Designer & Developer
           </span>
        </div>

        {/* --- TOP ROW: JERRY --- */}
        {/* BASE (Laptop < 1480px): mb-[4vw]
            DESKTOP ( > 1480px):    min-[1480px]:mb-[3.5vw]

            ADJUSTMENT GUIDE:
            1. Laptop: Tweak 'mb-[4vw]' until it looks right on the laptop.
            2. Desktop: Tweak 'min-[1480px]:mb-[3.5vw]' until it looks right on the desktop.
               (Use a smaller number to pull Jerry down/reduce gap).
        */}
        <div className="absolute bottom-0 w-[100vw] text-center z-10 mb-[10vw] min-[1480px]:mb-[7vw]">
           <div className="relative inline-block">
             <p className="absolute top-[6vw] min-[1480px]:top-[5vw] -left-[0.5vw] font-serif text-[1vw]">
               20
             </p>
             <p className="font-serif text-[8vw] font-light leading-none">
               JERRY
             </p>
           </div>
        </div>

        {/* --- BOTTOM ROW: CHEN --- */}
        {/* If the bottom gap is also weird, you can do the same thing:
            mt-[4.2vw] min-[1480px]:mt-[4.0vw]
        */}
        <div className="absolute top-0 w-[100vw] text-center z-10 mt-[10vw]">
           <div className="relative inline-block">
             <p className="font-serif text-[8vw] font-light leading-none">
               CHEN
             </p>
             <p className="absolute bottom-[6vw] -right-[2.5vw] font-serif text-[1vw]">
               Plano, TX
             </p>
           </div>
        </div>

      </div>

      {/* --- FOOTER --- */}
      <div className="absolute bottom-[5%] left-[24%] right-[22%] flex flex-row justify-between items-center">
        <div className="flex flex-col items-start">
          <p className="font-serif text-[clamp(10px,1.2vw,18px)] leading-tight">
            Aspiring UI designer and Software Engineer
          </p>
          <p className="font-serif text-[clamp(10px,1.2vw,18px)] leading-tight -mt-[0.5vw]">
            Student at The University of Texas at Dallas
          </p>
        </div>
        <img src={circle1} className="w-[12vw] h-auto" alt="decoration" />
      </div>

    </motion.section>
  );
};

export default Home;