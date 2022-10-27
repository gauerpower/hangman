import React, { useEffect, useState } from "react";
import "./App.css";
import GuessingArea from "./components/GuessingArea";
import InputArea from "./components/InputArea";

// Need to make images of the hang'd man.
// Need to make win & loss messages into HTML elements instead of just alerts.
// Need to style.

function App() {
  const [typedText, setTypedText] = useState("");
  const [typedHint, setTypedHint] = useState("");
  const [messageToGuess, setMessageToGuess] = useState("");
  const [hintToDisplay, setHintToDisplay] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [lettersToDisplay, setLettersToDisplay] = useState("");
  const [hasGameEnded, setGameEnd] = useState("");
  const [currentError, setCurrentError] = useState("");

  // Setting up controlled components for the message and hint inputs.
  function changeTypedText(event) {
    setTypedText(event.target.value);
  }
  function changeTypedHint(event) {
    setTypedHint(event.target.value);
  }

  // Function that will set the State values accordingly when player 1 enters a message and hint.
  // Alerts will make sure message is reasonable length and hint exists.
  function establishMessage() {
    if (typedText.length > 140) {
      setCurrentError("too long");
      return;
    } else if (!typedHint) {
      setCurrentError("no hint");
      return;
    } else {
      setMessageToGuess(typedText.toUpperCase());
      setHintToDisplay(typedHint.toUpperCase());
      setTypedText("");
      setTypedHint("");
      setCurrentError("");
    }
  }

  // Function that will create and display the message with underscores for unguessed letters.
  // Spaces between words will be preserved.
  // This will be fired by useEffect when player 1 first creates the message,
  // and fired again by a different useEffect any time player 2 guesses a letter.
  function createUpdatedMessage(message) {
    let visibleLetters = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") {
        visibleLetters += " ";
        console.log("Space added.");
      } else if (!guessedLetters.join("").includes(message[i])) {
        visibleLetters += "_";
      } else if (guessedLetters.join("").includes(message[i])) {
        visibleLetters += message[i];
      }
    }
    setLettersToDisplay(visibleLetters);
  }

  // Setting up the displayed empty message when player 1 establishes the message.
  useEffect(() => {
    createUpdatedMessage(messageToGuess);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageToGuess]);

  // Event listener for each letter button. Will update guessedLetters & wrongLetters
  // in the State. Will also disable the button so it can't be re-clicked.
  function guessClickedLetter(event) {
    setGuessedLetters((prev) => [...prev, event.target.value]);
    if (
      !messageToGuess.includes(event.target.value) &&
      !wrongLetters.includes(event.target.value)
    ) {
      setWrongLetters((prev) => [...prev, event.target.value]);
    }
  }

  // Event listener for keying in letters.
  // (Needs to be a different handler since it will be attached to the
  // big document and use event.key instead of event.target.value)

  function guessKeyedLetter(event) {
    if (!/[a-z]/.test(event.key)) {
      console.log("Non-alphanumeric key pressed.");
      return;
    }
    setGuessedLetters((prev) => [...prev, event.key.toUpperCase()]);
    if (
      !messageToGuess.includes(event.key.toUpperCase()) &&
      !wrongLetters.includes(event.key.toUpperCase())
    ) {
      setWrongLetters((prev) => [...prev, event.key.toUpperCase()]);
    }
  }

  // Displayed letters will be updated every time a letter is guessed.
  useEffect(() => {
    createUpdatedMessage(messageToGuess);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedLetters]);

  // If 7 wrong letters are guessed, "game over" message will display.
  useEffect(() => {
    if (wrongLetters.length === 7) {
      setGameEnd("lose");
    }
  }, [wrongLetters]);

  // Game ends with p2 winning if lettersToDisplay isn't an empty string and if no underscores are left.
  useEffect(() => {
    if (lettersToDisplay.length > 0 && !lettersToDisplay.includes("_")) {
      setGameEnd("win");
    }
  }, [lettersToDisplay]);

  // Handler function for the reset button. Will return all necessary pieces of state
  // to original values in order to reset game and play again.
  function resetGame() {
    setMessageToGuess("");
    setHintToDisplay("");
    setGuessedLetters([]);
    setWrongLetters([]);
    setLettersToDisplay("");
    setGameEnd("");
  }

  return (
    <div className="App">
      {messageToGuess ? (
        <GuessingArea
          hintToDisplay={hintToDisplay}
          lettersToDisplay={lettersToDisplay}
          wrongLetters={wrongLetters}
          guessedLetters={guessedLetters}
          guessClickedLetter={guessClickedLetter}
          guessKeyedLetter={guessKeyedLetter}
          resetGame={resetGame}
          hasGameEnded={hasGameEnded}
        />
      ) : (
        <InputArea
          changeTypedText={changeTypedText}
          typedText={typedText}
          changeTypedHint={changeTypedHint}
          establishMessage={establishMessage}
        />
      )}
      <div className="error-area">
        <p className="erorr-message">
          {currentError === "too long"
            ? `Message must be 140 characters or fewer.`
            : currentError === "no hint"
            ? `Please enter a hint.`
            : null}
        </p>
      </div>
      <div className="game-end-message">
        <p className="game-end-message">
          {hasGameEnded === "win" ? `Player 2 wins.` : hasGameEnded === "lose" ? "Player 2 loses" : ""}
        </p>
      </div>
    </div>
  );
}

export default App;
