import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useNav } from '../context/NavigationContext';

const NAV_ITEMS = [
  { label: 'Home',         id: 'home'         },
  { label: 'Portfolio',    id: 'portfolio'    },
  { label: 'Case Studies', id: 'case-studies' },
  { label: 'Clients',      id: 'clients'      },
  { label: 'Contact',      id: 'contact-us'   },
];

const Navbar = () => {
  const { page, goHome, goSection, navigate } = useNav();
  const [theme, setTheme]               = useState('light');
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const [scrolled, setScrolled]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const handleClick = (id) => {
    setMobileMenu(false);
    if (id === 'home') { goHome(); return; }
    if (id === 'contact-us') {
      // Navigate to contact section then scroll to footer
      goSection('contact-us');
      setTimeout(() => {
        const el = document.getElementById('contact-us');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return;
    }
    goSection(id);
  };

  // Determine which nav item is "active"
  const activeId = page.type === 'home'
    ? 'home'
    : page.type === 'section'
    ? page.id
    : page.type === 'case-study'
    ? 'case-studies'
    : page.type === 'project'
    ? 'portfolio'
    : null;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      padding: scrolled ? '12px 24px' : '20px 24px',
      transition: 'padding 0.4s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <div className="glass" style={{
        maxWidth: '1260px', margin: '0 auto',
        padding: '10px 24px', borderRadius: '50px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        border: '1px solid var(--border-light)',
        boxShadow: scrolled ? '0 12px 40px rgba(0,0,0,0.08)' : 'var(--shadow-md)',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}>

        {/* Brand */}
        <div onClick={goHome} className="interactive" style={{
          fontWeight: 800, fontSize: '1.15rem',
          letterSpacing: '-0.03em', color: 'var(--text-primary)',
          cursor: 'pointer', fontFamily: 'var(--font-sans)', flexShrink: 0,
        }}>
          Hamza<span style={{ color: 'var(--accent-blue)' }}>.</span>
        </div>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ul style={{
            display: 'flex', listStyle: 'none',
            gap: '2px', alignItems: 'center', padding: 0, margin: 0,
          }}>
            {NAV_ITEMS.map(item => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg,rgba(37,99,235,0.15),rgba(124,58,237,0.15))'
                        : 'none',
                      border: isActive
                        ? '1px solid rgba(37,99,235,0.25)'
                        : '1px solid transparent',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 700 : 400,
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      padding: '7px 11px',
                      borderRadius: '20px',
                      transition: 'all 0.2s ease',
                      fontFamily: 'var(--font-sans)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div style={{ width: '1px', height: '18px', background: 'var(--border-medium)', margin: '0 6px' }} />

          {/* Theme toggle */}
          <button onClick={toggleTheme} className="interactive" style={{
            background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
            color: 'var(--text-primary)', width: '34px', height: '34px',
            borderRadius: '50%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
          }}>
            <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {theme === 'light'
                ? <FaMoon size={13} style={{ color: 'var(--text-secondary)' }} />
                : <FaSun  size={13} style={{ color: '#fbbf24' }} />}
            </motion.div>
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="mobile-nav-toggle"
          style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
          <button onClick={toggleTheme} style={{
            background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
            color: 'var(--text-primary)', width: '32px', height: '32px',
            borderRadius: '50%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer',
          }}>
            {theme === 'light' ? <FaMoon size={12}/> : <FaSun size={12} style={{ color:'#fbbf24' }}/>}
          </button>
          <button onClick={() => setMobileMenu(v => !v)} style={{
            background: 'none', border: 'none', color: 'var(--text-primary)',
            fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center',
          }}>
            {mobileMenuOpen ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-16 }} transition={{ duration:0.25 }}
            className="glass"
            style={{
              position: 'absolute', top: scrolled ? '62px' : '78px',
              left: '24px', right: '24px', borderRadius: '20px', padding: '20px',
              display: 'flex', flexDirection: 'column', gap: '4px',
              border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-lg)',
            }}
          >
            {NAV_ITEMS.map(item => {
              const isActive = activeId === item.id;
              return (
                <button key={item.id} onClick={() => handleClick(item.id)} style={{
                  background: isActive ? 'rgba(37,99,235,0.1)' : 'none',
                  border: 'none', borderRadius: '10px',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontSize: '0.95rem', fontWeight: isActive ? 700 : 500,
                  textAlign: 'left', padding: '11px 14px',
                  cursor: 'pointer', fontFamily: 'var(--font-sans)',
                  transition: 'background 0.2s',
                }}>
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
