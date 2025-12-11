import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-section min-h-screen bg-[#0a192f] text-slate-300 py-20 relative" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Column: Sticky Profile Card */}
          <div className="lg:w-1/3 relative">
            <div className="sticky top-24">
              <ProfileCard />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-2/3">
            <BioSection />
            <TechStackSection />
            <ExperienceSection />
          </div>

        </div>
      </div>
    </section>
  );
};

const ProfileCard = () => {
  return (
    <div className="profile-card bg-[#112240] p-8 rounded-lg border border-cyan-900/30 shadow-xl">
      <div className="relative w-48 h-48 mx-auto mb-6 group">
        <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
        <div className="absolute inset-0 bg-cyan-500/20 rounded-lg group-hover:bg-transparent transition-colors z-10"></div>
        <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden relative z-0 grayscale group-hover:grayscale-0 transition-all duration-300">
          {/* Placeholder for actual image or the existing SVG placeholder */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Dennis Bart-Plange</h3>
        <p className="text-cyan-400 font-mono text-sm mb-6">Full Stack Developer</p>

        <div className="flex justify-center space-x-4 mb-8">
          <SocialLink href="https://github.com" icon="github" />
          <SocialLink href="https://linkedin.com" icon="linkedin" />
          <SocialLink href="mailto:contact@example.com" icon="mail" />
        </div>

        <a href="/resume.pdf" className="inline-block w-full py-3 px-6 border border-cyan-400 text-cyan-400 font-mono text-sm rounded hover:bg-cyan-400/10 transition-colors">
          Download Resume
        </a>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }) => {
  // Simple SVG icons mapping
  const icons = {
    github: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
    linkedin: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
    mail: <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.179l4.623 5.467zm2.157-1.149l-6.891-8.151h20.222l-6.891 8.151-3.22 3.809-3.22-3.809zm2.158 1.149l4.623-5.467v11.179l-4.623-5.712zm1.094 1.294l3.22 3.809 3.22-3.809 6.891 8.151h-20.222l6.891-8.151z" />
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        {icons[icon]}
      </svg>
    </a>
  );
};

const BioSection = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <span className="text-cyan-400 font-mono text-xl mr-4">01.</span>
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <div className="h-[1px] bg-gray-700 flex-grow ml-6"></div>
      </div>

      <div className="prose prose-invert max-w-none text-slate-400">
        <p className="mb-4">
          Hello! My name is Dennis and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was surprisingly fun!
        </p>
        <p className="mb-4">
          Fast-forward to today, and I've had the privilege of working at an <span className="text-cyan-400">educational NGO</span>, a <span className="text-cyan-400">start-up</span>, and founding my own <span className="text-cyan-400">real estate platform</span>. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
        </p>
        <p>
          I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
        </p>
      </div>
    </div>
  );
};

const TechStackSection = () => {
  const skills = {
    "Languages": ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/Sass", "Python", "SQL"],
    "Frameworks": ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "React Native"],
    "Tools": ["Git & GitHub", "Docker", "AWS", "Firebase", "MongoDB", "PostgreSQL"]
  };

  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <span className="text-cyan-400 font-mono text-xl mr-4">02.</span>
        <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
        <div className="h-[1px] bg-gray-700 flex-grow ml-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform duration-300">
            <h3 className="text-cyan-400 font-mono mb-4 text-lg">{category}</h3>
            <ul className="space-y-2">
              {items.map(skill => (
                <li key={skill} className="flex items-center text-sm">
                  <span className="text-cyan-400 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Founder & CEO",
      company: "Elyndor Properties",
      period: "2009 - Present",
      description: [
        "Founded and lead a Ghanaian real estate marketplace with over 15 years of experience in strategic market development.",
        "Spearheaded digital transformation initiatives, building the platform from ground up using modern web technologies.",
        "Managed cross-functional teams and implemented data-driven strategies to grow the user base."
      ]
    },
    {
      role: "Software Developer & IT Tutor",
      company: "Freelance / Education",
      period: "2018 - Present",
      description: [
        "Develop full-stack applications for diverse clients while mentoring aspiring developers.",
        "Created and taught curriculum on modern web development (React, Node.js) to over 50+ students.",
        "Maintain active open-source contributions and educational resources on GitHub."
      ]
    },
    {
      role: "IT Educator & Administrator",
      company: "Non-Governmental Organization",
      period: "2016 - 2021",
      description: [
        "Served as Department Head, leading technology integration into educational initiatives.",
        "Managed IT infrastructure and provided technical support for the organization.",
        "Collaborated with stakeholders to deliver impactful community projects."
      ]
    }
  ];

  return (
    <div>
      <div className="flex items-center mb-8">
        <span className="text-cyan-400 font-mono text-xl mr-4">03.</span>
        <h2 className="text-3xl font-bold text-white">Where I've Worked</h2>
        <div className="h-[1px] bg-gray-700 flex-grow ml-6"></div>
      </div>

      <div className="space-y-12 border-l-2 border-gray-800 ml-3 pl-8 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-2 border-cyan-400 bg-[#0a192f]"></div>

            <h3 className="text-xl font-bold text-white mb-1">
              {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
            </h3>
            <p className="font-mono text-sm text-slate-400 mb-4">{exp.period}</p>

            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start text-slate-400 text-sm">
                  <span className="text-cyan-400 mr-2 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;