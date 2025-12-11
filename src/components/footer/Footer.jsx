import { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update year in case component is left mounted for a long time
    const timer = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000 * 60); // Update hourly

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer bg-[#0a192f] text-slate-400 py-12 border-t border-cyan-900/30">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Call to Action */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's build something <span className="text-cyan-400">amazing</span>.
            </h2>
            <p className="text-slate-400 max-w-md mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:bartplangedennis@gmail.com"
              className="inline-block px-8 py-4 border border-cyan-400 text-cyan-400 font-mono rounded hover:bg-cyan-400/10 transition-colors"
            >
              Say Hello
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <SocialLink href="https://github.com/Bart-Plange" icon="github" />
              <SocialLink href="https://www.linkedin.com/in/dennis-bart-plange-a5b0a1219" icon="linkedin" />
              <SocialLink href="mailto:bartplangedennis@gmail.com" icon="mail" />
            </div>
            <p className="font-mono text-sm text-slate-500">Connect with me</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors cursor-default">
            Designed & Built by Dennis Bart-Plange
          </p>
          <p className="font-mono text-xs text-slate-600 mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => {
  const icons = {
    github: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
    linkedin: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
    mail: <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.179l4.623 5.467zm2.157-1.149l-6.891-8.151h20.222l-6.891 8.151-3.22 3.809-3.22-3.809zm2.158 1.149l4.623-5.467v11.179l-4.623-5.712zm1.094 1.294l3.22 3.809 3.22-3.809 6.891 8.151h-20.222l6.891-8.151z" />
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        {icons[icon]}
      </svg>
    </a>
  );
};

export default Footer;