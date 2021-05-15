import React from "react";
import NameTag from "./NameTag";
import Avatar from "./Avatar";
import Navigates from "./Navigates";
import AvatarImg from "../../resources/imgs/avatar.png";
import "../../styles/NavBar.css";

function NavBar(props) {
  return (
    <div className="component-navbar">
      <Avatar avatarSrc={AvatarImg} />
      <NameTag
        familyName="Zhu"
        givenName="Jack"
        jobTitle="Full Stack Developer"
      />
      <Navigates pages={props.navItems} />
    </div>
  );
}

export default NavBar;
