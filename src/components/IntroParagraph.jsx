import { motion } from 'framer-motion';
import projectMblImage from '../assets/Project_MBL.png';

const IntroParagraph = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      style={{
        padding: '100px 24px',
        display: 'flex',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          width: '100%'
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-sans)',
              marginBottom: '16px',
              fontWeight: 500
            }}>
              (About Me)
            </p>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.1,
              maxWidth: '800px'
            }}>
              A Deep Dive<br/>
              into My Life's<br/>
              Experiences and<br/>
              Lessons Learned
            </h2>
          </motion.div>

          {/* Content Layout */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '60px',
            alignItems: 'flex-start',
            flexWrap: 'wrap'
          }}>
            {/* Left Image (`Project_MBL.png`) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                flex: '1 1 400px',
                maxWidth: '600px',
                cursor: 'pointer'
              }}
            >
              <img 
                src={projectMblImage} 
                alt="App Interface Mockup" 
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(133, 0, 214, 0.15))'
                }}
              />
            </motion.div>

            {/* Right Text Content */}
            <div style={{
              flex: '1 1 500px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.6
            }}>
              <motion.p variants={itemVariants}>
                AI-Driven Full-Stack Dev | React Native · Flutter · Node | I turn ideas into revenue-ready apps
              </motion.p>
              
              <motion.p variants={itemVariants}>
                I'm a full-stack engineer & AI specialist with 10+ years shipping products that move the needle—from zero to launch to scale. I build hybrid mobile apps (React Native/Flutter/Expo) and robust backends (Node/NestJS, MongoDB/Postgres, WebSockets, cloud) with a bias for clean DX, measurable outcomes, and fast iteration. Lately, I'm weaving GenAI into content, support, and ops to turn manual work into repeatable systems.
              </motion.p>

              <motion.div variants={itemVariants}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600 }}>What I do best</h4>
                <p>Idea → product: discovery, architecture, CI/CD, analytics.</p>
                <p style={{ marginTop: '8px' }}>Hybrid mobile: offline-first, push, deep links, native modules, store-ready.</p>
                <p style={{ marginTop: '8px' }}>Backends that scale: REST/WebSockets, Redis queues, Stripe/PayPal, auth/roles, observability.</p>
                <p style={{ marginTop: '8px' }}>Applied AI: LLM agents, retrieval, prompt systems, content pipelines, n8n automations.</p>
                <p style={{ marginTop: '8px' }}>Team enablement: docs, patterns, testing—architecture that survives v2 & v3.</p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600 }}>Stack I enjoy</h4>
                <p>
                  React Native, Flutter/Dart, Expo, Capacitor, TypeScript, Node/NestJS/Express, FastAPI, MongoDB/Postgres, Redis/BullMQ, WebSockets, Stripe/PayPal, Supabase/Firebase, Docker, NGINX, PM2, n8n, OpenAI.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600 }}>Exploring</h4>
                <p>
                  Agentic AI for support & growth loops, bridgeless RN, Flutter Impeller, offline-first sync, and high-signal product analytics.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600 }}>Let's build</h4>
                <p>
                  If you're a founder or team with a high-leverage idea—especially AI-powered or mobile-first—I can help you design, ship, and scale it.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroParagraph;
