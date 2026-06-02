import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaGooglePlay, FaApple, FaExternalLinkAlt,
  FaChevronLeft, FaChevronRight, FaChevronDown,
  FaCheckCircle, FaShieldAlt, FaMapMarkerAlt, FaMobileAlt,
  FaUsers, FaStar, FaLock, FaChartBar, FaBell, FaVideo,
  FaComments, FaShoppingCart, FaCalendarAlt, FaRoute,
} from 'react-icons/fa';
import { projects } from '../data/sampleData';

/* ─── 6 Featured project IDs (shown as cards by default) ─── */
const FEATURED_IDS = [2, 3, 5, 6, 8, 10];

/* ─── Feature bullets per project ──────────────────────────
   4 bullets each with icon + text                           */
const FEAT_ICONS = [FaCheckCircle, FaShieldAlt, FaMapMarkerAlt, FaBell,
                    FaUsers, FaStar, FaLock, FaChartBar, FaVideo,
                    FaComments, FaShoppingCart, FaCalendarAlt, FaRoute, FaMobileAlt];

const PROJECT_FEATURES = {
  1:   [["FaMobileAlt","Live GPS train tracking with real-time speed & stops"],
        ["FaBell",     "Pre-arrival notifications for each station"],
        ["FaRoute",    "Complete schedule of all trains & routes"],
        ["FaStar",     "Available on Android & iOS — 50k+ downloads"]],
  2:   [["FaCheckCircle","Material takeoff calculator for contractors"],
        ["FaChartBar", "Framing, plumbing, electrical & HVAC tools"],
        ["FaShieldAlt","EagleView reporting integration"],
        ["FaMobileAlt","Works offline — built for field use"]],
  3:   [["FaUsers",   "Connects service providers with clients instantly"],
        ["FaLock",    "Secure upfront payment system"],
        ["FaShieldAlt","Built-in arbitration for dispute resolution"],
        ["FaBell",    "Real-time booking & request management"]],
  4:   [["FaBell",    "Track emergencies across all of Sindh"],
        ["FaMapMarkerAlt","Real-time map routing for police response"],
        ["FaShieldAlt","Emergency reporting & live news alerts"],
        ["FaMobileAlt","Direct dial to 15, Edhi, Chippa & more"]],
  5:   [["FaShoppingCart","Real-time courier order tracking"],
        ["FaMapMarkerAlt","Pickup location map with confirmation"],
        ["FaCheckCircle","Package size & dimension configuration"],
        ["FaShieldAlt","Proof of delivery capture"]],
  6:   [["FaRoute",   "Full order management dashboard"],
        ["FaMapMarkerAlt","Optimized routing for every delivery"],
        ["FaChartBar", "Performance monitoring & reports"],
        ["FaCheckCircle","Digital proof of delivery capture"]],
  7:   [["FaRoute",   "Fleet vehicle tracking & route management"],
        ["FaMobileAlt","Driver & vehicle assignment system"],
        ["FaChartBar", "Full performance & inspection reports"],
        ["FaShieldAlt","Hazard management & safety monitoring"]],
  8:   [["FaCalendarAlt","Full Islamic calendar (Jantri 2025)"],
        ["FaStar",    "Monthly & yearly religious content"],
        ["FaMobileAlt","Complete offline reading capability"],
        ["FaShieldAlt","Spiritual consultancy contact integrated"]],
  9:   [["FaShoppingCart","Full food ordering ecosystem"],
        ["FaUsers",   "Customer, rider & restaurant apps in one"],
        ["FaRoute",   "Real-time delivery tracking"],
        ["FaStar",    "Available on Play Store & App Store"]],
  10:  [["FaVideo",   "Course access via PDF, audio & video"],
        ["FaUsers",   "Instructor platform for client management"],
        ["FaMobileAlt","Full offline functionality"],
        ["FaShieldAlt","Google & Apple sign-in support"]],
  11:  [["FaShoppingCart","Auto parts buy & sell marketplace"],
        ["FaCheckCircle","Browse by category — bumpers, mirrors, tyres"],
        ["FaUsers",   "Dealer & customer accounts"],
        ["FaStar",    "Available on Play Store & App Store"]],
  12:  [["FaMapMarkerAlt","Real-time GPS vehicle tracking"],
        ["FaBell",    "Geofencing alerts & push notifications"],
        ["FaChartBar", "Route replay & detailed reporting"],
        ["FaRoute",   "Multi-vehicle fleet management"]],
  13:  [["FaUsers",   "Job seeker & employer platform"],
        ["FaCheckCircle","Browse jobs by category (SEO, Riders, Retail)"],
        ["FaMobileAlt","Apply & track applications easily"],
        ["FaComments","Direct connection to employers"]],
  14:  [["FaShoppingCart","Daily grocery ordering made simple"],
        ["FaCheckCircle","Real-time inventory across categories"],
        ["FaRoute",   "Delivery tracking from store to door"],
        ["FaStar",    "Available on Play Store & App Store"]],
  15:  [["FaShoppingCart","Restaurant food ordering with full menu"],
        ["FaStar",    "Deals, discounts & combo offers"],
        ["FaBell",    "Real-time order status tracking"],
        ["FaCheckCircle","Fast cart & checkout experience"]],
  101: [["FaMobileAlt","Connects users with UK events & parties"],
        ["FaCalendarAlt","Event booking & reservation system"],
        ["FaShieldAlt",".NET Core robust & secure backend"],
        ["FaStar",    "Available on Android & iOS"]],
  102: [["FaUsers",   "Connect with Professional Organizers worldwide"],
        ["FaComments","Real-time chat functionality"],
        ["FaStar",    "In-app purchases for premium users"],
        ["FaCheckCircle","Checklist creation & management tools"]],
  103: [["FaVideo",   "Video consultations with certified doctors"],
        ["FaMobileAlt","AI-generated prescriptions"],
        ["FaComments","Real-time chat with consultants"],
        ["FaUsers",   "Easy consultant discovery"]],
  104: [["FaCheckCircle","Islamic Inheritance Calculator"],
        ["FaShieldAlt","Scholar-certified Sharia compliance"],
        ["FaMobileAlt","Legal forms & guidance integrated"],
        ["FaStar",    "Available on Play Store & App Store"]],
  105: [["FaUsers",   "Doctor-patient connection platform"],
        ["FaCalendarAlt","Appointment calendar for doctors"],
        ["FaCheckCircle","Prescription system in-app"],
        ["FaBell",    "Available on Google Play"]],
  106: [["FaMapMarkerAlt","Ride-sharing platform across Pakistan"],
        ["FaRoute",   "Real-time driver tracking"],
        ["FaLock",    "Secure booking & transparent pricing"],
        ["FaStar",    "Available on Apple App Store"]],
  107: [["FaCheckCircle","List property in just 5 minutes"],
        ["FaShieldAlt","Verified by regulatory authorities"],
        ["FaShoppingCart","Sale & rent listing types"],
        ["FaStar",    "Available on Google Play"]],
  108: [["FaShoppingCart","Mobile POS for small businesses"],
        ["FaChartBar", "Product & inventory management"],
        ["FaCheckCircle","Sales reporting & analytics"],
        ["FaStar",    "Available on Google Play"]],
  109: [["FaMobileAlt","Taxi booking ecosystem"],
        ["FaUsers",   "Separate driver & passenger apps"],
        ["FaMapMarkerAlt","Real-time ride tracking"],
        ["FaStar",    "Available on Google Play"]],
  110: [["FaStar",    "Islamic learning for children"],
        ["FaCheckCircle","Stories, quizzes & reward system"],
        ["FaMobileAlt","Earn stickers as you read & learn"],
        ["FaCalendarAlt","Available on Apple App Store"]],
};

