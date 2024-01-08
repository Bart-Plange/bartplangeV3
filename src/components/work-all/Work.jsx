import './work.css'
import { Link } from 'react-router-dom'
import Rismos from '../../assets/work/risingstar.png'
import Bartwebz from '../../assets/work/bartwebz.png'
import Manage from '../../assets/work/manage-landing-page.png'
import Nyametease from '../../assets/work/nyametease.png'
import Carousel from './Carousel'


const Work = () => {
    return <section className="bg-black min-h-screen">
        <div className="container mx-auto">
            <div className='py-3 mb-4 w-1/3 text-center  sticky top-0 z-10'>
                <Link to="/" >
                <p className='bg-white text-black py-3'>Return Home</p>
                </Link>
            </div>
            <div className="">
               <div className='flex md:flex-row flex-col-reverse gap-4'>
                <div className="md:w-1/3 w-full">
                    <div className='relative mb-4'>
                        <img src={Rismos} alt="Rismos mockup" className='object-cover roundedd-3xl'/>
                        <span className='absolute top-0 left-0 bg-white text-black'>Text Overlay</span>
                    </div>

                    <div className='relative'>
                        <img src={Bartwebz} alt="Bartwebz mockup" className='object-cover roundedd-3xl'/>
                        <span className='absolute top-0 left-0 bg-white text-black'>Text Overlay</span>
                    </div>
                </div>

                <div className="md:w-2/3 w-full">
                    <Carousel />
                </div>
                </div>

            <div className='mt-4'>
                <div className='flex md:flex-row-reverse flex-col gap-4'>
                <div className="md:w-1/3 w-full">
                    <div className='relative mb-8'>
                        <img src={Rismos} alt="Rismos mockup" className='object-cover roundedd-3xl'/>
                        <span className='absolute top-0 left-0 bg-white text-black'>Text Overlay</span>
                    </div>

                    <div className='relative'>
                        <img src={Bartwebz} alt="Bartwebz mockup" className='object-cover roundedd-3xl'/>
                        <span className='absolute top-0 left-0 bg-white text-black'>Text Overlay</span>
                    </div>
                </div>

                <div className="md:w-2/3 w-full">
                    <div className='relative'>
                        <img src={Bartwebz} alt="Bartwebz mockup" className='object-cover roundedd-3xl'/>
                        <span className='absolute top-0 left-0 bg-white text-black'>Text Overlay</span>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>    
    </section>;
};

export default Work;
