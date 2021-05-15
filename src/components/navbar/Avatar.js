import "../../styles/NavBar.css";

function Avatar(props) {
  return (
    <div className="component-navbar-avatar">
      <img alt="homepage_avatar" src={props.avatarSrc}></img>
    </div>
  );
}

export default Avatar;
