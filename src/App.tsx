import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Background />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;