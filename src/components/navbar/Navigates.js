import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";

function Navigates(props) {
  const pages = props.pages;
  const items = pages.map((page) => (
    <Link
      className="link"
      key={page.key}
      to={page.link}
      style={{ textDecoration: "none" }}
    >
      {page.name}
    </Link>
  ));
  return <div className="component-navbar-navigates">{items}</div>;
}

export default Navigates;
