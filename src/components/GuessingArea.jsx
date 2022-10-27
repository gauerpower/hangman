import React from "react";
import Guesses from "./Guesses";
import KeyboardArea from "./KeyboardArea";
import Reset from "./Reset";

function GuessingArea(props){
  return (<div className="guessing-area">
            <Guesses hintToDisplay={props.hintToDisplay} lettersToDisplay={props.lettersToDisplay} wrongLetters={props.wrongLetters}/>
            <KeyboardArea guessClickedLetter={props.guessClickedLetter} guessKeyedLetter={props.guessKeyedLetter} guessedLetters={props.guessedLetters}/>
            <Reset resetGame={props.resetGame} hasGameEnded={props.hasGameEnded}/>
          </div>)
}

export default GuessingArea;