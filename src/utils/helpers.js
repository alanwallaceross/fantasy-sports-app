export function get3RandomPlayers(players) {
  if (players && players.length >= 3) {
    let playerArray = [...players];
    let randomPlayers = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * playerArray.length);
      randomPlayers.push(playerArray[randomIndex]);
      playerArray.splice(randomIndex, 1);
    }

    return randomPlayers;
  }
}

export function getHighestFPPG(players) {
  if (players && players.length >= 3) {
    let highestFPPG = 0;
    for (let player in players) {
      if (players[player].fppg > highestFPPG) {
        highestFPPG = players[player].fppg;
      }
    }
    return highestFPPG;
  }
}
