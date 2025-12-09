import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Sections to track
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle Navbar Background
      setIsScrolled(window.scrollY > 50);

      // Handle Active Section
      const scrollPosition = window.scrollY + 100; // Offset for fixed header

      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.href);
            break; // Found the active section
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial active state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#10058c] shadow-lg py-4' : 'bg-transparent py-5'
      }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <h1 className="text-3xl font-bold text-white font-heading">Bootslander</h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          <ul className="flex gap-8 text-white/80 font-nav text-[15px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative group transition-all duration-300 ${activeSection === link.href ? 'text-white' : 'hover:text-white'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-[-6px] left-0 h-[2px] bg-accent transition-all duration-300 ${activeSection === link.href ? 'w-6' : 'w-0 group-hover:w-6'
                    }`}></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>

        {/* Mobile Menu (Simplified for this task, relying on existing mobile behavior) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#10058c] p-4 xl:hidden shadow-lg flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-white/80 hover:text-white ${activeSection === link.href ? 'text-white font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;