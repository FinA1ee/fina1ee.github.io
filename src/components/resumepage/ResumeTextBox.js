function ResumeTextBox(props) {
  const { title, timePeriod, content } = props;
  return (
    <section>
      <div>
        <p> {title} </p>
        <p> {timePeriod} </p>
      </div>
      <p> {content} </p>
    </section>
  );
}

export default ResumeTextBox;