/* ─── Icon component lookup ─────────────────────────────── */
const ICON_MAP = { FaCheckCircle, FaShieldAlt, FaMapMarkerAlt, FaBell,
                   FaUsers, FaStar, FaLock, FaChartBar, FaVideo,
                   FaComments, FaShoppingCart, FaCalendarAlt, FaRoute, FaMobileAlt };

/* ─── Image config ──────────────────────────────────────── */
const IMG_CFG = {
  1:{ fit:'cover',   bg:'#e8f0f8' }, 2:{ fit:'contain', bg:'#111217' },
  3:{ fit:'contain', bg:'#141824' }, 4:{ fit:'cover',   bg:'#0c1223' },
  5:{ fit:'contain', bg:'#f0f4ff' }, 6:{ fit:'contain', bg:'#f0f4ff' },
  7:{ fit:'cover',   bg:'#fff'    }, 8:{ fit:'contain', bg:'#061806' },
  9:{ fit:'contain', bg:'#c0392b' }, 10:{ fit:'contain', bg:'#faf4f8' },
  11:{ fit:'cover',  bg:'#f8f8f8' }, 12:{ fit:'cover',  bg:'#e8f4fc' },
  13:{ fit:'cover',  bg:'#0c1020' }, 14:{ fit:'cover',  bg:'#ff7b00' },
  15:{ fit:'cover',  bg:'#fff'    }, 101:{ fit:'cover', bg:'#1a0e2e' },
  102:{ fit:'cover', bg:'#e0f0f8' }, 103:{ fit:'cover', bg:'#e8f4ee' },
  104:{ fit:'cover', bg:'#0a1a2e' }, 105:{ fit:'contain',bg:'#e8f4ff' },
  106:{ fit:'contain',bg:'#f0f4ff' },107:{ fit:'contain',bg:'#0c1e3c' },
  108:{ fit:'cover', bg:'#000f1f' }, 109:{ fit:'cover', bg:'#061406' },
  110:{ fit:'contain', bg:'#e85d20' },
};

