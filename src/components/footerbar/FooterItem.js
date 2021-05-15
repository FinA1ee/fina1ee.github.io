import "../../styles/FooterBar.css";

function FooterItem(props) {
  const { title, iconSrc } = props;
  return (
    <div className="component-footer-item">
      <img alt="footer-icon" src={iconSrc}></img>
      <p>{title}</p>
    </div>
  );
}

export default FooterItem;
