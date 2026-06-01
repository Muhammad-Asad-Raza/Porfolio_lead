import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaGooglePlay, FaApple,
  FaExternalLinkAlt, FaChevronLeft, FaChevronRight,
} from 'react-icons/fa';
import { projects } from '../data/sampleData';

/* ─── Image display config ───────────────────────────────────
   fit: 'contain' → portrait / dual-phone screenshots
   fit: 'cover'   → landscape / decorative-bg images          */
const IMG_CFG = {
  1:   { fit: 'cover',   bg: '#e8f0f8' },
  2:   { fit: 'contain', bg: '#111217' },
  3:   { fit: 'contain', bg: '#141824' },
  4:   { fit: 'cover',   bg: '#0c1223' },
  5:   { fit: 'contain', bg: '#f0f4ff' },
  6:   { fit: 'contain', bg: '#f0f4ff' },
  7:   { fit: 'cover',   bg: '#fff'    },
  8:   { fit: 'contain', bg: '#061806' },
  9:   { fit: 'contain', bg: '#c0392b' },
  10:  { fit: 'contain', bg: '#faf4f8' },
  11:  { fit: 'cover',   bg: '#f8f8f8' },
  12:  { fit: 'cover',   bg: '#e8f4fc' },
  13:  { fit: 'cover',   bg: '#0c1020' },
  14:  { fit: 'cover',   bg: '#ff7b00' },
  15:  { fit: 'cover',   bg: '#fff'    },
  101: { fit: 'cover',   bg: '#1a0e2e' },
  102: { fit: 'cover',   bg: '#e0f0f8' },
  103: { fit: 'cover',   bg: '#e8f4ee' },
  104: { fit: 'cover',   bg: '#0a1a2e' },
  105: { fit: 'contain', bg: '#e8f4ff' },
  106: { fit: 'contain', bg: '#f0f4ff' },
  107: { fit: 'contain', bg: '#0c1e3c' },
  108: { fit: 'cover',   bg: '#000f1f' },
  109: { fit: 'cover',   bg: '#061406' },
  110: { fit: 'contain',   bg: '#e85d20' },   // Niyyah - coloured promo bg
};

/* ─── Tech badge palette ─────────────────────────────────── */
const TECH = {
  'React Native': { bg: 'rgba(97,218,251,0.12)',  color: '#38bdf8', bd: 'rgba(97,218,251,0.25)' },
  'Flutter':      { bg: 'rgba(84,197,248,0.12)',  color: '#67e8f9', bd: 'rgba(84,197,248,0.25)' },
  'React JS':     { bg: 'rgba(97,218,251,0.12)',  color: '#38bdf8', bd: 'rgba(97,218,251,0.25)' },
  'Next JS':      { bg: 'rgba(255,255,255,0.07)', color: '#cbd5e1', bd: 'rgba(255,255,255,0.12)' },
  'Node JS':      { bg: 'rgba(74,222,128,0.1)',   color: '#4ade80', bd: 'rgba(74,222,128,0.22)' },
  '.NET Core':    { bg: 'rgba(167,139,250,0.12)', color: '#a78bfa', bd: 'rgba(167,139,250,0.25)' },
  'Firebase':     { bg: 'rgba(251,191,36,0.1)',   color: '#fbbf24', bd: 'rgba(251,191,36,0.22)' },
  'MySQL':        { bg: 'rgba(96,165,250,0.1)',   color: '#60a5fa', bd: 'rgba(96,165,250,0.22)' },
  'MongoDB':      { bg: 'rgba(74,222,128,0.1)',   color: '#4ade80', bd: 'rgba(74,222,128,0.22)' },
  'WebRTC':       { bg: 'rgba(251,191,36,0.1)',   color: '#fbbf24', bd: 'rgba(251,191,36,0.22)' },
  'AWS Lambda':   { bg: 'rgba(251,146,60,0.1)',   color: '#fb923c', bd: 'rgba(251,146,60,0.22)' },
  'Stripe':       { bg: 'rgba(129,140,248,0.1)',  color: '#818cf8', bd: 'rgba(129,140,248,0.22)' },
  'Google Maps':  { bg: 'rgba(52,211,153,0.1)',   color: '#34d399', bd: 'rgba(52,211,153,0.22)' },
  'GPS API':      { bg: 'rgba(52,211,153,0.1)',   color: '#34d399', bd: 'rgba(52,211,153,0.22)' },
  'SQL Server':   { bg: 'rgba(96,165,250,0.1)',   color: '#60a5fa', bd: 'rgba(96,165,250,0.22)' },
};
const getTech = t => TECH[t] || { bg: 'rgba(255,255,255,0.06)', color: '#94a3b8', bd: 'rgba(255,255,255,0.1)' };

