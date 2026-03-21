import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8 relative z-10" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Identity Box */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 inline-block tracking-tight">
              Ayush Kumar Singh
            </h2>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              Building interactive and performance-optimized digital experiences. 
              Always eager for new challenges and collaborations.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:-translate-y-1">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ayush-kumar-singh-598916379/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/10a_ayush47365" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 transition-all hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="mailto:ayush@example.com" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 gap-8 md:pl-12">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-zinc-400 hover:text-white transition-colors font-medium">Home</Link></li>
                <li><Link to="/resume" className="text-zinc-400 hover:text-white transition-colors font-medium">Resume</Link></li>
                <li><Link to="/skills" className="text-zinc-400 hover:text-white transition-colors font-medium">Skills</Link></li>
                <li><Link to="/education" className="text-zinc-400 hover:text-white transition-colors font-medium">Education</Link></li>
                <li><Link to="/experience" className="text-zinc-400 hover:text-white transition-colors font-medium">Experience & Achievements</Link></li>
                <li><Link to="/contact" className="text-zinc-400 hover:text-white transition-colors font-medium">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm font-medium">
            &copy; 2026 Ayush Kumar Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
