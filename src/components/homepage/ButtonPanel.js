import React from "react";
// import CircleIcon from "../lego/CircleIcon";
import Popup from "reactjs-popup";
import CoderIcon from "../../resources/imgs/coder.png";
import GamerIcon from "../../resources/imgs/gamer.png";
import TravellerIcon from "../../resources/imgs/travel.png";
import "../../styles/MainBody.css";

function ButtonPanel(props) {
  const buttonList = [
    {
      key: 0,
      title: "Coder",
      redirect: "/resume",
      bgColor: "#ec3454",
      imgSrc: CoderIcon,
    },
    {
      key: 1,
      title: "Gamer",
      redirect: "/resume",
      bgColor: "#64ccd4",
      imgSrc: GamerIcon,
    },
    {
      key: 2,
      title: "Travller",
      redirect: "/projects",
      bgColor: "#d2c925",
      imgSrc: TravellerIcon,
    },
  ];

  const buttonsComp = buttonList.map((item) => (
    <Popup
      trigger={
        <button
          className="button"
          style={Object.assign({}, buttonStyle, {
            backgroundColor: item.bgColor,
          })}
        >
          <div style={insideButtonStyle}>
            {item.title}
            <img style={imgStyle} src={item.imgSrc}></img>
          </div>
        </button>
        // <CircleIcon
        //   key={item.key}
        //   type={"button"}
        //   title={item.title}
        //   iconStyle={null}
        //   buttonStyle={Object.assign({}, buttonStyle, {
        //     backgroundColor: item.bgColor,
        //   })}
        // />
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Modal Title </div>
          <div className="content">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus,
            voluptas rem alias. Vitae?
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  ));

  return <div style={buttonPanelStyle}>{buttonsComp}</div>;
}

const insideButtonStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Noticia Text",
  fontWeight: "bold",
};

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

const imgStyle = {
  width: "50px",
  height: "50px",
  margin: "5px",
};

export default ButtonPanel;
