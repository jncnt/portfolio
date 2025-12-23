import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Bug } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated background elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          </motion.div>

          {/* Two Column Layout: Profile and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Column */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-56 h-56 md:w-80 md:h-80 rounded-lg object-cover shadow-lg border-2 border-blue-400"
              />
            </motion.div>

            {/* Content Column */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Jincent Caritan
              </h1>

              {/* Title */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl md:text-3xl text-gray-300">Web Developer</h2>
                </div>
                <span className="text-gray-500">|</span>
                <div className="flex items-center gap-2">
                  <Bug className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl md:text-3xl text-gray-300">QA Specialist</h2>
                </div>
              </div>

              {/* Bio */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-400 mb-8"
              >
                Passionate about building reliable, user-friendly, and high-quality web applications.
                Based in Philippines • Remote-friendly • Always learning
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 flex justify-center"
          >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-blue-400 rounded-full mt-2"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
