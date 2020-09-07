import PropTypes from "prop-types";
import React from "react";
import Card from "./Card";

const Results = (props) => {
  if (props.hasGuessed) {
    return (
      <Card>
        <div className="resultCard center center-text">
          {props.resultText}
          <br />
          {props.isFinished ? (
            <button onClick={props.handleReset}>Reset Game</button>
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

Results.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  hasGuessed: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
  resultText: PropTypes.string.isRequired,
};

export default Results;
