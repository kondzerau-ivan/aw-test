import { useState } from "react";

export default function InputField(props) {
  const { addNote = Function.prototype } = props;

  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (value.length <= 300) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleEnterKeyDown = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      if (value.length <= 300) {
        addNote(value);
        setValid(true);
        setValue("");
      } else {
        setValid(false);
      }
    }
  };

  return (
    <div className="input-field field">
      <label className="field__label" htmlFor="notice">
        Add note...
      </label>
      <input
        className={
          valid ? "field__input" : "field__input field__input--novalid"
        }
        id="notice"
        type="text"
        onChange={handleInputChange}
        value={value}
        onKeyDown={handleEnterKeyDown}
      />
      {!valid && (
        <p className="field__message">
          {" "}
          You can use only short notes -- under 300 symbols!{" "}
        </p>
      )}
    </div>
  );
}
