import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './hero.css';

const Hero = () => {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth - e.clientX) / 100;
      const y = (window.innerHeight - e.clientY) / 100;

      gsap.to(layer1Ref.current, { x: x, y: y, duration: 0.5, ease: 'power2.out' });
      gsap.to(layer2Ref.current, { x: x * 2, y: y * 2, duration: 0.5, ease: 'power2.out' });
      gsap.to(layer3Ref.current, { x: x * 3, y: y * 3, duration: 0.5, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900 min-h-screen">
      <div className="container mx-auto min-h-screen relative z-10">
        <div className="relative">
          <div className="flex justify-between">
            <div className="mt-16 pt-16 md:mt-18 md:pt-24 w-full">
              <p className="text-xl tracking-wide text-white">hi, I am</p>
              <h1 className="py-4 text-5xl font-bold md:text-8xl tracking-wider text-white">Dennis Bart-Plange</h1>
              <h2 className="text-xl tracking-wide text-white">Software developer and IT Instructor</h2>
            </div>
            <div className="absolute max-w-full md:mt-64 md:pt-48 mt-48 pt-64">
              <p className='bg-white text-black p-2 tracking-wider'>Creating and crafting an experience you will love</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax layers */}
      <div ref={layer1Ref} className="parallax-layer layer1"></div>
      <div ref={layer2Ref} className="parallax-layer layer2"></div>
      <div ref={layer3Ref} className="parallax-layer layer3"></div>
    </section>
  );
};

export default Hero;
