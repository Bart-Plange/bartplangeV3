import './footer.css'
const Footer = () => {
    return <div className="h-screen bg-gray-900 pt-8 footer ">
      <div className="container max-auto py-12 card">
        <div>
          <div className='flex md:flex-row flex-col justify-between'> 
            <div className="">
            <div>
                <img src="/bartlogo.svg" alt="my logo"  className="w-13 h-14 object-cover"/>
           </div>
           
           <div className='flex flex-col gap-y-1 mt-24 p-2 w-full font-bold text-2xl text-gray-500'>
            <span>Get in touch</span>
            <span className='pr-4 p-2 bg-white rounded-br-full text-lg md:text-2xl'>bartplangedennis@gmail.com</span>
           </div>
           </div>
            
            <div className='text-right'>
                <p className='text-gray-500 text-6xl font-bold tracking-wide leading-loosed'>Crafty & <br /> Creative</p>
            </div>
          </div>
          </div>
      </div>
      <div className='lg:ml-64 lg:mr-64 pt-24 px-4 mb-4'>
        <div className='flex justify-between '>
          <p className='text-white wrap tracking-wide'>designed by: Yours truly</p>
          <p className='text-white tracking-wide '>copyright@2024</p>
        </div>
      </div>
    </div>;
};

export default Footer;
