import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaGooglePlay, FaApple, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/sampleData';

/* ─── per-project image-fit hints ──────────────────────────────────────────
   'cover'   → decorative / landscape images (fill the area, crop edges)
   'contain' → promo / portrait mockups (show whole image, letterbox)        */
const FIT_CONTAIN = new Set([
  1, 2, 3, 4, 7, 11, 12, 13, 14, 15,   // promo multi-phone images
  9, 10,                                 // portrait phone on coloured bg
  102, 104, 108, 109,                    // APKPure thumbnails
]);

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:   { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

const CATEGORIES = ['All', 'Mobile', 'Web'];

const STORE_BTN = {
  base: {
    display: 'flex', alignItems: 'center', gap: '6px',
    padding: '7px 13px', borderRadius: '20px', fontSize: '0.75rem',
    fontWeight: 600, textDecoration: 'none', border: 'none',
    cursor: 'pointer', transition: 'all 0.22s ease', whiteSpace: 'nowrap',
    fontFamily: 'var(--font-sans)',
  },
  github:    { background: 'rgba(255,255,255,0.08)', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.15)' },
  playstore: { background: 'rgba(0,210,90,0.15)',    color: '#00d25a', border: '1px solid rgba(0,210,90,0.3)' },
  appstore:  { background: 'rgba(120,160,255,0.15)', color: '#7ab0ff', border: '1px solid rgba(120,160,255,0.3)' },
  live:      { background: 'rgba(99,179,237,0.15)',  color: '#63b3ed', border: '1px solid rgba(99,179,237,0.3)' },
};

const TECH_COLORS = {
  'React Native': '#61dafb22',
  'Flutter':      '#54c5f822',
  'Node JS':      '#68d39122',
  '.NET Core':    '#9f7aea22',
  'Firebase':     '#f6ad5522',
  'MySQL':        '#4299e122',
  'MongoDB':      '#68d39122',
  'WebRTC':       '#f6ad5522',
  'AWS Lambda':   '#ed893622',
  'Stripe':       '#6875f522',
  'Google Maps':  '#48bb7822',
};

function getTechColor(tech) {
  return TECH_COLORS[tech] || 'rgba(255,255,255,0.07)';
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = projects.filter(p =>
    filter === 'All' ? true : p.category === filter
  );

  const getObjectFit = (id) => FIT_CONTAIN.has(id) ? 'contain' : 'cover';
  const getImgBg    = (id) => FIT_CONTAIN.has(id) ? '#0f1117' : '#0f1117';

  return (
    <section
      id="portfolio"
      style={{
        padding: '120px 24px 100px',
        background: 'var(--bg-secondary)',
        borderTop:    '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '-200px', right: '-200px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,179,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-150px', left: '-150px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(154,96,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg,rgba(99,179,237,0.15),rgba(154,96,255,0.15))',
            border: '1px solid rgba(99,179,237,0.25)',
            color: '#63b3ed', fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '6px 18px', borderRadius: '50px', marginBottom: '20px',
          }}>
            Portfolio
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            My Projects
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.05rem',
            fontFamily: 'var(--font-sans)', maxWidth: '480px',
            margin: '0 auto 40px',
          }}>
            Real apps — shipped to production, used by real people.
          </p>

          {/* Filter pills */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-light)',
            padding: '5px', borderRadius: '40px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            gap: '4px',
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat
                    ? 'linear-gradient(135deg,#4299e1,#7c3aed)'
                    : 'transparent',
                  color: filter === cat ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '9px 26px',
                  borderRadius: '30px',
                  fontSize: '0.88rem',
                  fontWeight: filter === cat ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'var(--font-sans)',
                  boxShadow: filter === cat ? '0 4px 12px rgba(66,153,225,0.35)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
            gap: '28px',
            marginBottom: '80px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                objectFit={getObjectFit(project.id)}
                imgBg={getImgBg(project.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Footer quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Every project is built with transparency, collaboration, and{' '}
            <span style={{ color: 'var(--accent-blue)' }}>pixel-perfect attention to detail.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   PROJECT CARD
════════════════════════════════════════════════ */
function ProjectCard({ project, objectFit, imgBg }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      variants={cardVariants}
      exit="exit"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        border: `1px solid ${hovered ? 'rgba(99,179,237,0.3)' : 'var(--border-light)'}`,
        background: hovered
          ? 'linear-gradient(160deg,rgba(20,28,46,0.98),rgba(15,20,38,0.98))'
          : 'var(--card-bg)',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(99,179,237,0.15)'
          : '0 4px 24px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* ── Image ── */}
      <div style={{
        position: 'relative',
        height: '230px',
        background: imgBg,
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            objectPosition: 'top center',
            display: 'block',
          }}
        />

        {/* Gradient overlay at bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,12,25,0.85) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          background: project.category === 'Mobile'
            ? 'linear-gradient(135deg,#4299e1,#7c3aed)'
            : 'linear-gradient(135deg,#38a169,#2b6cb0)',
          color: '#fff', fontSize: '0.68rem', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          fontFamily: 'var(--font-sans)',
        }}>
          {project.category}
        </div>

        {/* Store icons on image (top-right) */}
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          display: 'flex', gap: '6px',
        }}>
          {project.playstore && (
            <a href={project.playstore} target="_blank" rel="noreferrer"
              title="Google Play" style={iconBubble('#00d25a')}>
              <FaGooglePlay size={12} />
            </a>
          )}
          {project.appstore && (
            <a href={project.appstore} target="_blank" rel="noreferrer"
              title="App Store" style={iconBubble('#7ab0ff')}>
              <FaApple size={13} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
              title="Live" style={iconBubble('#63b3ed')}>
              <FaExternalLinkAlt size={11} />
            </a>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{
        padding: '20px 22px 22px',
        display: 'flex', flexDirection: 'column', flex: 1, gap: '12px',
      }}>

        {/* Title + GitHub */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
          <h3 style={{
            fontSize: '1.1rem', fontWeight: 700,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            lineHeight: 1.3, margin: 0,
          }}>
            {project.title}
          </h3>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              title="GitHub" style={{
                color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.12)'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color=''; }}
            >
              <FaGithub size={14} />
            </a>
          )}
        </div>

        {/* Description */}
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          fontFamily: 'var(--font-sans)',
          margin: 0, flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              background: getTechColor(t),
              color: 'var(--text-secondary)',
              fontSize: '0.72rem', fontWeight: 600,
              padding: '3px 10px', borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)',
              fontFamily: 'var(--font-sans)',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Store buttons row */}
        {(project.playstore || project.appstore || project.live) && (
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '8px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}>
            {project.playstore && (
              <a href={project.playstore} target="_blank" rel="noreferrer"
                style={{ ...STORE_BTN.base, ...STORE_BTN.playstore }}>
                <FaGooglePlay size={11} /> Play Store
              </a>
            )}
            {project.appstore && (
              <a href={project.appstore} target="_blank" rel="noreferrer"
                style={{ ...STORE_BTN.base, ...STORE_BTN.appstore }}>
                <FaApple size={12} /> App Store
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer"
                style={{ ...STORE_BTN.base, ...STORE_BTN.live }}>
                <FaExternalLinkAlt size={10} /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function iconBubble(color) {
  return {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '28px', height: '28px', borderRadius: '50%',
    background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
    border: `1px solid ${color}55`, color,
    textDecoration: 'none', transition: 'transform 0.2s',
    flexShrink: 0,
  };
}
