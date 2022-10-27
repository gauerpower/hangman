import React, {useEffect} from "react";

function KeyboardArea(props) {
  const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  useEffect(()=>{
    document.addEventListener("keydown", props.guessKeyedLetter);
    return (function(){
      document.removeEventListener("keydown", props.guessKeyedLetter);
    })
  });
  return (
    <div className="keyboard-area">
      {keyboardLayout.map((arr, index) => {
        return (
          <div className="keyboard-row" key={index}>
            {arr.map((letter, index) => {
              return (
                <button
                  className="letter-guesser"
                  onClick={props.guessClickedLetter}
                  key={index}
                  id={letter}
                  value={letter}
                  disabled={
                    props.guessedLetters.includes(letter) ? true : false
                  }
                >
                  {letter}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default KeyboardArea;
