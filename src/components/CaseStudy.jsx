const CaseStudy = ({ title, image, technologies }) => {
  return (
    <div className='py-12'>
      <img src={image} alt={`${title} Mockup`} className='object-cover mb-6' />
      <div className='flex items-center flex-wrap'>
        {technologies.map((tech, index) => (
          <span key={index} className='border p-2 m-2 border-gray-500 text-gray-500'>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
