import React from 'react';
import Navbar from './Navbar';
import BackgroundBlobs from './BackgroundBlobs';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-900 text-white font-sans">
      
      {/* 1. BACKGROUND (Stays fixed/persistent) */}
      <div className="fixed inset-0 z-0">
        <BackgroundBlobs />
      </div>

      {/* 2. NAVIGATION (Stays fixed/persistent) */}
      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center">
        <Navbar />
      </div>

      {/* 3. PAGE CONTENT (Changes based on route) */}
      {/* We add padding-top so content doesn't hide behind the navbar */}
      <main className="relative z-10 w-full pt-32 px-6 max-w-7xl mx-auto">
        {children}
      </main>
      
    </div>
  );
};

export default Layout;
