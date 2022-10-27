import React from "react";
import Guesses from "./Guesses";
import KeyboardArea from "./KeyboardArea";
import Reset from "./Reset";

function GuessingArea(props) {
  return (
    <div className="guessing-area">
      <h2>Player 2, guess the message</h2>
      <Guesses
        hintToDisplay={props.hintToDisplay}
        lettersToDisplay={props.lettersToDisplay}
        wrongLetters={props.wrongLetters}
        hasGameEnded={props.hasGameEnded}
        messageToGuess={props.messageToGuess}
      />
      {props.hasGameEnded ? (
        <Reset resetGame={props.resetGame} hasGameEnded={props.hasGameEnded} />
      ) : (
        <KeyboardArea
          guessClickedLetter={props.guessClickedLetter}
          guessKeyedLetter={props.guessKeyedLetter}
          guessedLetters={props.guessedLetters}
        />
      )}
    </div>
  );
}

export default GuessingArea;
