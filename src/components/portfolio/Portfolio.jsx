// Portfolio.jsx
import { Link } from 'react-router-dom';
import Eben1 from '../../assets/work/eben1.png';
import Nyametease from '../../assets/work/nyametease.png';
import Finalyear from '../../assets/work/finalyear.png'
import Startup from '../../assets/work/startup.png'
import './portfolio.css';

const Portfolio = () => {

  return (
    <div className="bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950 min-h-screen py-1" id='projects'>
      <div className="lg:ml-56 m-12 p-12 mx-auto text-white">
        <div className="flex flex-col lg:flex-row relative gap-10">
          {/* left sidebar */}
          <div className="lg:w-1/3 md:w-2/3">
            <div className="sticky top-0">
              <div className="bg-gray-100 text-black pl-2">
                <p className="text-3xl md:text-5xl font-bold tracking-wider mb-8 lg:mb-0 p-2 text-orange-500">
                  What's more convincing than seeing these sample works. 😊
                </p>
              </div>
              <div className="bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950 w-1/2 p-4 text-center mt-6">
              <Link to='/portfolio'>
                More Items
              </Link>
              </div>
            </div>
          </div>

          {/* right sidebar */}
          <div className="lg:w-2/3 text-white lg:left-1/3 " >
            <div className='portfolio-images'>
              <div>
                <a href='https://risingstarmontessori.netlify.app/' target="_blank" rel="noreferrer">
                  <img src={Startup} alt="Rising Star Mockup" className='object-cover mb-6 transform hover:scale-105 transition-all hover:rounded-3xl h-full w-full' />
                </a>
                <div className='flex items-center flex-wrap'>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Bootstrap</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>JavaScript</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500 '>Frontend Development</span>
                </div>
              </div>
              {/* nyametease mockup */}
              <div className='py-12'>
                <a href='https://nyametease.netlify.app/' target="_blank" rel="noreferrer">
                  <img src={Nyametease} alt="Nyametease Mockup" className='object-cover mb-6 hover:scale-105 transition-all hover:rounded-3xl h-full w-full' />
                  </a>
                <div className='flex items-center flex-wrap'>

                <span className='border p-2 m-2 border-gray-500 text-gray-500'>TailwindCss</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>JavaScript</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Frontend</span>
                </div>
              </div>

              {/* manage mockup */}
              <div className='py-12'>
                <a href='#' target="_blank" rel="noreferrer">
                  <img src={Eben1} alt="Manage Mockup" className='object-cover mb-6 hover:scale-105 transition-all hover:rounded-3xl h-full w-full' />
                </a>
                <div className='flex items-center flex-wrap'>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>HTML</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Tailwind</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Frontend</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Backend</span>
                </div>
              </div>
              {/* bartwebz mockup */}
              <div className='py-12'>
                <a href='https://mrgarageauto.netlify.app/' target="_blank" rel="noreferrer">
                <img src={Finalyear} alt="Eben Mockup" className='object-cover mb-6 hover:scale-105 transition-all hover:rounded-3xl h-full w-full' />
                </a>
                <div className='flex items-center flex-wrap'>

                <span className='border p-2 m-2 border-gray-500 text-gray-500'>HTML</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Nodejs</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>React</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Frontend</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Backend</span>
                </div>
              </div>
            </div>
            
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default Portfolio;
