import TeleIcon from "../../resources/imgs/phone.svg";
import EmailIcon from "../../resources/imgs/email.svg";
import GithubIcon from "../../resources/imgs/github.svg";
import SocialIcon from "../../resources/imgs/social.svg";
import FooterItem from "./FooterItem";
import "../../styles/FooterBar.css";

function FooterBar() {
  // telt / email / github / linkedin, wechat, qq, instgram /

  const footerInfo = [
    { title: "Tele", iconSrc: TeleIcon },
    { title: "Email", iconSrc: EmailIcon },
    { title: "Github", iconSrc: GithubIcon },
    { title: "Social", iconSrc: SocialIcon },
  ];
  const footer = footerInfo.map((item) => (
    <FooterItem title={item.title} iconSrc={item.iconSrc} />
  ));

  return <div className="component-footer">{footer}</div>;
}

export default FooterBar;
