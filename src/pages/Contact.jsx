import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-transparent relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get in Touch
          </h1>
        </motion.div>

        <div className="flex justify-center mt-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            <div className="bg-zinc-900/50 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-lg flex flex-col gap-8 text-center items-center">
              <h3 className="text-3xl font-bold mb-2 text-white tracking-tight">Connect With Me</h3>
              <p className="text-zinc-400 max-w-lg">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
                <a href="mailto:ayushrktsingh2006@gmail.com" className="flex items-center justify-center gap-4 text-zinc-400 hover:text-white transition-all group bg-zinc-950/50 hover:bg-zinc-800/80 border border-zinc-800 hover:border-emerald-500/50 py-5 px-6 rounded-2xl">
                  <Mail size={24} />
                  <span className="font-semibold text-zinc-200 text-lg">Email Me</span>
                </a>

                <a href="https://www.linkedin.com/in/ayush-kumar-singh-598916379/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 text-zinc-400 hover:text-blue-400 transition-all group bg-zinc-950/50 hover:bg-zinc-800/80 border border-zinc-800 hover:border-blue-500/50 py-5 px-6 rounded-2xl">
                  <Linkedin size={24} />
                  <span className="font-semibold text-zinc-200 text-lg">LinkedIn</span>
                </a>

                <a href="https://github.com/Ayush-ui309" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 text-zinc-400 hover:text-white transition-all group bg-zinc-950/50 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-500/50 py-5 px-6 rounded-2xl">
                  <Github size={24} />
                  <span className="font-semibold text-zinc-200 text-lg">GitHub</span>
                </a>

                <a href="https://x.com/10a_ayush47365" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 text-zinc-400 hover:text-white transition-all group bg-zinc-950/50 hover:bg-zinc-800/80 border border-zinc-800 hover:border-white/50 py-5 px-6 rounded-2xl">
                  <Twitter size={24} />
                  <span className="font-semibold text-zinc-200 text-lg">Twitter (X)</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
