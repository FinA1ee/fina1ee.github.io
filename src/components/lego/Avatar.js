import "../../styles/NavBar.css";
import { Link } from "react-router-dom";

function Avatar(props) {
  const { avatarStyle, imgStyle, avatarSrc } = props;

  return (
    <div style={avatarStyle}>
      <Link to="/homepage">
        <img alt="avatar" src={avatarSrc} style={imgStyle}></img>
      </Link>
    </div>
  );
}

export default Avatar;
