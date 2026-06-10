import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa';
import { caseStudies } from '../data/caseStudies';
import { useNav } from '../context/NavigationContext';

const cardV = {
  hidden: { opacity: 0, y: 36 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.52, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CaseStudies() {
  const { navigate } = useNav();

  return (
    <section
      id="case-studies"
      style={{
        padding: '110px 20px 96px',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '800px', height: '400px', borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(ellipse,rgba(124,58,237,0.06) 0%,transparent 70%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 className="font-serif" style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 400,
            color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '14px',
          }}>
            Case Studies
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1rem',
            fontFamily: 'var(--font-sans)', maxWidth: '460px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Detailed breakdowns of complex problems I solved — from research to shipped product.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}>
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} index={i} onOpen={() => navigate('case-study', cs.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ cs, index, onOpen }) {
  const [isFlying, setIsFlying] = useState(false);
  const handleOpen = (e) => {
    e.stopPropagation();
    setIsFlying(true);
    setTimeout(() => {
      setIsFlying(false);
      onOpen();
    }, 400);
  };

  return (
    <motion.div
      custom={index}
      variants={cardV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -10, rotateX: 2, rotateY: -2, boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.3)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={handleOpen}
      style={{
        perspective: '1000px', transformStyle: 'preserve-3d',
        borderRadius: '20px',
        border: '1px solid var(--border-light)',
        background: 'var(--card-bg)',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
      }}
    >
      {/* Image */}
      <div style={{
        height: '220px', position: 'relative', overflow: 'hidden',
        background: cs.accentLight,
      }}>
        <motion.img
          src={cs.phoneSrc}
          alt={cs.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to top, ${cs.accent}ee 0%, transparent 55%)`,
          pointerEvents: 'none',
        }} />

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          background: cs.accent, color: '#fff',
          fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.12em',
          textTransform: 'uppercase', padding: '4px 12px', borderRadius: '50px',
          fontFamily: 'var(--font-sans)',
        }}>
          {cs.category}
        </div>

        {/* Title over image */}
        <div style={{ position: 'absolute', bottom: '16px', left: '18px', right: '18px' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)',
            fontFamily: 'var(--font-sans)', marginBottom: '4px' }}>
            {cs.subtitle}
          </p>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff',
            fontFamily: 'var(--font-sans)', lineHeight: 1.2 }}>
            {cs.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)',
          lineHeight: 1.65, fontFamily: 'var(--font-sans)', margin: 0 }}>
          {cs.tagline}
        </p>

        {/* Results chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {cs.results.map((r, i) => (
            <div key={i} style={{
              background: cs.accentLight,
              border: `1px solid ${cs.accent}40`,
              borderRadius: '8px', padding: '6px 12px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: cs.accent,
                fontFamily: 'var(--font-sans)', lineHeight: 1 }}>
                {r.value}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)',
                fontFamily: 'var(--font-sans)', marginTop: '2px' }}>
                {r.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          onClick={handleOpen}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: cs.accent, fontSize: '0.875rem', fontWeight: 700,
            fontFamily: 'var(--font-sans)', padding: 0,
            marginTop: '4px',
          }}
        >
          Read Case Study 
          <motion.div animate={isFlying ? { x: 30, y: -30, opacity: 0, scale: 0.5 } : { x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
            {isFlying ? <FaPaperPlane size={12} /> : <FaArrowRight size={12} />}
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}
