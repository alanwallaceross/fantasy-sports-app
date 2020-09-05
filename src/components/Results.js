import React from "react";
import Card from "./Card";

const Results = props => {
  if (props.hasGuessed) {
    return (
      <Card>
        <div className="resultCard center center-text">
          {props.resultText}
          <br />
          {props.isFinished ? (
            <button onClick={props.handleReset}>Reset game</button>
          ) : (
            <button onClick={props.handleNext}>Next Guess</button>
          )}
        </div>
      </Card>
    );
  } else {
    return <Card></Card>;
  }
};

export default Results;
