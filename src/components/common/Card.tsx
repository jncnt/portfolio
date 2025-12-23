import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={hoverable ? { translateY: -5 } : {}}
      className={`bg-gray-900/50 border border-gray-800 rounded-lg p-6 transition-all duration-300 ${
        hoverable ? 'hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
