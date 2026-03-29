import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = ''
}) => {
  return (
    <section id={id} className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F77F00]/50" />
            <span className="text-[#F77F00] font-black uppercase tracking-[0.3em] text-[10px]">Explore</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-slate-900 max-w-3xl leading-relaxed font-bold">{subtitle}</p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  );
};

export default Section;
