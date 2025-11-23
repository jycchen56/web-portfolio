// src/components/Layout.tsx
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

import blob1 from '../assets/blob1.png';

// Define the blob configuration type
type BlobConfig = {
  base: string;
  wide?: string;
  ultra?: string;
  className?: string; // New property for positioning classes
};

// Map routes to blob configurations
// TODO: Replace placeholders with actual assets when available
const blobMap: Record<string, BlobConfig> = {
  '/': {
    base: blob1,
    className: "top-[-40vh] left-0", // Default position for Home
  },
  '/projects': {
    base: blob1,
    wide: blob1,
    ultra: blob1,
    className: "top-0 right-0", // Example position for Projects
  },
  '/creative': {
    base: blob1,
    wide: blob1,
    ultra: blob1,
    className: "top-[-20vh] left-[-10vw]", // Example position for Creative
  },
  '/about': {
    base: blob1,
    wide: blob1,
    ultra: blob1,
    className: "bottom-0 right-[-5vw]", // Example position for About
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Get the config for the current path, or fallback to Home ('/')
  const currentBlob = blobMap[location.pathname] || blobMap['/'];

  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden ${location.pathname === '/' ? 'overflow-y-hidden h-screen' : ''}`}>



      {/* LAYER 0: Solid Background Color */}
      <div className="fixed inset-0 bg-jerry-bg z-0" />

      {/* LAYER 1: The Blob */}
      <div className={`fixed w-full z-0 pointer-events-none ${currentBlob.className || 'top-[-40vh] left-0'}`}>
         <picture>
            {/* Ultrawide (>1920px) */}
            {currentBlob.ultra && <source media="(min-width: 1921px)" srcSet={currentBlob.ultra} />}
            {/* Widescreen (>1440px) */}
            {currentBlob.wide && <source media="(min-width: 1441px)" srcSet={currentBlob.wide} />}
            {/* Default / Laptop */}
            <img
              src={currentBlob.base}
              alt="Decoration"
              className="w-full h-auto min-h-[400px] object-cover object-top"
            />
         </picture>
      </div>

      {/* LAYER 2: Navbar */}
      <div className="fixed top-[4vh] left-1/2 -translate-x-1/2 z-50 w-full max-w-none flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
           <Navbar />
        </div>
      </div>

      {/* LAYER 3: Page Content */}
      <main className="relative z-10 w-full min-h-screen">
        {children}
      </main>

    </div>
  );
};

export default Layout;