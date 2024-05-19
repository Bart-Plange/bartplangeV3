import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFileAlt, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import Logo from '../../assets/bartlogo.svg';

const Navigation = () => {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);

  // Update isMobileView on window resize
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial GSAP animation for desktop menu
  useEffect(() => {
    gsap.fromTo(navRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
  }, []);

  // GSAP animation for mobile menu
  useEffect(() => {
    gsap.to(mobileMenuRef.current, {
      height: isMobileMenuOpen ? 'auto' : 0,
      opacity: isMobileMenuOpen ? 1 : 0,
      duration: 0.3,
      ease: 'power3.inOut',
    });
  }, [isMobileMenuOpen]);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div>
      {/* Mobile Menu Toggle Button */}
      {isMobileView && !isMobileMenuOpen && (
        <button
          className="fixed top-4 left-4 z-50 bg-white rounded-full p-1.5 text-black focus:outline-none lg:hidden"
          onClick={openMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      )}
      {isMobileView && isMobileMenuOpen && (
        <button
          className="fixed top-4 left-4 z-50 bg-white rounded-full p-2 px-3 text-black focus:outline-none lg:hidden"
          onClick={closeMobileMenu}
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
      )}
      {/* Logo */}
      <div className="absolute top-0 right-0 p-4 z-10">
        <img src={Logo} alt="Logo" className="w-12 h-auto" />
      </div>

      {/* Desktop Menu */}
      {!isMobileView && (
        <div
          ref={navRef}
          className="fixed top-64 left-2 md:left-10 bg-gray-800 text-white p-6 transform z-50"
        >
          {/* Navigation Items */}
          <div className="flex flex-col">
            <Link to="/" className="mb-4 text-md">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
            <Link to="/portfolio" className="mb-4 text-md">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Work
            </Link>
            <a href="./resume.pdf" download className="mb-4 text-md">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Resume
            </a>
            <a href="#contact" className="text-md">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobileView && (
        <nav ref={mobileMenuRef} className="bg-gray-800 p-4 pt-12 overflow-hidden">
          <ul className="flex flex-col space-y-2 pt-4 pl-10">
            <li>
              <a href="/" className="text-white block px-2 py-1">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home</a>
            </li>
            <li>
              <a href="/porfolio" className="text-white block px-2 py-1">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Work</a>
            </li>
            <li>
              <a href="/resume.pdf" download className="text-white block px-2 py-1">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Resume</a>
            </li>
            <li>
              <a href="#contact" className="text-white block px-2 py-1">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
