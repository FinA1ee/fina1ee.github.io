import React from "react";
import CircleIcon from "../lego/CircleIcon";

function ButtonPanel(props) {
  const buttonList = [
    { key: 0, title: "MY RESUME", redirect: "/resume", bgColor: "#ec3454" },
    { key: 1, title: "MY WORK", redirect: "/resume", bgColor: "#64ccd4" },
    { key: 2, title: "MY SKILLS", redirect: "/projects", bgColor: "#d2c925" },
  ];

  const iconStyle = {
    height: "130px",
    width: "130px",
    borderRadius: "50%",
    border: "none",
    marginRight: "20px",
    color: "white",
    fontSize: "15px",
  };

  const buttonPanelStyle = {
    display: "flex",
    flexDireciton: "row",
    justifyContent: "flex-start",
    marginBottom: "20px",
  };

  const buttonsComp = buttonList.map((item) => (
    <CircleIcon
      key={item.key}
      title={item.title}
      redirect={item.redirect}
      bgColor={item.bgColor}
      iconStyle={iconStyle}
    />
  ));

  return <div style={buttonPanelStyle}>{buttonsComp}</div>;
}

export default ButtonPanel;
