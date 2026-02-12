import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { skills } from '../../data/skills';
import type { SkillItem } from '../../types/index';

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
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-blue-600 to-blue-500 rounded"></span>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => {
                const skillName = typeof skill === 'string' ? skill : skill.name;
                const skillImage = typeof skill === 'string' ? undefined : skill.image;
                
                return (
                  <motion.div
                    key={skillName}
                    variants={itemVariants}
                    className="px-4 py-2 bg-linear-to-r from-blue-50 to-blue-100 rounded-full hover:from-blue-100 hover:to-blue-200 border border-blue-200 transition-all duration-300 text-sm font-medium flex items-center gap-2"
                  >
                    {skillImage && (
                      <img 
                        src={skillImage} 
                        alt={skillName}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    <span className="text-blue-700 hover:text-blue-900">
                      {skillName}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
