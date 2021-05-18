import CircleIcon from "../lego/CircleIcon";
import ProjectTextBox from "../lego/ProjectTextBox";
import cc3kImg from "../../resources/imgs/cc3k.png";

function ProjectBanner(props) {
  const project_1 = "Project | 01";
  const project_1_title = "CC3K";
  const project_1_content = "This is a text-based 2D RPG game written in C++.";
  //   const project_1_imgsrc = "../../resources/imgs/cc3k";

  const bannerStyle = {
    display: "flex",
    flexDireciton: "row",
    margin: "10px",
  };
  const textStyle = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    border: "none",
    marginRight: "20px",
    color: "white",
    fontSize: "15px",
    backgroundColor: "#64ccd4",
  };

  const bannerImgStyle = {
    width: "510px",
    height: "287px",
    marginRight: "20px",
  };

  return (
    <div style={bannerStyle}>
      {/* <hr></hr> */}
      <img style={bannerImgStyle} src={cc3kImg} alt="banner-img"></img>
      <div>
        <CircleIcon type={"text"} title={project_1} textStyle={textStyle} />
        <hr></hr>
        <ProjectTextBox
          id={1}
          title={project_1_title}
          content={project_1_content}
        />
      </div>
      {/* <hr></hr> */}
    </div>
  );
}

export default ProjectBanner;
