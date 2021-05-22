import ProjectBanner from "./ProjectBanner";
import projectData from "../../resources/data/projects";

function ProjectBody(props) {
  const projectPageStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "5%",
    marginRight: "5%",
  };
  const titleStyle = {
    fontSize: "80px",
    fontFamily: "Noticia Text",
    color: "#4d4d4d",
    textAlign: "initial",
    marginTop: "50px",
    marginBottom: "10px",
  };

  const lineBreakerStyle = {
    width: "100%",
    marginTop: "50px",
    marginBottom: "50px",
  };

  const ProjectBanners = projectData.map((item) => (
    <div key={item.id}>
      <ProjectBanner
        id={item.id}
        title={item.title}
        content={item.content}
        imgSrc={item.imgsrc}
      />

      <hr style={lineBreakerStyle}></hr>
    </div>
  ));

  return (
    <div style={projectPageStyle}>
      <p style={titleStyle}> LATEST PROJECTS</p>
      <hr style={lineBreakerStyle}></hr>
      {ProjectBanners}
    </div>
  );
}

export default ProjectBody;
