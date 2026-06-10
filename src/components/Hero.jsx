import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from 'framer-motion';
import hamzaBhaiPic from '../assets/b5facb49860fbecc2e0c6ea8b49914505f2cfbec.png';

const AnimatedNumber = ({ value }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const numMatch = value.match(/^(\d+)/);
  const targetNum = numMatch ? parseInt(numMatch[0]) : null;
  const suffix = targetNum !== null ? value.replace(/^\d+/, '') : value;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && targetNum !== null) {
      animate(count, targetNum, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, targetNum, count]);

  return (
    <span ref={nodeRef}>
      {targetNum !== null ? <motion.span>{rounded}</motion.span> : null}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
  const yCode = useTransform(scrollY, [0, 1000], [0, -100]);

  // Looping Typewriter State for App Developer
  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "App Developer",
    "Web Developer",
    "Backend Engineer",
    "AI Specialist"
  ];

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      // Deleting speed
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      }, 40);
    } else {
      // Typing speed
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }, 80);
    }

    // Switch state if word is typed or deleted
    if (!isDeleting && currentText === currentPhrase) {
      // Fully typed, pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === '') {
      // Fully deleted, move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  const handleBookCall = () => {
    const element = document.getElementById('contact-us');
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
    <section 
      id="about-us" 
      style={{
        minHeight: '100vh',
        padding: '60px 24px 60px', // Safe vertical offset to clear the sticky navbar perfectly
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background soft lighting */}
      <motion.div 
        style={{
          y: yBg,
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, var(--accent-blue-glow) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1,
          pointerEvents: 'none',
          animation: 'slow-glow 8s infinite ease-in-out'
        }}
      />

      {/* Hero Content Canvas: Adjusted height to perfect Figma proportion (800px snug) */}
      <div 
        className="hero-canvas"
        style={{
          maxWidth: '1234px', // Aligns perfectly with the 1234px code block
          width: '100%',
          height: '800px', // Canvas height to hold the absolute Figma coordinate grid snugly
          position: 'relative',
          marginBottom: '30px' // Clean margins above code block
        }}
      >
        {/* Grayscale portrait positioned absolutely on the left, shifted up slightly to match the overlap */}
        <div 
          className="hero-image-wrapper"
          style={{
            position: 'absolute',
            left: '4%',
            bottom: '35px', // Shifted up slightly to perfectly match the overlapping composition
            height: '100%',
            width: '45%',
            zIndex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            pointerEvents: 'none',
            overflow: 'visible' // Changed from 'hidden' so hair is NEVER clipped!
          }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            <img 
              src={hamzaBhaiPic} 
              alt="Hamza Shafique" 
              className="portrait-grayscale"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block'
              }}
            />
            {/* Smooth Overlay Gradient that fades out the suit perfectly in both light & dark themes */}
            <div 
              style={{
                position: 'absolute',
                left: 0,
                bottom: '-2px',
                width: '100%',
                height: '180px', // Creates a gorgeous fade-out at the bottom of his suit
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--bg-primary) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
              }}
            />
          </motion.div>
        </div>

        {/* Overlapping Text Blocks with exact Figma layout offsets */}
        <div 
          className="hero-text-wrapper"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        >
          {/* Row 1: Your next + Pulse Green Badge (Shifted right of face, level with temple/eyes) */}
          <div 
            className="hero-row-1"
            style={{ 
              position: 'absolute',
              top: '290px',
              left: '39%',
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px', 
              pointerEvents: 'auto'
            }}
          >
            <h2 
              className="font-serif" 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                lineHeight: 0.9,
              }}
            >
              Your <span style={{ fontStyle: 'italic', fontWeight: 600 }}>next</span>
            </h2>
            
            <div className="available-badge">
              <span className="pulse-dot" />
              <span>Available for Freelance</span>
            </div>
          </div>

          {/* Row 2: Full-Stackkk... (Figma spec: Top: 397px, Left: 50px, Size: 200px, Inter Bold 700, -8% Letter Spacing) */}
          <motion.h1 
            className="hero-row-2"
            initial={{ opacity: 0, y: 80, rotateX: 45, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
            transition={{ 
              duration: 1.4, 
              ease: [0.16, 1, 0.3, 1], // Ultra-smooth Apple-like custom easing
              delay: 0.2 
            }}
            style={{
              position: 'absolute',
              top: '397px', // Exact Figma Top Coordinate
              left: '50px', // Exact Figma Left Coordinate
              fontSize: 'clamp(3.5rem, 8.5vw, 200px)', // Exact Figma Size (clamp for mobile responsiveness)
              fontWeight: 700, // Exact Figma Bold Weight
              letterSpacing: '-0.08em', // Exact Figma Letter Spacing (-8%)
              lineHeight: '1.0', // Exact Figma Line Height (100%)
              color: 'var(--text-primary)',
              fontFamily: 'Inter, var(--font-sans), sans-serif',
              whiteSpace: 'nowrap',
              pointerEvents: 'auto',
              zIndex: 3,
              transformOrigin: 'left center',
              perspective: '1000px'
            }}
          >
            Full<motion.span 
              whileHover={{ 
                textShadow: '0px 0px 30px rgba(133, 0, 214, 0.8), 0px 0px 60px rgba(133, 0, 214, 0.4)',
                color: '#a832f0',
                scale: 1.02
              }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              style={{ 
                color: '#8500d6', 
                display: 'inline-block', 
                cursor: 'crosshair',
                transformOrigin: 'left center'
              }}
            >-Stack..</motion.span>
          </motion.h1>

          {/* Row 3: App Developer Typewriter (Figma Spec: Top: 570px, Left: 505px, Size: 120px, Instrument Serif, 0% Letter Spacing) */}
          <h2 
            className="hero-row-3" 
            style={{
              position: 'absolute',
              top: '570px', // Shuffled up from 608px to sit snugly directly under Full-Stackkk...
              left: '505px', // Exact Figma Left Coordinate
              fontSize: 'clamp(2.2rem, 5.5vw, 120px)', // Exact Figma Size (clamp for responsiveness)
              fontWeight: 400, // Exact Figma Regular Weight
              letterSpacing: '0em', // Exact Figma Letter Spacing (0%)
              lineHeight: '1.0', // Exact Figma Line Height (100%)
              color: 'var(--text-primary)',
              fontFamily: "'Instrument Serif', Georgia, serif", // Exact Figma Instrument Serif Font family
              pointerEvents: 'auto',
              fontStyle: 'normal',
              whiteSpace: 'nowrap',
              zIndex: 3
            }}
          >
            <span style={{ fontStyle: 'italic', marginRight: '16px' }}>
              {currentText.split(' ')[0]}
            </span>
            {currentText.split(' ').slice(1).join(' ')}
            
            {/* Blinking Typewriter Cursor */}
            <span 
              style={{ 
                display: 'inline-block', 
                marginLeft: '3px',
                fontWeight: '600',
                color: 'var(--accent-blue)',
                animation: 'blink 0.8s infinite'
              }}
            >
              |
            </span>
          </h2>

          {/* CTA Book a call button absolutely positioned under App Developer, centered on letter "p" of "App", overlapping code block top edge */}
          <div 
            style={{ 
              position: 'absolute',
              top: '770px', // Shifted up from 810px to perfectly match the snugger canvas height (800px)
              left: '495px', // Horizontally aligned with letter "p" in "App"
              zIndex: 10,
              pointerEvents: 'auto'
            }}
            className="hero-btn-container"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 12px 35px rgba(29, 92, 255, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBookCall}
              className="interactive"
              style={{
                background: '#2c2c2e',
                color: '#ffffff',
                border: 'none',
                padding: '16px 44px',
                borderRadius: '40px',
                fontSize: '1.05rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Book a call
            </motion.button>
          </div>
        </div>
      </div>

      {/* Express.js Frosted Glass Code Block - Exact Figma Layout: width 1234px, radius 20px, padding 32px 24px, fill #F0F0F0 at 30% */}
      <motion.div 
        style={{
          y: yCode,
          width: '100%',
          maxWidth: '1234px', // Exact Figma Width Spec
          position: 'relative',
          marginTop: '-30px' // Connects with the overlap of the absolutely positioned Book a call button
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '110%',
            background: 'radial-gradient(circle, rgba(29, 92, 255, 0.18) 0%, rgba(29, 92, 255, 0) 65%)',
            filter: 'blur(30px)',
            zIndex: -1,
            pointerEvents: 'none'
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            borderRadius: '20px', // Exact Figma Border Radius Spec
            border: '1px solid rgba(64, 64, 64, 0.15)', // Figma #404040 gradient border emulation
            overflow: 'hidden',
            padding: '32px 24px 32px 24px', // Exact Figma Padding Spec
            background: 'rgba(240, 240, 240, 0.3)', // Exact Figma Fill Color & 30% Opacity (Light Mode)
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            boxShadow: '-2px 4px 10px rgba(145, 145, 145, 0.05), -7px 17px 18px rgba(145, 145, 145, 0.04), -15px 37px 24px rgba(145, 145, 145, 0.03), -27px 66px 29px rgba(145, 145, 145, 0.01), -42px 103px 31px rgba(145, 145, 145, 0.01)', // Exact Figma stacked 5-drop-shadows
            minHeight: '614px' // Exact Figma height spec!
          }}
          className="glass-premium-code"
        >
          {/* Mock IDE Title/Header Bar */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '12px'
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
            </div>
            
            <div 
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
                fontFamily: 'var(--font-mono)'
              }}
            >
              express-server.js
            </div>

            <div style={{ width: '50px' }} />
          </div>

          {/* Clean Monochromatic Code block exactly matching your first image */}
          <pre 
            style={{
              margin: 0,
              fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)', // Premium clean legibility
              lineHeight: 1.7,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              overflowX: 'auto',
              textAlign: 'left'
            }}
          >
            <code>
              <span style={{ color: 'var(--text-muted)' }}>// Backend API Endpoint (Express.js)</span><br />
              <br />
              router.get('/api/projects', auth, async (req, res) =&gt; &#123;<br />
              &nbsp;&nbsp;try &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;const projects = await Project.find(&#123; user: req.user.id &#125;);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--text-muted)' }}>replace this, with whatever you think fit to your site</span><br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;const data = projects.map(project =&gt; &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const done = project.tasks.filter(t =&gt; t.completed).length;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const total = project.tasks.length;<br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...project._doc,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;progress: total ? Math.round((done / total) * 100) : 0<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;res.json(data);<br />
              &nbsp;&nbsp;&#125; catch (err) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;res.status(500).send('Error');<br />
              &nbsp;&nbsp;&#125;<br />
              &#125;);
            </code>
          </pre>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
          }
        }}
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '80px',
          marginBottom: '60px',
          padding: '0 24px',
          flexWrap: 'wrap',
          gap: '30px'
        }}
      >
        {[
          { value: '10+', label: 'Years Experience' },
          { value: '109+', label: 'App Deployed' },
          { value: '20/7', label: 'Support Available' },
          { value: '96%', label: 'Clients Satisfaction' }
        ].map((stat, idx) => (
          <motion.div 
            key={idx} 
            className="stat-box"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.8, filter: 'blur(10px)' },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                filter: 'blur(0px)',
                transition: { type: 'spring', damping: 20, stiffness: 100 }
              }
            }}
            whileHover={{ scale: 1.1 }}
            style={{ textAlign: 'center', flex: '1 1 200px', cursor: 'default' }}
          >
            <h3 
              style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: 600, 
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-sans)',
                marginBottom: '8px',
                lineHeight: 1
              }}
            >
              <AnimatedNumber value={stat.value} />
            </h3>
            <p 
              style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-secondary)',
                fontWeight: 400,
                fontFamily: 'var(--font-sans)'
              }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Banner */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          width: '100%', 
          backgroundColor: '#050505',
          padding: '24px 0',
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px',
          transformOrigin: 'center'
        }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          style={{
            color: '#ffffff',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 400,
            margin: 0,
            fontFamily: 'var(--font-sans)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            whiteSpace: 'nowrap'
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>Apps That Scale Beyond MVP</span>
          <motion.span 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ color: '#9b51e0', display: 'inline-block' }}
          >✱</motion.span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>Turning Startup Ideas Into Reality</span>
        </motion.h2>
      </motion.div>

      {/* Responsive overrides via inline styles */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        
        [data-theme='dark'] .glass-premium-code {
          background: rgba(18, 18, 24, 0.45) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
        }

        @media (max-width: 900px) {
          .hero-canvas {
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            margin-bottom: 20px !important;
          }
          .hero-image-wrapper {
            position: relative !important;
            width: 80% !important;
            left: auto !important;
            bottom: auto !important;
            margin-bottom: 30px !important;
            justify-content: center !important;
          }
          .hero-text-wrapper {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .hero-row-1 {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            margin-left: 0 !important;
            justify-content: center !important;
            margin-bottom: 16px !important;
          }
          .hero-row-2 {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            margin-left: 0 !important;
            text-align: center !important;
            font-size: clamp(2.8rem, 7vw, 4.8rem) !important;
            white-space: normal !important;
            margin-bottom: 16px !important;
          }
          .hero-row-3 {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            margin-left: 0 !important;
            text-align: center !important;
            font-size: clamp(2.0rem, 5vw, 4rem) !important;
            margin-bottom: 30px !important;
          }
          .hero-btn-container {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            margin-top: 20px !important;
            margin-bottom: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
