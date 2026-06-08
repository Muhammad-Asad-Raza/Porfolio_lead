import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowLeft, FaGooglePlay, FaApple, FaExternalLinkAlt, FaGithub,
  FaChevronLeft, FaChevronRight,
  FaCheckCircle, FaShieldAlt, FaMapMarkerAlt, FaBell,
  FaUsers, FaStar, FaLock, FaChartBar, FaVideo,
  FaComments, FaShoppingCart, FaCalendarAlt, FaRoute, FaMobileAlt,
} from 'react-icons/fa';
import { projects } from '../data/sampleData';
import { useNav } from '../context/NavigationContext';

/* ── Same features & config as Projects.jsx ─────────────── */
const ICON_MAP = {
  FaCheckCircle, FaShieldAlt, FaMapMarkerAlt, FaBell,
  FaUsers, FaStar, FaLock, FaChartBar, FaVideo,
  FaComments, FaShoppingCart, FaCalendarAlt, FaRoute, FaMobileAlt,
};

const PROJECT_FEATURES = {
  1:[[  'FaMobileAlt','Live GPS train tracking with real-time speed & stops'],
     ['FaBell',     'Pre-arrival notifications for each station'],
     ['FaRoute',    'Complete schedule of all trains & routes'],
     ['FaStar',     'Available on Android & iOS — 50k+ downloads']],
  2:[['FaCheckCircle','Material takeoff calculator for contractors'],
     ['FaChartBar', 'Framing, plumbing, electrical & HVAC tools'],
     ['FaShieldAlt','EagleView reporting integration'],
     ['FaMobileAlt','Works offline — built for field use']],
  3:[['FaUsers',   'Connects service providers with clients instantly'],
     ['FaLock',    'Secure upfront payment system'],
     ['FaShieldAlt','Built-in arbitration for dispute resolution'],
     ['FaBell',    'Real-time booking & request management']],
  4:[['FaBell',    'Track emergencies across all of Sindh'],
     ['FaMapMarkerAlt','Real-time map routing for police response'],
     ['FaShieldAlt','Emergency reporting & live news alerts'],
     ['FaMobileAlt','Direct dial to 15, Edhi, Chippa & more']],
  5:[['FaShoppingCart','Real-time courier order tracking'],
     ['FaMapMarkerAlt','Pickup location map with confirmation'],
     ['FaCheckCircle','Package size & dimension configuration'],
     ['FaShieldAlt','Proof of delivery capture']],
  6:[['FaRoute',   'Full order management dashboard'],
     ['FaMapMarkerAlt','Optimized routing for every delivery'],
     ['FaChartBar', 'Performance monitoring & reports'],
     ['FaCheckCircle','Digital proof of delivery capture']],
  7:[['FaRoute',   'Fleet vehicle tracking & route management'],
     ['FaMobileAlt','Driver & vehicle assignment system'],
     ['FaChartBar', 'Full performance & inspection reports'],
     ['FaShieldAlt','Hazard management & safety monitoring']],
  8:[['FaCalendarAlt','Full Islamic calendar (Jantri 2025)'],
     ['FaStar',    'Monthly & yearly religious content'],
     ['FaMobileAlt','Complete offline reading capability'],
     ['FaShieldAlt','Spiritual consultancy contact integrated']],
  9:[['FaShoppingCart','Full food ordering ecosystem'],
     ['FaUsers',   'Customer, rider & restaurant apps in one'],
     ['FaRoute',   'Real-time delivery tracking'],
     ['FaStar',    'Available on Play Store & App Store']],
  10:[['FaVideo',   'Course access via PDF, audio & video'],
      ['FaUsers',   'Instructor platform for client management'],
      ['FaMobileAlt','Full offline functionality'],
      ['FaShieldAlt','Google & Apple sign-in support']],
  11:[['FaShoppingCart','Auto parts buy & sell marketplace'],
      ['FaCheckCircle','Browse by category — bumpers, mirrors, tyres'],
      ['FaUsers',   'Dealer & customer accounts'],
      ['FaStar',    'Available on Play Store & App Store']],
  12:[['FaMapMarkerAlt','Real-time GPS vehicle tracking'],
      ['FaBell',    'Geofencing alerts & push notifications'],
      ['FaChartBar', 'Route replay & detailed reporting'],
      ['FaRoute',   'Multi-vehicle fleet management']],
  13:[['FaUsers',   'Job seeker & employer platform'],
      ['FaCheckCircle','Browse jobs by category'],
      ['FaMobileAlt','Apply & track applications easily'],
      ['FaComments','Direct connection to employers']],
  14:[['FaShoppingCart','Daily grocery ordering made simple'],
      ['FaCheckCircle','Real-time inventory across categories'],
      ['FaRoute',   'Delivery tracking from store to door'],
      ['FaStar',    'Available on Play Store & App Store']],
  15:[['FaShoppingCart','Restaurant food ordering with full menu'],
      ['FaStar',    'Deals, discounts & combo offers'],
      ['FaBell',    'Real-time order status tracking'],
      ['FaCheckCircle','Fast cart & checkout experience']],
  101:[['FaMobileAlt','Connects users with UK events & parties'],
       ['FaCalendarAlt','Event booking & reservation system'],
       ['FaShieldAlt','.NET Core robust & secure backend'],
       ['FaStar',    'Available on Android & iOS']],
  102:[['FaUsers',   'Connect with Professional Organizers worldwide'],
       ['FaComments','Real-time chat functionality'],
       ['FaStar',    'In-app purchases for premium users'],
       ['FaCheckCircle','Checklist creation & management tools']],
  103:[['FaVideo',   'Video consultations with certified doctors'],
       ['FaMobileAlt','AI-generated prescriptions'],
       ['FaComments','Real-time chat with consultants'],
       ['FaUsers',   'Easy consultant discovery']],
  104:[['FaCheckCircle','Islamic Inheritance Calculator'],
       ['FaShieldAlt','Scholar-certified Sharia compliance'],
       ['FaMobileAlt','Legal forms & guidance integrated'],
       ['FaStar',    'Available on Play Store & App Store']],
  105:[['FaUsers',   'Doctor-patient connection platform'],
       ['FaCalendarAlt','Appointment calendar for doctors'],
       ['FaCheckCircle','Prescription system in-app'],
       ['FaBell',    'Available on Google Play']],
  106:[['FaMapMarkerAlt','Ride-sharing platform across Pakistan'],
       ['FaRoute',   'Real-time driver tracking'],
       ['FaLock',    'Secure booking & transparent pricing'],
       ['FaStar',    'Available on Apple App Store']],
  107:[['FaCheckCircle','List property in just 5 minutes'],
       ['FaShieldAlt','Verified by regulatory authorities'],
       ['FaShoppingCart','Sale & rent listing types'],
       ['FaStar',    'Available on Google Play']],
  108:[['FaShoppingCart','Mobile POS for small businesses'],
       ['FaChartBar', 'Product & inventory management'],
       ['FaCheckCircle','Sales reporting & analytics'],
       ['FaStar',    'Available on Google Play']],
  109:[['FaMobileAlt','Taxi booking ecosystem'],
       ['FaUsers',   'Separate driver & passenger apps'],
       ['FaMapMarkerAlt','Real-time ride tracking'],
       ['FaStar',    'Available on Google Play']],
  110:[['FaStar',    'Islamic learning for children'],
       ['FaCheckCircle','Stories, quizzes & reward system'],
       ['FaMobileAlt','Earn stickers as you read & learn'],
       ['FaCalendarAlt','Available on Apple App Store']],
};

