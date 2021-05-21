function ResumeTextBox(props) {
  const { title, timePeriod, content } = props;
  return (
    <section style={sectinoStyle}>
      <div style={titleStyle}>
        <p style={{ fontWeight: "bold" }}> {title} </p>
        <p> {timePeriod} </p>
      </div>
      <p> {content} </p>
    </section>
  );
}

const sectinoStyle = {
  maxWidth: "400px",
  fontSize: "13px",
  lineHeight: "1.5em",
  overflowWrap: "break word",
  textAlign: "initial",
  whiteSpace: "pre-line",
  marginBottom: "10px",
};

const titleStyle = {
  fontFamily: "Noticia Text",
  fontSize: "17px",
};

export default ResumeTextBox;
