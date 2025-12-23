import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { skills } from '../../data/skills';

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
    },
  };

  return (
    <Section id="skills" title="Skills & Expertise">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {skills.map((skillGroup, index) => (
          <Card key={skillGroup.category} delay={index * 0.1}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded"></span>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 hover:text-blue-400 hover:border-blue-500 border border-gray-700 transition-all duration-300 text-sm font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
