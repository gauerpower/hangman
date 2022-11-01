import React from "react";

function Reset(props) {
  return (
    <div className="reset-area">
      <h1 className="game-end-message">
        {props.hasGameEnded === "win"
          ? `Player 2 wins.`
          : props.hasGameEnded === "lose"
          ? "Player 2 loses."
          : ""}
      </h1>
      <button className="reset-button" onClick={props.resetGame}>
        Play Again
      </button>
    </div>
  );
}

export default Reset;
