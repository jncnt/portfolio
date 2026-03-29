import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { skills } from '../../data/skills';
import { Code2, Smartphone, Globe, Database, Terminal, ShieldCheck } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  'Frontend': Globe,
  'Backend': Database,
  'Mobile': Smartphone,
  'Tools': Terminal,
  'Quality Assurance': ShieldCheck,
  'Core Skills': Code2,
};

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section
      id="skills"
      title="Technical Expertise"
      subtitle="A comprehensive overview of my skills in software development and quality assurance."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skillGroup) => {
          const Icon = categoryIcons[skillGroup.category] || Code2;
          return (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="glass-card p-6 border-slate-100 hover:border-orange-200 group transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-orange-50 text-[#F77F00] group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  const skillImage = typeof skill === 'string' ? undefined : skill.image;

                  return (
                    <div
                      key={skillName}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-900 text-sm font-bold border border-slate-100 hover:bg-orange-50 hover:text-[#F77F00] hover:border-orange-100 transition-colors flex items-center gap-2"
                    >
                      {skillImage && (
                        <img
                          src={skillImage}
                          alt={skillName}
                          className="w-4 h-4 object-contain"
                        />
                      )}
                      {skillName}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Skills;
