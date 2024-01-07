import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const rotationContainerRef = useRef(null);

  useEffect(() => {
    const rotationContainer = rotationContainerRef.current;

    gsap.to(rotationContainer, {
      rotation: 360,  
      repeat: -1,     
      duration: 10,   
      ease: 'linear', 
    });
  }, []);

  return (
    <section className="bg-black">
      <div className="container mx-auto min-h-screen">
        <div className="text-white relative ">
          <div className="flex justify-between">
            <div className="mt-16 pt-16 md:mt-18 md:pt-24 lg:w-2/4 w-full">
              <p className="text-xl tracking-wide">hi, I am</p>
              <h1 className="py-4 text-5xl font-bold md:text-6xl tracking-wider">Dennis Bart-Plange</h1>
              <h2 className="text-xl tracking-wide">Web developer and designer</h2>
            </div>

            <div className="absolute max-w-full md:mt-64 md:pt-48 mt-48 pt-64">
              <p className='bg-white text-black p-2 tracking-wider'>Creating and crafting an experience you will love</p>
            </div>
          </div>

          <div className="absolute top-full left-2/3 transform-translate-x-1/2 -translate-y-1/2 tracking-widest" ref={rotationContainerRef}>
            <p>scroll here</p>
            <p>scroll here</p>
            <p>scroll here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
