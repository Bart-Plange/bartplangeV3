import './hero.css'
const Hero = () => {

  return (
    <section className="bg-black">
      <div className="container mx-auto min-h-screen">
        <div className="text-white relative ">
          <div className="flex justify-between z-10">
            <div className="mt-16 pt-16 md:mt-18 md:pt-24 lg:w-3/4 w-full">
              <p className="text-xl tracking-wide">hi, I am</p>
              <h1 className="py-4 text-5xl font-bold md:text-8xl tracking-wider">Dennis Bart-Plange</h1>
              <h2 className="text-xl tracking-wide">Software developer and Web designer</h2>
            </div>

            <div className="absolute max-w-full md:mt-64 md:pt-48 mt-48 pt-64">
              <p className='bg-white text-black p-2 tracking-wider'>Creating and crafting an experience you will love</p>
            </div>
          </div>

          <div className='absolute top-1/2 left-1/3 z-0'>
          <div className="spiral-container">
          <div className="spiral"></div>
          <div className="spiral"></div>
          <div className="spiral"></div>
          </div>
          </div>

          <div className='absolute top-10 left-1/3 z-0'>
          <div className="spiral-container">
          <div className="spiral"></div>
          <div className="spiral"></div>
          <div className="spiral"></div>
          </div>
          </div>

          <div className='absolute top-12 left-2/3 z-0'>
          <div className="spiral-container">
          <div className="spiral"></div>
          <div className="spiral"></div>
          <div className="spiral"></div>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
