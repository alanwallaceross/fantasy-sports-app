import PlayerDuel from "../components/PlayerDuel";
import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getPlayers as mockGetPlayers } from "../utils/api";
import { mock3PlayersData, mock2PlayersData } from "../mockTestData";

jest.mock("../utils/api");

test("complete game in 11 guesses and reset", async () => {
  //PlayerDuel initializing
  mockGetPlayers.mockResolvedValueOnce(mock3PlayersData);

  const { getByText, getByTestId } = render(<PlayerDuel />);

  expect(getByText("Loading")).toBeInTheDocument();
  expect(mockGetPlayers).toHaveBeenCalledTimes(1);

  await wait(() => expect(getByText("PlayerDuel")).toBeInTheDocument());

  await wait(() =>
    expect(
      getByText(
        "Instructions: Try and select the players who you think have the highest FFPG (Fantasy points per game) in as few rounds as possible. Game ends once you have made 10 correct guesses."
      )
    ).toBeInTheDocument()
  );

  await wait(() =>
    expect(getByTestId("character-15475-9524").getAttribute("disabled")).toBe(
      null
    )
  );

  //first correct click
  await wait(() => fireEvent.click(getByTestId("character-15475-9524")));
  await wait(() => expect(getByTestId("character-15475-9524")).toBeDisabled());
  await wait(() => expect(getByTestId("character-15475-20848")).toBeDisabled());
  await wait(() => expect(getByTestId("character-15475-12363")).toBeDisabled());
  await wait(() => expect(getByText("Next Guess")).toBeInTheDocument());
  await wait(() => expect(getByText(/Guesses made: 1/)));
  await wait(() => expect(getByText(/Correct guesses made: 1/)));
  await wait(() =>
    expect(
      getByText(
        "You correctly guessed Stephen Curry who has the highest FPPG of 47.94303797468354"
      )
    ).toBeInTheDocument()
  );

  // 8 more correct clicks
  for (let guess = 0; guess < 8; guess++) {
    await wait(() => fireEvent.click(getByText("Next Guess")));
    await wait(() => fireEvent.click(getByTestId("character-15475-9524")));
  }

  // 1 incorrect click
  await wait(() => fireEvent.click(getByText("Next Guess")));
  await wait(() => fireEvent.click(getByTestId("character-15475-20848")));
  await wait(() => expect(getByTestId("character-15475-9524")).toBeDisabled());
  await wait(() => expect(getByText(/Guesses made: 10/)));
  await wait(() => expect(getByText(/Correct guesses made: 9/)));
  await wait(() =>
    expect(
      getByText(
        "You incorrectly guessed Damian Lillard who has a FPPG of 39.37866666666667"
      )
    ).toBeInTheDocument()
  );

  // final correct click
  await wait(() => fireEvent.click(getByText("Next Guess")));
  await wait(() => fireEvent.click(getByTestId("character-15475-9524")));
  await wait(() => expect(getByTestId("character-15475-9524")).toBeDisabled());
  await wait(() => expect(getByText(/Guesses made: 11/)));
  await wait(() => expect(getByText(/Correct guesses made: 10/)));

  // click to reset game
  await wait(() => fireEvent.click(getByText("Reset Game")));
  await wait(() => expect(getByText(/Guesses made: 0/)));
  await wait(() => expect(getByText(/Correct guesses made: 0/)));
}, 40000);

test("renders not enough players if there is only a total of 2 players fetched", async () => {
  mockGetPlayers.mockResolvedValueOnce(mock2PlayersData);
  const { getByText } = render(<PlayerDuel />);

  await wait(() => expect(getByText(/Not enough players/i)));
});
