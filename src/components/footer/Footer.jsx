import { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Update year in case component is left mounted
    const timer = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000 * 60); // Update hourly
    
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 pt-20 pb-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="footer-grid"></div>
        <div className="glowing-dot dot-1"></div>
        <div className="glowing-dot dot-2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 pb-16">
          {/* Left section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="logo-container mb-8">
              <div className="logo-circle bg-gradient-to-br from-cyan-500 to-blue-600"></div>
              <div className="logo-text text-white font-bold text-2xl tracking-widest">DBP</div>
            </div>
            
            <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mb-6">
                Let's build <span className="text-cyan-400">something</span>
                <br />
                <span className="text-orange-500">amazing</span> together
              </h2>
              
              <a 
                href="mailto:bartplangedennis@gmail.com" 
                className="email-link inline-flex items-center text-lg md:text-xl py-3 px-6 rounded-full group"
              >
                <span className="mr-3">bartplangedennis@gmail.com</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right section */}
          <div className={`tagline text-center lg:text-right transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-orange-500">
              Crafty &<br />Creative
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto lg:ml-auto mt-6"></div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Designed & developed with passion
            </p>
            
            <div className="flex items-center space-x-8">
              <p className="text-gray-400 text-sm">Copyright © {currentYear}</p>
              
              <div className="flex space-x-4">
                <a href="https://github.com/Bart-Plange" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                </a>
                
                <a href="https://www.linkedin.com/in/dennis-bart-plange-a5b0a1219" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;