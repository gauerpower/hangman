import React from "react";

function Reset(props) {
    return (<div className="reset-area" style={{"display": props.hasGameEnded ? null : "none"}}>
          <button onClick={props.resetGame}>Reset Game</button>
    </div>)
}

export default Reset;