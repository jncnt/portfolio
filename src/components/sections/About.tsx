import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { User, MapPin, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const details = [
    { icon: MapPin, label: 'Location', value: 'Cebu City, Philippines' },
    // { icon: Calendar, label: 'Status', value: 'Available for Remote' },
    { icon: GraduationCap, label: 'Education', value: 'Associate in Computer Technology Major in Software Development' },
    { icon: User, label: 'Focus', value: 'Software Developer & QA' },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A brief introduction to my background, passion, and professional journey."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-card p-8 bg-white border-slate-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F77F00]/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#F77F00]/10 transition-colors" />
            <p className="text-xl text-slate-900 leading-relaxed relative z-10 font-bold">
              I am a <span className="text-[#F77F00] font-black">Junior Software Developer</span> and <span className="text-[#F77F00] font-black">QA Specialist</span> driven by the challenge of creating high-quality, bug-free web applications.
            </p>
            <p className="text-lg text-slate-900 leading-relaxed mt-4 font-bold">
              With a strong foundation in modern web technologies and a meticulous eye for detail, I strive to bridge the gap between complex technical requirements and seamless user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 flex items-center gap-3 border-slate-100 hover:border-orange-200 transition-colors"
              >
                <div className="p-2 rounded-lg bg-orange-50 text-[#F77F00]">
                  <detail.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-black uppercase tracking-wider">{detail.label}</p>
                  <p className="text-sm text-slate-900 font-black">{detail.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-card p-8 border-slate-200 bg-linear-to-br from-white to-slate-50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#F77F00] flex items-center justify-center text-sm text-white italic">"</span>
              My Philosophy
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Quality First', text: 'I believe that software is only as good as its weakest link. Meticulous testing is a core part of my process.' },
                { title: 'Continuous Learning', text: "Committed to staying at the forefront of modern web standards and best practices." },
                { title: 'User-Centricity', text: 'Focusing on creating intuitive interfaces that make complex tasks feel simple.' }
              ].map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-orange-200">
                  <h4 className="text-lg font-black text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-900 text-sm leading-relaxed font-bold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
