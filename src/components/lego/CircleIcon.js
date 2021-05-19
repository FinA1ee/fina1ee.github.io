import React from "react";
import { Link } from "react-router-dom";
import "../../styles/MainBody.css";
function CircleIcon(props) {
  const { type } = props;

  if (type === "image") {
    const { iconSrc, iconStyle, imgStyle, children } = props;
    return (
      <div style={iconStyle}>
        <img style={imgStyle} src={iconSrc} alt="footer-img"></img>
        {children}
      </div>
    );
  } else if (type === "button") {
    const { buttonStyle, iconStyle, title, redirect } = props;
    return (
      <div style={iconStyle}>
        <Link to={redirect}>
          <button className="button" style={buttonStyle}>
            {title}
          </button>
        </Link>
      </div>
    );
  } else if (type === "text") {
    const { textStyle, iconStyle, title } = props;
    return (
      <div style={iconStyle}>
        <button style={textStyle} disabled>
          {title}
        </button>
      </div>
    );
  }

  return <div>Error</div>;
}

export default CircleIcon;
