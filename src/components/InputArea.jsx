import React from "react";
import InputMessage from "./InputMessage";
import InputHint from "./InputHint";

function InputArea(props) {
  return (
    <div className="input-area">
      <h2>Player 1, input a message:</h2>
      <h3>(Player 2, please look away)</h3>
      <div className="text-area-and-button-container">
        <InputMessage
          changeTypedText={props.changeTypedText}
          typedText={props.typedText}
        />
        <InputHint
          changeTypedHint={props.changeTypedHint}
          typedHint={props.typedHint}
        />
        <button
          onClick={props.establishMessage}
          disabled={!props.typedText || !props.typedHint}
        >
          Set Message & Hint
        </button>
      </div>
    </div>
  );
}

export default InputArea;
