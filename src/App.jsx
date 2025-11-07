import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TemplatesGrid from './components/TemplatesGrid';
import AdminPanel from './components/AdminPanel';

function App() {
  const scrollToTemplates = () => {
    const el = document.getElementById('templates');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-rose-900">
      <Hero onExploreClick={scrollToTemplates} />
      <Features />
      <TemplatesGrid />
      <AdminPanel />
      <footer className="py-10 text-center text-rose-600/80">
        © {new Date().getFullYear()} Wedding Invitation Maker — Crafted with love.
      </footer>
    </div>
  );
}

export default App;
