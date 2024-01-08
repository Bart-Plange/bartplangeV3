// HomePage.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { About, Contact, CustomCursor, Footer, Hero, Layout, Portfolio } from "../components";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  
  useEffect(() => {
    gsap.utils.toArray([heroRef, portfolioRef, aboutRef, contactRef]).forEach((sectionRef) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => animateIn(sectionRef.current),
        onLeave: () => animateOut(sectionRef.current),
        onEnterBack: () => animateIn(sectionRef.current),
        onLeaveBack: () => animateOut(sectionRef.current),
      });
    });
  }, []);

  const animateIn = (element) => {
    gsap.to(element, {
      height: '100vh',
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    });
  };

  const animateOut = (element) => {
    gsap.to(element, {
      height: 0,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  };

  return (
    <Layout>
      <CustomCursor />
      <Hero ref={heroRef} />
      <Portfolio ref={portfolioRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer ref={ footerRef } />
    </Layout>
  );
};

export default HomePage;
