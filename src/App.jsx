import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroParagraph from './components/IntroParagraph';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <>
      {/* Premium custom mouse follow pointer */}
      <CustomCursor />

      {/* Glassmorphic navigation header bar */}
      <Navbar />

      {/* Main Single Page Sections flow */}
      <main id="home">
        {/* Section 1: Hero & grayscale portrait & code block */}
        <Hero />

        {/* Section 2: Bold editorial intro statement banner */}
        <IntroParagraph />

        {/* Section 3: Tech Stack orbital rings layout */}
        <TechStack />

        {/* Section 4: Projects with dynamic filters & devices mockups */}
        <Projects />

        {/* Section 5: Dual column client testimonial review box */}
        <Testimonials />
      </main>

      {/* Section 6: Let's build and deep charcoal footer block */}
      <Footer />
    </>
  );
}

export default App;
