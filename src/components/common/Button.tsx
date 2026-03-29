import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer';

  const variants = {
    primary:
      'bg-[#F77F00] text-white hover:bg-[#e67600] shadow-lg shadow-orange-200/50 hover:shadow-orange-300/50 active:scale-95',
    secondary:
      'bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 active:scale-95',
    outline:
      'bg-transparent border-2 border-[#F77F00] text-[#F77F00] hover:bg-orange-50 active:scale-95',
    ghost:
      'bg-transparent text-slate-600 hover:bg-slate-100 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = motion.button;

  if (props.href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={buttonClasses}
        href={props.href}
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionComponent
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;
