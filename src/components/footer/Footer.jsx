import './footer.css'
const Footer = () => {
    return <div className=" bg-gray-900 pt-8 footer ">
      <div className="container max-auto py-12 ">
        <div>
          <div className='flex md:flex-row flex-col justify-between'> 
            <div className="">
            <div>
                <img src="/bartlogo.svg" alt="my logo"  className="w-20 h-20 object-cover"/>
           </div>
           
           <div className='flex flex-col gap-y-1 mt-12 p-2 w-full font-bold text-2xl text-gray-500'>
            <span className='lg:text-8xl pb-4 text-4xl '>Let's build something</span>
            <span className='pr-4 p-2 rounded-br-full text-lg md:text-2xl text-orange-500'>bartplangedennis@gmail.com</span>
           </div>
           </div> 
            
            <div className='text-right'>
                <p className='text-gray-500 text-6xl font-bold tracking-wide leading-loosed'>Crafty & <br /> Creative</p>
            </div>
          </div>
          </div>
      </div>
      <div className='lg:ml-64 lg:mr-64 pt-16 px-4 pb-2'>
        <div className='flex justify-between '>
          <p className='text-white wrap tracking-wide'>designed by: Yours truly</p>
          <p className='text-white tracking-wide '>copyright@2024</p>
        </div>
      </div>
    </div>
};

export default Footer;
