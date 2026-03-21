import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ from, to, suffixClassName, suffix }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });

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
    <div className="flex items-center text-4xl md:text-5xl font-bold text-white tracking-tighter">
      <span ref={nodeRef}>{from}</span>
      <span className={suffixClassName}>{suffix}</span>
    </div>
  );
};

const stats = [
  { label: 'Problems Solved', value: 150, suffix: '+', color: 'text-zinc-400' },
  { label: 'Certifications', value: 3, suffix: '+', color: 'text-zinc-400' },
  { label: 'Hackathons Done', value: 6, suffix: '+', color: 'text-zinc-400' },
  { label: 'Projects Built', value: 2, suffix: '+', color: 'text-zinc-400' },
  { label: 'Years of Coding', value: 2, suffix: '+', color: 'text-zinc-400' },
  { label: 'Languages Known', value: 3, suffix: '+', color: 'text-zinc-400' },
];

const Stats = () => {
  return (
    <section className="py-20 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-md border border-white/5 shadow-lg p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:border-white/10 hover:shadow-xl hover:bg-zinc-800/60 transition-all"
            >
              <Counter from={0} to={stat.value} suffix={stat.suffix} suffixClassName={stat.color} />
              <span className="text-zinc-400 font-medium text-sm mt-2 transition-colors group-hover:text-zinc-300">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
