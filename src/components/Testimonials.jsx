import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

// Placeholder avatar SVGs to use until real images are provided
const AvatarSVG = ({ color }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill={color} />
    <circle cx="50" cy="40" r="20" fill="rgba(255,255,255,0.9)" />
    <path d="M20 100C20 83.4315 33.4315 70 50 70C66.5685 70 80 83.4315 80 100" fill="rgba(255,255,255,0.9)" />
  </svg>
);

const Testimonials = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const reviews = [
    {
      id: 1,
      quote: "Working with Hamza transformed our patient management platform completely. He didn't just write code—he took the time to understand our unique healthcare challenges and built solutions that our medical staff actually enjoy using",
      author: "Sarah Chen",
      role: "CEO, HealthTech Solutions"
    },
    {
      id: 2,
      quote: "After two failed attempts, Hamza was a game-changer for our platform. He rebuilt our entire platform from scratch with a scalable architecture that handles our peak traffic flawlessly—a 300% increase...",
      author: "Michael Rodriguez",
      role: "Founder, ShopStream E-commerce"
    }
  ];

  const faqs = [
    {
      question: "What types of products do you build?",
      answer: "I build AI-powered mobile apps, SaaS platforms, marketplaces, dashboards, automation systems, and scalable backend infrastructures for startups and growing businesses."
    },
    {
      question: "Do you develop both iOS and Android apps?",
      answer: "Yes, I use cross-platform technologies like React Native and Flutter to deliver high-quality applications for both iOS and Android from a single codebase."
    },
    {
      question: "Can you integrate AI into existing products?",
      answer: "Absolutely. I specialize in integrating LLMs, custom retrieval-augmented generation (RAG) pipelines, and intelligent automations into legacy systems to enhance their capabilities."
    },
    {
      question: "Do you handle backend development as well?",
      answer: "Yes, I build robust, scalable backend architectures using Node.js, NestJS, Python, and robust databases like PostgreSQL and MongoDB."
    },
    {
      question: "How do you approach a new project?",
      answer: "I start with a deep-dive discovery phase to understand your business goals, followed by architecture planning, iterative development with CI/CD, and post-launch analytics monitoring."
    }
  ];

  return (
    <section 
      id="clients" 
      style={{
        padding: '100px 24px',
        background: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '100px' }}>
        
        {/* Original Testimonials Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}
          className="testimonials-grid"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                padding: '12px 0'
              }}
            >
              <span 
                className="font-serif"
                style={{
                  fontSize: '5rem',
                  lineHeight: '1',
                  color: 'var(--accent-blue)',
                  position: 'absolute',
                  top: '-45px',
                  left: '-10px',
                  opacity: 0.15,
                  userSelect: 'none'
                }}
              >
                “
              </span>
              <p 
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  zIndex: 2,
                  fontStyle: 'italic'
                }}
              >
                {review.quote}
              </p>
              <div style={{ marginTop: '20px', zIndex: 2 }}>
                <h4 
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    marginBottom: '4px'
                  }}
                >
                  {review.author}
                </h4>
                <p 
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Top Section: Testimonial Box */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'var(--bg-secondary)',
            borderRadius: '32px',
            padding: '80px 40px',
            textAlign: 'center',
            border: '1px solid var(--border-light)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            lineHeight: 1.3,
            marginBottom: '40px'
          }}>
            Hear from Those I've<br/>
            Helped Create Success
          </h2>

          {/* Overlapping Avatars */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
            {[
              { id: 1, img: 'https://randomuser.me/api/portraits/men/32.jpg', size: '50px', zIndex: 1, ml: '0px' },
              { id: 2, img: 'https://randomuser.me/api/portraits/women/44.jpg', size: '60px', zIndex: 2, ml: '-15px' },
              { id: 3, img: 'https://randomuser.me/api/portraits/men/46.jpg', size: '80px', zIndex: 3, ml: '-20px', border: '3px solid #f97316' },
              { id: 4, img: 'https://randomuser.me/api/portraits/women/68.jpg', size: '60px', zIndex: 2, ml: '-20px' },
              { id: 5, img: 'https://randomuser.me/api/portraits/men/85.jpg', size: '50px', zIndex: 1, ml: '-15px' },
            ].map(avatar => (
              <div 
                key={avatar.id}
                style={{
                  width: avatar.size,
                  height: avatar.size,
                  borderRadius: '50%',
                  marginLeft: avatar.ml,
                  zIndex: avatar.zIndex,
                  border: avatar.border || '4px solid var(--bg-secondary)',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
              >
                <img src={avatar.img} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '650px',
            margin: '0 auto 30px auto'
          }}>
            “Working with Hamza felt like having a technical co-founder on the team. From backend systems to mobile UX, everything was built with long-term scalability in mind.”
          </p>

          <h4 style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)'
          }}>
            James Sins, Fitness Freak App Founder
          </h4>
        </motion.div>

        {/* Bottom Section: FAQ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* FAQ Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-0.03em'
            }}>
              Frequently Asked<br/>
              Question
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '400px'
            }}>
              Here are some common questions along with their answers to help clear up any confusion.
            </p>
          </motion.div>

          {/* FAQ Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <div 
                  key={index}
                  onClick={() => setOpenFAQ(isOpen ? -1 : index)}
                  className="interactive"
                  whileHover={{ scale: 1.01, boxShadow: '0 10px 30px rgba(124,58,237,0.1)' }}
                  style={{
                    background: isOpen ? '#111111' : 'var(--bg-primary)',
                    border: isOpen ? '1px solid #111111' : '1px solid var(--border-medium)',
                    borderRadius: '16px',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    color: isOpen ? '#ffffff' : 'var(--text-primary)',
                    boxShadow: isOpen ? '0 10px 25px rgba(0,0,0,0.1), 0 0 20px rgba(124,58,237,0.2)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: isOpen ? 600 : 500,
                      margin: 0,
                      fontFamily: 'var(--font-sans)',
                      paddingRight: '20px'
                    }}>
                      {faq.question}
                    </h3>
                    <div style={{ 
                      color: isOpen ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'transform 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      <FaChevronDown size={14} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{
                          marginTop: '16px',
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          color: 'rgba(255,255,255,0.7)',
                          margin: 0
                        }}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
