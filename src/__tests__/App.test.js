import React from "react";
import { render, wait } from "@testing-library/react";
import App from "../App";

test("renders loading while app fetches data", async () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Loading");
  await wait(() => expect(linkElement).toBeInTheDocument());
});
