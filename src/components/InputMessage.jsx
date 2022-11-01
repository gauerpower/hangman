import React from "react";

function InputMessage(props) {
  return (
    <div className="message-input-container">
      <label className="starting-input-label" htmlFor="message-text">
        Message Text:
        <textarea className="starting-input" maxLength={140}
          name="message-text"
          id="message-text"
          placeholder="Message"
          onChange={props.changeTypedText}
          value={props.typedText}
          rows={4}
          cols={40}
        ></textarea>
      </label>
    </div>
  );
}

export default InputMessage;
