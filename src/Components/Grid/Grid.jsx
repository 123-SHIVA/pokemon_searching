import { useState } from "react";
import Card from "../Card/Card";
import "./grid.css";
import isWinner from "../../Helper/checkWinner";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (turn == true) {
      board[index] = "o";

      // setBoard()
    } else {
      board[index]='x';
    }
    const win = isWinner(board ,turn ? "o" : "x");

    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  const reset = () => {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  };

  return (
    <div className="grid_wrapper">
      {winner && (
        <>
          <h1 className="turn-highlight">Winner is:{winner}</h1>
          <button className="reset" onClick={reset}>
            Reset game
          </button>
        </>
      )}

      <h1 className="turn-highlight">Current:turn:{turn ? "o" : "x"}</h1>
      <div className="grid">
        {board.map((el, ind) => (
          <Card gameEnd={winner?true:false} key={ind} onPlay={play} player={el} index={ind} />
        ))}
      </div>
    </div>
  );
}
export default Grid;
