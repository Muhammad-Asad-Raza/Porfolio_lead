import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { caseStudies } from '../data/caseStudies';
import { useNav } from '../context/NavigationContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function CaseStudyDetail({ id }) {
  const { goHome } = useNav();
  const cs = caseStudies.find(c => c.id === id);
  if (!cs) return null;
  const isLife = cs.id === 1;

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'var(--font-sans)' }}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--bg-primary)',
        padding: '110px 20px 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {/* Back */}
          <motion.button
            initial={{ opacity:0, x:-14 }} animate={{ opacity:1, x:0 }}
            onClick={goHome}
            style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              background:'var(--bg-tertiary)', border:'1px solid var(--border-light)',
              color:'var(--text-secondary)', padding:'8px 18px', borderRadius:'50px',
              cursor:'pointer', fontSize:'0.82rem', fontWeight:600, marginBottom:'40px',
            }}
          >
            <FaArrowLeft size={11}/> Back to Portfolio
          </motion.button>

          {/* Label + Title + Tagline */}
          <motion.span {...fadeUp(0)} style={{
            fontSize:'0.85rem', fontWeight:700, color:cs.accent,
            display:'block', marginBottom:'12px',
          }}>
            {cs.subtitle}
          </motion.span>

          <motion.h1 {...fadeUp(0.07)} style={{
            fontSize:'clamp(2.8rem, 7vw, 5.5rem)', fontWeight:900,
            color:'var(--text-primary)', lineHeight:0.95,
            letterSpacing:'-0.04em', marginBottom:'20px',
          }}>
            {cs.title}
          </motion.h1>

          <motion.p {...fadeUp(0.13)} style={{
            fontSize:'1rem', color:'var(--text-secondary)',
            lineHeight:1.7, maxWidth:'580px', marginBottom:'52px',
          }}>
            {cs.tagline}
          </motion.p>

          {/* ── Hero image ── */}
          <motion.div
            initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:0.18, ease:[0.22,1,0.36,1] }}
          >
            {isLife ? (
              /* 3 phone screenshots side by side */
              <div style={{
                display:'flex', justifyContent:'center',
                alignItems:'flex-end', gap:'16px',
              }}>
                <div style={{
                  transform:'rotate(-5deg) translateY(22px)', zIndex:1,
                  borderRadius:'18px', overflow:'hidden',
                  boxShadow:'0 12px 36px rgba(0,0,0,0.18)',
                  width:'clamp(110px,18vw,160px)', flexShrink:0,
                  background:'#f0f0f0',
                }}>
                  <img src="/case-studies/homeleft.png" alt="Screen"
                    style={{ width:'100%', display:'block' }}/>
                </div>
                <div style={{
                  zIndex:2,
                  borderRadius:'22px', overflow:'hidden',
                  boxShadow:'0 24px 60px rgba(0,0,0,0.28)',
                  width:'clamp(160px,28vw,240px)', flexShrink:0,
                  background:'#f0f0f0',
                }}>
                  <img src="/case-studies/homeleft.png" alt="Screen"
                    style={{ width:'100%', display:'block' }}/>
                </div>
                <div style={{
                  transform:'rotate(5deg) translateY(22px)', zIndex:1,
                  borderRadius:'18px', overflow:'hidden',
                  boxShadow:'0 12px 36px rgba(0,0,0,0.18)',
                  width:'clamp(110px,18vw,160px)', flexShrink:0,
                  background:'#f0f0f0',
                }}>
                  <img src="/case-studies/homeright.png" alt="Screen"
                    style={{ width:'100%', display:'block' }}/>
                </div>
              </div>
            ) : (
              /* Other case studies — promo image, max width capped */
              <div style={{
                maxWidth:'600px', margin:'0 auto',
                borderRadius:'20px', overflow:'hidden',
                boxShadow:'0 20px 56px rgba(0,0,0,0.2)',
              }}>
                <img src={cs.phoneSrc} alt={cs.title}
                  style={{ width:'100%', display:'block', objectFit:'contain' }}/>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ══ 3-COLUMN INFO ════════════════════════════════════= */}
      <section style={{
        background:'var(--bg-secondary)',
        borderTop:'1px solid var(--border-light)',
        borderBottom:'1px solid var(--border-light)',
        padding:'60px 20px',
      }}>
        <div style={{
          maxWidth:'1000px', margin:'0 auto',
          display:'grid', gridTemplateColumns:'repeat(3,1fr)',
          gap:'1px', background:'var(--border-light)',
          borderRadius:'18px', overflow:'hidden',
          border:'1px solid var(--border-light)',
        }} className="cs-3col">
          {[
            { icon:'⊕', heading:'MY RESPONSIBILITIES', items:cs.responsibilities },
            { icon:'⊞', heading:'DELIVERABLES',        items:cs.deliverables },
            { icon:'⊟', heading:'IMPORTANT ASPECTS',   items:cs.aspects },
          ].map((col, i) => (
            <motion.div key={col.heading} {...fadeUp(i*0.08)}
              style={{ background:'var(--bg-primary)', padding:'28px 26px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px' }}>
                <span style={{ fontSize:'1rem', color:cs.accent }}>{col.icon}</span>
                <h4 style={{
                  fontSize:'0.68rem', fontWeight:800, letterSpacing:'0.13em',
                  color:cs.accent, textTransform:'uppercase', margin:0,
                }}>
                  {col.heading}
                </h4>
              </div>
              <ul style={{ listStyle:'none', padding:0, margin:0,
                display:'flex', flexDirection:'column', gap:'8px' }}>
                {col.items.map((item, j) => (
                  <li key={j} style={{ display:'flex', alignItems:'flex-start', gap:'8px' }}>
                    <span style={{ color:cs.accent, marginTop:'3px', fontSize:'0.65rem', flexShrink:0 }}>•</span>
                    <span style={{ fontSize:'0.85rem', color:'var(--text-secondary)', lineHeight:1.5 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ PROBLEM AREA ═════════════════════════════════════= */}
      <section style={{
        background:cs.accent, padding:'68px 20px', position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          backgroundImage:'radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)',
          backgroundSize:'28px 28px',
        }}/>
        <div style={{ maxWidth:'860px', margin:'0 auto', position:'relative' }}>
          <motion.div {...fadeUp()}>
            <h2 style={{
              fontSize:'clamp(1.5rem,3.5vw,2.4rem)', fontWeight:800,
              color:'#fff', marginBottom:'18px',
            }}>
              The Problem Area
            </h2>
            <p style={{ fontSize:'0.95rem', color:'rgba(255,255,255,0.9)',
              lineHeight:1.8, marginBottom:'14px', fontWeight:600 }}>
              {cs.problem}
            </p>
            <p style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.75)', lineHeight:1.8 }}>
              {cs.problemBold}
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.12)} style={{
            marginTop:'40px', paddingTop:'36px',
            borderTop:'1px solid rgba(255,255,255,0.2)',
          }}>
            <h3 style={{ fontSize:'1.35rem', fontWeight:800, color:'#fff', marginBottom:'12px' }}>
              The Challenge
            </h3>
            <p style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.8)', lineHeight:1.8 }}>
              {cs.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ PROBLEMS LIST ════════════════════════════════════= */}
      <section style={{
        background:'var(--bg-primary)',
        borderBottom:'1px solid var(--border-light)', padding:'68px 20px',
      }}>
        <div style={{
          maxWidth:'1000px', margin:'0 auto',
          display:'grid', gridTemplateColumns:'1fr 1.3fr',
          gap:'60px', alignItems:'center',
        }} className="cs-2col">
          <motion.div {...fadeUp()}>
            <span style={{
              fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em',
              textTransform:'uppercase', color:cs.accent, display:'block', marginBottom:'10px',
            }}>Problem</span>
            <h2 style={{
              fontSize:'clamp(1.3rem,2.5vw,1.9rem)', fontWeight:800,
              color:'var(--text-primary)', lineHeight:1.25, marginBottom:'28px',
            }}>
              Top Common Problems People Face
            </h2>
            <div style={{
              maxWidth:'220px', borderRadius:'16px', overflow:'hidden',
              boxShadow:'0 12px 36px rgba(0,0,0,0.14)', background:'#f0f0f0',
            }}>
              <img src={cs.phoneSrc} alt={cs.title}
                style={{ width:'100%', display:'block', objectFit:'contain' }}/>
            </div>
          </motion.div>

          <motion.ol {...fadeUp(0.1)} style={{
            listStyle:'none', padding:0, margin:0,
            display:'flex', flexDirection:'column', gap:'10px',
          }}>
            {cs.problems.map((p, i) => (
              <motion.li key={i}
                initial={{ opacity:0, x:18 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.04, duration:0.38 }}
                style={{ display:'flex', alignItems:'flex-start', gap:'12px' }}
              >
                <span style={{
                  width:'24px', height:'24px', borderRadius:'50%', flexShrink:0,
                  background:`rgba(${cs.accentRgb},0.1)`,
                  border:`1px solid rgba(${cs.accentRgb},0.25)`,
                  color:cs.accent, fontSize:'0.68rem', fontWeight:800,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  {i+1}
                </span>
                <span style={{ fontSize:'0.86rem', color:'var(--text-secondary)',
                  lineHeight:1.6, paddingTop:'3px' }}>
                  {p}
                </span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ══ SOLUTION ════════════════════════════════════════= */}
      <section style={{
        background:'var(--bg-secondary)', padding:'68px 20px 0', overflow:'hidden',
      }}>
        {/* Marquee */}
        <div style={{
          overflow:'hidden', marginBottom:'56px',
          borderTop:'1px solid var(--border-light)',
          borderBottom:'1px solid var(--border-light)',
          padding:'12px 0', background:'var(--bg-primary)',
        }}>
          <motion.div
            animate={{ x:['0%','-50%'] }}
            transition={{ duration:20, repeat:Infinity, ease:'linear' }}
            style={{ display:'flex', gap:'40px', width:'max-content' }}
          >
            {[...Array(10)].map((_,i) => (
              <span key={i} style={{
                fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.08em',
                textTransform:'uppercase', color:'var(--text-secondary)',
                display:'flex', alignItems:'center', gap:'12px', whiteSpace:'nowrap',
              }}>
                Apps That Scale Beyond MVP
                <span style={{ color:cs.accent }}>✦</span>
                Turning Startup Ideas Into Reality
                <span style={{ color:cs.accent }}>✦</span>
              </span>
            ))}
          </motion.div>
        </div>

        <div style={{ maxWidth:'1000px', margin:'0 auto' }}>
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr',
            gap:'60px', alignItems:'start', paddingBottom:'56px',
          }} className="cs-2col">
            <motion.div {...fadeUp()}>
              <span style={{
                fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em',
                textTransform:'uppercase', color:cs.accent, display:'block', marginBottom:'10px',
              }}>Solution</span>
              <h2 style={{
                fontSize:'clamp(1.3rem,2.5vw,2rem)', fontWeight:800,
                color:'var(--text-primary)', lineHeight:1.2, marginBottom:'16px',
              }}>
                {cs.solutionTitle}
              </h2>
              <p style={{ fontSize:'0.9rem', color:'var(--text-secondary)', lineHeight:1.75 }}>
                {cs.solutionDesc}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)} style={{
              padding:'24px 28px', borderRadius:'16px',
              background:'var(--bg-primary)', border:'1px solid var(--border-light)',
            }}>
              <h4 style={{ fontSize:'0.95rem', fontWeight:800,
                color:'var(--text-primary)', marginBottom:'6px' }}>
                {cs.solutionIteration}
              </h4>
              <p style={{ fontSize:'0.8rem', color:'var(--text-secondary)', marginBottom:'18px' }}>
                {cs.solutionDesc}
              </p>
              <h5 style={{
                fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.08em',
                textTransform:'uppercase', color:'var(--text-secondary)', marginBottom:'12px',
              }}>Improvements</h5>
              <div style={{ display:'flex', flexDirection:'column', gap:'9px' }}>
                {cs.improvements.map((imp, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'9px' }}>
                    <FaCheck size={10} style={{ color:cs.accent, marginTop:'3px', flexShrink:0 }}/>
                    <span style={{ fontSize:'0.85rem', color:'var(--text-secondary)', lineHeight:1.55 }}>
                      {imp}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SOLUTION SCREENS ════════════════════════════════= */}
      <section style={{
        background:'var(--bg-primary)',
        borderTop:'1px solid var(--border-light)', padding:'60px 20px',
      }}>
        <div style={{ maxWidth:'1000px', margin:'0 auto' }}>
          <motion.div {...fadeUp()} style={{ marginBottom:'36px' }}>
            <span style={{
              fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em',
              textTransform:'uppercase', color:cs.accent, display:'block', marginBottom:'10px',
            }}>Final Screens</span>
            <h2 style={{
              fontSize:'clamp(1.3rem,2.5vw,2rem)', fontWeight:800,
              color:'var(--text-primary)',
            }}>Complete App Overview</h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} style={{
            borderRadius:'18px', overflow:'hidden',
            border:'1px solid var(--border-light)',
            boxShadow:'0 16px 50px rgba(0,0,0,0.12)',
          }}>
            <img
              src={isLife && cs.solutionGrid ? cs.solutionGrid : cs.phoneSrc}
              alt="App screens"
              style={{ width:'100%', display:'block' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ══ RESULTS ════════════════════════════════════════== */}
      <section style={{
        background:'var(--bg-secondary)',
        borderTop:'1px solid var(--border-light)', padding:'68px 20px',
      }}>
        <div style={{ maxWidth:'860px', margin:'0 auto', textAlign:'center' }}>
          <motion.h2 {...fadeUp()} style={{
            fontSize:'clamp(1.6rem,3.5vw,2.4rem)', fontWeight:800,
            color:'var(--text-primary)', marginBottom:'44px',
          }}>
            Results & Impact
          </motion.h2>

          <div style={{
            display:'grid',
            gridTemplateColumns:`repeat(${cs.results.length},1fr)`,
            gap:'16px', marginBottom:'52px',
          }} className="cs-results">
            {cs.results.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity:0, scale:0.9 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.08 }}
                style={{
                  padding:'24px 12px', borderRadius:'14px',
                  background:'var(--bg-primary)',
                  border:`1px solid rgba(${cs.accentRgb},0.2)`,
                }}>
                <div style={{ fontSize:'2.2rem', fontWeight:900, color:cs.accent, lineHeight:1 }}>
                  {r.value}
                </div>
                <div style={{ fontSize:'0.75rem', color:'var(--text-secondary)', marginTop:'6px' }}>
                  {r.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
            onClick={goHome}
            style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              background:'linear-gradient(135deg,#2563eb,#7c3aed)',
              color:'#fff', padding:'13px 30px', borderRadius:'50px',
              border:'none', cursor:'pointer',
              fontSize:'0.88rem', fontWeight:700,
              boxShadow:'0 8px 24px rgba(37,99,235,0.4)',
            }}>
            <FaArrowLeft size={11}/> Back to Portfolio
          </motion.button>
        </div>
      </section>

      {/* ══ RESPONSIVE STYLES ══════════════════════════════== */}
      <style>{`
        @media (max-width: 768px) {
          .cs-3col { grid-template-columns: 1fr !important; }
          .cs-2col { grid-template-columns: 1fr !important; gap: 36px !important; }
          .cs-results { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .cs-results { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
