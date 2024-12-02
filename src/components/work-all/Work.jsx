import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WorkSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      '.work-item',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)',
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="work-section bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          My Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Work Item */}
          <div className="work-item bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="work-image1.jpg"
              alt="Work 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-800">
                Project Title
              </h3>
              <p className="text-gray-600 mt-2">
                Brief description of the project.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Add more work items as needed */}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
