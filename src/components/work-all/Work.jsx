import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import './work.css';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.tags.includes(activeFilter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  return (
    <section className="portfolio-section min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-950" id="projects">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore a collection of my most impactful projects, demonstrating my expertise in building elegant and functional digital solutions.
          </p>
        </div>

        {/* Search and Filter Container */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by name, tech stack, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg border border-gray-800 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-gray-500 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === 'all'
                ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700/50'
                }`}
            >
              All Projects
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === tag
                  ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700/50'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map(project => (
              <Link
                to={`/work/${project.id}`}
                key={project.id}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20 block"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"></div>

                  {/* Floating Year Badge */}
                  <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 text-cyan-400 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 -mt-20">
                  <div className="bg-gray-900/90 backdrop-blur-md rounded-xl p-6 border border-gray-800 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <div
                        className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-400/10 rounded-full"
                        title="View Details"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs font-medium rounded-md border ${tag.toLowerCase().includes('frontend')
                            ? 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                            : tag.toLowerCase().includes('backend')
                              ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                              : 'bg-gray-700/30 text-gray-300 border-gray-600/30'
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-6 rounded-full bg-gray-800/50 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-24 text-center">
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