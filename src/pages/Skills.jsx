import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 90 }, { name: "C++", level: 85 }, { name: "Python", level: 80 },
      { name: "Java", level: 75 }, { name: "JavaScript", level: 85 }, { name: "HTML", level: 95 },
      { name: "CSS", level: 90 }
    ]
  },
  {
    title: "💻 Frameworks / Development",
    skills: [
      { name: "React", level: 85 }, { name: "Vite", level: 80 }, { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 75 }, { name: "Node.js", level: 80 }
    ]
  },
  {
    title: "🗄️ Database",
    skills: [
      { name: "Supabase", level: 75 }
    ]
  },
  {
    title: "🎨 Design",
    skills: [
      { name: "Figma", level: 70 }, { name: "Dribbble", level: 60 }
    ]
  },
  {
    title: "🤖 ML / DL",
    skills: [
      { name: "NumPy", level: 80 }, { name: "Pandas", level: 80 }
    ]
  },
  {
    title: "🌐 Hosting / Deployment",
    skills: [
      { name: "Vercel", level: 85 }, { name: "Netlify", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-transparent relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Technical Skills
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Technologies and tools I am exploring and building my skills in.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={category.title}>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold border-b border-zinc-800 pb-4 mb-8 text-zinc-100"
              >
                {category.title}
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between mb-3">
                      <span className="font-semibold text-zinc-200">{skill.name}</span>
                      <span className="text-zinc-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-900/80 border border-zinc-800 rounded-full h-2.5 shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
