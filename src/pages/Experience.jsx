import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedNumber = ({ from = 0, to, suffixClassName = "", suffix = "", className = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.round(value).toString();
        }
      },
    });
    return () => controls.stop();
  }, [from, to, isInView]);

  return (
    <span className={`inline-flex items-center justify-center font-bold px-1.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-700 mx-1 text-sm shadow-inner ${className}`}>
      <span ref={nodeRef}>{from}</span>
      <span className={suffixClassName}>{suffix}</span>
    </span>
  );
};

const experienceData = [
  {
    role: "Python Full Stack Developer Intern",
    company: "EduSkills Foundation (AICTE)",
    location: "Remote",
    duration: "January 2026 – March 2026",
    description: (
      <ul className="list-disc pl-5 mt-2 space-y-2 text-zinc-400">
        <li>Built full-stack web applications using HTML, CSS, JavaScript, Tailwind CSS, React.js, Node.js, Next.js, Python, Django, Flask</li>
        <li>Worked on REST APIs, backend integration, and version control with Git & GitHub flow</li>
        <li>Learned end-to-end application architecture and agile development workflow</li>
      </ul>
    ),
    type: "Internship"
  }
];

const achievementsData = [
  {
    role: "SOAR AI Certification",
    company: "Skill India Digital Hub (NCVT), Supported by Microsoft",
    location: "Online",
    duration: "Completed",
    description: (
      <ul className="list-disc pl-5 mt-2 space-y-2 text-zinc-400">
        <li>Completed AI, ML, Deep Learning, and data processing training</li>
        <li>Worked with Python, NumPy, Pandas for AI model development</li>
        <li>Learned Computer Vision basics, NLP fundamentals, and AI application pipelines</li>
      </ul>
    ),
    type: "Certification"
  },
  {
    role: "Competitive Programmer & OS Contributor",
    company: "GitHub | LeetCode | GeeksforGeeks | CodeChef",
    location: "Global",
    duration: "Ongoing",
    description: (
      <ul className="list-disc pl-5 mt-2 space-y-3 text-zinc-400">
        <li>Solved <AnimatedNumber to={150} suffix="+" className="text-blue-400" /> coding problems on LeetCode, GeeksforGeeks, and CodeChef</li>
        <li>Achieved Top <AnimatedNumber to={150} className="text-yellow-400" /> finishes in international coding contests</li>
        <li>Participated in <AnimatedNumber to={6} suffix="+" className="text-pink-400" /> hackathons, delivering solutions under competitive time constraints</li>
        <li>Active open-source contributor on GitHub with a consistent commit history</li>
        <li>Completed <AnimatedNumber to={3} suffix="+" className="text-emerald-400" /> professional certifications in full-stack development and AI</li>
        <li>Recognized for proficient problem-solving skills and algorithmic expertise</li>
      </ul>
    ),
    type: "Achievement"
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-transparent relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Experience & Achievements
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A timeline of my professional journey, certifications, and technical accomplishments.
          </p>
        </motion.div>

        {/* --- EXPERIENCE SECTION --- */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold border-b border-zinc-800 pb-3 mb-8 text-white uppercase tracking-wider text-sm"
          >
            Experience
          </motion.h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
            {experienceData.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline Node */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-emerald-400">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
                </div>
                
                {/* Card Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 shadow-xl transition-all group-hover:border-emerald-500/20 group-hover:bg-zinc-800/50 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.05)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-xl text-white tracking-tight">{exp.role}</h3>
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-zinc-300 font-medium mb-1">{exp.company}</div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-4 font-medium uppercase tracking-wider">
                    <span>{exp.duration}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="text-zinc-400 leading-relaxed text-[15px]">{exp.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- ACHIEVEMENTS SECTION --- */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold border-b border-zinc-800 pb-3 mb-8 text-white uppercase tracking-wider text-sm"
          >
            Achievements & Certifications
          </motion.h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
            {achievementsData.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline Node */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-blue-400">
                  <span className="w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
                </div>
                
                {/* Card Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 shadow-xl transition-all group-hover:border-blue-500/20 group-hover:bg-zinc-800/50 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.05)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-xl text-white tracking-tight">{exp.role}</h3>
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-zinc-300 font-medium mb-1">{exp.company}</div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-4 font-medium uppercase tracking-wider">
                    <span>{exp.duration}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="text-zinc-400 leading-relaxed text-[15px]">{exp.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
