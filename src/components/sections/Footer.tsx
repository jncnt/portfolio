import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand/Logo */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900">
              JC<span className="text-[#F77F00]"></span>
            </h3>
            <p className="text-slate-900 max-w-xs leading-relaxed font-bold">
              Passionate developer and QA specialist focused on building premium, high-quality digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-900 font-black mb-6 text-xs uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-900 hover:text-[#F77F00] transition-colors text-sm font-black"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-slate-900 font-black mb-6 text-xs uppercase tracking-widest text-sm">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: "/images/github.png", href: 'https://github.com/jncnt' },
                { icon: "/images/linkedin.png", href: 'https://www.linkedin.com/in/jincent-caritan-412237308/' },
                { icon: "/images/gmail.png", href: 'mailto:jincecaritan13@gmail.com' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-orange-50 transition-all overflow-hidden"
                >
                  <img
                    src={social.icon}
                    alt="Social"
                    className="w-6 h-6 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div>
          <p className="text-slate-900 text-xs font-black align-center flex justify-center">
            © {currentYear} Jincent Caritan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
