import { useState } from "react";
import "../../styles/TextInput.css";

function TextInput(props) {
  const { type, inputStyle, title, name } = props;
  const [inputValue, setInputValue] = useState(name);

  //   function handleValueChange(e) {
  //     setInputValue(e.target.value);
  //     console.log(inputValue);
  //   }

  if (type === "textarea") {
    return (
      <div>
        <p className="title">{title}</p>
        <textarea style={inputStyle} placeholder={inputValue}></textarea>
      </div>
    );
  } else {
    return (
      <div>
        <p className="title">{title}</p>
        <input style={inputStyle} placeholder={inputValue}></input>
      </div>
    );
  }
}

export default TextInput;
