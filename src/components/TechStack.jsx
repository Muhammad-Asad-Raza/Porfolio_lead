import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaAws, FaLaptopCode,
} from 'react-icons/fa';
import {
  SiFlutter, SiNextdotjs, SiDotnet, SiMysql, SiMongodb, SiFirebase, SiGraphql,
} from 'react-icons/si';
import hamzaImg from '../assets/hamza_bhai_pic.png';
import { skills } from '../data/sampleData';

/* ── Icon map ──────────────────────────────────────────────*/
const ICON_MAP = {
  FaReact:    <FaReact    style={{ color: '#61dafb' }} />,
  FaReact2:   <FaReact    style={{ color: '#61dafb' }} />,
  SiFlutter:  <SiFlutter  style={{ color: '#02569B' }} />,
  SiNextdotjs:<SiNextdotjs style={{ color: 'var(--text-primary)' }} />,
  FaNodeJs:   <FaNodeJs   style={{ color: '#339933' }} />,
  SiDotnet:   <SiDotnet   style={{ color: '#512bd4' }} />,
  SiMysql:    <SiMysql    style={{ color: '#00758f' }} />,
  SiMongodb:  <SiMongodb  style={{ color: '#47a248' }} />,
  SiFirebase: <SiFirebase style={{ color: '#ffca28' }} />,
  FaAws:      <FaAws      style={{ color: '#ff9900' }} />,
  SiGraphql:  <SiGraphql  style={{ color: '#e10098' }} />,
};
const getIcon = (name) => ICON_MAP[name] || <FaLaptopCode style={{ color: 'var(--accent-blue)' }} />;

/* ── Orbital ring — rotates as a whole, icons counter-rotate ──
   direction: 1 = clockwise, -1 = anticlockwise
   duration:  seconds for one full revolution                  */
function OrbitalRing({ skills, radius, ringSize, iconSize, direction, duration, ringIndex }) {
  const total = skills.length;

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: `${ringSize}px`,
        height: `${ringSize}px`,
        borderRadius: '50%',
        border: '1px dashed var(--border-light)',
      }}
      animate={{ rotate: direction === 1 ? 360 : -360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {skills.map((skill, i) => {
        /* Place icon at correct angle on this ring */
        const angle = (i * 360) / total; // degrees, starting 0° = top
        const rad   = (angle - 90) * (Math.PI / 180);
        const x     = ringSize / 2 + radius * Math.cos(rad) - iconSize / 2;
        const y     = ringSize / 2 + radius * Math.sin(rad) - iconSize / 2;

        return (
          <motion.div
            key={skill.name}
            title={skill.name}
            /* Counter-rotate icon to keep it upright */
            animate={{ rotate: direction === 1 ? -360 : 360 }}
            transition={{ duration, repeat: Infinity, ease: 'linear' }}
            whileHover={{ scale: 1.2 }}
            style={{
              position: 'absolute',
              left:  `${x}px`,
              top:   `${y}px`,
              width: `${iconSize}px`,
              height:`${iconSize}px`,
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              zIndex: 10,
            }}
          >
            {getIcon(skill.icon)}

            {/* Tooltip on hover */}
            <span style={{
              position: 'absolute',
              bottom: `${iconSize + 4}px`,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              fontSize: '0.6rem',
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              opacity: 0,
              transition: 'opacity 0.2s',
              fontFamily: 'var(--font-sans)',
              zIndex: 20,
            }}
              className="tech-tooltip"
            >
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
const TechStack = () => {
  const inner  = skills.slice(0, 3);   // 3 skills — inner ring
  const middle = skills.slice(3, 7);   // 4 skills — middle ring
  const outer  = skills.slice(7, 11);  // 4 skills — outer ring

  return (
    <section
      id="tech-stack"
      style={{
        padding: '120px 24px',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '500px', height: '500px', pointerEvents: 'none',
        background: 'radial-gradient(circle, var(--accent-blue-glow) 0%, transparent 70%)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: '300px', height: '300px', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        zIndex: 1,
      }} />

      <div
        className="tech-stack-grid"
        style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px', alignItems: 'center',
          position: 'relative', zIndex: 2,
        }}
      >
        {/* ── LEFT: Orbital rings ── */}
        <div
          className="tech-stack-visual"
          style={{
            position: 'relative', width: '100%', height: '540px',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
        >
          {/* ─ Outer ring (anticlockwise, slow) ─ */}
          <OrbitalRing
            skills={outer}
            radius={240}
            ringSize={500}
            iconSize={56}
            direction={-1}
            duration={28}
            ringIndex={2}
          />

          {/* ─ Middle ring (clockwise, medium) ─ */}
          <OrbitalRing
            skills={middle}
            radius={160}
            ringSize={340}
            iconSize={54}
            direction={1}
            duration={20}
            ringIndex={1}
          />

          {/* ─ Inner ring (anticlockwise, fast) ─ */}
          <OrbitalRing
            skills={inner}
            radius={86}
            ringSize={180}
            iconSize={52}
            direction={-1}
            duration={14}
            ringIndex={0}
          />

          {/* ─ Center: Leader's photo ─ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              width: '86px',
              height: '86px',
              zIndex: 20,
            }}
          >
            {/* Rotating gradient border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', inset: '-3px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #2563eb, #7c3aed, #ec4899, #2563eb)',
                zIndex: 0,
              }}
            />
            {/* White ring */}
            <div style={{
              position: 'absolute', inset: '-1px',
              borderRadius: '50%',
              background: 'var(--bg-primary)',
              zIndex: 1,
            }} />
            {/* Photo */}
            <div style={{
              position: 'relative',
              width: '100%', height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              zIndex: 2,
              boxShadow: '0 8px 32px rgba(37,99,235,0.35)',
            }}>
              <img
                src={hamzaImg}
                alt="Hamza Shafique"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  filter: 'grayscale(20%)',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Text ── */}
        <div
          className="tech-stack-text"
          style={{ display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(3rem, 6vw, 4.8rem)',
              fontWeight: 800, letterSpacing: '-0.04em',
              lineHeight: 0.9, color: 'var(--text-primary)',
              fontFamily: 'var(--font-sans)', marginBottom: '8px',
            }}>
              My Tech Stacks
            </h2>
            <p style={{
              fontSize: '1.25rem', color: 'var(--text-muted)',
              fontWeight: 500, fontFamily: 'var(--font-sans)',
              marginBottom: '32px',
            }}>
              and more...
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif"
            style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6, fontWeight: 400,
            }}
          >
            I believe in writing clean, maintainable code with comprehensive documentation that stands the test of time.
          </motion.p>

          {/* Skill level bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ width: '100%', marginTop: '36px',
              display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {skills.slice(0, 5).map((skill, i) => (
              <div key={skill.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between',
                  marginBottom: '5px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600,
                    color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
                    {skill.name}
                  </span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700,
                    color: 'var(--accent-blue)', fontFamily: 'var(--font-sans)' }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{
                  height: '5px', borderRadius: '10px',
                  background: 'var(--border-light)', overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      height: '100%', borderRadius: '10px',
                      background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tech-stack-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          .tech-stack-visual {
            height: 380px !important;
            transform: scale(0.75);
            transform-origin: center;
          }
          .tech-stack-text {
            align-items: center !important;
            text-align: center !important;
          }
        }
        .tech-tooltip { opacity: 0 !important; }
        [title]:hover .tech-tooltip { opacity: 1 !important; }
      `}</style>
    </section>
  );
};

export default TechStack;
