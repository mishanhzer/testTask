import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, test } from '@jest/globals';
import { Test } from "./Test";
// import { AppHeader } from "../src/components/appHeader/AppHeader";

test("render Comp", () => {
  const { getByText } = render(<Test />);
  expect(getByText("Hello")).toBeInTheDocument();
});

// describe("AppHeader", () => {
//   it("renders correctly", () => {
//     const { container } = render(<AppHeader />);
//     expect(container).toMatchSnapshot();
//   });
// });

// test("renders correctly", () => {
//   const { getByText } = render(<Test />);
//   expect(getByText("Hello")).toBeInTheDocument();
// });

// test("My func", () => {
//   expect([1, 2]).toEqual([1, 2]);
// });
