import React from "react";
import { Link } from "react-router-dom";
import "../../styles/MainBody.css";
function CircleIcon(props) {
  const { title, iconStyle, redirect, bgColor } = props;

  const colorStyle = {
    backgroundColor: bgColor,
  };
  return (
    <div className="">
      <Link to={redirect}>
        <button
          className="button"
          style={Object.assign({}, iconStyle, colorStyle)}
        >
          {title}
        </button>
      </Link>
    </div>
  );
}

export default CircleIcon;
