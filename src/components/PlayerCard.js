import PropTypes from "prop-types";
import React from "react";
import Card from "./Card";

export default function PlayerCard({
  avatar,
  name,
  fppg,
  handleSelectPlayer,
  hasGuessed,
  id,
}) {
  return (
    <Card>
      <div className="playerCard">
        <button
          data-testid={`character-${id}`}
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

PlayerCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  fppg: PropTypes.number.isRequired,
  handleSelectPlayer: PropTypes.func.isRequired,
  hasGuessed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
