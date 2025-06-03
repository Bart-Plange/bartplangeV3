import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollProvider = ({ children }) => {
  useEffect(() => {
    // Improved mobile detection with SSR compatibility
    const isMobile = () => {
      if (typeof window === 'undefined') return false;
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    // Only initialize Lenis on non-mobile devices
    if (!isMobile()) {
      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 2,
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: false,
        infinite: false,
      });

      let animationFrameId;

      const raf = (time) => {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };

      animationFrameId = requestAnimationFrame(raf);

      // Handle window resize
      const handleResize = () => lenis.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return <>{children}</>;
};

export default ScrollProvider;