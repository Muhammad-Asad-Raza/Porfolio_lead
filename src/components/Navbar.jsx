import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about-us');

  // Detect scroll to shrink Navbar or add shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section highlighters
      const sections = ['about-us', 'tech-stack', 'portfolio', 'clients', 'contact-us'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navItems = [
    { label: 'About us', id: 'about-us' },
    { label: 'Tech Stack', id: 'tech-stack' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Clients', id: 'clients' },
    { label: 'Contact Us', id: 'contact-us' }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '12px 24px' : '24px',
        transition: 'padding 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div 
        className="glass"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '12px 30px',
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid var(--border-light)',
          boxShadow: scrolled ? '0 12px 40px rgba(0, 0, 0, 0.06)' : 'var(--shadow-md)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Brand Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="interactive"
          style={{
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)'
          }}
        >
          Hamza Shafique
        </div>

        {/* Desktop Navigation Links */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          <ul 
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '24px',
              alignItems: 'center',
              padding: 0,
              margin: 0,
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`interactive ${activeSection === item.id ? 'nav-pill-active' : ''}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: activeSection === item.id ? '600' : '400',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    transition: 'color 0.2s ease',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Vertical Divider */}
          <div 
            style={{
              width: '1px',
              height: '18px',
              backgroundColor: 'var(--border-medium)'
            }}
          />

          {/* Theme Toggler Button */}
          <button
            onClick={toggleTheme}
            className="interactive"
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-primary)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background-color 0.3s ease'
            }}
            aria-label="Toggle dark mode"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {theme === 'light' ? (
                <FaMoon size={14} style={{ color: 'var(--text-secondary)' }} />
              ) : (
                <FaSun size={14} style={{ color: '#fbbf24' }} />
              )}
            </motion.div>
          </button>
        </nav>

        {/* Mobile Nav Button */}
        <div className="mobile-nav-toggle" style={{ display: 'none', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-primary)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {theme === 'light' ? <FaMoon size={12} /> : <FaSun size={12} style={{ color: '#fbbf24' }} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass"
            style={{
              position: 'absolute',
              top: scrolled ? '65px' : '80px',
              left: '24px',
              right: '24px',
              borderRadius: '24px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  padding: '8px 0',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border-light)',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline styles for responsive layout toggles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
