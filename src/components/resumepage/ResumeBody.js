import SkillBanner from "./SkillBanner";
import ResumeBanner from "./ResumeBanner";

function ResumeBody(props) {
  return (
    <div style={resumePageStyle}>
      <p style={titleStyle}> Resume</p>
      <div style={resumeContentStyle}>
        <ResumeBanner />
        <SkillBanner />
      </div>
    </div>
  );
}

const resumePageStyle = {
  display: "flex",
  flexDirection: "column",
};

const resumeContentStyle = {
  display: "flex",
};

const titleStyle = {
  fontSize: "80px",
  fontFamily: "Noticia Text",
  color: "#4d4d4d",
  textAlign: "initial",
  marginTop: "50px",
  marginBottom: "10px",
};

export default ResumeBody;
