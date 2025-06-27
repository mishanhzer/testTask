import React from "react";
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders component correctly", () => {
  render(<MyComponent />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
