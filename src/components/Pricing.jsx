import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';
import { services } from '../data/sampleData';

const POPULAR_ID = 2; // Website Development

const cardV = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: '110px 20px 96px',
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glows */}
      <div style={{ position:'absolute', top:'-100px', left:'50%', transform:'translateX(-50%)',
        width:'600px', height:'300px', borderRadius:'50%',
        background:'radial-gradient(ellipse,rgba(37,99,235,0.1) 0%,transparent 70%)',
        pointerEvents:'none', zIndex:0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '50px', padding: '5px 16px', marginBottom: '20px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%',
              background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', display: 'inline-block' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.14em',
              color: '#60a5fa', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>
              Services
            </span>
          </span>

          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '16px',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '-0.02em',
          }}>
            <span style={{ color: 'var(--text-primary)' }}>VIP </span>
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Pricing Plans
            </span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.05rem',
            fontFamily: 'var(--font-sans)', maxWidth: '480px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Transparent pricing for every project size. No hidden fees — just results.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'start',
        }}>
          {services.map((service, i) => {
            const isPopular = service.id === POPULAR_ID;
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardV}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  padding: isPopular ? '32px 28px' : '28px 24px',
                  background: isPopular
                    ? 'linear-gradient(160deg,#1e3a5f,#0f1f3d)'
                    : 'var(--card-bg)',
                  border: isPopular
                    ? '1px solid rgba(56,189,248,0.35)'
                    : '1px solid var(--border-light)',
                  boxShadow: isPopular
                    ? '0 20px 60px rgba(37,99,235,0.25), 0 0 0 1px rgba(56,189,248,0.1)'
                    : '0 4px 20px rgba(0,0,0,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div style={{
                    position: 'absolute', top: '-14px', left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
                    color: '#fff', fontSize: '0.7rem', fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '5px 18px', borderRadius: '50px',
                    fontFamily: 'var(--font-sans)',
                    boxShadow: '0 4px 14px rgba(37,99,235,0.5)',
                    display: 'flex', alignItems: 'center', gap: '5px',
                    whiteSpace: 'nowrap',
                  }}>
                    <FaStar size={10} /> Most Popular
                  </div>
                )}

                {/* Top accent line */}
                <div style={{
                  width: '36px', height: '3px', borderRadius: '2px',
                  background: isPopular
                    ? 'linear-gradient(90deg,#38bdf8,#818cf8)'
                    : 'linear-gradient(90deg,#2563eb,#7c3aed)',
                }} />

                {/* Type label */}
                <div>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: 800,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: isPopular ? '#38bdf8' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    {isPopular ? 'Most Popular' : 'Specialized'}
                  </span>

                  <h3 style={{
                    fontSize: '1.35rem', fontWeight: 800,
                    color: isPopular ? '#f0f8ff' : 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    lineHeight: 1.25, marginTop: '6px',
                  }}>
                    {service.title}
                  </h3>
                </div>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{
                    fontSize: '2.8rem', fontWeight: 900,
                    color: isPopular ? '#f0f8ff' : 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)', lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}>
                    {service.price.split('/')[0]}
                  </span>
                  <span style={{
                    fontSize: '0.85rem', fontWeight: 500,
                    color: isPopular ? 'rgba(240,248,255,0.6)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    /hour
                  </span>
                </div>

                {/* Divider */}
                <div style={{
                  height: '1px',
                  background: isPopular ? 'rgba(255,255,255,0.08)' : 'var(--border-light)',
                }} />

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0,
                  display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                  {service.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{
                        width: '20px', height: '20px', borderRadius: '6px', flexShrink: 0,
                        background: isPopular ? 'rgba(56,189,248,0.15)' : 'rgba(37,99,235,0.1)',
                        border: isPopular ? '1px solid rgba(56,189,248,0.3)' : '1px solid rgba(37,99,235,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginTop: '1px',
                      }}>
                        <FaCheck size={9} style={{ color: isPopular ? '#38bdf8' : '#60a5fa' }} />
                      </span>
                      <span style={{
                        fontSize: '0.855rem',
                        color: isPopular ? 'rgba(240,248,255,0.8)' : 'var(--text-secondary)',
                        fontFamily: 'var(--font-sans)', lineHeight: 1.5,
                      }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="mailto:hamzashafiqueofficial@gmail.com"
                  style={{
                    display: 'block', textAlign: 'center',
                    padding: '13px 24px', borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '0.9rem', fontWeight: 700,
                    fontFamily: 'var(--font-sans)',
                    background: isPopular
                      ? 'linear-gradient(135deg,#2563eb,#7c3aed)'
                      : 'transparent',
                    color: isPopular ? '#fff' : 'var(--text-primary)',
                    border: isPopular
                      ? 'none'
                      : '1px solid var(--border-medium)',
                    boxShadow: isPopular ? '0 6px 20px rgba(37,99,235,0.4)' : 'none',
                    transition: 'all 0.25s ease',
                    marginTop: '8px',
                  }}
                  onMouseEnter={e => {
                    if (!isPopular) {
                      e.currentTarget.style.background = 'var(--bg-tertiary)';
                    } else {
                      e.currentTarget.style.opacity = '0.9';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = isPopular
                      ? 'linear-gradient(135deg,#2563eb,#7c3aed)'
                      : 'transparent';
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  Get Started
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            textAlign: 'center', marginTop: '44px',
            color: 'var(--text-secondary)', fontSize: '0.875rem',
            fontFamily: 'var(--font-sans)',
          }}
        >
          All prices are in USD · Fixed-price projects also available · Free consultation
        </motion.p>
      </div>
    </section>
  );
}
