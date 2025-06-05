import { useState } from 'react';
import './about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section className="about-section min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden py-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="grid-lines"></div>
        <div className="glowing-dot dot-1"></div>
        <div className="glowing-dot dot-2"></div>
        <div className="glowing-dot dot-3"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16 mt-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Transforming ideas into digital experiences through code, education, and entrepreneurship
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
              Software Developer & IT Educator
            </h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              With many years of experience in software development and IT education, I've dedicated my career to creating impactful digital solutions while empowering the next generation of tech professionals. My journey began at St. John's Grammar Senior High School in Accra and continued at the Accra Institute of Technology, where I cultivated my passion for technology and education. As an IT specialist and educator, I've served as Administrator and Department Head at a non-governmental organization, leading teams to integrate technology solutions into community projects.
            </p>
            
            <p className="text-gray-300 mb-10 leading-relaxed">
              Beyond technology, I founded Elyndor Properties, a Ghanaian real estate marketplace where I've developed strategic market growth initiatives for over 15 years. I'm also deeply committed to community engagement, organizing initiatives like the Healing Jesus Campaigns in Kwame Danso. My portfolio of work is available at dennisbart.netlify.app, and I actively share projects through my GitHub profile with 60+ followers.
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
                  Projects & Approach
                </button>
              </div>
              
              <div className="p-6">
                {activeTab === 'skills' && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-bold text-cyan-400 mb-3">Technical Specialization</h4>
                        <ul className="space-y-3">
                          {['JavaScript (ES6+)', 'React.js', 'Express.js', 'HTML5/CSS3', 'Node.js', 'Git/GitHub'].map((skill) => (
                            <li key={skill} className="flex items-center">
                              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-cyan-400 mb-3">Professional Expertise</h4>
                        <ul className="space-y-3">
                          {['Full-Stack Development', 'IT Curriculum Design', 'Team Leadership', 'Educational Technology', 'Real Estate Tech', 'Strategic Market Development'].map((focus) => (
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
                        IT education specialist with many years developing curriculum and teaching programming concepts. My educational approach focuses on bridging theoretical knowledge with practical application in real-world projects :cite[5].
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    {[
                      { 
                        title: "Founder & CEO, Elyndor Properties", 
                        period: "2009 - Present", 
                        description: "Founded and lead a Ghanaian real estate marketplace with many years experience in strategic market development across Ghana. Spearheaded digital transformation initiatives in property management." 
                      },
                      { 
                        title: "IT Educator & Administrator", 
                        period: "2016 - 2021", 
                        description: "Served as Department Head at a non-governmental organization for many years, leading technology integration into educational initiatives and managing cross-functional teams." 
                      },
                      { 
                        title: "Software Developer & IT Tutor", 
                        period: "2018 - Present", 
                        description: "Develop full-stack applications while mentoring aspiring developers. Maintain active GitHub profile with 60+ followers and contribute to educational resources." 
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
                        <h4 className="font-bold text-lg mb-1">Project Portfolio</h4>
                        <p className="text-gray-300 mb-3">My GitHub showcases 29+ repositories including:</p>
                        <ul className="text-gray-300 ml-5 list-disc space-y-1">
                          <li>nyametease_perfectgrace_foundation</li>
                          <li>rising-star-montessori</li>
                          <li>portfolioV2</li>
                        </ul>
                        <p className="text-gray-300 mt-3">Explore my work at <span className="text-cyan-400">dennisbart.netlify.app</span></p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Technical Philosophy</h4>
                        <p className="text-gray-300">I combine modular architecture with user-centered design, creating scalable solutions with clean, maintainable code and intuitive interfaces. My teaching approach emphasizes practical application of theoretical concepts.</p>
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