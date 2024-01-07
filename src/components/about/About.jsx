import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Bart from '../../assets/bart.png';
import BartSvg from '../../assets/bart1.png';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    if (isHovered) {
      gsap.to(image, { opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => {
        image.src = BartSvg;
        gsap.to(image, { opacity: 1, scale: 1, duration: 0.6 });
      }});
    } else {
      gsap.to(image, { opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => {
        image.src = Bart;
        gsap.to(image, { opacity: 1, scale: 1, duration: 0.6 });
      }});
    }
  }, [isHovered]);

  return (
    <div className='bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950 min-h-screen'>
      <div className='container mx-auto'>
        <div className="flex py-24 flex-col lg:flex-row">
          <div
            className='bg-gradient from-gray-800 lg:w-1/3'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className='text-white'>Yeah, thats me 😊.</span>
            <span className='text-white'> Hover me</span>
            <img
              ref={imageRef}
              src={Bart}
              alt="bart pic"
              className='border rounded-full object-cover'
            />
          </div>

            {/* right texts */}
            <div className='text-white lg:w-2/3 tracking-wider lg:ml-16 text-lg mt-10'>
            <p className="">Hi, I'm Dennis Bart-Plange, and I am a passionate web development.</p>
    
            <p className="py-4">I create web solutions and stay up-to-date with new technologies.</p>
          
            <p className="">With a strong foundation in Computer Science, I excel in crafting efficient and visually appealing code.</p>
          
            <p className="py-4">I'm also committed to teaching IT to Senior High School students, inspiring the next generation of tech enthusiasts.</p>
          
            <p className="">I'm excited to continue my journey in web development, always eager to learn, grow, and create remarkable online experiences.</p>
            </div>
            </div>  
  </div>
</div>)
};

export default About;