/* ─── Tech badge palette ─────────────────────────────────── */
const TECH = {
  'React Native':{ bg:'rgba(97,218,251,0.12)', color:'#38bdf8', bd:'rgba(97,218,251,0.25)' },
  'Flutter':     { bg:'rgba(84,197,248,0.12)',  color:'#67e8f9', bd:'rgba(84,197,248,0.25)' },
  'Node JS':     { bg:'rgba(74,222,128,0.1)',   color:'#4ade80', bd:'rgba(74,222,128,0.22)' },
  '.NET Core':   { bg:'rgba(167,139,250,0.12)', color:'#a78bfa', bd:'rgba(167,139,250,0.25)' },
  'Firebase':    { bg:'rgba(251,191,36,0.1)',   color:'#fbbf24', bd:'rgba(251,191,36,0.22)' },
  'MySQL':       { bg:'rgba(96,165,250,0.1)',   color:'#60a5fa', bd:'rgba(96,165,250,0.22)' },
  'MongoDB':     { bg:'rgba(74,222,128,0.1)',   color:'#4ade80', bd:'rgba(74,222,128,0.22)' },
  'WebRTC':      { bg:'rgba(251,191,36,0.1)',   color:'#fbbf24', bd:'rgba(251,191,36,0.22)' },
  'AWS Lambda':  { bg:'rgba(251,146,60,0.1)',   color:'#fb923c', bd:'rgba(251,146,60,0.22)' },
  'Stripe':      { bg:'rgba(129,140,248,0.1)',  color:'#818cf8', bd:'rgba(129,140,248,0.22)' },
  'Google Maps': { bg:'rgba(52,211,153,0.1)',   color:'#34d399', bd:'rgba(52,211,153,0.22)' },
  'GPS API':     { bg:'rgba(52,211,153,0.1)',   color:'#34d399', bd:'rgba(52,211,153,0.22)' },
  'SQL Server':  { bg:'rgba(96,165,250,0.1)',   color:'#60a5fa', bd:'rgba(96,165,250,0.22)' },
};
const gt = t => TECH[t] || { bg:'rgba(255,255,255,0.06)', color:'#94a3b8', bd:'rgba(255,255,255,0.1)' };

