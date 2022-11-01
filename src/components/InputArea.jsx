import React from "react";
import InputMessage from "./InputMessage";
import InputHint from "./InputHint";

function InputArea(props) {
  return (
    <div className="input-area">
      <div className="game-heading-container">
        <h1 className="game-heading">Hangman</h1>
      </div>
      <h2 className="input-heading">Player 1, input a message</h2>
      <h6 className="input-heading">(Player 2, please look away)</h6>
      <div className="text-area-and-button-container">
        <InputMessage
          changeTypedText={props.changeTypedText}
          typedText={props.typedText}
        />
        <InputHint
          changeTypedHint={props.changeTypedHint}
          typedHint={props.typedHint}
        />
        <button className="message-setter"
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
