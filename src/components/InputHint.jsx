import React from "react";

function InputHint(props) {
  return (
    <div className="hint-input-container">
      <label className="starting-input-label" htmlFor="message-hint">
        Topic/Hint:
        <input className="starting-input"
          maxLength={25}
          name="message-hint"
          id="message-hint"
          type="text"
          onChange={props.changeTypedHint}
          value={props.typedHint}
          placeholder="Topic/Hint"
          size={25}
        ></input>
      </label>
    </div>
  );
}

export default InputHint;
