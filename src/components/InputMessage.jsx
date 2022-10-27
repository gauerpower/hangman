import React from "react";

function InputMessage(props) {
  return (
    <div className="message-input-container">
      <label htmlFor="message-text">
        Message Text:
        <textarea
          name="message-text"
          id="message-text"
          placeholder="Message"
          onChange={props.changeTypedText}
          value={props.typedText}
        ></textarea>
      </label>
    </div>
  );
}

export default InputMessage;
