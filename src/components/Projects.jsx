import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaGooglePlay, FaApple, FaExternalLinkAlt, FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';
import { projects } from '../data/sampleData';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  // Categories extraction
  const categories = ['All', 'Mobile', 'Web'];

  // Filtered projects
  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  return (
    <section 
      id="portfolio" 
      style={{
        padding: '120px 24px',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title Block */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 
            className="font-serif"
            style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '24px'
            }}
          >
            Other Projects
          </h2>

          {/* Interactive Categories Pill Buttons */}
          <div 
            style={{
              display: 'inline-flex',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-light)',
              padding: '6px',
              borderRadius: '30px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="interactive"
                style={{
                  background: filter === cat ? 'var(--accent-blue)' : 'none',
                  color: filter === cat ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: filter === cat ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Snappy Horizontal Scroll Carousel / Responsive Grid */}
        <motion.div 
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '40px',
            marginBottom: '70px'
          }}
          className="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass interactive"
                style={{
                  borderRadius: '24px',
                  border: '1px solid var(--border-light)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  boxShadow: 'var(--shadow-sm)',
                  background: 'var(--card-bg)',
                  overflow: 'hidden'
                }}
              >
                {/* Visual Section: Sleek device shell mockup for mobile app pictures */}
                <div 
                  style={{
                    height: '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '16px',
                    padding: '20px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Select phone frame based on ID / categories */}
                  {project.category === 'Mobile' ? (
                    project.id % 2 === 0 ? (
                      // iPhone Frame for Even ID
                      <div className="iphone-frame" style={{ height: '240px', width: '130px', borderRadius: '24px', padding: '5px', border: '1px solid #3a3a3c' }}>
                        <div className="iphone-screen" style={{ borderRadius: '18px' }}>
                          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
                    ) : (
                      // Android Frame for Odd ID
                      <div className="android-frame" style={{ height: '240px', width: '130px', borderRadius: '16px', padding: '4px', border: '1px solid #2e2e32' }}>
                        <div className="android-screen" style={{ borderRadius: '12px' }}>
                          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
                    )
                  ) : (
                    // Web Browser Frame for Web category
                    <div 
                      className="glass" 
                      style={{
                        width: '100%',
                        height: '180px',
                        borderRadius: '12px',
                        border: '1px solid var(--border-medium)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-md)'
                      }}
                    >
                      {/* Browser header with window dots */}
                      <div 
                        style={{
                          height: '24px',
                          background: 'var(--bg-tertiary)',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 10px',
                          gap: '6px',
                          borderBottom: '1px solid var(--border-light)'
                        }}
                      >
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                      </div>
                      {/* Browser Content */}
                      <div style={{ flex: 1, overflow: 'hidden' }}>
                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '10px' }}>
                  <h3 
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  <p 
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      flex: 1
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '8px 0 16px' }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          padding: '4px 10px',
                          borderRadius: '12px',
                          border: '1px solid var(--border-light)',
                          fontFamily: 'var(--font-sans)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '16px'
                    }}
                  >
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="interactive"
                        style={{
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-light)',
                          transition: 'all 0.2s'
                        }}
                        title="GitHub Repository"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}

                    {project.playstore && (
                      <a 
                        href={project.playstore} 
                        target="_blank" 
                        rel="noreferrer"
                        className="interactive"
                        style={{
                          color: '#00d084',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-light)',
                          transition: 'all 0.2s'
                        }}
                        title="Google Play Store"
                      >
                        <FaGooglePlay size={15} />
                      </a>
                    )}

                    {project.appstore && (
                      <a 
                        href={project.appstore} 
                        target="_blank" 
                        rel="noreferrer"
                        className="interactive"
                        style={{
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-light)',
                          transition: 'all 0.2s'
                        }}
                        title="Apple App Store"
                      >
                        <FaApple size={16} />
                      </a>
                    )}

                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="interactive"
                        style={{
                          color: 'var(--accent-blue)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-light)',
                          transition: 'all 0.2s'
                        }}
                        title="Live Site"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer block of the Projects section: Slogan */}
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p 
            className="font-serif"
            style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            I prioritize transparent communication and collaboration throughout the development lifecycle. My process involves thorough requirements gathering, regular progress updates, and continuous feedback integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
