import { motion } from 'framer-motion';
import { Bug, Globe, Shield, Lock, Sword, Brain } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Smash || Slash",
      description: "A fast-paced action RPG with procedurally generated dungeons",
      icon: Sword,
      tags: ["Godot", "Blender", "Procedural Generation"],
      link: "#"
    },
    {
      title: "NomNom AI Game Engine",
      description: "An innovative game engine powered by artificial intelligence",
      icon: Brain,
      tags: ["Python", "Machine Learning", "OpenAI"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced security features",
      icon: Lock,
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio creation tool for developers",
      icon: Globe,
      tags: ["TypeScript", "Next.js", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-burgundy to-pink-500 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all"
            >
              <project.icon className="w-10 h-10 text-burgundy mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-sm bg-burgundy/20 text-burgundy px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}