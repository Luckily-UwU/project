import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-burgundy to-pink-500 text-transparent bg-clip-text"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-burgundy"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-burgundy"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-burgundy"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-burgundy hover:bg-burgundy/80 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <a href="mailto:yarahamad1951@gmail.com" className="flex items-center gap-2 hover:text-burgundy transition-colors">
              <Mail className="w-5 h-5" />
              yarahamad1951@gmail.com
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-burgundy transition-colors">
              <MessageSquare className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}