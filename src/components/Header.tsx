import { Github, Linkedin, Terminal, Code2 } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-burgundy/10 to-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-burgundy" />
            <Code2 className="w-6 h-6 text-burgundy" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-burgundy transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-burgundy transition-colors"
            >
              Contact
            </button>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-burgundy transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-burgundy transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}