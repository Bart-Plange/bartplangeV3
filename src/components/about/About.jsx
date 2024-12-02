import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Bart from '../../assets/bart.png';
import BartSvg from '../../assets/bart1.png';
import './about.css';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    if (isHovered) {
      gsap.to(image, {
        opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => {
          image.src = BartSvg;
          gsap.to(image, { opacity: 1, scale: 1, duration: 0.6 });
        }
      });
    } else {
      gsap.to(image, {
        opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => {
          image.src = Bart;
          gsap.to(image, { opacity: 1, scale: 1, duration: 0.6 });
        }
      });
    }
  }, [isHovered]);

  return (
    <div>
      {/* section 1 */}
      <section className='bg-black min-h-screen sticky top-0 z-10'>
        <div className="container mx-auto text-white pt-24">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>

          <div className='lg:w-1/2 mt-24 lg:hidden'>
            <p className='text-6xl font-bold tracking-wider md:text-8xl'>From <span className=' lg:px-2 border-b text-orange-500'>concepts</span></p>
            <p className='text-6xl font-bold pt-8 tracking-wider md:text-8xl'>to clicks</p>
          </div>

          <div className='hidden mt-20 lg:block'>
            <p className='text-9xl font-bold tracking-wider'>From <span className='lg:px-2 border-b bg-gradient-to-tr text-transparent bg-clip-text from-orange-600 via-orange-900 to-slate-950'>concepts</span>to <span className='border-b bg-gradient-to-tr text-transparent bg-clip-text from-orange-600 via-orange-900 to-slate-950'>clicks</span></p>
          </div>

          <div className='pt-8 '>
            <button className='border p-3 md:w-1/5 btn-23 tracking-wide'><span className='text'> Talk to me </span>
              <span className='marquee '> Talk to me </span>
            </button>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className='bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950 min-h-screen z-20 sticky top-0' id='about'>
        <div className='container mx-auto'>
          <div className="flex py-24 flex-col lg:flex-row">
            <div
              className='bg-gradient from-gray-800 lg:w-1/3 pt-10'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                ref={imageRef}
                src={Bart}
                alt="bart pic"
                className='border rounded-full object-cover'
              />
            </div>
            <div className='text-white lg:w-2/3 tracking-wider lg:ml-16 text-lg mt-10'>
              <p className="">Hi, I'm Dennis Bart-Plange, and I am a <span className='text-green-500'>software developer.</span></p>
              <p className="py-4">I have been an <span className='text-green-500'>Administrator</span> and <span className='text-green-500'>Department Head.</span></p>
              <p className="">Additionally, I have worked as an IT specialist and taught in different schools and campuses for over 6 years.</p>
              <p className="py-4">Furthermore, I have created multiple software programs and websites and established a personal portfolio.</p>

              <div className='md:flex lg:gap-24'>
                <div>
                <p className="text-orange-500">Specialization:</p>
                <div className='flex align-center'>
                <div className='bg-orange-500 w-3 h-3 rounded-full mt-2 mr-2'></div><span>Python</span>
                </div>

                <div className='flex align-center '>
                <div className='bg-orange-500 w-3 h-3 rounded-full mt-2 mr-2'></div>
                <span>HTML</span> 
                </div>
                <div className='flex align-center '>
                <div className='bg-orange-500 w-3 h-3 rounded-full mt-2 mr-2'></div>
                <span>React</span> 
                </div>
                <div className='flex align-center '>
                <div className='bg-orange-500 w-3 h-3 rounded-full mt-2 mr-2'></div>
                <span>Tailwind</span> 
                </div>
                
              </div>
              
              <div>
                <p className="text-orange-500 mt-4">Applications:</p>
                <div className='flex align-center '>
                <div className='bg-orange-500 w-3 h-3 rounded-full mt-2 mr-2'></div>
                <span>Web Apps</span> 
                </div>

                <div className='flex align-center '>
                <div className='bg-orange-500 w-3 h-3 rounded-full mt-2 mr-2'></div>
                <span>Desktop Apps</span> 
                </div>
              </div>
              </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
