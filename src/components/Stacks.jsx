import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiC } from 'react-icons/si';

const stacks = [
  { name: 'C', icon: <SiC className="text-[#A8B9CC]" />, color: 'bg-[#A8B9CC]/10 text-zinc-200 border-[#A8B9CC]/30' },
  { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" />, color: 'bg-[#00599C]/10 text-zinc-200 border-[#00599C]/30' },
  { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, color: 'bg-[#E34F26]/10 text-zinc-200 border-[#E34F26]/30' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, color: 'bg-[#1572B6]/10 text-zinc-200 border-[#1572B6]/30' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]" />, color: 'bg-[#F7DF1E]/10 text-zinc-200 border-[#F7DF1E]/30' },
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, color: 'bg-[#61DAFB]/10 text-zinc-200 border-[#61DAFB]/30' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, color: 'bg-[#06B6D4]/10 text-zinc-200 border-[#06B6D4]/30' },
  { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, color: 'bg-[#3776AB]/10 text-zinc-200 border-[#3776AB]/30' },
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
};

const Stacks = () => {
  return (
    <section className="py-24 relative bg-transparent" id="skills">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Stacks I Work With</h2>
          <div className="w-20 h-1 bg-zinc-700 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {stacks.map((stack) => (
            <motion.div
              key={stack.name}
              variants={itemVariant}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
              }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border ${stack.color} shadow-sm backdrop-blur-md transition-all cursor-default bg-zinc-900/50 border-white/5`}
            >
              <span className="text-2xl">{stack.icon}</span>
              <span className="font-semibold text-zinc-200">{stack.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stacks;