const IMG_BG = {
  1:'#e8f0f8', 2:'#111217', 3:'#141824', 4:'#0c1223',
  5:'#f0f4ff', 6:'#f0f4ff', 7:'#fff',    8:'#061806',
  9:'#c0392b', 10:'#faf4f8',11:'#f8f8f8',12:'#e8f4fc',
  13:'#0c1020',14:'#ff7b00',15:'#fff',
  101:'#1a0e2e',102:'#e0f0f8',103:'#e8f4ee',104:'#0a1a2e',
  105:'#e8f4ff',106:'#f0f4ff',107:'#0c1e3c',108:'#000f1f',
  109:'#061406',110:'#e85d20',
};

const TECH_COLORS = {
  'React Native':{ bg:'rgba(97,218,251,0.12)', color:'#38bdf8', bd:'rgba(97,218,251,0.25)' },
  'Flutter':     { bg:'rgba(84,197,248,0.12)', color:'#67e8f9', bd:'rgba(84,197,248,0.25)' },
  'Node JS':     { bg:'rgba(74,222,128,0.1)',  color:'#4ade80', bd:'rgba(74,222,128,0.22)' },
  '.NET Core':   { bg:'rgba(167,139,250,0.12)',color:'#a78bfa', bd:'rgba(167,139,250,0.25)' },
  'Firebase':    { bg:'rgba(251,191,36,0.1)',  color:'#fbbf24', bd:'rgba(251,191,36,0.22)' },
  'MySQL':       { bg:'rgba(96,165,250,0.1)',  color:'#60a5fa', bd:'rgba(96,165,250,0.22)' },
  'MongoDB':     { bg:'rgba(74,222,128,0.1)',  color:'#4ade80', bd:'rgba(74,222,128,0.22)' },
  'WebRTC':      { bg:'rgba(251,191,36,0.1)',  color:'#fbbf24', bd:'rgba(251,191,36,0.22)' },
  'AWS Lambda':  { bg:'rgba(251,146,60,0.1)',  color:'#fb923c', bd:'rgba(251,146,60,0.22)' },
  'Stripe':      { bg:'rgba(129,140,248,0.1)', color:'#818cf8', bd:'rgba(129,140,248,0.22)' },
  'Google Maps': { bg:'rgba(52,211,153,0.1)',  color:'#34d399', bd:'rgba(52,211,153,0.22)' },
  'GPS API':     { bg:'rgba(52,211,153,0.1)',  color:'#34d399', bd:'rgba(52,211,153,0.22)' },
  'SQL Server':  { bg:'rgba(96,165,250,0.1)',  color:'#60a5fa', bd:'rgba(96,165,250,0.22)' },
};
const gt = t => TECH_COLORS[t] || { bg:'rgba(255,255,255,0.06)', color:'#94a3b8', bd:'rgba(255,255,255,0.1)' };

