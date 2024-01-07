// CustomCursor.jsx
import { useEffect, useRef } from 'react';
import './customCursor.css'; // Make sure to import your CSS file
import cursorImage from '../../assets/mouse.png'; // Update the path accordingly

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    const handleHover = () => {
      cursorRef.current.classList.add('zoomed');
    };

    const handleLeave = () => {
      cursorRef.current.classList.remove('zoomed');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleHover);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleHover);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" style={{ backgroundImage: `url(${cursorImage})` }} />;
};

export default CustomCursor;
