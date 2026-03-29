import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 bg-white">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-slate-600">
              Hi, I'm <span className="text-slate-900 font-bold">Jincent Caritan</span>
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Software <span className="text-[#F77F00]">Developer</span>
              <br />
              <span className="text-slate-900">& QA Specialist</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-900 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium"
          >
            A dedicated <span className="text-[#F77F00] font-bold">Quality Assurance Specialist</span> and
            <span className="text-[#F77F00] font-bold"> Full-stack Developer</span> with a passion for building
            and testing high-quality digital products.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <Button variant="primary" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's Talk
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6 justify-center lg:justify-start">
            {[
              { icon: "/images/github.png", href: 'https://github.com/jncnt' },
              { icon: "/images/linkedin.png", href: 'https://www.linkedin.com/in/jincent-caritan-412237308/' },
              { icon: "/images/gmail.png", href: 'mailto:jincecaritan13@gmail.com' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-3 glass-card rounded-full flex items-center justify-center hover:bg-orange-50 transition-all border-slate-200 overflow-hidden"
              >
                <img
                  src={social.icon}
                  alt="Social"
                  className="w-6 h-6 object-contain"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] blur-2xl opacity-50 transition-opacity duration-500" />
            <div className="relative glass-card p-3 rounded-[2.5rem] border-white shadow-2xl">
              <img
                src="/images/profile.png"
                alt="Jincent Caritan"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
