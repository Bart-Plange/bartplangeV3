import { useEffect, useRef } from 'react';
import './hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // 3D line pattern parameters
    const lineCount = 80;
    const maxDepth = 500;
    const lines = [];
    
    // Initialize lines
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
    
    // Render function
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw lines with perspective
      lines.forEach(line => {
        // Move line back in z-space
        line.z -= line.speed;
        
        // Reset line when it goes too far back
        if (line.z < 1) {
          line.x = Math.random() * canvas.width;
          line.y = Math.random() * canvas.height;
          line.z = maxDepth;
        }
        
        // Calculate perspective scale
        const scale = 1 - (line.z / maxDepth);
        const x = line.x * scale;
        const y = line.y * scale;
        
        // Draw line
        ctx.beginPath();
        ctx.moveTo(x, y);
        
        // Draw to a point slightly offset to create a line segment
        ctx.lineTo(
          x + 200 * scale, 
          y + 100 * scale
        );
        
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.thickness * scale;
        ctx.stroke();
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
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
        className="absolute top-0 left-0 w-full h-full opacity-20"
      />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wider">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-white mt-2 leading-tight">
              Dennis <span className="text-cyan-400">Bart-Plange</span>
            </h1>
          </div>
          
          <div className="mb-10">
            <h2 className="hoverable text-xl md:text-2xl text-gray-300 font-light">
              Software Developer & IT Instructor
            </h2>
            <div className="w-24 h-1 bg-cyan-400 my-4"></div>
          </div>
          
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-gray-900 rounded-lg px-6 py-3">
              <p className="text-lg text-white font-medium tracking-wider">
                Creating experiences you'll love
              </p>
            </div>
          </div>
          
          <div className="mt-20 flex space-x-6">
            <a href="#work" className="text-cyan-400 hover:text-white transition-colors">
              View Work ↓
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-400 opacity-70"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-400 opacity-70"></div>
    </section>
  );
};

export default Hero;