import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  // Spring physics for smooth "liquid/delayed" motion
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 10); // Offset by half of cursor size
      cursorY.set(e.clientY - 10);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Apply global CSS class to body so default pointer goes away where custom cursor is active
    document.body.classList.add('custom-cursor-active');

    const handleMouseOver = (e) => {
      // Expand cursor when hovering interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive') ||
        target.closest('.interactive');
      
      if (isInteractive) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible, cursorX, cursorY]);

  // Render cursor only on desktop/pointing devices
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* ── Main Outer Glowing Ring ── */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          width: cursorType === 'hover' ? '54px' : '24px',
          height: cursorType === 'hover' ? '54px' : '24px',
          borderRadius: '50%',
          border: cursorType === 'hover' ? '1px solid #1d5cff' : '2px solid rgba(15, 23, 42, 0.4)',
          backgroundColor: cursorType === 'hover' ? 'rgba(29, 92, 255, 0.05)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: cursorType === 'hover' ? 'translate(-17px, -17px)' : 'none',
          boxShadow: cursorType === 'hover' ? '0 0 20px rgba(29, 92, 255, 0.3)' : 'none',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, border 0.2s, transform 0.2s, box-shadow 0.2s',
        }}
      />
      {/* ── Center Solid Core ── */}
      <div
        style={{
          position: 'fixed',
          left: mousePosition.x - 3,
          top: mousePosition.y - 3,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#1d5cff',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'transform 0.1s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
