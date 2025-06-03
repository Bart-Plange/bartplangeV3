// CustomCursor.jsx
import { useEffect, useRef } from 'react';
import './customCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const posRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);
  const targetScaleRef = useRef(1);

  useEffect(() => {
    // Initialize cursor position
    posRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    targetPosRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleHover = () => {
      targetScaleRef.current = 1.2;
    };

    const handleLeave = () => {
      targetScaleRef.current = 1;
    };

    // Detect hoverable elements
    const hoverableElements = document.querySelectorAll('a, button, .hoverable');
    hoverableElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (followerRef.current) followerRef.current.style.opacity = '0.7';
    });
    document.addEventListener('mouseleave', () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (followerRef.current) followerRef.current.style.opacity = '0';
    });

    // Animation loop
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        // Smooth movement with easing
        const delta = Math.min((time - previousTimeRef.current) / 16, 2.5);
        
        // Main cursor movement
        posRef.current.x += (targetPosRef.current.x - posRef.current.x) * 0.15 * delta;
        posRef.current.y += (targetPosRef.current.y - posRef.current.y) * 0.15 * delta;
        
        // Scale transition
        scaleRef.current += (targetScaleRef.current - scaleRef.current) * 0.15 * delta;
        
        // Apply transformations
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) scale(${scaleRef.current})`;
        }
        
        // Follower movement with delay
        if (followerRef.current) {
          followerRef.current.style.transform = `translate(${targetPosRef.current.x}px, ${targetPosRef.current.y}px)`;
        }
      }
      
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleHover);
      document.removeEventListener('mouseleave', handleLeave);
      
      hoverableElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
      
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="custom-cursor" 
        style={{ 
          opacity: 0,
          transition: 'opacity 0.3s ease, transform 0.1s linear'
        }} 
      />
      <div 
        ref={followerRef} 
        className="cursor-follower" 
        style={{ opacity: 0 }}
      />
    </>
  );
};

export default CustomCursor;