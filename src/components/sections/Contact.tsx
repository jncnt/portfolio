import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Section } from '../common/Section';
import { Button } from '../common/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

// Contact Data
const contactInfo = {
  email: 'jincent@example.com',
  phone: '+63 912 345 6789',
  location: 'Cebu City, Philippines'
};

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Email failed:', error);
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to discuss a potential collaboration? Send me a message!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-slate-900">Let's build something <span className="text-[#F77F00]">amazing</span> together.</h3>
            <p className="text-slate-900 text-lg leading-relaxed font-bold">
              Open for freelance opportunities and full-time roles. I'm especially interested in ambitious projects with a strong focus on quality and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
              { icon: MapPin, label: 'Location', value: contactInfo.location, href: '#' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ y: -3 }}
                className="glass-card p-6 border-slate-100 font-bold hover:border-orange-200 group transition-all"
              >
                <div className="p-3 rounded-xl bg-orange-50 text-[#F77F00] w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform mb-4 shadow-sm shadow-orange-100">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-slate-900 font-black break-all">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 bg-white border-slate-200 shadow-2xl shadow-slate-200/50"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-hidden focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-hidden focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-hidden focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-hidden focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full py-5 rounded-2xl group shadow-orange-200"
            >
              <span className="flex items-center gap-2">
                {status === 'sending' ? 'Sending...' :
                  status === 'success' ? 'Sent!' :
                    'Send Message'}
                {status === 'idle' && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                {status === 'success' && <CheckCircle2 size={20} />}
                {status === 'error' && <AlertCircle size={20} />}
              </span>
            </Button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600 font-black text-sm"
              >
                Thank you! I'll get back to you as soon as possible.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
