import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Section } from '../common/Section';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Mail, MapPin, Send } from 'lucide-react';
import { socialLinks, contactEmail, contactLocation } from '../../data/contact';

// Initialize EmailJS with public key from environment
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Only initialize if public key exists
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setError('Email service is not configured. Please check your environment variables.');
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      // Using EmailJS template
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: contactEmail,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again or contact directly via email.');
      console.error('Email error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's connect!
            </h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out for collaborations, opportunities, or just to say hi.
              I'm always open to discussing new projects and ideas.
            </p>
          </div>

          {/* Contact Details */}
          <Card hoverable={false}>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a href={`mailto:${contactEmail}`} className="text-white hover:text-blue-400 transition">
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white">{contactLocation}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card hoverable={false}>
            <h4 className="text-white font-bold mb-4">Connect With Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  title={link.name}
                >
                  <span className="text-white">{link.name}</span>
                </a>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                >
                  ✕ {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={() => {}}
              >
                <Send size={20} />
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Note: To use the email form, configure EmailJS credentials in the component.
                Alternatively, email me directly at {contactEmail}
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
