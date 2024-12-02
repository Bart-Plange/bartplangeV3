import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollProvider = ({ children }) => {
  const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  useEffect(() => {
    if (!isMobile()) {
      const lenis = new Lenis({
        smooth: true,
        duration: 2,
        easing: (t) => Math.sin((t * Math.PI) / 2),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: true,
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
