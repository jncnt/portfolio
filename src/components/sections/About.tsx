import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Card } from '../common/Card';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Text Content */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a dedicated Quality Assurance Specialist and Jumior Software Developer with a passion for creating
            reliable, user-friendly applications. With a strong foundation in both QA methodologies and
            modern web development, I bridge the gap between quality assurance and development.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            My journey in tech began with a curiosity about how software works, which evolved into a
            professional career spanning QA testing and full-stack web development. I'm committed to
            continuous learning and staying updated with the latest technologies and best practices.
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Focus Areas:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Quality Assurance 
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                 Backendend Development (PHP,Laravel)
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Full-Stack Web Applications
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                User Experience & Performance Optimization
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Cards */}
        {/* <div className="grid grid-cols-2 gap-4">
          <Card hoverable={false} delay={0}>
            <div className="text-center">
              <div className="text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">5+</div>
              <p className="text-gray-600">Years in Tech</p>
            </div>
          </Card>
          <Card hoverable={false} delay={0.1}>
            <div className="text-center">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">20+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </Card>
          <Card hoverable={false} delay={0.2}>
            <div className="text-center">
              <div className="text-4xl font-bold bg-linear-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-gray-600">Test Coverage</p>
            </div>
          </Card>
          <Card hoverable={false} delay={0.3}>
            <div className="text-center">
              <div className="text-4xl font-bold bg-linear-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">∞</div>
              <p className="text-gray-600">Always Learning</p>
            </div>
          </Card>
        </div> */}
      </motion.div>
    </Section>
  );
};

export default About;
