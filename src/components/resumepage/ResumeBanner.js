import CircleIcon from "../lego/CircleIcon";
import ResumeTextBox from "./ResumeTextBox";
import workData from "../../resources/data/workExp";
import eduData from "../../resources/data/eduExp";

const title1 = "Work Experience";
const title2 = "Education";

function ResumeBanner(props) {
  return (
    <div>
      <ResumeBannerItem title={title1} data={workData} />
      <ResumeBannerItem title={title2} data={eduData} />
    </div>
  );
}

function ResumeBannerItem(props) {
  const { title, data } = props;
  const textBoxs = data.map((item) => (
    <ResumeTextBox
      key={item.id}
      title={item.title}
      timePeriod={item.time}
      content={item.content}
    />
  ));
  return (
    <div style={{ display: "flex" }}>
      <CircleIcon
        type={"text"}
        textStyle={iconTextStyle}
        iconStyle={iconStyle}
        title={title}
      />
      {textBoxs}
    </div>
  );
}

const iconTextStyle = {
  height: "120px",
  width: "120px",
  borderRadius: "50%",
  border: "none",
  marginRight: "20px",
  color: "white",
  fontSize: "17px",
  fontFamily: "Noticia Text",
  fontWeight: "bold",
  backgroundColor: "#ec3454",
};
const iconStyle = {};
export default ResumeBanner;
