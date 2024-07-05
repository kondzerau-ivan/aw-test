export default function InputField() {
  return <div className="input-field field">
    <label className="field__label" htmlFor="notice">Add note...</label>
    <input className="field__input" id="notice" type="text" />
  </div>
}