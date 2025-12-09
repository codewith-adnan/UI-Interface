import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#10058c] shadow-lg py-4' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <h1 className="text-3xl font-bold text-white font-heading">Bootslander</h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          <ul className="flex gap-8 text-white/80 font-nav text-[15px]">
            <li><a href="#hero" className="hover:text-white relative group active:text-white">Home
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-6"></span>
            </a></li>
            <li><a href="#about" className="hover:text-white relative group">About
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-6"></span>
            </a></li>
            <li><a href="#features" className="hover:text-white relative group">Features
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-6"></span>
            </a></li>
            <li><a href="#gallery" className="hover:text-white relative group">Gallery
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-6"></span>
            </a></li>
            <li><a href="#pricing" className="hover:text-white relative group">Pricing
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-6"></span>
            </a></li>
            <li><a href="#contact" className="hover:text-white relative group">Contact
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-6"></span>
            </a></li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;