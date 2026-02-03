import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">L</span>
            </div>
            <span className="text-white font-light text-2xl tracking-wider">LUXE</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('models')}
              className="text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide"
            >
              Models
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-2 rounded-full font-light tracking-wide hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
          >
            Book a Test Drive
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('models')}
              className="block w-full text-left text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide py-2"
            >
              Models
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-amber-400 transition-colors duration-300 font-light tracking-wide py-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-3 rounded-full font-light tracking-wide mt-4"
            >
              Book a Test Drive
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
