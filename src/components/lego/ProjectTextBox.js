function ProjectTextBox(props) {
  const { title, content } = props;
  const boxStyle = {
    width: "325px",
  };
  const titleStyle = {
    textAlign: "initial",
  };

  const contentStyle = {
    fontSize: "13px",
    fontFamily: "Open Sans",
    textAlign: "initial",
  };
  return (
    <div style={boxStyle}>
      <section>
        <h3 style={titleStyle}>{title}</h3>
        <p style={contentStyle}> {content} </p>
      </section>
    </div>
  );
}

export default ProjectTextBox;
