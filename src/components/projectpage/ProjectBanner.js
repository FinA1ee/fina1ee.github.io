import CircleIcon from "../lego/CircleIcon";
import ProjectTextBox from "../lego/ProjectTextBox";

function ProjectBanner(props) {
  const { id, title, content, imgSrc } = props;
  const iconTitle = "Project | " + id;
  return (
    <div style={bannerStyle}>
      {/* <hr></hr> */}
      <img style={bannerImgStyle} src={imgSrc} alt="banner-img"></img>
      <div>
        <CircleIcon
          type={"text"}
          title={iconTitle}
          textStyle={iconTextStyle}
          iconStyle={iconStyle}
        />
        <hr style={lineBreakerStyle}></hr>
        <ProjectTextBox title={title} content={content} />
        <div>{props.children}</div>
      </div>
    </div>
  );
}

const bannerStyle = {
  display: "flex",
  flexDireciton: "row",
};

const bannerImgStyle = {
  width: "510px",
  height: "287px",
  marginRight: "40px",
};

const iconTextStyle = {
  height: "100px",
  width: "100px",
  borderRadius: "50%",
  border: "none",
  marginRight: "20px",
  color: "white",
  fontSize: "15px",
  fontFamily: "Noticia Text",
  fontWeight: "bold",
  backgroundColor: "#64ccd4",
};

const iconStyle = {
  textAlign: "initial",
};

const lineBreakerStyle = {
  marginTop: "20px",
  marginBottom: "20px",
};

export default ProjectBanner;
