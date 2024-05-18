import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 2,
      easing: (t) => Math.sin((t * Math.PI)/2),
      direction: 'vertical',
      gestureDirection: 'both',
      smoothTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollProvider;
