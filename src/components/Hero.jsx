import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Mail } from 'lucide-react';
import { SiC, SiCplusplus, SiTailwindcss } from 'react-icons/si';
import { FaPython, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="hero">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-[1.2fr_0.8fr] md:grid-cols-2 gap-4 md:gap-16 items-center relative z-10 text-left">
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Available for opportunities
          </motion.div>
          <h1 className="text-2xl sm:text-4xl md:text-7xl font-extrabold mb-4 md:mb-10 leading-tight tracking-tight text-white">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Ayush Kumar Singh
            </span>
          </h1>
          <p className="text-zinc-400 text-[11px] sm:text-base md:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed font-medium mx-0">
            A passionate Computer Science student at SRM IST Chennai, crafting code and exploring the endless possibilities of technology. Skilled in <span className="inline-flex items-center gap-1.5 md:gap-3 mx-1 md:mx-2 text-[14px] md:text-[22px] relative top-0.5 md:top-1.5"><SiC className="text-[#A8B9CC] drop-shadow-md hover:scale-110 transition-transform"/><SiCplusplus className="text-[#00599C] drop-shadow-md hover:scale-110 transition-transform"/><FaPython className="text-[#3776AB] drop-shadow-md hover:scale-110 transition-transform"/><FaJsSquare className="text-[#F7DF1E] drop-shadow-md hover:scale-110 transition-transform"/></span> and modern web technologies including <span className="inline-flex items-center gap-1.5 md:gap-3 mx-1 md:mx-2 text-[14px] md:text-[22px] relative top-0.5 md:top-1.5"><FaReact className="text-[#61DAFB] drop-shadow-md hover:scale-110 transition-transform"/><FaNodeJs className="text-[#339933] drop-shadow-md hover:scale-110 transition-transform"/><SiTailwindcss className="text-[#06B6D4] drop-shadow-md hover:scale-110 transition-transform"/></span>. Currently diving deep into full-stack development, Data Structures & Algorithms, backend architecture with REST APIs, and the exciting world of AI/ML. Always eager to learn, build, and collaborate on real-world projects that make a difference.
          </p>

          <div className="grid grid-cols-2 gap-2 md:gap-8 mb-8 border-t border-zinc-800/80 pt-6 md:pt-8 max-w-lg mx-0">
            <div className="text-left">
              <h3 className="text-pink-500 text-[8px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-4 drop-shadow-md">Education</h3>
              <div className="mb-2 md:mb-4">
                <p className="text-white font-bold text-[11px] md:text-[15px] mb-0.5">SRM IST KTR</p>
                <p className="text-zinc-500 text-[9px] md:text-xs leading-none">B.Tech CSE Core</p>
              </div>
              <div>
                <p className="text-white font-bold text-[11px] md:text-[15px] mb-0.5">Nirmala Convent</p>
                <p className="text-zinc-500 text-[9px] md:text-[11px] leading-snug">Completed Sec.</p>
              </div>
            </div>
            <div className="text-left border-l border-zinc-800/80 pl-3 md:pl-0 md:border-none">
              <h3 className="text-pink-500 text-[8px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-4 drop-shadow-md">Languages</h3>
              <div className="mb-2 md:mb-4">
                <p className="text-white font-bold text-[11px] md:text-[15px] mb-0.5">English, Hindi</p>
                <p className="text-zinc-500 text-[9px] md:text-xs leading-none">Fluent</p>
              </div>
              <div>
                <p className="text-white font-bold text-[11px] md:text-[15px] mb-0.5">French</p>
                <p className="text-zinc-500 text-[9px] md:text-xs leading-none">Partially</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
            <Link to="/resume" className="flex items-center justify-center gap-2 px-3 py-3 md:px-6 md:py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl md:rounded-[2rem] font-bold text-[11px] sm:text-sm md:text-base transition-all shadow-xl hover:shadow-blue-500/25">
              <Download size={14} className="md:w-[18px] md:h-[18px]"/>
              Resume
            </Link>
            <Link to="/contact" className="flex items-center justify-center gap-2 px-3 py-3 md:px-6 md:py-4 bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-xl md:rounded-[2rem] font-bold text-[11px] sm:text-sm md:text-base transition-all border border-zinc-800 shadow-sm">
              <Mail size={14} className="md:w-[18px] md:h-[18px]"/>
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center perspective-[1000px] mt-10 md:mt-0"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[120px] h-[120px] sm:w-[280px] sm:h-[280px] md:w-[450px] md:h-[450px] group z-10 flex items-center justify-center cursor-pointer"
          >
            {/* The Outer Circle Container */}
            <div className="absolute inset-0 rounded-full flex items-center justify-center p-0.5 md:p-1 group-hover:scale-[1.02] transition-transform duration-500">
              
              {/* Spinning Gradient Glow Border */}
              <div className="absolute inset-[-2px] md:inset-[-4px] rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 blur-[4px] md:blur-[8px] transition-opacity duration-500"></div>
              <div className="absolute inset-[-0.5px] md:inset-[-1px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-[spin_4s_linear_infinite] opacity-80 z-0"></div>
              <div className="absolute inset-[1.5px] md:inset-[3px] rounded-full bg-zinc-950 z-0"></div>

              {/* The Inner Image Container */}
              <div className="w-[85%] h-[85%] rounded-full overflow-hidden relative z-10 border-2 md:border-4 border-transparent bg-zinc-900 shadow-2xl">
                <img 
                  src="/profile.png" 
                  alt="Ayush"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-110" 
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Developer Tag - Hidden or simplified on smallest mobile */}
            <motion.div 
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-1 -right-1 sm:-bottom-4 sm:-right-2 md:bottom-10 md:-right-8 bg-zinc-900/90 backdrop-blur-md px-1.5 py-1 md:px-5 md:py-4 rounded-lg md:rounded-2xl shadow-xl flex items-center gap-1.5 md:gap-4 border border-zinc-700"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30 text-[8px] sm:text-xs md:text-base">
                {'</>'}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-white font-bold leading-tight text-[10px] md:text-sm">Developer</p>
                <p className="text-zinc-400 text-[8px] md:text-xs">In Training</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
