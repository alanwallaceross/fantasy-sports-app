export async function getPlayers() {
  const response = await fetch(
    "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"
  );
  const { players } = await response.json();
  return players;
}
