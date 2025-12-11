import { useState, useEffect, useRef } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "HomeFinder",
      description: "Property finding platform with advanced search capabilities",
      tags: ["React", "Tailwind", "Full Stack"],
      year: "2023",
      accentColor: "#0ea5e9",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Nyametease",
      description: "Restaurant ordering system with real-time updates",
      tags: ["JavaScript", "CSS", "Frontend"],
      year: "2022",
      accentColor: "#f97316",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Mr. Garage Auto",
      description: "Car maintenance service management system",
      tags: ["React", "Node.js", "Full Stack"],
      year: "2023",
      accentColor: "#8b5cf6",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "EduLearn Platform",
      description: "Interactive e-learning platform with course management",
      tags: ["React", "Express", "MongoDB"],
      year: "2023",
      accentColor: "#10b981",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "FitTrack Pro",
      description: "Fitness tracking app with workout plans and progress monitoring",
      tags: ["React Native", "Firebase", "Mobile"],
      year: "2024",
      accentColor: "#ec4899",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle horizontal scroll with mouse wheel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // Only handle horizontal scroll if not already scrolling vertically
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return; // Let default horizontal scroll happen
      }

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

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
            A selection of my most impactful work. Scroll horizontally to explore.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="scroll-nav-btn scroll-nav-left"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="scroll-nav-btn scroll-nav-right"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="horizontal-scroll-container"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isActive={activeProject === project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              />
            ))}
          </div>
        </div>

        {/* View Portfolio Button */}
        <div className="text-center mt-16">
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

const ProjectCard = ({ project, index, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="project-card-horizontal"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        '--accent-color': project.accentColor,
        '--index': index,
        borderColor: isActive ? project.accentColor : 'rgba(255,255,255,0.1)'
      }}
    >
      {/* Project Image with Slide Animation */}
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="image-overlay"></div>
      </div>

      {/* Project Info */}
      <div className="project-info">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <span className="text-cyan-400 text-sm px-3 py-1 bg-gray-900 rounded-full">
            {project.year}
          </span>
        </div>

        <p className="text-gray-300 mb-4 text-base">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          className="view-project-btn"
          style={{ boxShadow: `0 0 20px 5px ${project.accentColor}40` }}
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;