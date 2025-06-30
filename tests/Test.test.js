import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Test } from "./Test";

test("renders correctly", () => {
  const { getByText } = render(<Test />);
  expect(getByText("1")).toBeInTheDocument();
});

// test("My func", () => {
//   expect([1, 2]).toEqual([1, 2]);
// });
