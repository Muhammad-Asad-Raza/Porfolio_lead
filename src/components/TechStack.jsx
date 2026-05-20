import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaAws, FaGraduationCap, FaUniversity, FaMobileAlt, FaLaptopCode, FaServer, FaLightbulb 
} from 'react-icons/fa';
import { 
  SiFlutter, SiNextdotjs, SiDotnet, SiMysql, SiMongodb, SiFirebase, SiGraphql 
} from 'react-icons/si';
import { skills } from '../data/sampleData';

// Map icon strings from sampleData.js to React Icon components
const getTechIcon = (iconName) => {
  const iconMap = {
    FaReact: <FaReact style={{ color: '#61dafb' }} />,
    FaReact2: <FaReact style={{ color: '#61dafb' }} />,
    SiFlutter: <SiFlutter style={{ color: '#02569B' }} />,
    SiNextdotjs: <SiNextdotjs style={{ color: 'var(--text-primary)' }} />,
    FaNodeJs: <FaNodeJs style={{ color: '#339933' }} />,
    SiDotnet: <SiDotnet style={{ color: '#512bd4' }} />,
    SiMysql: <SiMysql style={{ color: '#00758f' }} />,
    SiMongodb: <SiMongodb style={{ color: '#47a248' }} />,
    SiFirebase: <SiFirebase style={{ color: '#ffca28' }} />,
    FaAws: <FaAws style={{ color: '#ff9900' }} />,
    SiGraphql: <SiGraphql style={{ color: '#e10098' }} />
  };

  return iconMap[iconName] || <FaLaptopCode style={{ color: 'var(--accent-blue)' }} />;
};

const TechStack = () => {
  // Let's divide skills among three concentric levels
  // Inner ring: 3 skills
  // Middle ring: 4 skills
  // Outer ring: 4 skills
  const innerSkills = skills.slice(0, 3);
  const middleSkills = skills.slice(3, 7);
  const outerSkills = skills.slice(7, 11);

  // Position nodes along a circle of a given radius (px) and starting angle
  const getOrbitalStyles = (index, total, radius) => {
    const angle = (index * (360 / total)) - 90; // offset by -90 to start at the top
    return {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
      zIndex: 10
    };
  };

  return (
    <section 
      id="tech-stack" 
      style={{
        padding: '120px 24px',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background soft lighting */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, var(--accent-blue-glow) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}
        className="tech-stack-grid"
      >
        {/* Left Side: Dynamic Concentric Circles & Orbital Tech Badges */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            height: '540px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          className="tech-stack-visual"
        >
          {/* Centered Graphic Core */}
          <div 
            style={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-blue) 0%, #4f46e5 100%)',
              boxShadow: '0 0 30px var(--accent-blue-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 15
            }}
          >
            <FaLaptopCode size={22} style={{ color: '#ffffff' }} />
          </div>

          {/* Concentric Ring 1 (Inner) */}
          <div 
            style={{
              position: 'absolute',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              background: 'transparent',
              pointerEvents: 'none'
            }}
          />
          {innerSkills.map((skill, index) => (
            <div key={skill.name} style={getOrbitalStyles(index, innerSkills.length, 90)}>
              <motion.div
                whileHover={{ scale: 1.15, zIndex: 30 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, delay: index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                className="glass interactive"
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                title={`${skill.name} (${skill.level}%)`}
              >
                {getTechIcon(skill.icon)}
              </motion.div>
            </div>
          ))}

          {/* Concentric Ring 2 (Middle) */}
          <div 
            style={{
              position: 'absolute',
              width: '340px',
              height: '340px',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              background: 'transparent',
              pointerEvents: 'none'
            }}
          />
          {middleSkills.map((skill, index) => (
            <div key={skill.name} style={getOrbitalStyles(index, middleSkills.length, 170)}>
              <motion.div
                whileHover={{ scale: 1.15, zIndex: 30 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, delay: index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass interactive"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                title={`${skill.name} (${skill.level}%)`}
              >
                {getTechIcon(skill.icon)}
              </motion.div>
            </div>
          ))}

          {/* Concentric Ring 3 (Outer) */}
          <div 
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              background: 'transparent',
              pointerEvents: 'none'
            }}
          />
          {outerSkills.map((skill, index) => (
            <div key={skill.name} style={getOrbitalStyles(index, outerSkills.length, 250)}>
              <motion.div
                whileHover={{ scale: 1.15, zIndex: 30 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, delay: index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass interactive"
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                title={`${skill.name} (${skill.level}%)`}
              >
                {getTechIcon(skill.icon)}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right Side: Philosophy text & section heading block */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
          className="tech-stack-text"
        >
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              style={{
                fontSize: 'clamp(3rem, 6vw, 4.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                marginBottom: '8px'
              }}
            >
              My Tech Stacks
            </h2>
            <p 
              style={{
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
                fontFamily: 'var(--font-sans)',
                marginBottom: '32px'
              }}
            >
              and more...
            </p>
          </motion.div>

          {/* Slogan Philosophy */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif"
            style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            I believe in writing clean, maintainable code with comprehensive documentation that stands the test of time.
          </motion.p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tech-stack-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          .tech-stack-visual {
            height: 420px !important;
            transform: scale(0.8);
          }
          .tech-stack-text {
            align-items: center !important;
            text-align: center !important;
          }
          .tech-stack-text p {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
