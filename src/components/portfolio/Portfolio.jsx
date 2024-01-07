// Portfolio.jsx
import Bartwebz from '../../assets/work/bartwebz.png';
import Manage from '../../assets/work/manage-landing-page.png';
import Nyametease from '../../assets/work/nyametease.png';
import Rismos from '../../assets/work/risingstar.png';
import './portfolio.css';

const Portfolio = () => {

  return (
    <div className="bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950 min-h-screen py-10">
      <div className="lg:ml-56 m-12 p-12 mx-auto text-white">
        <div className="flex flex-col lg:flex-row relative">
          {/* left sidebar */}
          <div className="lg:w-1/3 md:w-2/3">
            <div className="sticky top-0">
              <div className="bg-white text-black pl-2">
                <p className="text-3xl md:text-5xl font-bold tracking-wider mb-8 lg:mb-0">
                  What's more convincing than seeing these sample works. 😊
                </p>
              </div>
            </div>
          </div>

          {/* right sidebar */}
          <div className="lg:border-l border-t border-full border-gray-100 lg:w-2/3 text-white lg:left-1/3 " >
            <div className=''>
              <div>
                <img src={Rismos} alt="Rising Star Mockup" className='object-cover mb-6' />
                <div className='flex items-center flex-wrap'>

                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Bootstrap</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>JavaScript</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500 '>Frontend Development</span>
                </div>
              </div>
              {/* nyametease mockup */}
              <div className='py-12'>
                <img src={Nyametease} alt="Nyametease Mockup" className='object-cover mb-6' />
                <div className='flex items-center flex-wrap'>

                <span className='border p-2 m-2 border-gray-500 text-gray-500'>TailwindCss</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>JavaScript</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Frontend Development</span>
                </div>
              </div>
              {/* manage mockup */}
              <div className='py-12'>
                <img src={Manage} alt="Manage Mockup" className='object-cover mb-6' />
                <div className='flex items-center flex-wrap'>

                <span className='border p-2 m-2 border-gray-500 text-gray-500'>HTML</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>CSS</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Frontend Development</span>
                </div>
              </div>
              {/* bartwebz mockup */}
              <div className='py-12'>
                <img src={Bartwebz} alt="Bartwebz Mockup" className='object-cover mb-6' />
                <div className='flex items-center flex-wrap'>

                <span className='border p-2 m-2 border-gray-500 text-gray-500'>HTML</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>CSS</span>
                <span className='border p-2 m-2 border-gray-500 text-gray-500'>Frontend Development</span>
                </div>
              </div>
            </div>
              <div className="scrollbar-cover"></div>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default Portfolio;
