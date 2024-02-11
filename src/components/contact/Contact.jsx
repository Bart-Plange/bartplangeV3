// Contact.jsx
import { useState } from 'react';
import './contact.css'
import Github from '../../assets/github.svg'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Address copied to clipboard!');
  }).catch((error) => {
    console.error('Unable to copy to clipboard', error);
  });
  };
  
  return (
    <section className='min-h-screen bg-black py-12 contact ' id='contact' >  
    <div className="container mx-auto flex justify-between flex-col lg:flex-row text-white">
      <div className="w-full max-w-md p-6 relative">
        <h1 className="text-5xl font-semibold mb-12 tracking-wider"></h1>

        <form name="contact" method='post' data-netlify="true" >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4 pt-6">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Full name, okay it can be short'
              
              className="w-full p-2 mt-1 text-white border-b bg-transparent focus:outline-none focus:border-orange-500"
              required
              />
              
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='email, probably from Google'
              className="w-full p-2 mt-1 text-white border-b bg-transparent focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder='hi 🙋‍♂️ Dennis, .......'
              className="w-full p-2 mt-1 text-white border-b bg-transparent focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-gray-500 text-white hover:bg-gray-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
      
       <div className='md:ml-16 py-8'>
        <div className='mb-5'>
            <p className='text-3xl tracking-wide text-left'>You can also reach me here</p>
          </div>
          
        <div className='relative'>
        <span className='text-lg text-gray-100 mail' onClick={() => copyToClipboard('bartplangedennis@gmail.com')}>
          bartplangedennis@gmail.com
          <span className="tooltip-text">Copy, oops short line</span>
        </span>
      </div>


        <div className='flex align-center text-center gap-8 pt-4'>
      <a href='https://github.com/Bart-Plange' target='_blank' rel='noopener noreferrer' className='flex align-center justify-center'>
      <img src={Github} alt="Github icon" className='w-8 h-8'/>
      <span className='align-center ml-2'>Bart-Plange</span>
        </a>
      </div>

       </div>
    </div>
    </section>
    
    
  );
};

export default Contact;
