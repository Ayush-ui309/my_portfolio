import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6 bg-transparent relative z-10 flex flex-col items-center">
      <div className="container mx-auto max-w-5xl h-full flex flex-col">
        {/* Header Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">
              My Resume
            </h1>
            <p className="text-zinc-400 text-lg">
              View my professional track record below or download the PDF.
            </p>
          </div>
          
          <a 
            href="/resume.pdf" 
            download="Ayush_Kumar_Singh_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl font-bold transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
          >
            <Download size={20} />
            Download PDF
          </a>
        </motion.div>

        {/* Embedded HTML Viewer Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-grow w-full bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-xl md:rounded-[2rem] shadow-2xl relative flex flex-col items-center justify-start overflow-hidden"
          style={{ height: '70vh', minHeight: '500px' }}
        >
          {/* Top Bar for Glassmorphic styling */}
          <div className="w-full h-10 md:h-12 bg-zinc-950/80 border-b border-white/5 flex items-center px-4 gap-2 absolute top-0 left-0 z-10">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <p className="text-zinc-500 text-xs font-mono ml-4">resume.html</p>
          </div>
          
          {/* Iframe displaying the provided exact HTML design */}
          <div className="w-full h-full pt-12 bg-[#fff] overflow-y-auto overflow-x-hidden relative">
            <iframe 
              src="/resume.html" 
              title="Resume HTML Viewer"
              className="w-full h-full border-none pointer-events-auto"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
