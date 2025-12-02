// src/components/Layout.tsx
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

import homeBlob from '../assets/homeBlob.png';
import projectsBlob from '../assets/projectsBlob.png';

// Define the blob configuration type
type BlobConfig = {
  base?: string;
  wide?: string;
  ultra?: string;
  className?: string; // New property for positioning classes
  customBackground?: string; // CSS background value (e.g., gradient)
};

// Map routes to blob configurations
// TODO: Replace placeholders with actual assets when available
const blobMap: Record<string, BlobConfig> = {
  '/': {
    base: homeBlob,
    className: "top-[-20vh] min-[1480px]:top-[-30vh] left-0", // Default position for Home
  },
  '/projects': {
    base: projectsBlob,
    wide: projectsBlob,
    ultra: projectsBlob,
    className: "top-0 right-0", // Example position for Projects
  },
  '/creative': {
    customBackground: "linear-gradient(180deg, #E1C8F1 0%, #5E45B1 100%)",
  },
  '/about': {
    base: homeBlob,
    wide: homeBlob,
    ultra: homeBlob,
    className: "bottom-0 right-[-5vw]", // Example position for About
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Get the config for the current path, or fallback to Home ('/')
  const normalizedPath = location.pathname.endsWith('/') && location.pathname !== '/'
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const currentBlob = blobMap[normalizedPath] || blobMap['/'];

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden ${location.pathname === '/' ? 'overflow-y-hidden h-screen' : ''}`}
      style={currentBlob.customBackground ? { background: currentBlob.customBackground } : undefined}
    >

      {/* LAYER 0: Solid Background Color - Only render if no custom background */}
      {!currentBlob.customBackground && (
        <div className="fixed inset-0 bg-jerry-bg z-0" />
      )}

      {/* LAYER 1: The Blob (Only if NO custom background) */}
      {!currentBlob.customBackground && (
        <div className={`fixed w-full z-0 pointer-events-none ${currentBlob.className || 'top-[-40vh] left-0'}`}>
           <picture>
              {/* Ultrawide (>1920px) */}
              {currentBlob.ultra && <source media="(min-width: 1921px)" srcSet={currentBlob.ultra} />}
              {/* Widescreen (>1440px) */}
              {currentBlob.wide && <source media="(min-width: 1441px)" srcSet={currentBlob.wide} />}
              {/* Default / Laptop */}
              {currentBlob.base && (
                <img
                  src={currentBlob.base}
                  alt="Decoration"
                  className="w-full h-auto min-h-[400px] object-cover object-top"
                  loading="eager"
                  decoding="sync"
                />
              )}
           </picture>
        </div>
      )}
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