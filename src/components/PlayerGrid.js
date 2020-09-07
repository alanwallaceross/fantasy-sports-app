import PropTypes from "prop-types";
import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerGrid = ({ players, handleSelectPlayer, hasGuessed }) => {
  if (players && players.length >= 3) {
    return (
      <ul className="grid space-around">
        {players.map((player) => (
          <li key={player.id}>
            <PlayerCard
              id={player.id}
              avatar={player.images.default.url}
              name={`${player.first_name} ${player.last_name}`}
              fppg={player.fppg}
              handleSelectPlayer={handleSelectPlayer}
              hasGuessed={hasGuessed}
            ></PlayerCard>
          </li>
        ))}
      </ul>
    );
  } else {
    return "Not enough players";
  }
};

PlayerGrid.propTypes = {
  handleSelectPlayer: PropTypes.func.isRequired,
  hasGuessed: PropTypes.bool.isRequired,
  players: PropTypes.array,
};

export default PlayerGrid;
