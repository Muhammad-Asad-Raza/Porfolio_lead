import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroParagraph from './components/IntroParagraph';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetail from './components/CaseStudyDetail';
import ProjectDetail from './components/ProjectDetail';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { NavigationProvider, useNav } from './context/NavigationContext';
import './App.css';

/* ─── Section map: which component renders for each nav id ─ */
const SECTION_MAP = {
  'home':         () => <><Hero /><IntroParagraph /></>,
  'about-us':     () => <Hero />,
  'tech-stack':   () => <TechStack />,
  'portfolio':    () => <Projects />,
  'case-studies': () => <CaseStudies />,
  'clients':      () => <Testimonials />,
  'pricing':      () => <Pricing />,
  'contact-us':   () => <Contact />,
};

function AppContent() {
  const { page } = useNav();
  const isHome       = page.type === 'home';
  const isSection    = page.type === 'section';
  const isCaseStudy  = page.type === 'case-study';
  const isProject    = page.type === 'project';

  return (
    <>
      <CustomCursor />
      <Navbar />

      {/* ── FULL LANDING PAGE ── */}
      {isHome && (
        <main id="home">
          <Hero />
          <IntroParagraph />
          <TechStack />
          <Projects />
          <CaseStudies />
          <Testimonials />
          <Pricing />
          <Contact />
        </main>
      )}

      {/* ── SINGLE SECTION PAGE ── */}
      {isSection && (
        <main style={{ paddingTop: '80px', minHeight: '80vh' }}>
          {(SECTION_MAP[page.id] || (() => null))()}
        </main>
      )}

      {/* ── CASE STUDY DETAIL ── */}
      {isCaseStudy && (
        <main>
          <CaseStudyDetail id={page.id} />
        </main>
      )}

      {/* ── PROJECT DETAIL ── */}
      {isProject && (
        <main>
          <ProjectDetail id={page.id} />
        </main>
      )}

      {/* Footer always visible (also acts as contact section) */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
