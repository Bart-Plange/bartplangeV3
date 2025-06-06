import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Resume = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a192f] text-[#ccd6f6] px-6 py-10 md:px-20 lg:px-32 font-sans"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#64ffda] mb-8 border-b border-[#64ffda] inline-block">
          Resume
        </h2>

        <div className="mb-10">
          <h3 className="text-xl text-[#64ffda] font-semibold">Professional Summary</h3>
          <p className="mt-4">
            Innovative software developer and IT educator with a strong foundation in Python, React, and Tailwind CSS.
            Experienced in developing educational platforms and dynamic web applications. Passionate about leveraging
            technology to enhance learning experiences and streamline administrative processes.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl text-[#64ffda] font-semibold">Professional Experience</h3>
          <ul className="list-disc list-inside space-y-4 mt-4">
            <li>
              <strong>Acheampomah Educational Complex — Administrator (Jul 2023 - Dec 2023)</strong>
              <p>Led administrative and IT operations, solved fee collection issues, and introduced extracurricular activities.</p>
            </li>
            <li>
              <strong>Rising Star Montessori — Teacher & Computer Lab Technician (Jan 2021 - Jul 2023)</strong>
              <p>Taught IT, installed software, managed databases, led computing and drama clubs, and built school website.</p>
            </li>
            <li>
              <strong>Bright Sparks, Satellite — Teacher & Secretary (Aug 2018 - Jan 2021)</strong>
              <p>Instructed IT, Science, Creativity, and held leadership roles including PTA secretary and house master.</p>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-xl text-[#64ffda] font-semibold">Education</h3>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Accra Technical University</strong> — BTech in Computer Science (2020 - Present)</li>
            <li><strong>Accra Institute of Technology</strong> — Certificate in Computer Science (2019)</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-xl text-[#64ffda] font-semibold">Web Projects</h3>
          <ul className="list-disc list-inside mt-4 space-y-4">
            <li>
              <strong>Nyametease Perfect Grace Foundation</strong> — Foundation website with gallery and donation page.<br />
              <span className="text-sm">HTML, TailwindCSS, JavaScript</span><br />
              <a href="https://github.com/Bart-Plange/nyametease_perfectgrace_foundation" target="_blank" rel="noreferrer" className="text-[#64ffda] underline">GitHub Repo</a>
            </li>
            <li>
              <strong>Rising Star Montessori</strong> — School website with admission and calendar features.<br />
              <span className="text-sm">HTML, TailwindCSS, JavaScript</span><br />
              <a href="https://github.com/Bart-Plange/rising-star-montessori" target="_blank" rel="noreferrer" className="text-[#64ffda] underline">GitHub Repo</a>
            </li>
            <li>
              <strong>Portfolio Website</strong> — Personal portfolio hosted at <a href="https://dennisbart.netlify.app" target="_blank" rel="noreferrer" className="text-[#64ffda] underline">dennisbart.netlify.app</a>.<br />
              <span className="text-sm">HTML, TailwindCSS, React</span><br />
              <a href="https://github.com/Bart-Plange/portfolioV2" target="_blank" rel="noreferrer" className="text-[#64ffda] underline">GitHub Repo</a>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-xl text-[#64ffda] font-semibold">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <p className="font-semibold text-[#64ffda]">Hard Skills:</p>
              <ul className="list-disc list-inside">
                <li>React, TailwindCSS, Python</li>
                <li>MS Access, PowerApps, Excel, PowerPoint</li>
                <li>Windows, Linux, Git, GitHub, Netlify</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#64ffda]">Soft Skills:</p>
              <ul className="list-disc list-inside">
                <li>Collaborative and Resilient</li>
                <li>Solutions-Oriented and Creative</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-[#64ffda] font-semibold">Languages & References</h3>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li><strong>Languages:</strong> English, Twi, Ga</li>
            <li><strong>References:</strong> Available upon request</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
