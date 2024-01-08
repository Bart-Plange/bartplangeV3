// ProjectDetails.jsx
const ProjectDetails = ({ match }) => {
  const { projectId } = match.params;

  return (
    <div>
      <h2>Project Details</h2>
      <p>Project ID: {projectId}</p>
      
    </div>
  );
};

export default ProjectDetails;
