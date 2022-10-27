import React from "react";

function Guesses(props) {
    return (
    <div className="guesses">
        <h4>Hint: {props.hintToDisplay}</h4>
        <h4 style={{"letterSpacing": "0.2rem"}}>{props.lettersToDisplay}</h4>
        <h4>Wrong guesses: {props.wrongLetters.join(" ")}</h4>
    </div>
    )
}

export default Guesses;
