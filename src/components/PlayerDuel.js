import React from "react";
import { getPlayers } from "../utils/api";
import PlayerGrid from "./PlayerGrid";

export default function PlayerDuel(props) {
  const [players, setPlayers] = React.useState([]);
  React.useEffect(() => {
    getPlayers().then(setPlayers);
  }, []);

  console.log(players);

  return (
    <>
      <h1>PlayerDuel</h1>
      <PlayerGrid players={players} />
    </>
  );
}
