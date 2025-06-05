import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/bartlogo.svg';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navRef = useRef(null);
  const location = useLocation();

  // Set active link based on current route
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Handle outside clicks to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center z-50">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <span className="ml-2 text-white font-medium hidden sm:block">Dennis</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink to="/about" label="About" active={activeLink === '/about'} />
          <NavLink to="/experience" label="Experience" active={activeLink === '/experience'} />
          <NavLink to="/work" label="Work" active={activeLink === '/work'} />
          <NavLink to="/contact" label="Contact" active={activeLink === '/contact'} />
          <a
            href="./Dennis_Bart-Plange_resume.pdf"
            download
            className="resume-btn px-3 py-1.5 border border-cyan-500 text-cyan-500 rounded-md text-sm flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-500 focus:outline-none z-50"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <nav
            ref={navRef}
            className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-6 py-8 px-6">
              <NavLink to="/about" label="About" active={activeLink === '/about'} />
              <NavLink to="/experience" label="Experience" active={activeLink === '/experience'} />
              <NavLink to="/work" label="Work" active={activeLink === '/work'} />
              <NavLink to="/contact" label="Contact" active={activeLink === '/contact'} />
              <a
                href="./Dennis_Bart-Plange_resume.pdf"
                download
                className="resume-btn px-4 py-3 border border-cyan-500 text-cyan-500 rounded-md flex items-center justify-center mt-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Navigation Link Component
const NavLink = ({ to, label, active }) => {
  return (
    <Link
      to={to}
      className={`nav-link ${active ? 'active' : ''}`}
    >
      {label}
      {active && <div className="active-indicator"></div>}
    </Link>
  );
};

export default Navigation;