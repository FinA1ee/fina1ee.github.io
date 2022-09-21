import CircleIcon from "../lego/CircleIcon";
import ResumeTextBox from "./ResumeTextBox";
import workData from "../../resources/data/workExp";
import eduData from "../../resources/data/eduExp";

const title1 = "Work Experience";
const title2 = "Education";

function ResumeBanner(props) {
  return (
    <div style={bannerStyle}>
      {/* <ResumeBannerItem title={title0} /> */}
      <hr style={lineBreakerStyle} />
      <ResumeBannerItem title={title1} data={workData} />
      <hr style={lineBreakerStyle} />
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
      <div style={textBoxsStyle}>{textBoxs}</div>
    </div>
  );
}

const bannerStyle = {
  marginRight: "40px",
};

const lineBreakerStyle = {
  width: "100%",
  marginTop: "30px",
  marginBottom: "30px",
};

const textBoxsStyle = {
  display: "flex",
  flexDirection: "column",
};

const iconTextStyle = {
  height: "120px",
  width: "120px",
  borderRadius: "50%",
  border: "none",
  marginRight: "30px",
  color: "white",
  fontSize: "17px",
  fontFamily: "Noticia Text",
  fontWeight: "bold",
  backgroundColor: "#ec3454",
};

const iconStyle = {
  marginBottom: "10px",
};

export default ResumeBanner;
