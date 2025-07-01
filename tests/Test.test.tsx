import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, test } from '@jest/globals';
import { Test } from "./Test";
import { AppHeader } from "../src/components/appHeader/AppHeader";

import { Spinner } from "../src/components/spinner/Spinner";

describe('Spinner component', () => {
  it('Spinner comp', () => {
    const { getByText } = render(<Spinner />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });

  it('Spinner role', () => {
    const { getByRole } = render(<Spinner />)
    expect(getByRole('status')).toBeInTheDocument()
  })

  it('Spinner correct class', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toHaveClass('flex justify-center items-center h-[500px]')
    expect(container.firstChild?.firstChild).toHaveClass('w-[100px] h-[100px] spinner-border text-primary')
  })
});

// test("render Comp", () => {
//   const { getByText } = render(<Test />);
//   expect(getByText("Hello")).toBeInTheDocument();
// });

// test('Spinner comp', () => {
//   const { getByText } = render(<Spinner />)
//   expect(getByText('Loading...')).toBeInTheDocument()
// })

// describe("AppHeader", () => {
//   test("renders correctly", () => {
//     const { container } = render(<AppHeader />);
//     expect(container).toMatchSnapshot();
//   });
// });

// test("My func", () => {
//   expect([1, 2]).toEqual([1, 2]);
// });
