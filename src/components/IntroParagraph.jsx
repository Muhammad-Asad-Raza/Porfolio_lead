import { motion } from 'framer-motion';

const IntroParagraph = () => {
  return (
    <section 
      style={{
        padding: '100px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative'
      }}
    >
      <div 
        style={{
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)',
            lineHeight: 1.6,
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-sans)',
            textAlign: 'center'
          }}
        >
          {/* Main Focus: Dark bold text */}
          <span 
            style={{ 
              color: 'var(--text-primary)', 
              fontWeight: 700 
            }}
          >
            I'm a full-stack engineer & AI specialist with 10+ years shipping products that move the needle—from zero to launch to scale. I build hybrid mobile apps (React Native/Flutter/Expo)
          </span>{' '}
          
          {/* Secondary Details: Muted elegant text */}
          <span 
            style={{ 
              color: 'var(--text-secondary)', 
              fontWeight: 400 
            }}
          >
            and robust backends (Node/NestJS, MongoDB/Postgres, WebSockets, cloud) with a bias for clean DX, measurable outcomes, and fast iteration.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default IntroParagraph;
