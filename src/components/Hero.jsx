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
    <section className="min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
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
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 md:mb-10 leading-tight tracking-tight text-white">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Ayush Kumar Singh
            </span>
          </h1>
          <p className="text-zinc-400 text-lg mb-8 max-w-3xl leading-relaxed font-medium">
            A passionate Computer Science student at SRM IST Chennai, crafting code and exploring the endless possibilities of technology. Skilled in <span className="inline-flex items-center gap-3 mx-2 text-[22px] relative top-1.5"><SiC className="text-[#A8B9CC] drop-shadow-md hover:scale-110 transition-transform"/><SiCplusplus className="text-[#00599C] drop-shadow-md hover:scale-110 transition-transform"/><FaPython className="text-[#3776AB] drop-shadow-md hover:scale-110 transition-transform"/><FaJsSquare className="text-[#F7DF1E] drop-shadow-md hover:scale-110 transition-transform"/></span> and modern web technologies including <span className="inline-flex items-center gap-3 mx-2 text-[22px] relative top-1.5"><FaReact className="text-[#61DAFB] drop-shadow-md hover:scale-110 transition-transform"/><FaNodeJs className="text-[#339933] drop-shadow-md hover:scale-110 transition-transform"/><SiTailwindcss className="text-[#06B6D4] drop-shadow-md hover:scale-110 transition-transform"/></span>. Currently diving deep into full-stack development, Data Structures & Algorithms, backend architecture with REST APIs, and the exciting world of AI/ML. Always eager to learn, build, and collaborate on real-world projects that make a difference.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10 border-t border-zinc-800/80 pt-8 max-w-lg">
            <div>
              <h3 className="text-pink-500 text-xs font-bold tracking-widest uppercase mb-4 drop-shadow-md">Education</h3>
              <div className="mb-4">
                <p className="text-white font-bold text-[15px] mb-0.5">SRM IST KTR</p>
                <p className="text-zinc-500 text-xs leading-none">B.Tech CSE Core · Chennai</p>
              </div>
              <div>
                <p className="text-white font-bold text-[15px] mb-1 leading-tight">Nirmala Convent High School</p>
                <p className="text-zinc-500 text-[11px] leading-snug">Completed Higher & Secondary,<br/>Renukoot, Uttar Pradesh</p>
              </div>
            </div>
            <div>
              <h3 className="text-pink-500 text-xs font-bold tracking-widest uppercase mb-4 drop-shadow-md">Languages</h3>
              <div className="mb-4">
                <p className="text-white font-bold text-[15px] mb-0.5">English, Hindi</p>
                <p className="text-zinc-500 text-xs leading-none">Fluent</p>
              </div>
              <div>
                <p className="text-white font-bold text-[15px] mb-0.5">French</p>
                <p className="text-zinc-500 text-xs leading-none">Partially</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/resume" className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl font-medium transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1">
              <Download size={18} />
              Check My Resume
            </Link>
            <Link to="/contact" className="flex items-center gap-2 px-6 py-3.5 bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-2xl font-medium transition-all border border-zinc-800 hover:border-zinc-700 shadow-sm hover:-translate-y-1">
              <Mail size={18} />
              Contact Me
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
            className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] group z-10 flex items-center justify-center cursor-pointer"
          >
            {/* The Outer Circle Container */}
            <div className="absolute inset-0 rounded-full flex items-center justify-center p-1 group-hover:scale-[1.02] transition-transform duration-500">
              
              {/* Spinning Gradient Glow Border */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500 animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 blur-[8px] transition-opacity duration-500"></div>
              <div className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-[spin_4s_linear_infinite] opacity-80 z-0"></div>
              <div className="absolute inset-[3px] rounded-full bg-zinc-950 z-0"></div>

              {/* The Inner Image Container */}
              <div className="w-[75%] h-[75%] rounded-full overflow-hidden relative z-10 border-4 border-transparent bg-zinc-900 shadow-2xl">
                <img 
                  src="/profile.png" 
                  alt="Ayush"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-110" 
                />
                {/* Inner shadow overlay for depth */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Developer Tag */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 right-0 md:-right-8 bg-zinc-900/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-zinc-700"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30">
                {'</>'}
              </div>
              <div>
                <p className="text-white font-bold leading-tight">Developer</p>
                <p className="text-zinc-400 text-sm">In Training</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