/* ════════════════════════════════════════════════════════════
   PROJECT DETAIL PAGE
════════════════════════════════════════════════════════════ */
export default function ProjectDetail({ id }) {
  const { goHome } = useNav();
  const project = projects.find(p => p.id === id);
  if (!project) return null;

  const allImgs  = project.images || [project.image];
  const features = PROJECT_FEATURES[project.id] || [];
  const bg       = IMG_BG[project.id] || '#0f1117';
  const hasStore = project.playstore || project.appstore || project.live;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

      {/* ── Hero ── */}
      <div style={{
        padding: '130px 20px 0',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '400px', borderRadius: '50%', pointerEvents: 'none',
          background: 'radial-gradient(ellipse,rgba(37,99,235,0.1) 0%,transparent 70%)',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Back */}
          <motion.button
            initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
            onClick={goHome}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)', padding: '10px 18px', borderRadius: '50px',
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem', fontWeight: 600, marginBottom: '40px',
            }}
          >
            <FaArrowLeft size={12} /> Back to Portfolio
          </motion.button>

          {/* Split layout */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '60px', alignItems: 'center', paddingBottom: '72px',
          }}>
            {/* Left — text */}
            <motion.div
              initial={{ opacity:0, x:-40 }} animate={{ opacity:1, x:0 }}
              transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)',
                borderRadius: '50px', padding: '4px 14px', marginBottom: '18px',
              }}>
                <span style={{ width:'5px', height:'5px', borderRadius:'50%',
                  background:'linear-gradient(135deg,#3b82f6,#8b5cf6)', display:'inline-block' }} />
                <span style={{ fontSize:'0.65rem', fontWeight:800, letterSpacing:'0.14em',
                  color:'#60a5fa', textTransform:'uppercase', fontFamily:'var(--font-sans)' }}>
                  {project.category}
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800,
                color: 'var(--text-primary)', fontFamily: 'var(--font-sans)',
                lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em',
              }}>
                {project.title}
              </h1>

              <p style={{
                fontSize: '1rem', color: 'var(--text-secondary)',
                fontFamily: 'var(--font-sans)', lineHeight: 1.75, marginBottom: '28px',
              }}>
                {project.description}
              </p>

              {/* Tech */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'32px' }}>
                {project.tech.map(t => {
                  const s = gt(t);
                  return <span key={t} style={{ background:s.bg, color:s.color,
                    border:`1px solid ${s.bd}`, fontSize:'0.72rem', fontWeight:700,
                    padding:'4px 12px', borderRadius:'50px', fontFamily:'var(--font-sans)' }}>
                    {t}
                  </span>;
                })}
              </div>

              {/* Store links */}
              {hasStore && (
                <div style={{ display:'flex', flexWrap:'wrap', gap:'10px' }}>
                  {project.github && (
                    <StoreBtn href={project.github} icon={<FaGithub size={13}/>} label="GitHub"
                      g="linear-gradient(135deg,#374151,#6b7280)" s="rgba(55,65,81,0.35)"/>
                  )}
                  {project.playstore && (
                    <StoreBtn href={project.playstore} icon={<FaGooglePlay size={12}/>} label="Play Store"
                      g="linear-gradient(135deg,#16a34a,#22c55e)" s="rgba(22,163,74,0.35)"/>
                  )}
                  {project.appstore && (
                    <StoreBtn href={project.appstore} icon={<FaApple size={13}/>} label="App Store"
                      g="linear-gradient(135deg,#2563eb,#60a5fa)" s="rgba(37,99,235,0.35)"/>
                  )}
                  {project.live && (
                    <StoreBtn href={project.live} icon={<FaExternalLinkAlt size={11}/>} label="Live"
                      g="linear-gradient(135deg,#d97706,#f59e0b)" s="rgba(217,119,6,0.35)"/>
                  )}
                </div>
              )}
            </motion.div>

            {/* Right — image carousel */}
            <motion.div
              initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }}
              transition={{ duration:0.6, ease:[0.22,1,0.36,1], delay:0.1 }}
            >
              <ImageCarousel images={allImgs} bg={bg} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Features ── */}
      {features.length > 0 && (
        <div style={{
          padding: '80px 20px',
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-light)',
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.5 }}
              style={{ textAlign:'center', marginBottom:'52px' }}
            >
              <h2 style={{
                fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight:800,
                color: 'var(--text-primary)', fontFamily:'var(--font-sans)',
                marginBottom: '12px',
              }}>
                What This App Does
              </h2>
              <p style={{ color:'var(--text-secondary)', fontFamily:'var(--font-sans)',
                fontSize:'0.95rem', maxWidth:'440px', margin:'0 auto', lineHeight:1.7 }}>
                Key features built into {project.title}
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '20px',
            }}>
              {features.map(([iconKey, text], i) => {
                const Icon = ICON_MAP[iconKey] || FaCheckCircle;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity:0, y:24 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }}
                    transition={{ delay: i * 0.08, duration:0.45 }}
                    style={{
                      padding: '24px', borderRadius: '16px',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border-light)',
                      display: 'flex', flexDirection: 'column', gap: '14px',
                    }}
                  >
                    <span style={{
                      width:'44px', height:'44px', borderRadius:'12px',
                      background:'rgba(37,99,235,0.1)', border:'1px solid rgba(37,99,235,0.2)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      color:'#60a5fa',
                    }}>
                      <Icon size={18} />
                    </span>
                    <p style={{ fontSize:'0.9rem', color:'var(--text-secondary)',
                      fontFamily:'var(--font-sans)', lineHeight:1.6, margin:0 }}>
                      {text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── All Screenshots ── */}
      {allImgs.length > 1 && (
        <div style={{ padding:'80px 20px', background:'var(--bg-secondary)' }}>
          <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
            <motion.h2
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              style={{ fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:800,
                color:'var(--text-primary)', fontFamily:'var(--font-sans)',
                marginBottom:'36px', textAlign:'center' }}>
              App Screenshots
            </motion.h2>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'20px', justifyContent:'center' }}>
              {allImgs.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0, scale:0.95 }}
                  whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once:true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    borderRadius:'18px', overflow:'hidden',
                    background: bg, height:'320px',
                    flex:'1 1 280px', maxWidth:'380px',
                    boxShadow:'0 12px 36px rgba(0,0,0,0.2)',
                    border:'1px solid var(--border-light)',
                  }}
                >
                  <img src={src} alt={`${project.title} screenshot ${i+1}`}
                    style={{ width:'100%', height:'100%', objectFit:'contain',
                      objectPosition:'center', display:'block' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Back button ── */}
      <div style={{ padding:'60px 20px', textAlign:'center', background:'var(--bg-primary)' }}>
        <motion.button
          whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
          onClick={goHome}
          style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            background:'linear-gradient(135deg,#2563eb,#7c3aed)',
            color:'#fff', padding:'14px 32px', borderRadius:'50px',
            border:'none', cursor:'pointer',
            fontSize:'0.9rem', fontWeight:700, fontFamily:'var(--font-sans)',
            boxShadow:'0 8px 28px rgba(37,99,235,0.4)',
          }}>
          <FaArrowLeft size={12} /> Back to Portfolio
        </motion.button>
      </div>
    </div>
  );
}

