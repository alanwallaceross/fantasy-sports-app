import React from "react";
import { render, wait } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders Loading without crashing", async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText("Loading");
    await wait(() => expect(linkElement).toBeInTheDocument());
  });
});
