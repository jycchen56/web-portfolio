// src/components/LoadingScreen.tsx
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        backgroundColor: '#FAF7F2', // jerry-bg
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="text-jerry-blue font-serif text-2xl tracking-widest"
      >
        LOADING
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
