import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99998,
        backgroundColor: '#FAF7F2', // jerry-bg
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-start w-full">
        <h1 className="font-display text-[8vw] leading-none text-jerry-green select-none pl-[10vw]">
          Loading{dots}
        </h1>

        {/* Loading Bar */}
        <div className="w-full h-[2vh] bg-[#E5E5E5] overflow-hidden relative">
          <motion.div
            className="h-full"
            style={{ backgroundColor: '#06272A' }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
