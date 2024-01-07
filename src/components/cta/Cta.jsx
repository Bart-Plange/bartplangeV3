import './cta.css'
const Cta = () => {
    return <div className='bg-black min-h-screen'>
        <div className="container mx-auto text-white pt-24">
            <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            </div>

            <div className='lg:w-1/2 mt-24'>
                <p className='text-6xl font-bold tracking-wide'>From <span className=' lg:px-2 border-b'>concepts</span></p>
                <p className='text-6xl font-bold pt-4 tracking-wide'>to clicks</p>
            </div>

            <div className='pt-8 '>
                <button className='border p-3 md:w-1/5 btn-23 tracking-wide'><span className='text'> Talk to me </span>
                <span className='marquee '> Talk to me </span>
                </button>
            </div>

      </div>
  </div>;
};

export default Cta;
