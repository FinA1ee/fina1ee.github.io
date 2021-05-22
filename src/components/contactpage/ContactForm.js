import TextInput from "../lego/TextInput";
function ContactForm(props) {
  return (
    <form>
      <TextInput title={"Name"} name="Your Full Name..." />
      <TextInput title={"Email"} name="Your Email Address..." />
      <TextInput title={"Phone Number"} name="Your Phone Number..." />
      <TextInput type="textarea" title={"Message"} name="Your Message..." />
      <button type="submit"> submit </button>
    </form>
  );
}

export default ContactForm;
