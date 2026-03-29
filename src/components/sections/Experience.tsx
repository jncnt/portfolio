import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { experiences } from '../../data/experiences';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Experience & Education"
      subtitle="My professional journey and academic background."
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-[#F77F00] shadow-lg z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shrink-0">
                {exp.type === 'work' ? (
                  <Briefcase size={18} />
                ) : (
                  <GraduationCap size={18} />
                )}
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 border-slate-100 hover:border-orange-200 transition-all duration-500 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="font-black text-slate-900 text-lg">{exp.title}</div>
                  <time className="font-bold text-xs text-[#F77F00] bg-orange-50 px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap w-fit">
                    <Calendar size={12} />
                    {exp.period}
                  </time>
                </div>
                <div className="text-[#F77F00] font-bold text-sm mb-3">
                  {exp.company}
                </div>
                <div className="text-slate-900 text-sm leading-relaxed font-medium">
                  {exp.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
