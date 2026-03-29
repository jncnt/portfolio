import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../common/Section';
import { certifications } from '../../data/certifications';
import { Award, ExternalLink, X, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Refining my expertise through professional training and industry-recognized certifications."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group glass-card border-slate-100 hover:border-orange-200 transition-all duration-300 bg-white"
          >
            {/* Certificate Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-orange-50 text-[#F77F00]">
                  <Award size={24} />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <Calendar size={14} />
                  {cert.year}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#F77F00] transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-900 font-black mb-6">
                {cert.organization}
              </p>

              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full py-3 rounded-xl border border-slate-100 text-slate-600 text-sm font-bold hover:bg-orange-50 hover:text-[#F77F00] hover:border-orange-100 transition-all flex items-center justify-center gap-2"
              >
                View Certificate <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modern Lightboxes Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-white/95 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-[#F77F00] transition-colors z-10 shadow-lg"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                <div className="flex justify-center">
                  <div className="max-w-3xl shadow-2xl rounded-2xl overflow-hidden border border-slate-100">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Certifications;
