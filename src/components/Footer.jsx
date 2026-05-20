import { motion } from 'framer-motion';

const Footer = () => {
  const handleNavClick = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
    <div id="contact-us" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* ── Call to Action (CTA) Section ── */}
      <section 
        style={{
          padding: '120px 24px',
          background: 'var(--bg-primary)',
          textAlign: 'center',
          borderTop: '1px solid var(--border-light)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 300,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '32px',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Let's build{' '}
            <span 
              className="font-serif" 
              style={{ fontStyle: 'italic', fontWeight: 600 }}
            >
              something
            </span>{' '}
            amazing together.
          </h2>

          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('contact-us')}
            className="interactive"
            style={{
              background: '#1c1c1e',
              color: '#ffffff',
              border: 'none',
              padding: '18px 48px',
              borderRadius: '40px',
              fontSize: '1.05rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Book a call
          </motion.button>
        </div>
      </section>

      {/* ── Symmetrical Charcoal Footer Block ── */}
      <footer 
        style={{
          background: 'var(--footer-bg)',
          color: 'var(--footer-text)',
          padding: '80px 24px 40px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          position: 'relative'
        }}
      >
        <div 
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '0.8fr 0.8fr 1.5fr 1fr',
            gap: '40px',
            marginBottom: '60px'
          }}
          className="footer-grid"
        >
          {/* Column 1: Internal Anchor Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button 
              onClick={() => handleNavClick('home')} 
              className="interactive footer-link"
              style={{ background: 'none', border: 'none', color: 'var(--footer-muted)', textAlign: 'left', cursor: 'pointer', fontSize: '0.95rem' }}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about-us')} 
              className="interactive footer-link"
              style={{ background: 'none', border: 'none', color: 'var(--footer-muted)', textAlign: 'left', cursor: 'pointer', fontSize: '0.95rem' }}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('portfolio')} 
              className="interactive footer-link"
              style={{ background: 'none', border: 'none', color: 'var(--footer-muted)', textAlign: 'left', cursor: 'pointer', fontSize: '0.95rem' }}
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('contact-us')} 
              className="interactive footer-link"
              style={{ background: 'none', border: 'none', color: 'var(--footer-muted)', textAlign: 'left', cursor: 'pointer', fontSize: '0.95rem' }}
            >
              Contact us
            </button>
          </div>

          {/* Column 2: Pricing, Terms directories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="#blogs" className="interactive footer-link" style={{ color: 'var(--footer-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Blogs</a>
            <a href="#pricing" className="interactive footer-link" style={{ color: 'var(--footer-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Pricing</a>
            <a href="#terms" className="interactive footer-link" style={{ color: 'var(--footer-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Terms</a>
            <a href="#privacy" className="interactive footer-link" style={{ color: 'var(--footer-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Privacy</a>
          </div>

          {/* Center Column: Let's Talk! & Large Email Pill Button */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '24px'
            }}
            className="footer-center-col"
          >
            <h3 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
                margin: 0
              }}
            >
              Let's talk!
            </h3>

            <motion.a
              href="mailto:hello@hamza.cybvegit.com"
              whileHover={{ scale: 1.03, backgroundColor: '#ffffff', color: '#121214' }}
              className="interactive"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#121214',
                padding: '14px 28px',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(255,255,255,0.08)',
                fontFamily: 'var(--font-sans)'
              }}
            >
              hello@hamza.cybvegit.com ↗
            </motion.a>
          </div>

          {/* Column 4: Symmetrical Social External Channels */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-end', 
              gap: '16px' 
            }}
            className="footer-social-col"
          >
            <a 
              href="https://www.linkedin.com/in/hamza-shafique-cybveigt/" 
              target="_blank" 
              rel="noreferrer"
              className="interactive footer-link"
              style={{ color: 'var(--footer-muted)', textDecoration: 'none', fontSize: '0.95rem' }}
            >
              Linkedin
            </a>
            <a 
              href="https://github.com/CybvegitSoftwareSolutions" 
              target="_blank" 
              rel="noreferrer"
              className="interactive footer-link"
              style={{ color: 'var(--footer-muted)', textDecoration: 'none', fontSize: '0.95rem' }}
            >
              Twitter/X
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~0162ca4cf2aaaf6def" 
              target="_blank" 
              rel="noreferrer"
              className="interactive footer-link"
              style={{ color: 'var(--footer-muted)', textDecoration: 'none', fontSize: '0.95rem' }}
            >
              Instagram
            </a>
            <a 
              href="https://github.com/CybvegitSoftwareSolutions" 
              target="_blank" 
              rel="noreferrer"
              className="interactive footer-link"
              style={{ color: 'var(--footer-muted)', textDecoration: 'none', fontSize: '0.95rem' }}
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Bottom Symmetrical Copyright Banner */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '32px',
            textAlign: 'center'
          }}
        >
          <p 
            style={{
              fontSize: '0.8rem',
              color: 'var(--footer-muted)',
              fontWeight: 500,
              letterSpacing: '0.04em',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Copyright © Hamza Shafique, 2036 All Rights Reserved
          </p>
        </div>
      </footer>

      {/* Inline styles for responsive layout overrides */}
      <style>{`
        .footer-link {
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #ffffff !important;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .footer-center-col {
            grid-column: span 2 !important;
            order: -1 !important;
            margin-bottom: 20px !important;
          }
          .footer-social-col {
            align-items: center !important;
          }
          .footer-grid > div {
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
