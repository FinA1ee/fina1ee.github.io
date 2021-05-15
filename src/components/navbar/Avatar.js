import "../../styles/NavBar.css";
import { Link } from "react-router-dom";

function Avatar(props) {
  return (
    <div className="component-navbar-avatar">
      <Link className="link" to="/homepage">
        <img alt="homepage_avatar" src={props.avatarSrc}></img>
      </Link>
    </div>
  );
}

export default Avatar;
