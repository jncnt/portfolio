import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Button } from '../common/Button';
import { projects } from '../../data/projects';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Project Image */}
            <motion.div
              className="relative rounded-lg overflow-hidden bg-gray-200 h-48 sm:h-56 lg:h-72 mb-4 cursor-pointer w-full"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{
                  transform:
                    hoveredId === project.id ? 'scale(1.05)' : 'scale(1)',
                }}
              />
            </motion.div>

            {/* Project Info */}
            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  Code
                </Button>
                {/* {project.caseStudy && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={project.caseStudy}
                  >
                    <ExternalLink size={16} />
                    Case Study
                  </Button>
                )} */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
