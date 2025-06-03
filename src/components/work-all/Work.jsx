import { useState } from 'react';
import './work.css';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "HomeFinder",
      description: "A comprehensive property finding platform with advanced search capabilities",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      link: "https://homefinder-fyp.netlify.app/",
      tags: ["React", "Tailwind", "Frontend", "Backend"],
      year: "2023"
    },
    {
      id: 2,
      title: "Nyametease Restaurant",
      description: "Modern restaurant ordering system with real-time menu updates",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      link: "https://nyametease.netlify.app/",
      tags: ["TailwindCSS", "JavaScript", "Frontend"],
      year: "2022"
    },
    {
      id: 3,
      title: "Eben Motors",
      description: "Automotive service platform with appointment scheduling",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      link: "#",
      tags: ["HTML", "Tailwind", "Frontend", "Backend"],
      year: "2023"
    },
    {
      id: 4,
      title: "Mr. Garage Auto",
      description: "Car maintenance and repair service management system",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      link: "https://mrgarageauto.netlify.app/",
      tags: ["HTML", "Node.js", "React", "Frontend", "Backend"],
      year: "2023"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  return (
    <section className="portfolio-section min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-950" id="projects">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here's a collection of my most impactful work. Each project demonstrates my skills in creating elegant, functional solutions.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-full transition-all ${
              activeFilter === 'all' 
                ? 'bg-cyan-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          {allTags.map(tag => (
            <button 
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeFilter === tag 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="project-card rounded-xl overflow-hidden bg-gray-800 transform transition-transform duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 bg-gray-900 text-cyan-400 text-sm px-3 py-1 rounded-full">
                  {project.year}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <p className="text-gray-300 mb-5">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`px-3 py-1 text-xs rounded-full ${
                        tag.toLowerCase().includes('frontend') 
                          ? 'bg-blue-900/50 text-blue-300' 
                          : tag.toLowerCase().includes('backend') 
                            ? 'bg-purple-900/50 text-purple-300'
                            : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-gray-900 rounded-lg px-8 py-4">
              <p className="text-xl text-white font-medium">
                Interested in seeing more? <span className="text-cyan-400">Contact me</span> for a full portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;