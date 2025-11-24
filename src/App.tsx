import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import NoiseOverlay from './components/NoiseOverlay';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Creative from './pages/Creative';
import About from './pages/About';
import './App.css';

// Assets to preload
import homeBlob from './assets/homeBlob.png';
import circle1 from './assets/circle1.png';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePaths = [homeBlob, circle1];

      const loadPromises = imagePaths.map((path) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = path;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(loadPromises);
        // Add a small delay to ensure smooth transition even if fast load
        setTimeout(() => setIsLoading(false), 2000);
      } catch (error) {
        console.error("Failed to load images", error);
        setIsLoading(false); // Proceed anyway on error
      }
    };

    preloadImages();
  }, []);

  return (
    <>
      <NoiseOverlay />

      <Layout>
        {!isLoading && (
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/creative" element={<Creative />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        )}
      </Layout>

      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
    </>

  );
}

export default App;
