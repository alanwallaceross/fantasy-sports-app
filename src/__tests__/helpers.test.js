import { get3RandomPlayers } from "../utils/helpers";
import { mockPlayerJSON, mock2PlayersData } from "../mockTestData";

describe("get3RandomPlayers", () => {
  test("get3RandomPlayers returns 3 players when given input of 3 or more players", () => {
    const array = get3RandomPlayers(mockPlayerJSON);
    const result = array.length;
    const expected = 3;
    expect(result).toBe(expected);
  });

  test("get3RandomPlayers returns undefined if given an array of less than 3 players", () => {
    const result = get3RandomPlayers(mock2PlayersData);
    const expected = undefined;
    expect(result).toBe(expected);
  });
});
