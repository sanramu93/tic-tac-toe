import React from "react";
import "./GameBoard.css";
import XComponent from "../XComponent/XComponent";
import Ocomponent from "../OComponent/Ocomponent";
import SquareComponent from "../SquareComponent/SquareComponent";
import { useState } from "react";

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleSquareClick = (event) => {
    const index = event.target.getAttribute("squareindex") - 1;
    setBoard((prevBoard) => {
      prevBoard[index] = "X";
      return [...prevBoard];
    });
  };

  console.log(`board: ${board}`);
  const renderEmptyBoard = () => {
    return board.map((_, i) => {
      return (
        <SquareComponent
          key={i + 1}
          squareIndex={i + 1}
          handleSquareClick={handleSquareClick}
          playerChoice={board[i]} // empty (no one chose it); X; O.
        />
      );
    });
  };

  return <div className="gameboard">{renderEmptyBoard()}</div>;
};

export default GameBoard;