/* ════════════════════════════════════════════════════════════
   MAIN SECTION
════════════════════════════════════════════════════════════ */
export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featured  = projects.filter(p => FEATURED_IDS.includes(p.id));
  const remaining = projects.filter(p => !FEATURED_IDS.includes(p.id));

  return (
    <section id="portfolio" style={{
      padding: '110px 20px 96px',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient blobs */}
      <Blob color="#2563eb" top="-200px" left="-100px" size="600px" />
      <Blob color="#7c3aed" bottom="-150px" right="-100px" size="500px" />

      <div style={{ maxWidth: '1260px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
          style={{ textAlign:'center', marginBottom:'58px' }}
        >
          <span style={{
            display:'inline-flex', alignItems:'center', gap:'7px',
            background:'rgba(37,99,235,0.1)', border:'1px solid rgba(37,99,235,0.2)',
            borderRadius:'50px', padding:'5px 16px', marginBottom:'20px',
          }}>
            <span style={{ width:'6px', height:'6px', borderRadius:'50%',
              background:'linear-gradient(135deg,#3b82f6,#8b5cf6)', display:'inline-block' }} />
            <span style={{ fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.14em',
              color:'#60a5fa', textTransform:'uppercase', fontFamily:'var(--font-sans)' }}>
              Portfolio
            </span>
          </span>

          <h2 className="font-serif" style={{
            fontSize:'clamp(2.4rem, 5vw, 3.8rem)', fontWeight:400,
            color:'var(--text-primary)', lineHeight:1.1, marginBottom:'14px',
          }}>
            Projects I've Built
          </h2>
          <p style={{ color:'var(--text-secondary)', fontSize:'1rem',
            fontFamily:'var(--font-sans)', maxWidth:'440px',
            margin:'0 auto', lineHeight:1.7,
          }}>
            Real apps — shipped to production, used by real people worldwide.
          </p>
        </motion.div>

        {/* ── 6 Featured Cards Grid ── */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once:true, margin:'-40px' }}
          variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.07 } } }}
          style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill, minmax(340px, 1fr))',
            gap:'22px', marginBottom:'56px',
          }}
        >
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </motion.div>

        {/* ── Show More Button ── */}
        <div style={{ textAlign:'center', marginBottom: showAll ? '70px' : '0' }}>
          <motion.button
            onClick={() => setShowAll(v => !v)}
            whileHover={{ scale:1.04 }}
            whileTap={{ scale:0.97 }}
            style={{
              position:'relative', cursor:'pointer', border:'none',
              background:'linear-gradient(135deg,#2563eb,#7c3aed)',
              color:'#fff', fontFamily:'var(--font-sans)',
              fontSize:'1rem', fontWeight:700,
              padding:'16px 44px', borderRadius:'50px',
              boxShadow:'0 8px 32px rgba(37,99,235,0.45)',
              letterSpacing:'0.02em',
              display:'inline-flex', alignItems:'center', gap:'10px',
            }}
          >
            {/* Pulsing ring */}
            <motion.span
              animate={{ scale:[1,1.6,1], opacity:[0.6,0,0.6] }}
              transition={{ duration:2, repeat:Infinity, ease:'easeInOut' }}
              style={{
                position:'absolute', inset:0, borderRadius:'50px',
                border:'2px solid rgba(99,179,237,0.6)', pointerEvents:'none',
              }}
            />
            {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration:0.3 }}
            >
              <FaChevronDown size={14} />
            </motion.span>
          </motion.button>
        </div>

        {/* ── Alternating Split Layout — All Projects ── */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              exit={{ opacity:0 }}
              transition={{ duration:0.4 }}
            >
              {remaining.map((project, i) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={i}
                  reverse={i % 2 === 1}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Footer ── */}
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.55 }}
          style={{ textAlign:'center', paddingTop:'56px', borderTop:'1px solid var(--border-light)', marginTop:'16px' }}
        >
          <p className="font-serif" style={{
            fontSize:'clamp(1.05rem, 2vw, 1.45rem)',
            color:'var(--text-secondary)', lineHeight:1.75,
            fontWeight:400, maxWidth:'620px', margin:'0 auto',
          }}>
            Every project starts with a conversation and ends with{' '}
            <span style={{ color:'var(--accent-blue)', fontStyle:'italic' }}>
              something people actually love.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   PROJECT CARD (for 6 featured)
