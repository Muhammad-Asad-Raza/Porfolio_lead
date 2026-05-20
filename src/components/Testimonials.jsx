import { motion } from 'framer-motion';

const Testimonials = () => {
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

  return (
    <section 
      id="clients" 
      style={{
        padding: '120px 24px',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}
          className="testimonials-grid"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                padding: '12px 0'
              }}
            >
              {/* Giant Serif Quote Marks */}
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

              {/* Quote text */}
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

              {/* Author name & title */}
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
