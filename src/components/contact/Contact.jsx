import { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section className="contact-section py-24 bg-[#0a192f] text-slate-300" id="contact">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Section Header */}
        <div className="flex items-center mb-12">
          <span className="text-cyan-400 font-mono text-xl mr-4">04.</span>
          <h2 className="text-3xl font-bold text-white">What's Next?</h2>
          <div className="h-[1px] bg-gray-700 flex-grow ml-6 max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left Column: Contact Form */}
          <div>
            <h3 className="text-4xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-mono text-cyan-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#112240] border border-gray-700 rounded p-3 text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-mono text-cyan-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#112240] border border-gray-700 rounded p-3 text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-mono text-cyan-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-[#112240] border border-gray-700 rounded p-3 text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-mono rounded hover:bg-cyan-400/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 font-mono text-sm mt-4">Message sent successfully!</p>
              )}
            </form>
          </div>

          {/* Right Column: Direct Info */}
          <div className="flex flex-col justify-center space-y-12 md:pl-12 border-l border-gray-800">

            <div>
              <h4 className="text-white font-bold mb-2">Email</h4>
              <a href="mailto:bartplangedennis@gmail.com" className="text-cyan-400 hover:underline font-mono">
                bartplangedennis@gmail.com
              </a>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Socials</h4>
              <ul className="space-y-4 font-mono text-sm">
                <li>
                  <a href="https://github.com/Bart-Plange" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors">
                    <span className="text-cyan-400 mr-2">▹</span> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/dennis-bart-plange-a5b0a1219" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors">
                    <span className="text-cyan-400 mr-2">▹</span> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors">
                    <span className="text-cyan-400 mr-2">▹</span> Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <p className="text-sm text-slate-500">
                Based in Accra, Ghana <br />
                Available for remote work
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;