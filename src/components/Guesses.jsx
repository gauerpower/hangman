import React from "react";

function Guesses(props) {
  return (
    <div className="guesses">
      <div className="guesses-message">
        <h4 className="displayed-hint">Hint: {props.hintToDisplay}</h4>
        <h4 className="displayed-message" style={{ letterSpacing: "0.2rem", color: props.hasGameEnded === "win" ? "#007bff" : null }}>
          {props.hasGameEnded === "lose"
            ? props.messageToGuess
            : props.lettersToDisplay}
        </h4>
      </div>
      <div className="guesses-errors">
        <img
          className="hanged-man"
          src={`/images/hangman_graphic_${props.wrongLetters.length}.png`}
          alt={`hanged man with ${props.wrongLetters.length} parts`}
        ></img>
        <h6 className="displayed-wrong-guesses" style={{color: props.hasGameEnded === "lose" ? "red" : null}}>
          Wrong guesses:{" "}
          {props.wrongLetters.length > 0 ? props.wrongLetters.join(" ") : "N/A"}
        </h6>
      </div>
    </div>
  );
}

export default Guesses;
