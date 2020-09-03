import React from "react";

const PlayerGrid = ({ players }) => {
  return (
    <ul>
      {players.map(player => (
        <li key={player.id}>{player.first_name}</li>
      ))}
    </ul>
  );
};

export default PlayerGrid;
