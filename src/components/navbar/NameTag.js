import React from "react";
import "../../styles/NavBar.css";

function NameTag(props) {
  return (
    <div className="component-navbar-nametag">
      <div className="name">
        {props.givenName} {props.familyName}
      </div>
      <div className="title">{props.jobTitle}</div>
    </div>
  );
}

export default NameTag;