════════════════════════════════════════════════════════════ */
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const allImgs = project.images || [project.image];
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [auto, setAuto] = useState(true);
  const cfg = IMG_CFG[project.id] || { fit:'cover', bg:'var(--bg-tertiary)' };
  const hasStore = project.playstore || project.appstore || project.live;

  const goTo = useCallback((next, d=1) => { setDir(d); setIdx(next); }, []);

  useEffect(() => {
    if (allImgs.length < 2 || !auto) return;
    const t = setTimeout(() => goTo((idx+1) % allImgs.length, 1), 3000);
    return () => clearTimeout(t);
  }, [idx, auto, allImgs.length, goTo]);

  const prev = () => { setAuto(false); goTo((idx-1+allImgs.length)%allImgs.length,-1); };
  const next = () => { setAuto(false); goTo((idx+1)%allImgs.length,1); };

  const imgV = {
    enter: d => ({ x: d>0?'100%':'-100%', opacity:0 }),
    center: { x:0, opacity:1, transition:{ duration:0.35, ease:[0.22,1,0.36,1] } },
    exit:  d => ({ x: d>0?'-100%':'100%', opacity:0, transition:{ duration:0.25, ease:'easeIn' } }),
  };

  return (
    <motion.div
      variants={{ hidden:{opacity:0,y:40,scale:0.96}, show:{opacity:1,y:0,scale:1,
        transition:{duration:0.52,ease:[0.22,1,0.36,1]}} }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ y: hovered?-7:0,
        boxShadow: hovered
          ? '0 20px 52px rgba(0,0,0,0.45), 0 0 0 1px rgba(96,165,250,0.18)'
          : '0 4px 20px rgba(0,0,0,0.22)' }}
      transition={{ type:'spring', stiffness:260, damping:22 }}
      style={{
        borderRadius:'18px',
        border:`1px solid ${hovered?'rgba(96,165,250,0.25)':'var(--border-light)'}`,
        background:'var(--card-bg)', overflow:'hidden',
        display:'flex', flexDirection:'column', cursor:'default',
        transition:'border-color 0.3s ease', position:'relative',
      }}
    >
      {/* Image / Carousel */}
      <div style={{ position:'relative', height:'230px', background:cfg.bg,
        overflow:'hidden', flexShrink:0 }}
        onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}
      >
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.img key={idx} src={allImgs[idx]} alt={project.title}
            custom={dir} variants={imgV} initial="enter" animate="center" exit="exit"
            style={{ position:'absolute', inset:0, width:'100%', height:'100%',
              objectFit:cfg.fit, objectPosition:'center', display:'block' }}
          />
        </AnimatePresence>

        {/* Bottom fade */}
        <div style={{ position:'absolute', inset:0, zIndex:1,
          background:'linear-gradient(to top,rgba(10,14,26,0.85) 0%,transparent 55%)',
          pointerEvents:'none' }} />

        {/* Carousel arrows */}
        {allImgs.length > 1 && <>
          <CarrowBtn side="left"  show={hovered} onClick={prev}><FaChevronLeft  size={11}/></CarrowBtn>
          <CarrowBtn side="right" show={hovered} onClick={next}><FaChevronRight size={11}/></CarrowBtn>
          <div style={{ position:'absolute', bottom:'10px', left:0, right:0,
            display:'flex', justifyContent:'center', gap:'5px', zIndex:3 }}>
            {allImgs.map((_,i) => (
              <button key={i} onClick={() => { setAuto(false); goTo(i, i>idx?1:-1); }}
                style={{ width:i===idx?'18px':'6px', height:'6px', borderRadius:'3px',
                  border:'none', cursor:'pointer', padding:0, transition:'all 0.3s',
                  background: i===idx?'#60a5fa':'rgba(255,255,255,0.4)' }} />
            ))}
          </div>
        </>}

        {/* Category badge */}
        <div style={{ position:'absolute', top:'13px', left:'13px', zIndex:4,
          background:'linear-gradient(135deg,#2563eb,#7c3aed)', color:'#fff',
          fontSize:'0.62rem', fontWeight:800, letterSpacing:'0.12em',
          textTransform:'uppercase', padding:'4px 11px', borderRadius:'50px',
          fontFamily:'var(--font-sans)', boxShadow:'0 3px 10px rgba(37,99,235,0.45)' }}>
          {project.category}
        </div>

        {/* Store icons */}
        <div style={{ position:'absolute', top:'11px', right:'11px', display:'flex', gap:'6px', zIndex:4 }}>
          {project.github    && <Ico href={project.github}    cl="#94a3b8"><FaGithub       size={12}/></Ico>}
          {project.playstore && <Ico href={project.playstore} cl="#4ade80"><FaGooglePlay   size={11}/></Ico>}
          {project.appstore  && <Ico href={project.appstore}  cl="#60a5fa"><FaApple        size={13}/></Ico>}
          {project.live      && <Ico href={project.live}      cl="#fbbf24"><FaExternalLinkAlt size={10}/></Ico>}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding:'18px 20px 20px', display:'flex', flexDirection:'column', flex:1, gap:'9px' }}>
        <h3 style={{ margin:0, fontSize:'1.06rem', fontWeight:700,
          color:'var(--text-primary)', fontFamily:'var(--font-sans)', lineHeight:1.3 }}>
          {project.title}
        </h3>
        <p style={{ margin:0, fontSize:'0.845rem', color:'var(--text-secondary)',
          lineHeight:1.65, fontFamily:'var(--font-sans)', flex:1 }}>
          {project.description}
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'5px', paddingTop:'2px' }}>
          {project.tech.map(t => {
            const s = gt(t);
            return <span key={t} style={{ background:s.bg, color:s.color, border:`1px solid ${s.bd}`,
              fontSize:'0.68rem', fontWeight:700, padding:'3px 9px',
              borderRadius:'50px', fontFamily:'var(--font-sans)' }}>{t}</span>;
          })}
        </div>
        {hasStore && (
          <div style={{ display:'flex', flexWrap:'wrap', gap:'7px',
            paddingTop:'11px', borderTop:'1px solid var(--border-light)' }}>
            {project.playstore && <SBtn href={project.playstore} icon={<FaGooglePlay size={10}/>} label="Play Store" g="linear-gradient(135deg,#16a34a,#22c55e)" s="rgba(22,163,74,0.35)"/>}
            {project.appstore  && <SBtn href={project.appstore}  icon={<FaApple size={11}/>}      label="App Store"  g="linear-gradient(135deg,#2563eb,#60a5fa)" s="rgba(37,99,235,0.35)"/>}
            {project.live      && <SBtn href={project.live}      icon={<FaExternalLinkAlt size={9}/>} label="Live"   g="linear-gradient(135deg,#d97706,#f59e0b)" s="rgba(217,119,6,0.35)"/>}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   PROJECT ROW (alternating split layout — like landing page)
════════════════════════════════════════════════════════════ */
function ProjectRow({ project, index, reverse }) {
  const cfg      = IMG_CFG[project.id] || { fit:'cover', bg:'var(--bg-tertiary)' };
  const features = PROJECT_FEATURES[project.id] || [];
  const allImgs  = project.images || [project.image];
  const [imgIdx, setImgIdx] = useState(0);
  const storeLink = project.playstore || project.appstore || project.live;

  // Auto-cycle images in row
  useEffect(() => {
    if (allImgs.length < 2) return;
    const t = setInterval(() => setImgIdx(i => (i+1) % allImgs.length), 3200);
    return () => clearInterval(t);
  }, [allImgs.length]);

  const textX  = reverse ? 60 : -60;
  const imageX = reverse ? -60 : 60;

  return (
    <div style={{
      display:'flex', flexDirection: reverse ? 'row-reverse' : 'row',
      alignItems:'center', gap:'60px',
      padding:'64px 0',
      borderBottom:'1px solid var(--border-light)',
    }}>

      {/* ── Text side ── */}
      <motion.div
        initial={{ opacity:0, x:textX }}
        whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true, margin:'-80px' }}
        transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
        style={{ flex:1, minWidth:0 }}
      >
        {/* Category + number */}
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
          <span style={{
            background:'linear-gradient(135deg,#2563eb,#7c3aed)',
            color:'#fff', fontSize:'0.62rem', fontWeight:800,
            letterSpacing:'0.12em', textTransform:'uppercase',
            padding:'4px 12px', borderRadius:'50px',
            fontFamily:'var(--font-sans)',
          }}>
            {project.category}
          </span>
          <span style={{ fontSize:'0.75rem', color:'var(--text-secondary)',
            fontFamily:'var(--font-sans)', fontWeight:500 }}>
            #{String(index+1).padStart(2,'0')}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize:'clamp(1.5rem, 2.5vw, 2rem)', fontWeight:700,
          color:'var(--text-primary)', fontFamily:'var(--font-sans)',
          lineHeight:1.25, marginBottom:'12px',
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize:'0.95rem', color:'var(--text-secondary)',
          lineHeight:1.7, fontFamily:'var(--font-sans)',
          marginBottom:'24px', maxWidth:'480px',
        }}>
          {project.description}
        </p>

        {/* Feature bullets */}
        <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginBottom:'28px' }}>
          {features.map(([iconKey, text], fi) => {
            const Icon = ICON_MAP[iconKey] || FaCheckCircle;
            return (
              <motion.div
                key={fi}
                initial={{ opacity:0, x: textX * 0.5 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.45, delay: fi * 0.08, ease:[0.22,1,0.36,1] }}
                style={{ display:'flex', alignItems:'flex-start', gap:'12px' }}
              >
                <span style={{
                  width:'34px', height:'34px', borderRadius:'10px', flexShrink:0,
                  background:'rgba(37,99,235,0.12)',
                  border:'1px solid rgba(37,99,235,0.2)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#60a5fa',
                }}>
                  <Icon size={15} />
                </span>
                <span style={{
                  fontSize:'0.9rem', color:'var(--text-secondary)',
                  fontFamily:'var(--font-sans)', lineHeight:1.5, paddingTop:'7px',
                }}>
                  {text}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Tech tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'24px' }}>
          {project.tech.map(t => {
            const s = gt(t);
            return <span key={t} style={{ background:s.bg, color:s.color,
              border:`1px solid ${s.bd}`, fontSize:'0.7rem', fontWeight:700,
              padding:'4px 11px', borderRadius:'50px', fontFamily:'var(--font-sans)' }}>{t}</span>;
          })}
        </div>

        {/* Store links */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'10px' }}>
          {project.github    && <SBtn href={project.github}    icon={<FaGithub size={12}/>}       label="Source"     g="linear-gradient(135deg,#374151,#6b7280)" s="rgba(55,65,81,0.35)"/>}
          {project.playstore && <SBtn href={project.playstore} icon={<FaGooglePlay size={12}/>}   label="Play Store" g="linear-gradient(135deg,#16a34a,#22c55e)" s="rgba(22,163,74,0.35)"/>}
          {project.appstore  && <SBtn href={project.appstore}  icon={<FaApple size={13}/>}        label="App Store"  g="linear-gradient(135deg,#2563eb,#60a5fa)" s="rgba(37,99,235,0.35)"/>}
          {project.live      && <SBtn href={project.live}      icon={<FaExternalLinkAlt size={11}/>} label="Live"    g="linear-gradient(135deg,#d97706,#f59e0b)" s="rgba(217,119,6,0.35)"/>}
        </div>
      </motion.div>

      {/* ── Image side ── */}
      <motion.div
        initial={{ opacity:0, x:imageX }}
        whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true, margin:'-80px' }}
        transition={{ duration:0.65, ease:[0.22,1,0.36,1], delay:0.1 }}
        style={{ flex:'0 0 45%', position:'relative' }}
      >
        {/* Image container */}
        <div style={{
          borderRadius:'22px', overflow:'hidden',
          background: cfg.bg,
          height:'360px',
          boxShadow:'0 20px 60px rgba(0,0,0,0.35)',
          border:'1px solid rgba(255,255,255,0.08)',
          position:'relative',
        }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={allImgs[imgIdx]}
              alt={project.title}
              initial={{ opacity:0, scale:1.04 }}
              animate={{ opacity:1, scale:1 }}
              exit={{ opacity:0 }}
              transition={{ duration:0.45 }}
              style={{ width:'100%', height:'100%',
                objectFit:cfg.fit, objectPosition:'center', display:'block' }}
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div style={{ position:'absolute', inset:0, pointerEvents:'none',
            background:'linear-gradient(to top,rgba(10,14,26,0.6) 0%,transparent 50%)' }} />

          {/* "View" button overlay */}
          {storeLink && (
            <a href={storeLink} target="_blank" rel="noreferrer"
              style={{
                position:'absolute', bottom:'18px', left:'50%',
                transform:'translateX(-50%)',
                background:'rgba(255,255,255,0.15)',
                backdropFilter:'blur(10px)',
                border:'1px solid rgba(255,255,255,0.3)',
                color:'#fff', padding:'10px 28px', borderRadius:'50px',
                fontSize:'0.8rem', fontWeight:700, textDecoration:'none',
                fontFamily:'var(--font-sans)', letterSpacing:'0.04em',
                display:'flex', alignItems:'center', gap:'8px',
                whiteSpace:'nowrap',
              }}>
              <FaExternalLinkAlt size={11}/> View on Store
            </a>
          )}

          {/* Image dots (if multiple) */}
          {allImgs.length > 1 && (
            <div style={{ position:'absolute', top:'14px', right:'14px',
              display:'flex', gap:'5px', zIndex:2 }}>
              {allImgs.map((_,i) => (
                <button key={i} onClick={() => setImgIdx(i)}
                  style={{ width:i===imgIdx?'18px':'6px', height:'6px', borderRadius:'3px',
                    border:'none', cursor:'pointer', padding:0, transition:'all 0.3s',
                    background:i===imgIdx?'#60a5fa':'rgba(255,255,255,0.45)' }} />
              ))}
            </div>
          )}
        </div>

        {/* Decorative glow behind image */}
        <div style={{
          position:'absolute', inset:'-20px', borderRadius:'30px', zIndex:-1,
          background:'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />
      </motion.div>
    </div>
  );
}

/* ─── Micro helpers ─────────────────────────────────────── */
function CarrowBtn({ side, show, onClick, children }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position:'absolute', top:'50%', [side]:'8px', zIndex:4,
        transform:`translateY(-50%) scale(${h?1.12:1})`,
        width:'30px', height:'30px', borderRadius:'50%',
        background:'rgba(0,0,0,0.55)', backdropFilter:'blur(6px)',
        border:'1px solid rgba(255,255,255,0.15)', color:'#fff',
        cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
        opacity: show?1:0, transition:'opacity 0.25s, transform 0.2s', padding:0,
      }}>
      {children}
    </button>
  );
}

