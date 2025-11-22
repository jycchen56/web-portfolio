import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import NoiseOverlay from './components/NoiseOverlay';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Creative from './pages/Creative';
import About from './pages/About';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <>
      <NoiseOverlay />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default App;
