import ContactForm from "./ContactForm";

function ContactBody(props) {
  return (
    <div style={contactBodyStyle}>
      <p style={contactTitleStyle}> Contact </p>
      <hr style={lineBreakerStyle} />
      <ContactForm />
    </div>
  );
}

const contactBodyStyle = {
  display: "flex",
  flexDirection: "column",
  jusifyContent: "initial",
  marginLeft: "5%",
  marginRight: "5%",
};
const contactTitleStyle = {
  fontSize: "80px",
  fontFamily: "Noticia Text",
  color: "#4d4d4d",
  marginTop: "50px",
  marginBottom: "10px",
  textAlign: "initial",
};

const lineBreakerStyle = {
  width: "100%",
  marginTop: "20px",
  marginBottom: "20px",
};
export default ContactBody;