function Ico({ href, cl, children }) {
  const [h,setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display:'flex', alignItems:'center', justifyContent:'center',
        width:'28px', height:'28px', borderRadius:'50%',
        background: h?'rgba(255,255,255,0.18)':'rgba(0,0,0,0.5)',
        backdropFilter:'blur(6px)', border:`1px solid ${cl}55`, color:cl,
        textDecoration:'none', flexShrink:0,
        transform: h?'scale(1.14) translateY(-1px)':'scale(1)',
        transition:'all 0.2s ease',
      }}>
      {children}
    </a>
  );
}

function SBtn({ href, icon, label, g, s }) {
  const [h,setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display:'inline-flex', alignItems:'center', gap:'6px',
        background:g, color:'#fff', fontSize:'0.75rem', fontWeight:700,
        padding:'8px 18px', borderRadius:'50px', textDecoration:'none',
        fontFamily:'var(--font-sans)',
        boxShadow: h ? `0 8px 22px ${s}` : `0 3px 10px ${s}`,
        transform: h ? 'translateY(-2px)' : 'none',
        transition:'all 0.22s ease', whiteSpace:'nowrap',
      }}>
      {icon}{label}
    </a>
  );
}

function Blob({ color, top, right, bottom, left, size }) {
  return <span style={{
    position:'absolute', top, right, bottom, left,
    width:size, height:size, borderRadius:'50%', display:'block',
    background:`radial-gradient(circle, ${color}14 0%, transparent 68%)`,
    pointerEvents:'none',
  }} />;
}
