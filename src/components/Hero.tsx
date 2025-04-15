import { motion } from 'framer-motion';
import { Shield, Code, Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-burgundy to-pink-500 text-transparent bg-clip-text">
            Yara Almahmoud
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Penetration Testing • Front-end Development • Game Development
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8 flex-wrap"
        >
          <div className="text-center">
            <Shield className="w-12 h-12 text-burgundy mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Junior Pentester</h3>
            <p className="text-gray-400">Learning Web App Security</p>
          </div>
          <div className="text-center">
            <Code className="w-12 h-12 text-burgundy mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-gray-400">Modern Web Technologies</p>
          </div>
          <div className="text-center">
            <Gamepad2 className="w-12 h-12 text-burgundy mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Game Developer</h3>
            <p className="text-gray-400">Godot & Web Games</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}