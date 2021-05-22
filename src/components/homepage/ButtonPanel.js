import React from "react";
import CircleIcon from "../lego/CircleIcon";

function ButtonPanel(props) {
  const buttonList = [
    { key: 0, title: "Coder", redirect: "/resume", bgColor: "#ec3454" },
    { key: 1, title: "Gamer", redirect: "/resume", bgColor: "#64ccd4" },
    { key: 2, title: "Travller", redirect: "/projects", bgColor: "#d2c925" },
  ];

  const buttonStyle = {
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
      type={"button"}
      title={item.title}
      redirect={item.redirect}
      iconStyle={null}
      buttonStyle={Object.assign({}, buttonStyle, {
        backgroundColor: item.bgColor,
      })}
    />
  ));

  return <div style={buttonPanelStyle}>{buttonsComp}</div>;
}

export default ButtonPanel;
