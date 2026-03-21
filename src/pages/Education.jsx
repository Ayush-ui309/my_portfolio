import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Counter = ({ from, to, suffix }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.floor(value);
        }
      },
    });
    return () => controls.stop();
  }, [from, to, isInView]);

  return (
    <div className="flex items-center text-xl font-bold tracking-tight text-white gap-0.5 mt-0.5">
      <span ref={nodeRef}>{from}</span>
      <span className="text-white/80">{suffix}</span>
    </div>
  );
};

const educationData = [
  {
    degree: "Bachelor of Technology",
    institution: "SRM Institute of Science and Technology (SRM IST)",
    location: "Chennai, India",
    duration: "2025 - 2029",
    description: "Focusing on core computer science subjects, algorithms, data structures, and modern web technologies. Participating in active coding clubs and hackathons.",
    status: "Currently Pursuing"
  },
  {
    degree: "Higher & Secondary Education",
    institution: "Nirmala Convent High School",
    location: "Renukoot, Sonbhadra, UP",
    duration: "2022 - 2024",
    description: "Completed 10th and 12th standard with excellent academic records.",
    status: "Completed",
    score10: 91,
    score12: 79
  }
];

const Education = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-transparent relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            My Education
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            My academic journey and institutional background.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0">
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="mb-12 pl-8 md:pl-12 relative"
            >
              <div className="absolute -left-[21px] bg-zinc-950 p-2 rounded-full border border-zinc-700 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <GraduationCap className="text-blue-400" size={20} />
              </div>
              
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 hover:border-white/10 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight">{edu.degree}</h3>
                    <h4 className="text-lg text-zinc-400 font-semibold mt-1">{edu.institution}</h4>
                  </div>
                  <div className="inline-flex px-4 py-1.5 bg-zinc-800 text-zinc-300 rounded-full text-sm font-semibold border border-zinc-700 whitespace-nowrap">
                    {edu.status}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-5 mb-6 text-zinc-400 text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <p className="text-zinc-300 leading-relaxed mb-1">
                  {edu.description}
                </p>
                
                {edu.score10 && (
                  <div className="flex gap-10 mt-5 pt-5 border-t border-zinc-800/60">
                    <div>
                      <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-bold">10th Score</span>
                      <Counter from={0} to={edu.score10} suffix="%" />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-bold">12th Score</span>
                      <Counter from={0} to={edu.score12} suffix="%" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
