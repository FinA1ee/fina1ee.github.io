import React from "react";
import NameTag from "./NameTag";
import Navigates from "./Navigates";
import { useState } from "react";
import "../../styles/NavBar.css";

function NavBar(props) {
  const { navItems } = props;
  const [selected, setSelected] = useState("/homepage");

  function onSelectionChange(e) {
    setSelected(e.target.hash);
  }

  return (
    <div className="component-navbar">
      <NameTag
        familyName="Zhu"
        givenName="Jack"
        jobTitle="Full Stack Developer"
      />
      <Navigates
        pages={navItems}
        selected={selected}
        onSelectionChange={onSelectionChange}
      />
    </div>
  );
}

export default NavBar;
