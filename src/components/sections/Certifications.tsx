import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { ImageModal } from '../modals/ImageModal';
import { certifications } from '../../data/certifications';
import { Maximize2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (cert: typeof certifications[0]) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  return (
    <>
      <Section id="certifications" title="Certifications & Credentials">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={cert.id} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                {/* Certificate Image */}
                <motion.div
                  className="relative rounded-lg overflow-hidden mb-4 bg-gray-200 h-72 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleImageClick(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <Maximize2 className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Cert Info */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 flex-1">
                  {cert.organization}
                </p>
                <p className="text-blue-600 font-medium text-sm">
                  Obtained: {cert.year}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedCert?.image || ''}
        title={selectedCert?.title}
        description={selectedCert?.organization}
      />
    </>
  );
};

export default Certifications;
