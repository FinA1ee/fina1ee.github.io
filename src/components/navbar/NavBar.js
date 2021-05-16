import React from "react";
import NameTag from "./NameTag";
import Navigates from "./Navigates";
import "../../styles/NavBar.css";

function NavBar(props) {
  const avatarStyle = {
    margin: "10px",
  };
  const imgStyle = {
    borderRadius: "50%",
    height: "70px",
    marginTop: "16px",
  };
  return (
    <div className="component-navbar">
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
