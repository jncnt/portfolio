import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { experiences } from '../../data/experiences';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section id="experience" title="Experience & Education">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-8 top-16 bottom-0 w-1 bg-blue-500"></div>
            )}

            {/* Timeline card */}
            <Card>
              <div className="flex gap-4">
                {/* Icon */}
                <div className="shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-8 h-8 text-white" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-white" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-blue-600 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-purple-600 font-semibold mb-2">
                    {exp.company}
                  </p>

                  <p className="text-gray-700">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;
