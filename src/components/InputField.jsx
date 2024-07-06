import { useState } from "react";

export default function InputField(props) {
  const {addNote = Function.prototype} = props;

  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleEnterKeyDown = (e) => {
    if(e.code === 'Enter') {
      if (value.length <= 300) {
        addNote(value)
        setValue('');
      } else {
        alert("Note text should be less 300 symbols!");
      }
    }
  }

  return <div className="input-field field">
    <label className="field__label" htmlFor="notice">Add note...</label>
    <input className="field__input" id="notice" type="text" onChange={handleInputChange} value={value} onKeyDown={handleEnterKeyDown} />
  </div>
}