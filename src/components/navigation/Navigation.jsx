import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFileAlt, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import Logo from '../../assets/bartlogo.svg';

const Navigation = () => {
  const navRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobileView = window.innerWidth < 1024; // Set the breakpoint according to your design

  useEffect(() => {
    gsap.fromTo(navRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    gsap.to(navRef.current, {
      x: isMobileMenuOpen ? 0 : -200,
      opacity: isMobileMenuOpen ? 1 : 0,
      duration: 0.3,
      ease: 'power3.inOut',
    });
  }, [isMobileMenuOpen]);

  return (
    <div>
      {/* Mobile Menu Toggle Button */}
      {isMobileView && (
        <button
          className="fixed top-4 left-4 z-50 bg-white rounded-full p-1.5 text-black focus:outline-none lg:hidden"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      )}
      {/* Logo */}
      <div className="absolute top-0 right-0 p-4 z-10">
        <img src={Logo} alt="Logo" className="w-12 h-auto" />
      </div>
      {/* Mobile Menu */}
      {isMobileView && (
        <div
          ref={navRef}
          className={`fixed top-1/3 left-0 h-1/2 bg-gray-800 text-white p-8 transform z-50 rounded-r-3xl ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in`}
        >
          
          {/* Navigation Items */}
          <div className="flex flex-col pt-3">
            <Link to="/" className="mb-4 text-xl">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
            <a href="#projects" className="mb-4 text-xl">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Projects
            </a>
            <a href="./resume.pdf" download className="mb-4 text-xl">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Resume
            </a>
            <a href="#contact" className="text-xl">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact
            </a>
          </div>
        </div>
      )}
      {/* Desktop Menu */}
      {!isMobileView && (
        <div
          ref={navRef}
          className="fixed top-64 left-2 md:left-10 bg-gray-800 text-white p-8 transform z-50"
        >
          {/* Navigation Items */}
          <div className="flex flex-col">
            <Link to="/" className="mb-4 text-xl">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
            <Link to="/profile" className="mb-4 text-xl">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Profile
            </Link>
            <a href="./resume.pdf" download className="mb-4 text-xl">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Resume
            </a>
            <a href="#contact" className="text-xl">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
