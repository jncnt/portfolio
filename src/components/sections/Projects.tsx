import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { projects } from '../../data/projects';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={project.id} delay={index * 0.1}>
            <div className="h-full flex flex-col">
              {/* Project Image */}
              <motion.div
                className="relative mb-4 rounded-lg overflow-hidden bg-gray-800 h-48"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
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
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Below card content, NOT on image */}
                <div className="flex gap-3 mt-auto">
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
                  {project.caseStudy && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.caseStudy}
                    >
                      <ExternalLink size={16} />
                      Case Study
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
