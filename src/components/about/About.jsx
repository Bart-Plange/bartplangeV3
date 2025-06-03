import { useState } from 'react';
import './about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section className="about-section min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="grid-lines"></div>
        <div className="glowing-dot dot-1"></div>
        <div className="glowing-dot dot-2"></div>
        <div className="glowing-dot dot-3"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Transforming ideas into digital experiences through code and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="profile-container mx-auto lg:mx-0">
              <div className="profile-image bg-gray-800 rounded-full overflow-hidden relative">
                <div className="image-placeholder bg-gradient-to-br from-cyan-800 to-gray-900 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Dennis Bart-Plange</span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-cyan-500 rounded-full opacity-70 transform rotate-12 scale-105"></div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-gray-900 px-4 py-2 rounded-lg font-bold">
                <span className="animate-pulse">●</span> Available for work
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">
              Software Developer & IT Instructor
            </h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              With over 6 years of experience in both software development and IT education, I've dedicated my career to creating impactful digital solutions while empowering the next generation of tech professionals. My journey has taken me from administrative roles to department leadership, always with a focus on leveraging technology to solve real-world problems.
            </p>
            
            <p className="text-gray-300 mb-10 leading-relaxed">
              I specialize in building responsive, user-friendly applications that bridge the gap between complex technical requirements and intuitive user experiences. My passion lies in transforming abstract concepts into tangible digital products that make a difference.
            </p>
            
            {/* Tabbed Content */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="flex border-b border-gray-700">
                <button 
                  onClick={() => setActiveTab('skills')}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'skills' 
                      ? 'text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Skills & Expertise
                </button>
                <button 
                  onClick={() => setActiveTab('experience')}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'experience' 
                      ? 'text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Experience
                </button>
                <button 
                  onClick={() => setActiveTab('approach')}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'approach' 
                      ? 'text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  My Approach
                </button>
              </div>
              
              <div className="p-6">
                {activeTab === 'skills' && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-bold text-cyan-400 mb-3">Technical Specialization</h4>
                        <ul className="space-y-3">
                          {['Python', 'JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Tailwind CSS'].map((skill) => (
                            <li key={skill} className="flex items-center">
                              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-cyan-400 mb-3">Development Focus</h4>
                        <ul className="space-y-3">
                          {['Web Applications', 'Desktop Software', 'Responsive UI/UX', 'API Development', 'Database Design', 'Performance Optimization'].map((focus) => (
                            <li key={focus} className="flex items-center">
                              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                              <span>{focus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-cyan-400 mb-2">Education & Instruction</h4>
                      <p className="text-gray-300">
                        Over 6 years teaching programming and IT concepts at various educational institutions, developing curriculum and mentoring students.
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    {[
                      { 
                        title: "Software Developer & IT Instructor", 
                        period: "2018 - Present", 
                        description: "Creating custom software solutions while teaching programming and IT concepts at various institutions." 
                      },
                      { 
                        title: "Department Head", 
                        period: "2016 - 2018", 
                        description: "Led IT department operations, managed teams, and implemented technology strategies." 
                      },
                      { 
                        title: "IT Administrator", 
                        period: "2014 - 2016", 
                        description: "Managed network infrastructure, implemented security protocols, and provided technical support." 
                      }
                    ].map((job, index) => (
                      <div key={index} className="border-l-2 border-cyan-500 pl-4 py-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-bold">{job.title}</h4>
                          <span className="text-cyan-400 text-sm bg-gray-900 px-2 py-1 rounded">{job.period}</span>
                        </div>
                        <p className="text-gray-300 mt-2">{job.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'approach' && (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Problem-First Mindset</h4>
                        <p className="text-gray-300">I begin every project by thoroughly understanding the core problem before writing any code.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Modular Architecture</h4>
                        <p className="text-gray-300">Building scalable solutions with clean, maintainable code and well-defined components.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Collaborative Process</h4>
                        <p className="text-gray-300">I believe the best results come from close collaboration with clients and stakeholders.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="mt-10">
              <a 
                href="#contact" 
                className="contact-button inline-flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300"
              >
                Let's Work Together
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;