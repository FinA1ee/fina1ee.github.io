import ProjectBanner from "./ProjectBanner";

function ProjectBody(props) {
  const projectPageStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "5%",
    marginRight: "5%",
  };
  return (
    <div style={projectPageStyle}>
      <p> LATEST PROJECTS </p>
      <ProjectBanner />
      <ProjectBanner />
      <ProjectBanner />
    </div>
  );
}

export default ProjectBody;
