import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../common/Section';
// import { Button } from '../common/Button';
import { projects } from '../../data/projects';
import { Github, } from 'lucide-react';

export const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A collection of my recent work, showcasing both development and QA projects."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group glass-card border-slate-100 hover:border-orange-200 transition-all duration-500 overflow-hidden bg-white flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                animate={{ scale: hoveredId === project.id ? 1.05 : 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-orange-600/90 backdrop-blur-sm flex items-center justify-center gap-4 z-20"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white text-orange-600 hover:bg-orange-50 transition-colors"
                      title="View Code"
                    >
                      <Github size={24} />
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F77F00] transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-900 text-sm leading-relaxed mb-6 line-clamp-3 font-bold">
                {project.description}
              </p>

              <div className="mt-auto flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded bg-slate-50 text-slate-900 border border-slate-100 group-hover:text-orange-600 group-hover:bg-orange-50 group-hover:border-orange-100 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-50">
                  {/* <Button
                    variant="ghost"
                    size="sm"
                    href={project.caseStudy}
                    className="p-0 text-orange-600 font-bold group-hover:translate-x-1 transition-transform"
                  >
                    Case Study →
                  </Button> */}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
