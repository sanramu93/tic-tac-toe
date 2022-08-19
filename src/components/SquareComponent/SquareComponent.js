import React from "react";
import Ocomponent from "../OComponent/Ocomponent";
import XComponent from "../XComponent/XComponent";
import "./SquareComponent.css";

const SquareComponent = ({ squareIndex, handleSquareClick, playerChoice }) => {
  const fillPlayerChoice = (playerChoice) => {
    if (playerChoice == "O") {
      return <Ocomponent />;
    } else if (playerChoice == "X") {
      return <XComponent />;
    } else {
      return null;
    }
  };
  return (
    <div
      className={`square square-${squareIndex}`}
      key={squareIndex}
      onClick={handleSquareClick}
      squareindex={squareIndex}
    >
      {fillPlayerChoice(playerChoice)}
    </div>
  );
};

export default SquareComponent;
