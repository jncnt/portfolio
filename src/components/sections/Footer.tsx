import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/contact';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Jincent Caritan
            </h3>
            <p className="text-gray-700">
              Junior Software Developer | QA Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const getImagePath = (name: string) => {
                  switch (name) {
                    case 'GitHub':
                      return '/images/github.png';
                    case 'LinkedIn':
                      return '/images/linkedin.png';
                    case 'Email':
                      return '/images/gmail.png';
                    default:
                      return '/images/github.png';
                  }
                };

                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors p-2"
                    title={link.name}
                  >
                    <img 
                      src={getImagePath(link.name)} 
                      alt={link.name}
                      className="w-6 h-6 object-contain"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-gray-700 flex items-center justify-center gap-2"
          >
            <span>
              All rights reserved Jincent Caritan  {currentYear}
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
