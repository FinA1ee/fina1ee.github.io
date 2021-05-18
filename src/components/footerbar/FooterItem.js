import "../../styles/FooterBar.css";

function FooterItem(props) {
  const { title, content, titleStyle, contentStyle } = props;
  return (
    <div>
      <p style={titleStyle}>{title}</p>
      <p style={contentStyle}>{content}</p>
    </div>
  );
}

export default FooterItem;
