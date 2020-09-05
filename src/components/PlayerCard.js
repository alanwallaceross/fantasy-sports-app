import React from "react";
import Card from "./Card";

export default function PlayerCard({
  avatar,
  name,
  fppg,
  handleSelectPlayer,
  hasGuessed,
  isFinished,
}) {
  return (
    <Card>
      <div className="playerCard">
        <button
          className="center-text"
          onClick={() => handleSelectPlayer(fppg, name)}
          disabled={hasGuessed}
        >
          <img className="avatar" src={avatar} alt={`Portrait of ${name}`} />
          <h2 className="center-text">{name}</h2>
          {hasGuessed && <h3 className="center-text">FPPG: {fppg}</h3>}
        </button>
      </div>
    </Card>
  );
}
