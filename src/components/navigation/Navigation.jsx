import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faFileAlt, 
  faEnvelope, 
  faBars, 
  faTimes,
  faBriefcase,
  faCode,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/bartlogo.svg';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navRef = useRef(null);
  
  // Handle outside clicks to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [activeLink]);

  // Set active link based on current route
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <>
      {/* Floating Menu Toggle */}
      <button 
        className={`fixed z-50 top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isMenuOpen 
            ? 'bg-transparent text-white' 
            : 'bg-white/10 backdrop-blur-sm text-white hover:bg-cyan-500'
        }`}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon 
          icon={isMenuOpen ? faTimes : faBars} 
          className="text-xl" 
        />
      </button>

      {/* Navigation Sidebar */}
      <div 
        ref={navRef}
        className={`fixed inset-y-0 left-0 z-40 w-80 max-w-full bg-gray-900/95 backdrop-blur-xl transition-all duration-500 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full py-10 px-8">
          {/* Logo */}
          <div className="mb-16 pl-2">
            <div className="flex items-center space-x-3 mb-12">
              <img 
                src={Logo} 
                alt="Logo" 
                className="w-12 h-12 rounded-full border-2 border-cyan-500 p-1" 
              />
              <div>
                <h1 className="text-xl font-bold text-white">Dennis Bart-Plange</h1>
                <p className="text-cyan-400 text-sm">Software Developer</p>
              </div>
            </div>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1">
            <ul className="space-y-4">
              <NavItem 
                to="/" 
                icon={faHome} 
                label="Home" 
                isActive={activeLink === '/'}
                onClick={() => setActiveLink('/')}
              />
              <NavItem 
                to="/portfolio" 
                icon={faBriefcase} 
                label="Work" 
                isActive={activeLink === '/portfolio'}
                onClick={() => setActiveLink('/portfolio')}
              />
              <NavItem 
                to="/about" 
                icon={faUser} 
                label="About" 
                isActive={activeLink === '/about'}
                onClick={() => setActiveLink('/about')}
              />
              <NavItem 
                to="/skills" 
                icon={faLightbulb} 
                label="Skills" 
                isActive={activeLink === '/skills'}
                onClick={() => setActiveLink('/skills')}
              />
              <NavItem 
                href="./Dennis_Bart-Plange_resume.pdf" 
                icon={faFileAlt} 
                label="Resume" 
                download
              />
              <NavItem 
                to="#contact" 
                icon={faEnvelope} 
                label="Contact" 
              />
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mt-auto pt-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/Bart-Plange" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dennis-bart-plange-a5b0a1219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
              </a>
              <a 
                href="mailto:bartplangedennis@gmail.com" 
                className="social-icon"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </a>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              © {new Date().getFullYear()} Dennis Bart-Plange
            </p>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

// Navigation Item Component
const NavItem = ({ to, href, icon, label, isActive = false, download, onClick }) => {
  const content = (
    <div className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
      isActive 
        ? 'bg-cyan-500/10 border-l-4 border-cyan-500 text-cyan-400' 
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}>
      <div className="w-8 flex justify-center">
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="ml-4 font-medium">{label}</span>
    </div>
  );

  if (to) {
    return (
      <li onClick={onClick}>
        <Link to={to} className="block">
          {content}
        </Link>
      </li>
    );
  }

  if (href) {
    return (
      <li>
        <a 
          href={href} 
          download={download}
          className="block"
        >
          {content}
        </a>
      </li>
    );
  }

  return <li>{content}</li>;
};

export default Navigation;