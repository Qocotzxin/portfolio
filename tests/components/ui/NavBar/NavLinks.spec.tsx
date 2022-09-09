import { render, screen } from "@utils/test-utils";
import NavLinks from "@ui/NavBar/NavLinks";

const matchMediaPartialMock = {
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
};

describe("NavLinks", () => {
  it("Should return the horizontal list of links in desktop view.", () => {
    (
      window.matchMedia as jest.MockedFunction<typeof window.matchMedia>
    ).mockImplementation((query) => ({
      matches: query !== "(max-width: 767px)",
      media: query,
      ...matchMediaPartialMock,
    }));
    render(<NavLinks />);

    expect(screen.getByTestId("NavLinks-desktop")).toBeInTheDocument();
    expect(screen.queryByTestId("NavLinks-mobile")).not.toBeInTheDocument();
  });

  it("Should return the vertical menu of links in mobile view.", () => {
    (
      window.matchMedia as jest.MockedFunction<typeof window.matchMedia>
    ).mockImplementation((query) => ({
      matches: query === "(max-width: 767px)",
      media: query,
      ...matchMediaPartialMock,
    }));
    render(<NavLinks />);

    expect(screen.getByTestId("NavLinks-mobile")).toBeInTheDocument();
    expect(screen.queryByTestId("NavLinks-desktop")).not.toBeInTheDocument();
  });
});
