import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 glass-card border-b border-white/10 transition-all duration-300 ${scrolled ? 'py-4 h-16' : 'h-20'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold tracking-tighter text-primary">ssujen.ai</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a className="hover:text-primary transition-colors" href="#">Home</a>
          <a className="hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="hover:text-primary transition-colors" href="#about">About</a>
          <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
        </div>
        <div>
          <a
            href="https://system-architect-ssujendev.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-opacity-90 text-background-dark font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105"
          >
            Helper AI
          </a>
        </div>
      </div>
    </nav>
  );
}
