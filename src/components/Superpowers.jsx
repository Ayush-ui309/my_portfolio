import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Award, Users } from 'lucide-react';

const powers = [
  {
    title: 'Leadership',
    description: 'Leading teams to build successful scalable products.',
    icon: <Users size={28} />,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-blue-500/30',
  },
  {
    title: 'Efficiency',
    description: 'Optimizing architectures and writing clean, minimal code.',
    icon: <Zap size={28} />,
    color: 'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-orange-500/30',
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional UI/UX and zero-defect systems.',
    icon: <Award size={28} />,
    color: 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-emerald-500/30',
  },
  {
    title: 'Training',
    description: 'Mentoring peers and spreading awareness through tech.',
    icon: <Target size={28} />,
    color: 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-indigo-500/30',
  },
];

const Superpowers = () => {
  return (
    <section className="py-24 bg-transparent relative z-10" id="experience">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight"
          >
            My Superpowers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Beyond the code, here is what I bring to the table.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {powers.map((power, i) => (
            <motion.div
              key={power.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-[2rem] bg-zinc-900/50 backdrop-blur-md border border-white/5 group hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/10 hover:bg-zinc-800/60 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${power.color} shadow-lg`}>
                {power.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{power.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {power.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Superpowers;
