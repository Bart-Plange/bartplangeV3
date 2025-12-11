import { useEffect, useRef } from "react";
import "./hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  // Canvas effect for background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const lineCount = 80;
    const maxDepth = 500;
    const lines = Array.from({ length: lineCount }, () => ({
      x: Math.random() * (canvas.width || 0),
      y: Math.random() * (canvas.height || 0),
      z: Math.random() * maxDepth,
      speed: 0.5 + Math.random() * 1.5,
      color: `rgba(100, 255, 218, ${0.05 + Math.random() * 0.1})`,
      thickness: Math.random() * 1.5 + 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        line.z -= line.speed;

        if (line.z < 1) {
          line.x = Math.random() * canvas.width;
          line.y = Math.random() * canvas.height;
          line.z = maxDepth;
        }

        const scale = 1 - line.z / maxDepth;
        const x = line.x * scale + (1 - scale) * canvas.width / 2;
        const y = line.y * scale + (1 - scale) * canvas.height / 2;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 200 * scale, y + 100 * scale);

        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.thickness * scale;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-center md:text-left" style={{ backgroundColor: '#0a192f' }}>
      {/* 3D Line Pattern Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-20"
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto md:mx-0">

          {/* Introduction Text */}
          <div className="mb-6 animate-fade-in">
            <p className="text-xl md:text-2xl font-light tracking-wider" style={{ color: '#64ffda' }}>
              Hello, I'm Dennis Bart-Plange.
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in" style={{ color: '#ccd6f6', animationDelay: "0.2s" }}>
            Software Developer,
            <br className="hidden md:block" /> &amp; Tech Tutor
          </h1>

          <div className="w-24 h-1 my-8 mx-auto md:mx-0 animate-slide-in" style={{ backgroundColor: '#64ffda' }} />

          {/* Subheading/Tagline */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 animate-fade-in" style={{ color: '#8892b0', animationDelay: "0.4s" }}>
            I build innovative software solutions, empower the next generation of developers, and lead in property management at <a href="https://elyndor.org" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#64ffda' }}>Elyndor Properties</a>.
          </p>

          {/* Call to Action Buttons */}
          <div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-5 sm:space-y-0 sm:space-x-10 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {/* Primary Link with Underline Animation */}
            <a
              href="#work"
              className="group relative inline-flex items-center font-bold text-lg transition-colors duration-300 ease-in-out"
              style={{ color: '#ccd6f6' }}
            >
              <span>Explore My Work</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform duration-300 ease-in-out transform group-hover:translate-x-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" style={{ backgroundColor: '#64ffda' }} />
            </a>

            {/* Secondary Link */}
            <a
              href="#contact"
              className="group inline-flex items-center font-semibold text-lg transition-colors duration-300 ease-in-out hover:text-cyan-400"
              style={{ color: '#8892b0' }}
            >
              <span>Let's Connect</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform duration-300 ease-in-out transform group-hover:translate-x-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;