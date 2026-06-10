import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [isFlying, setIsFlying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFlying(true);
    setTimeout(() => {
      setIsFlying(false);
      // Reset form or show success message here in future
    }, 600);
  };

  return (
    <section id="contact-us" style={{
      padding: '120px 24px',
      background: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border-light)'
    }}>
      {/* Decorative blurred blobs for 2026 UI */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '60px', position: 'relative', zIndex: 1, alignItems: 'center'
      }} className="contact-grid">
        
        {/* Left side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <span style={{
            display: 'inline-flex', padding: '6px 14px', borderRadius: '50px',
            background: 'rgba(37,99,235,0.1)', color: '#60a5fa', fontSize: '0.75rem',
            fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px',
            border: '1px solid rgba(37,99,235,0.2)', width: 'fit-content'
          }}>Contact Me</span>
          
          <h2 style={{
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--text-primary)',
            lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px', fontFamily: 'var(--font-sans)'
          }}>
            Let's start a <br/>
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>project together</span>
          </h2>
          
          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '440px'
          }}>
            Have an idea? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours to discuss the details.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
                <FaEnvelope size={18}/>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Email</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>hello@hamza.cybvegit.com</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                <FaMapMarkerAlt size={18}/>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Location</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>Available Worldwide</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side: Glassmorphic Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ boxShadow: '0 0 40px rgba(37,99,235,0.15)' }}
          style={{ transition: 'box-shadow 0.3s ease', borderRadius: '24px' }}
        >
          <form style={{
            background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '40px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column', gap: '24px'
          }} onSubmit={handleSubmit}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginLeft: '4px' }}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{
                width: '100%', padding: '16px 20px', borderRadius: '14px', background: 'rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease'
              }} onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'rgba(0,0,0,0.3)'; }} onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.05)'; e.target.style.background = 'rgba(0,0,0,0.2)'; }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginLeft: '4px' }}>Email Address</label>
              <input type="email" placeholder="john@example.com" style={{
                width: '100%', padding: '16px 20px', borderRadius: '14px', background: 'rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease'
              }} onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'rgba(0,0,0,0.3)'; }} onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.05)'; e.target.style.background = 'rgba(0,0,0,0.2)'; }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginLeft: '4px' }}>Message</label>
              <textarea placeholder="Tell me about your project..." rows="4" style={{
                width: '100%', padding: '16px 20px', borderRadius: '14px', background: 'rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', resize: 'vertical', transition: 'all 0.3s ease'
              }} onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'rgba(0,0,0,0.3)'; }} onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.05)'; e.target.style.background = 'rgba(0,0,0,0.2)'; }}></textarea>
            </div>

            <motion.button whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(59,130,246,0.3)' }} whileTap={{ scale: 0.98 }} type="submit" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: '#fff', border: 'none',
              padding: '18px', borderRadius: '14px', fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', marginTop: '10px', transition: 'box-shadow 0.3s ease'
            }}>
              Send Message
              <motion.div
                animate={isFlying ? { x: 40, y: -40, opacity: 0, scale: 0.5 } : { x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaPaperPlane size={16} />
              </motion.div>
            </motion.button>
          </form>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
