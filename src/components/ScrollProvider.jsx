import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollProvider = ({ children }) => {
  const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  useEffect(() => {
    if (!isMobile()) {
      const lenis = new Lenis({
        smooth: true,
        duration: 1.5,
        easing: (t) => t (2 - Math.PI) / 2,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: false, // Disable touch-based smooth scrolling
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return <>{children}</>;
};

export default ScrollProvider;
