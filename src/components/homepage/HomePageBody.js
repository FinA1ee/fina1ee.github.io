import Avatar from "../lego/Avatar";
import BigAvatarImg from "../../resources/imgs/harry-avatar.jpeg";
import ButtonPanel from "./ButtonPanel";

function HomePageBody(props) {
  const description =
    "My name is Yuchen Zhu, you can call me Jack if you'd like. \n\n" + 
    "I am a Full Stack Developer recently graduated from the University of Waterloo in Canada.\n\n" +
    "I’m currently seeking opportunity of Shanghai based Front-End or SDE position with 1-2 years experience."

  const homePageStyle = {
    display: "flex",
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
  };
  const avatarStyle = {
    margin: "40px 80px 80px 0px",
  };
  const imgStyle = {
    borderRadius: "50%",
    height: "380px",
    marginTop: "16px",
  };
  const titleStyle = {
    fontFamily: "Noticia Text",
    color: "#4d4d4d",
    margin: "10px",
    fontSize: "80px",
    alignSelf: "flex-start",
    fontWeight: "bold",
  };
  const subtitleStyle = {
    fontFamily: "Noticia Text",
    color: "#4d4d4d",
    marginTop: "-10px",
    marginBottom: "20px",
    fontSize: "46px",
    alignSelf: "flex-start",
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    marginTop: "50px",
  };
  const descriptionStyle = {
    maxWidth: "450px",
    fontSize: "13px",
  };
  return (
    <div style={homePageStyle}>
      <Avatar
        avatarStyle={avatarStyle}
        imgStyle={imgStyle}
        avatarSrc={BigAvatarImg}
      />
      <div style={contentStyle}>
        <p style={titleStyle}> Hello, </p>
        <p style={subtitleStyle}> a bit about me: </p>
        <p style={descriptionStyle}> {description} </p>
        <ButtonPanel />
      </div>
    </div>
  );
}

export default HomePageBody;
