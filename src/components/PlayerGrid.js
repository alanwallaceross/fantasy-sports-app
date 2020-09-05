import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerGrid = ({ players, handleSelectPlayer, hasGuessed }) => {
  if (players && players.length > 0) {
    return (
      <ul className="grid space-around">
        {players.map(player => (
          <li key={player.id}>
            <PlayerCard
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
    return "No players";
  }
};

export default PlayerGrid;
