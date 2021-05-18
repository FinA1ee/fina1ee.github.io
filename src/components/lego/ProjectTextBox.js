function ProjectTextBox(props) {
  const { id, title, content } = props;
  return (
    <div>
      <p>
        {" "}
        Project | 0{id} {title}{" "}
      </p>
      <p> {content}</p>
    </div>
  );
}

export default ProjectTextBox;
