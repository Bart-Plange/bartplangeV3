import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
                <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                <Link to="/portfolio" className="text-cyan-400 hover:underline">Back to Portfolio</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
                <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-cyan-400 mb-8 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Portfolio
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="space-y-6">
                        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20 border border-gray-800">
                            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                            >
                                Live Demo
                            </a>
                            {/* Add Github link if available in data, for now just a placeholder or omit */}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
                            <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono border border-gray-700">
                                {project.year}
                            </span>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack ? project.techStack.map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-gray-900 rounded-lg text-gray-300 border border-gray-800 text-sm">
                                        {tech}
                                    </span>
                                )) : project.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-gray-900 rounded-lg text-gray-300 border border-gray-800 text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.features && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Key Features</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start text-gray-300">
                                            <svg className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
