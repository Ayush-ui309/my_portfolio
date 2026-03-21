import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-zinc-950 min-h-screen text-zinc-50 flex flex-col font-sans relative overflow-x-hidden">
        {/* Colorful Abstract Background Blurs matching reference */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Top Left Soft Blue */}
          <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/20 mix-blend-screen" style={{ filter: "blur(120px)" }}></div>
          {/* Top Right Soft Rose/Pink */}
          <div className="absolute top-[0%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-rose-600/20 mix-blend-screen" style={{ filter: "blur(120px)" }}></div>
          {/* Bottom Center Soft Purple/Peach */}
          <div className="absolute -bottom-[20%] left-[10%] w-[80vw] h-[80vw] rounded-full bg-purple-600/20 mix-blend-screen" style={{ filter: "blur(140px)" }}></div>
        </div>

        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
