// HomePage.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { About, Contact, Cta, CustomCursor, Footer, Hero, Layout, Portfolio } from "../components";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const ctaRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  
  useEffect(() => {
    gsap.utils.toArray([heroRef, portfolioRef, ctaRef, aboutRef, contactRef]).forEach((sectionRef) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top', // Start the animation when the top of the section hits the top of the viewport
        end: 'bottom bottom', // End the animation when the bottom of the section hits the bottom of the viewport
        onEnter: () => animateIn(sectionRef.current),
        onLeave: () => animateOut(sectionRef.current),
        onEnterBack: () => animateIn(sectionRef.current),
        onLeaveBack: () => animateOut(sectionRef.current),
      });
    });
  }, []);

  const animateIn = (element) => {
    gsap.to(element, {
      height: '100vh', // Set the height to 100% of the viewport height
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
      <Cta ref={ctaRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer ref={ footerRef } />
    </Layout>
  );
};

export default HomePage;
