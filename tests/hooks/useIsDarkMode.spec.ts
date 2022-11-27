import { useIsDarkMode } from "@hooks/useIsDarkMode";
import { AllTheProviders, renderHook } from "@utils/test-utils";
import { useThemeContext } from "@contexts/themeContext";
import { ColorMode } from "types";

jest.mock("@contexts/themeContext", () => {
  return {
    ...jest.requireActual("@contexts/themeContext"),
    useThemeContext: jest.fn(() => ({ colorMode: "dark" })),
  };
});

describe("useIsDarkMode", () => {
  it("Should return true if colorMode is dark.", () => {
    const { result } = renderHook(() => useIsDarkMode(), {
      wrapper: AllTheProviders,
    });

    expect(result.current).toBe(true);
  });

  it("Should return false if colorMode is light.", () => {
    (
      useThemeContext as jest.MockedFunction<typeof useThemeContext>
    ).mockImplementation(() => ({
      colorMode: ColorMode.light,
      toggleColorMode: jest.fn(),
      setColorMode: jest.fn(),
    }));
    const { result } = renderHook(() => useIsDarkMode(), {
      wrapper: AllTheProviders,
    });

    expect(result.current).toBe(false);
  });
});
