import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import Logo from '../../assets/bartlogo.svg'

const Navigation = () => {
  const navRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    gsap.to(navRef.current, {
      x: isMobileMenuOpen ? -100 : 0,
      opacity: isMobileMenuOpen ? 0 : 1,
      duration: 0.3,
      ease: 'power3.inOut',
    });
  };

  return (
    <div>
      {/* Mobile Menu Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-white rounded-full p-1.5 text-black focus:outline-none lg:hidden"
        onClick={toggleMobileMenu}
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-2xl" />
      </button>
      {/* logo */}
        <div className="absolute top-0 right-0 p-4 z-10">
        <img src={Logo} alt="Logo" className="w-16 h-auto" />
      </div>
      {/* Navigation Bar */}
      <div
        ref={navRef}
        className={`fixed top-64 left-2 md:left-10  bg-gray-800 text-white p-8 transform z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in lg:translate-x-0 lg:h-auto lg:bg-gray-950 rounded-3xl lg:flex lg:items-center lg:z-50`}
      >
        {/* Navigation Items */}
        <div className="mb-8 lg:mb-0 flex flex-col">
          <div className="flex items-center mb-4">
            <Link to="/" className='flex'>
            <FontAwesomeIcon icon={faHome} className="text-xl mr-2" />
            <span className="text-sm transform -rotate-90">Home</span>
            </Link>
          </div>
          <div className="flex items-center mb-4 pt-5">
             <Link to="/profile" className='flex'>
             <FontAwesomeIcon icon={faUser} className="text-xl mr-3.5" />
            <span className="text-sm transform -rotate-90">Profile</span>
            </Link>
          </div>
          <div className="flex items-center mb-4 py-5">
            <Link to="/settings" className='flex'>
            <FontAwesomeIcon icon={faCog} className="text-xl mr-2" />
            <span className="text-sm transform -rotate-90">Settings</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/contact" className='flex'>
            <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" />
            <span className="text-sm transform -rotate-90">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;