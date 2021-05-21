import TeleIcon from "../../resources/imgs/svg/phone.svg";
import EmailIcon from "../../resources/imgs/svg/email.svg";
import GithubIcon from "../../resources/imgs/svg/github.svg";
import SocialIcon from "../../resources/imgs/svg/social.svg";
import CircleIcon from "../lego/CircleIcon";
import "../../styles/FooterBar.css";
import FooterItem from "./FooterItem";

function FooterBar() {
  const titleStyle = {
    fontSize: "13px",
    lineHeight: "1.2em",
    color: "white",
    fontWeight: "bold",
    marginBottom: "-5px",
    textAlign: "initial",
  };
  const contentStyle = {
    fontSize: "13px",
    lineHeight: "1.2em",
    color: "white",
    textAlign: "initial",
  };

  const teleTitle = "Call";
  const teleContent = "CN: 18915974830";
  const teleChild = (
    <FooterItem
      titleStyle={titleStyle}
      contentStyle={contentStyle}
      title={teleTitle}
      content={teleContent}
    />
  );

  const emailTitle = "Email";
  const emailContent = "Gmail: jackzyc1997@gmail.com";
  const emailChild = (
    <FooterItem
      titleStyle={titleStyle}
      contentStyle={contentStyle}
      title={emailTitle}
      content={emailContent}
    />
  );

  const ghTitle = "Github";
  const ghContent = "Username: github.com/j97zhu";
  const ghChild = (
    <FooterItem
      titleStyle={titleStyle}
      contentStyle={contentStyle}
      title={ghTitle}
      content={ghContent}
    />
  );

  const socialTitle = "Social Media";
  const socialContent = "Wechat: zyc1220594953";
  const socialChild = (
    <FooterItem
      titleStyle={titleStyle}
      contentStyle={contentStyle}
      title={socialTitle}
      content={socialContent}
    />
  );

  const footerInfo = [
    { key: 0, children: teleChild, iconSrc: TeleIcon },
    { key: 1, children: emailChild, iconSrc: EmailIcon },
    { key: 2, children: ghChild, iconSrc: GithubIcon },
    { key: 3, children: socialChild, iconSrc: SocialIcon },
  ];

  const iconStyle = {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
  };

  const imgStyle = {
    width: "45px",
    height: "45px",
    margin: "10px",
  };
  const footer = footerInfo.map((item) => (
    <CircleIcon
      key={item.key}
      type={"image"}
      iconSrc={item.iconSrc}
      children={item.children}
      iconStyle={iconStyle}
      imgStyle={imgStyle}
    />
  ));

  return <div className="component-footer">{footer}</div>;
}

export default FooterBar;