const CATS = ['All', 'Mobile', 'Web'];

/* ─── Motion variants ────────────────────────────────────── */
const gridV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.065, delayChildren: 0.05 } },
};
const cardV = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, scale: 0.94, y: -24,
    transition: { duration: 0.26, ease: 'easeIn' } },
};

/* ════════════════════════════════════════════════════════════
   SECTION
════════════════════════════════════════════════════════════ */
export default function Projects() {
  const [cat, setCat] = useState('All');
  const filtered = projects.filter(p => cat === 'All' || p.category === cat);

  return (
    <section
      id="portfolio"
      style={{
        padding: '110px 20px 96px',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <span style={blob('#2563eb', '-180px', 'auto', '-80px', 'auto', '560px')} />
      <span style={blob('#7c3aed', 'auto', '-120px', 'auto', '-80px', '480px')} />

      <div style={{ maxWidth: '1260px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '58px' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(37,99,235,0.1)',
            border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '50px', padding: '5px 16px', marginBottom: '20px',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', display: 'inline-block',
            }} />
            <span style={{
              fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.14em',
              color: '#60a5fa', textTransform: 'uppercase', fontFamily: 'var(--font-sans)',
            }}>
              Portfolio
            </span>
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 400,
              color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '14px',
            }}
          >
            Projects I've Built
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1rem',
            fontFamily: 'var(--font-sans)', maxWidth: '440px',
            margin: '0 auto 42px', lineHeight: 1.7,
          }}>
            Real apps — shipped to production, used by real people worldwide.
          </p>

          {/* Filter pills */}
          <div style={{
            display: 'inline-flex', gap: '4px',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-light)',
            padding: '4px', borderRadius: '50px',
          }}>
            {CATS.map(c => (
              <motion.button
                key={c} onClick={() => setCat(c)} whileTap={{ scale: 0.95 }}
                style={{
                  padding: '8px 26px', borderRadius: '40px', border: 'none',
                  cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'var(--font-sans)',
                  fontWeight: cat === c ? 700 : 500,
                  background: cat === c ? 'linear-gradient(135deg,#2563eb,#7c3aed)' : 'transparent',
                  color: cat === c ? '#fff' : 'var(--text-secondary)',
                  boxShadow: cat === c ? '0 4px 14px rgba(37,99,235,0.4)' : 'none',
                  transition: 'all 0.28s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                {c}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          layout
          variants={gridV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '22px',
            marginBottom: '70px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
          </AnimatePresence>
        </motion.div>

        {/* ── Footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            textAlign: 'center', paddingTop: '44px',
            borderTop: '1px solid var(--border-light)',
          }}
        >
          <p className="font-serif" style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.45rem)',
            color: 'var(--text-secondary)', lineHeight: 1.75,
            fontWeight: 400, maxWidth: '620px', margin: '0 auto',
          }}>
            Every project starts with a conversation and ends with{' '}
            <span style={{ color: 'var(--accent-blue)', fontStyle: 'italic' }}>
              something people actually love.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   PROJECT CARD
════════════════════════════════════════════════════════════ */
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  // image carousel
  const allImgs  = project.images || [project.image];
  const multiImg = allImgs.length > 1;
  const [idx, setIdx]   = useState(0);
  const [dir, setDir]   = useState(1);   // 1=next, -1=prev
  const [auto, setAuto] = useState(true);

  const goTo = useCallback((next, direction = 1) => {
    setDir(direction);
    setIdx(next);
  }, []);

  // Auto-advance every 3 s
  useEffect(() => {
    if (!multiImg || !auto) return;
    const t = setTimeout(() => goTo((idx + 1) % allImgs.length, 1), 3000);
    return () => clearTimeout(t);
  }, [idx, auto, multiImg, allImgs.length, goTo]);

  const prev = () => { setAuto(false); goTo((idx - 1 + allImgs.length) % allImgs.length, -1); };
  const next = () => { setAuto(false); goTo((idx + 1) % allImgs.length,  1); };

  const cfg      = IMG_CFG[project.id] || { fit: 'cover', bg: 'var(--bg-tertiary)' };
  const hasStore = project.playstore || project.appstore || project.live;

  const imgVariants = {
    enter: d => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center:    { x: 0, opacity: 1, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
    exit:  d => ({ x: d > 0 ? '-100%' : '100%', opacity: 0,
      transition: { duration: 0.28, ease: 'easeIn' } }),
  };

  return (
    <motion.div
      layout
      variants={cardV}
      exit="exit"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        y: hovered ? -7 : 0,
        boxShadow: hovered
          ? '0 20px 52px rgba(0,0,0,0.45), 0 0 0 1px rgba(96,165,250,0.18)'
          : '0 4px 20px rgba(0,0,0,0.22)',
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{
        borderRadius: '18px',
        border: `1px solid ${hovered ? 'rgba(96,165,250,0.25)' : 'var(--border-light)'}`,
        background: 'var(--card-bg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        transition: 'border-color 0.3s ease',
        position: 'relative',
      }}
    >
      {/* ── Image / Carousel ── */}
      <div
        style={{
          position: 'relative', height: '234px',
          background: cfg.bg, overflow: 'hidden', flexShrink: 0,
        }}
        onMouseEnter={() => setAuto(false)}
        onMouseLeave={() => setAuto(true)}
      >
        {/* Sliding images */}
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.img
            key={idx}
            src={allImgs[idx]}
            alt={project.title}
            custom={dir}
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: cfg.fit, objectPosition: 'center',
              display: 'block',
            }}
          />
        </AnimatePresence>

        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top,rgba(10,14,26,0.88) 0%,rgba(10,14,26,0.2) 38%,transparent 60%)',
          pointerEvents: 'none', zIndex: 1,
        }} />

        {/* Carousel arrows (only if multiple images) */}
        {multiImg && (
          <>
            <CarouselBtn side="left"  onClick={prev} show={hovered}><FaChevronLeft  size={12} /></CarouselBtn>
            <CarouselBtn side="right" onClick={next} show={hovered}><FaChevronRight size={12} /></CarouselBtn>

            {/* Dots */}
            <div style={{
              position: 'absolute', bottom: '10px', left: 0, right: 0,
              display: 'flex', justifyContent: 'center', gap: '5px', zIndex: 3,
            }}>
              {allImgs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAuto(false); goTo(i, i > idx ? 1 : -1); }}
                  style={{
                    width: i === idx ? '18px' : '6px',
                    height: '6px', borderRadius: '3px', border: 'none',
                    background: i === idx ? '#60a5fa' : 'rgba(255,255,255,0.4)',
                    cursor: 'pointer', padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '13px', left: '13px', zIndex: 4,
          background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
          color: '#fff', fontSize: '0.62rem', fontWeight: 800,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '4px 11px', borderRadius: '50px',
          fontFamily: 'var(--font-sans)',
          boxShadow: '0 3px 10px rgba(37,99,235,0.45)',
        }}>
          {project.category}
        </div>

        {/* Store icons top-right */}
        <div style={{
          position: 'absolute', top: '11px', right: '11px',
          display: 'flex', gap: '6px', zIndex: 4,
        }}>
          {project.github && (
            <IcoBubble href={project.github} title="GitHub" cl="#94a3b8"><FaGithub size={12} /></IcoBubble>
          )}
          {project.playstore && (
            <IcoBubble href={project.playstore} title="Play Store" cl="#4ade80"><FaGooglePlay size={11} /></IcoBubble>
          )}
          {project.appstore && (
            <IcoBubble href={project.appstore} title="App Store" cl="#60a5fa"><FaApple size={13} /></IcoBubble>
          )}
          {project.live && (
            <IcoBubble href={project.live} title="Live" cl="#fbbf24"><FaExternalLinkAlt size={10} /></IcoBubble>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{
        padding: '18px 20px 20px',
        display: 'flex', flexDirection: 'column', flex: 1, gap: '9px',
      }}>
        <h3 style={{
          margin: 0, fontSize: '1.06rem', fontWeight: 700,
          color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', lineHeight: 1.3,
        }}>
          {project.title}
        </h3>

        <p style={{
          margin: 0, fontSize: '0.845rem',
          color: 'var(--text-secondary)', lineHeight: 1.65,
          fontFamily: 'var(--font-sans)', flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', paddingTop: '2px' }}>
          {project.tech.map(t => {
            const s = getTech(t);
            return (
              <span key={t} style={{
                background: s.bg, color: s.color,
                border: `1px solid ${s.bd}`,
                fontSize: '0.68rem', fontWeight: 700,
                padding: '3px 9px', borderRadius: '50px',
                fontFamily: 'var(--font-sans)',
              }}>
                {t}
              </span>
            );
          })}
        </div>

        {/* Store buttons */}
        {hasStore && (
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '7px',
            paddingTop: '11px', borderTop: '1px solid var(--border-light)',
          }}>
            {project.playstore && (
              <SBtn href={project.playstore} icon={<FaGooglePlay size={10} />}
                label="Play Store" g="linear-gradient(135deg,#16a34a,#22c55e)" s="rgba(22,163,74,0.35)" />
            )}
            {project.appstore && (
              <SBtn href={project.appstore} icon={<FaApple size={11} />}
                label="App Store" g="linear-gradient(135deg,#2563eb,#60a5fa)" s="rgba(37,99,235,0.35)" />
            )}
            {project.live && (
              <SBtn href={project.live} icon={<FaExternalLinkAlt size={9} />}
                label="Live" g="linear-gradient(135deg,#d97706,#f59e0b)" s="rgba(217,119,6,0.35)" />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Carousel Arrow ────────────────────────────────────── */
function CarouselBtn({ side, onClick, show, children }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'absolute', top: '50%',
        [side]: '8px',
        transform: `translateY(-50%) scale(${hov ? 1.12 : 1})`,
        zIndex: 4,
        width: '30px', height: '30px', borderRadius: '50%',
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255,255,255,0.15)',
        color: '#fff', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.25s ease, transform 0.2s ease',
        padding: 0,
      }}
    >
      {children}
    </button>
  );
}

/* ─── Icon bubble ───────────────────────────────────────── */
function IcoBubble({ href, title, cl, children }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '28px', height: '28px', borderRadius: '50%',
        background: h ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(6px)',
        border: `1px solid ${cl}55`, color: cl,
        textDecoration: 'none', flexShrink: 0,
        transform: h ? 'scale(1.14) translateY(-1px)' : 'scale(1)',
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </a>
  );
}

/* ─── Store button ──────────────────────────────────────── */
function SBtn({ href, icon, label, g, s }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        background: g, color: '#fff',
        fontSize: '0.71rem', fontWeight: 700,
        padding: '6px 14px', borderRadius: '50px',
        textDecoration: 'none', fontFamily: 'var(--font-sans)',
        boxShadow: h ? `0 6px 18px ${s}` : `0 2px 8px ${s}`,
        transform: h ? 'translateY(-2px)' : 'none',
        transition: 'all 0.22s ease', whiteSpace: 'nowrap',
      }}
    >
      {icon}{label}
    </a>
  );
}

/* ─── Blob helper ───────────────────────────────────────── */
function blob(color, top, right, bottom, left, size) {
  return {
    position: 'absolute', top, right, bottom, left,
    width: size, height: size, borderRadius: '50%',
    background: `radial-gradient(circle, ${color}14 0%, transparent 68%)`,
    pointerEvents: 'none', display: 'block',
  };
}
