import { useColorMode } from "@chakra-ui/react";
import { fireEvent, render, screen } from "@utils/test-utils";
import ColorModeSwitcher from "./ColorModeSwitcher";

jest.mock("@chakra-ui/react", () => {
  const actual = jest.requireActual("@chakra-ui/react");
  return {
    ...actual,
    useColorMode: jest.fn(() => ({
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

const useColorModeMock = useColorMode as jest.MockedFunction<
  typeof useColorMode
>;

describe("ColorModeSwitcher", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<ColorModeSwitcher />);

    expect(container).toMatchSnapshot();
  });

  it("Should call toggleColorMode when clicking the button.", () => {
    const toggleColorModeMock = jest.fn();
    useColorModeMock.mockImplementation(() => ({
      colorMode: "light",
      toggleColorMode: toggleColorModeMock,
      setColorMode: jest.fn(),
    }));

    render(<ColorModeSwitcher />);

    fireEvent.click(screen.getByRole("button"));
    jest.runAllTimers();

    expect(toggleColorModeMock).toHaveBeenCalled();
  });
});
