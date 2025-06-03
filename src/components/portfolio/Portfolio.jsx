import { useState, useEffect } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const projects = [
    {
      id: 1,
      title: "HomeFinder",
      description: "Property finding platform with advanced search capabilities",
      tags: ["React", "Tailwind", "Full Stack"],
      year: "2023",
      accentColor: "#0ea5e9"
    },
    {
      id: 2,
      title: "Nyametease",
      description: "Restaurant ordering system with real-time updates",
      tags: ["JavaScript", "CSS", "Frontend"],
      year: "2022",
      accentColor: "#f97316"
    },
    {
      id: 3,
      title: "Mr. Garage Auto",
      description: "Car maintenance service management system",
      tags: ["React", "Node.js", "Full Stack"],
      year: "2023",
      accentColor: "#8b5cf6"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="portfolio-section relative overflow-hidden" id="featured-work">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="gradient-bg w-full h-full"
          style={{
            background: `
              radial-gradient(
                circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(14, 165, 233, 0.15) 0%,
                rgba(15, 23, 42, 0.8) 70%
              )
            `
          }}
        ></div>
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A selection of my most impactful work. See how I solve complex problems with elegant solutions.
          </p>
        </div>

        {/* Projects showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            />
          ))}
        </div>
        
        {/* View Portfolio Button */}
<div className="text-center">
  <a 
    href="/portfolio" 
    className="portfolio-button inline-flex items-center px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 relative overflow-hidden group"
  >
    {/* Main button text and icon */}
    <span className="relative z-10 flex items-center">
      <span className="mr-2">View Full Portfolio</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </span>

    {/* Gradient background layer */}
    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    
    {/* Shine effect on hover */}
    <span className="absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 group-hover:animate-shine transition-opacity duration-300"></span>
    </span>
    
    {/* Border animation */}
    <span className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-full transition-all duration-300"></span>
  </a>
</div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className="project-card rounded-xl overflow-hidden relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ 
        '--accent-color': project.accentColor,
        borderColor: isActive ? project.accentColor : 'rgba(255,255,255,0.1)'
      }}
    >
      <div className="project-header p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-cyan-400 text-sm px-2 py-1 bg-gray-900 rounded-full">
            {project.year}
          </span>
        </div>
        <p className="text-gray-300 mt-2 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="project-visual h-64 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mockup-window w-4/5 h-4/5 bg-gray-900 rounded-lg overflow-hidden">
            <div className="mockup-content h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: project.accentColor }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium">Project Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 glass-overlay flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <button 
          className="px-6 py-3 rounded-full bg-white text-gray-900 font-bold flex items-center hover:bg-cyan-50 transition-colors"
          style={{ boxShadow: `0 0 20px 5px ${project.accentColor}80` }}
        >
          View Project Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;