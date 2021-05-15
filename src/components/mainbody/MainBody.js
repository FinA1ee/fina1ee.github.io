import ContactBody from "./ContactBody";
import HomePageBody from "./HomePageBody";
import ProjectBody from "./ProjectBody";
import ResumeBody from "./ResumeBody";

const MainBody = (props) => {
  if (props.displayContent === "homepage") return <HomePageBody />;
  else if (props.displayContent === "resume") return <ResumeBody />;
  else if (props.displayContent === "project") return <ProjectBody />;
  else if (props.displayContent === "contact") return <ContactBody />;
  else return <div>Fatal Error</div>;
};

export default MainBody;
