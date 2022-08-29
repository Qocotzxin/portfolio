import { act, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import NavHeading from "./NavHeading";

beforeAll(() => {
  vi.useFakeTimers();
});

afterAll(() => {
  vi.useRealTimers();
});

describe("NavHeading", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<NavHeading />);
    expect(container).toMatchSnapshot();
  });

  it("Should display the text CE initially.", () => {
    render(<NavHeading />);
    expect(screen.getByText(/C/)).toBeInTheDocument();
    expect(screen.getByText(/E/)).toBeInTheDocument();
  });
});
