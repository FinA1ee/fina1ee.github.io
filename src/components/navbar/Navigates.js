import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";

function Navigates(props) {
  const { pages, onSelectionChange } = props;

  const items = pages.map(function (page) {
    let linkStyle = {
      textDecoration: "none",
      margin: "10px",
    };
    if (props.selected === page.name) {
      linkStyle["color"] = "#66ccff";
    } else {
      linkStyle["color"] = "#4d4d4d";
    }
    return (
      <Link
        className="link"
        key={page.key}
        to={page.link}
        style={linkStyle}
        onClick={onSelectionChange}
      >
        {page.name}
      </Link>
    );
  });
  return <div className="component-navbar-navigates">{items}</div>;
}

export default Navigates;