/* ── Image Carousel ─────────────────────────────────────── */
function ImageCarousel({ images, bg }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = useCallback((next, d = 1) => { setDir(d); setIdx(next); }, []);

  useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => goTo((idx + 1) % images.length, 1), 3000);
    return () => clearInterval(t);
  }, [idx, images.length, goTo]);

  const imgV = {
    enter: d => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22,1,0.36,1] } },
    exit:  d => ({ x: d > 0 ? '-100%' : '100%', opacity: 0,
      transition: { duration: 0.28, ease: 'easeIn' } }),
  };

  return (
    <div style={{ position:'relative' }}>
      <div style={{
        borderRadius:'22px', overflow:'hidden', background: bg,
        height:'420px', boxShadow:'0 24px 64px rgba(0,0,0,0.35)',
        border:'1px solid var(--border-light)', position:'relative',
      }}>
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.img
            key={idx} src={images[idx]} alt="Project screenshot"
            custom={dir} variants={imgV} initial="enter" animate="center" exit="exit"
            style={{ position:'absolute', inset:0, width:'100%', height:'100%',
              objectFit:'contain', objectPosition:'center', display:'block' }}
          />
        </AnimatePresence>

        {/* Arrows */}
        {images.length > 1 && <>
          <ArrowBtn side="left" onClick={() => goTo((idx-1+images.length)%images.length,-1)}>
            <FaChevronLeft size={12}/>
          </ArrowBtn>
          <ArrowBtn side="right" onClick={() => goTo((idx+1)%images.length,1)}>
            <FaChevronRight size={12}/>
          </ArrowBtn>
        </>}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div style={{ display:'flex', justifyContent:'center', gap:'6px', marginTop:'14px' }}>
          {images.map((_,i) => (
            <button key={i} onClick={() => goTo(i, i > idx ? 1 : -1)}
              style={{
                width: i===idx ? '20px' : '7px', height:'7px', borderRadius:'4px',
                border:'none', cursor:'pointer', padding:0, transition:'all 0.3s',
                background: i===idx ? '#60a5fa' : 'var(--border-medium)',
              }} />
          ))}
        </div>
      )}
    </div>
  );
}

function ArrowBtn({ side, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      position:'absolute', top:'50%', [side]:'12px',
      transform:'translateY(-50%)', zIndex:4,
      width:'32px', height:'32px', borderRadius:'50%',
      background:'rgba(0,0,0,0.55)', backdropFilter:'blur(6px)',
      border:'1px solid rgba(255,255,255,0.15)',
      color:'#fff', cursor:'pointer',
      display:'flex', alignItems:'center', justifyContent:'center', padding:0,
    }}>
      {children}
    </button>
  );
}

function StoreBtn({ href, icon, label, g, s }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      style={{
        display:'inline-flex', alignItems:'center', gap:'6px',
        background:g, color:'#fff', fontSize:'0.8rem', fontWeight:700,
        padding:'10px 20px', borderRadius:'50px', textDecoration:'none',
        fontFamily:'var(--font-sans)', boxShadow:`0 4px 14px ${s}`,
        whiteSpace:'nowrap',
      }}>
      {icon}{label}
    </a>
  );
}
