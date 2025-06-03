import { useEffect, useRef } from 'react';
import './hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    // 3D line pattern animation (same as your existing implementation)
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const lineCount = 80;
    const maxDepth = 500;
    const lines = [];
    
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * maxDepth,
        speed: 0.5 + Math.random() * 1.5,
        color: `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`,
        thickness: Math.random() * 1.5 + 0.5
      });
    }
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach(line => {
        line.z -= line.speed;
        
        if (line.z < 1) {
          line.x = Math.random() * canvas.width;
          line.y = Math.random() * canvas.height;
          line.z = maxDepth;
        }
        
        const scale = 1 - (line.z / maxDepth);
        const x = line.x * scale;
        const y = line.y * scale;
        
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
    
    // Text animation
    const textElements = textRef.current.querySelectorAll('.animate-text');
    textElements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.1}s`;
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section className="relative overflow-hidden bg-gray-900 min-h-screen flex items-center">
      {/* 3D Line Pattern Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full opacity-10"
      />
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl" ref={textRef}>
          {/* Intro Line */}
          <p className="text-lg md:text-xl text-cyan-400 font-mono mb-4 animate-text opacity-0 animate-fade-in">
            Hi, my name is
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-100 mb-4 animate-text opacity-0 animate-fade-in">
            Dennis Bart-Plange.
          </h1>
          
          {/* Tagline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-6 animate-text opacity-0 animate-fade-in">
            I build things for the web.
          </h2>
          
          {/* Description */}
          <div className="max-w-xl">
            <p className="text-gray-400 text-lg mb-8 leading-relaxed animate-text opacity-0 animate-fade-in">
              I'm a software developer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I'm focused on creating 
              accessible, human-centered applications.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="animate-text opacity-0 animate-fade-in">
            <a 
              href="#work" 
              className="inline-block px-8 py-4 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400/10 transition-colors duration-300"
            >
              Check out my work!
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;