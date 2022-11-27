import { useThemeContext } from "@contexts/themeContext";
import { fireEvent, render, screen } from "@utils/test-utils";
import ColorModeSwitcher from "@ui/NavBar/ColorModeSwitcher";
import { ColorMode } from "types";
import { useAriaLabel } from "@hooks/useAriaLabel";

jest.mock("@hooks/useAriaLabel", () => ({
  useAriaLabel: jest.fn(),
}));

jest.mock("@contexts/themeContext", () => {
  const actual = jest.requireActual("@contexts/themeContext");
  return {
    ...actual,
    useThemeContext: jest.fn(() => ({
      colorMode: "light",
      toggleColorMode: jest.fn(),
      setColorMode: jest.fn(),
    })),
  };
});

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

const useColorModeMock = useThemeContext as jest.MockedFunction<
  typeof useThemeContext
>;

describe("ColorModeSwitcher", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<ColorModeSwitcher />);

    expect(container).toMatchSnapshot();
  });

  it("Should call useAriaLabel hook with metadata 'dark' if colorMode is light.", () => {
    render(<ColorModeSwitcher />);

    expect(useAriaLabel).toHaveBeenCalledWith({
      component: "ColorModeSwitcher",
      metadata: "dark",
    });
  });

  it("Should call useAriaLabel hook with metadata 'light' if colorMode is dark.", () => {
    useColorModeMock.mockImplementation(() => ({
      colorMode: ColorMode.dark,
      toggleColorMode: jest.fn(),
      setColorMode: jest.fn(),
    }));

    render(<ColorModeSwitcher />);

    expect(useAriaLabel).toHaveBeenCalledWith({
      component: "ColorModeSwitcher",
      metadata: "light",
    });
  });

  it("Should call toggleColorMode when clicking the button.", () => {
    const toggleColorModeMock = jest.fn();
    useColorModeMock.mockImplementation(() => ({
      colorMode: ColorMode.light,
      toggleColorMode: toggleColorModeMock,
      setColorMode: jest.fn(),
    }));

    render(<ColorModeSwitcher />);

    fireEvent.click(screen.getByRole("button"));
    jest.runAllTimers();

    expect(toggleColorModeMock).toHaveBeenCalled();
  });
});
