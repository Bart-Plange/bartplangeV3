import { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./navigation.css";
// Import your logo image (adjust the path according to your project structure)
import logoImage from "/bartlogo.svg"; // Update this path

const navLinks = [
  { id: "01", label: "About" },
  { id: "02", label: "Experience" },
  { id: "03", label: "Work" },
  { id: "04", label: "Contact" },
];

export default function Navigation() {
  const navRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Add animation for the new logo image
      gsap.from(".logo-img", {
        y: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".nav-link", {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.from(".resume-btn", {
        scale: 0.8,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">
        {/* Replaced text logo with image */}
        <Link to="/">
          <img
            src={logoImage}
            alt="Site Logo"
            className="logo-img"
          />
        </Link>
      </div>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link className="nav-link" to={`/${link.label.toLowerCase() === 'work' ? 'work' : link.label.toLowerCase()}`}>
              <span className="nav-index">{link.id}.</span> {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/Dennis_Bart-Plange_resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}