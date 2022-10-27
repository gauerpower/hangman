import React from "react";

function InputHint(props) {
  return (
    <div className="hint-input-container">
      <label htmlFor="message-hint">
        Topic/Hint:
        <input
          name="message-hint"
          id="message-hint"
          type="text"
          onChange={props.changeTypedHint}
          value={props.typedHint}
        ></input>
      </label>
    </div>
  );
}

export default InputHint;
