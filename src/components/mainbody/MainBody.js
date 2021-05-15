import ContactBody from "./ContactBody";
import HomePageBody from "./HomePageBody";
import ProjectBody from "./ProjectBody";
import ResumeBody from "./ResumeBody";
import "../../styles/MainBody.css";

const MainBody = (props) => {
  let mainBody = <p> Fatal Error </p>;
  if (props.displayContent === "homepage") mainBody = <HomePageBody />;
  else if (props.displayContent === "resume") mainBody = <ResumeBody />;
  else if (props.displayContent === "project") mainBody = <ProjectBody />;
  else if (props.displayContent === "contact") mainBody = <ContactBody />;

  return <div className="component-mainbody"> {mainBody} </div>;
};

export default MainBody;
