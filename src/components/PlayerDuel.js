import React from "react";
import { getPlayers } from "../utils/api";
import { get3RandomPlayers } from "../utils/helpers";
import { getHighestFPPG } from "../utils/helpers";
import PlayerGrid from "./PlayerGrid";
import Results from "./Results";
import Card from "./Card";

export default function PlayerDuel() {
  const [allPlayers, setAllPlayers] = React.useState([]);
  const [loading, setLoading] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [correctGuesses, setCorrectGuesses] = React.useState(0);
  const [isCorrectGuess, setIsCorrectGuess] = React.useState(false);
  const [hasGuessed, setHasGuessed] = React.useState(false);

  let selectedPlayer = React.useRef({ name: "", fppg: 0 });
  let highestCurrentFPPG = React.useRef(0);
  let currentPlayersRef = React.useRef(null);

  React.useEffect(() => {
    setLoading(true);
    getPlayers()
      .then((players) => {
        setAllPlayers(players);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(
          "Sorry for the inconvenience, there has been an error retrieving player info. Please try again later."
        );
      });
  }, []);

  React.useEffect(() => {
    currentPlayersRef.current = get3RandomPlayers(allPlayers);
  }, [allPlayers]);

  React.useEffect(() => {
    highestCurrentFPPG.current = getHighestFPPG(currentPlayersRef.current);
  });

  const handleSelectPlayer = (fppg, name) => {
    setCount((count) => count + 1);
    selectedPlayer.current.name = name;
    selectedPlayer.current.fppg = fppg;
    if (fppg >= highestCurrentFPPG.current) {
      setHasGuessed(true);
      setIsCorrectGuess(true);
      setCorrectGuesses((correctGuesses) => correctGuesses + 1);
    } else {
      setHasGuessed(true);
    }
  };

  const handleNext = () => {
    setHasGuessed(false);
    setIsCorrectGuess(false);
    currentPlayersRef.current = get3RandomPlayers(allPlayers);
  };

  const handleReset = () => {
    setCorrectGuesses(0);
    setCount(0);
    setHasGuessed(false);
    setIsCorrectGuess(false);
    currentPlayersRef.current = get3RandomPlayers(allPlayers);
  };

  if (loading === true) {
    return "Loading";
  }

  if (error) {
    return error;
  }

  const isFinished = correctGuesses >= 10;
  return (
    <>
      <div className="center-text">
        <h1 className="center center-text">PlayerDuel</h1>
        <p>
          Instructions: Try and select the players who you think have the
          highest FFPG (Fantasy points per game) in as few rounds as possible.
          Game ends once you have made 10 correct guesses.
        </p>
        <Card>
          <div className="center center-text">
            {`Guesses made: ${count}`}
            <br />
            {`Correct guesses made: ${correctGuesses}`}
          </div>
        </Card>
        <PlayerGrid
          players={currentPlayersRef.current}
          handleSelectPlayer={handleSelectPlayer}
          hasGuessed={hasGuessed}
        />
      </div>
      <div>
        <Results
          resultText={
            isCorrectGuess
              ? `You correctly guessed ${selectedPlayer.current.name} who has the highest FPPG of ${selectedPlayer.current.fppg}`
              : `You incorrectly guessed ${selectedPlayer.current.name} who has a FPPG of ${selectedPlayer.current.fppg}`
          }
          hasGuessed={hasGuessed}
          isCorrectGuess={isCorrectGuess}
          handleNext={handleNext}
          isFinished={isFinished}
          handleReset={handleReset}
        />
      </div>
    </>
  );
}
