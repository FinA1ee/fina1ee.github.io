import CircleIcon from "../lego/CircleIcon";
import SkillIcon from "../../resources/imgs/svg/skill.svg";
import LangIcon from "../../resources/imgs/svg/language.svg";

function SkillBanner(props) {
  const title1 = "Skills";
  const title2 = "Languages";
  const content1 = ["Javascript ES6", "HTML/CSS", "Node", "Python", "React"];
  const content2 = ["Manderian", "English", "Japanese"];

  return (
    <div style={skillBannerStyle}>
      <SkillBannerItem title={title1} content={content1} iconSrc={SkillIcon} />
      <SkillBannerItem title={title2} content={content2} iconSrc={LangIcon} />
    </div>
  );
}

const skillBannerStyle = {
  margin: "20px",
};

function SkillBannerItem(props) {
  var indexKey = -1;
  const listItem = props.content.map(function (item) {
    indexKey += 1;
    return <p key={indexKey}>{item}</p>;
  });
  return (
    <div style={skillItemStyle}>
      <CircleIcon
        type={"image"}
        iconSrc={props.iconSrc}
        iconStyle={iconStyle}
        imgStyle={imgStyle}
      />
      <section style={fontStyle}>
        <p style={titleStyle}>{props.title}</p>
        <hr style={lineBreakerStyle} />
        {listItem}
      </section>
    </div>
  );
}

const lineBreakerStyle = {
  width: "100%",
  marginTop: "10px",
  marginBottom: "10px",
};
const fontStyle = {
  textAlign: "initial",
  fontSize: "13px",
};
const titleStyle = {
  fontFamily: "Noticia Text",
  fontSize: "17px",
  marginTop: "5px",
  marginBottom: "5px",
};
const skillItemStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "30px",
};
const iconStyle = {
  textAlign: "initial",
};

const imgStyle = {
  width: "45px",
  height: "45px",
};

export default SkillBanner;
