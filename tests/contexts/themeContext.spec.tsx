import { useThemeContext, getInitialColorMode } from "@contexts/themeContext";
import { act, render, renderHook } from "@testing-library/react";
import { FC } from "react";
import { hasWindow } from "@utils/window";
import { ColorMode } from "types";
import { AllTheProviders } from "@utils/test-utils";

jest.mock("@utils/window", () => ({
  hasWindow: jest.fn(() => true),
}));

afterEach(() => {
  (hasWindow as jest.MockedFunction<typeof hasWindow>).mockImplementation(
    () => true
  );
  window.localStorage.removeItem("color-mode");
});

const Wrapper: FC = () => {
  useThemeContext();
  return <div>Test</div>;
};

describe("ThemeContext.", () => {
  it("Should throw an error when not used with HygraphProvider.", () => {
    expect(() => render(<Wrapper />)).toThrowError(
      "useThemeContext must be used within a ThemeProvider"
    );
  });

  describe("getInitialColorMode", () => {
    it("Should return light when running on the server.", () => {
      (hasWindow as jest.MockedFunction<typeof hasWindow>).mockImplementation(
        () => false
      );

      expect(getInitialColorMode()).toEqual(ColorMode.light);
    });

    it("Should return light when on the server.", () => {
      expect(getInitialColorMode()).toEqual(ColorMode.light);
    });

    it("Should return the value saved in localStorage if any (dark).", () => {
      window.localStorage.setItem("color-mode", "dark");
      expect(getInitialColorMode()).toEqual(ColorMode.dark);
    });

    it("Should return the value saved in localStorage if any (light).", () => {
      window.localStorage.setItem("color-mode", "light");
      expect(getInitialColorMode()).toEqual(ColorMode.light);
    });

    it("Should return light if there is no preference related to match media.", () => {
      (window.matchMedia as jest.MockedFunction<typeof window.matchMedia>)
        // @ts-ignore - Need to test what happens when matches does not exist.
        .mockImplementation(() => ({ matches: null }));
      expect(getInitialColorMode()).toEqual(ColorMode.light);
    });

    it("Should return dark if there is a preference specified related to match media.", () => {
      (
        window.matchMedia as jest.MockedFunction<typeof window.matchMedia>
      ).mockImplementation((query: string) => ({
        matches: true,
        media: query,
        onchange: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));
      expect(getInitialColorMode()).toEqual(ColorMode.dark);
    });

    it("Should return light if user does not prefer dark schema.", () => {
      (
        window.matchMedia as jest.MockedFunction<typeof window.matchMedia>
      ).mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));
      expect(getInitialColorMode()).toEqual(ColorMode.light);
    });
  });

  describe("Context/Provider", () => {
    it("Should set colorMode as light initially based on getInitialColorMode implementation.", () => {
      const { result } = renderHook(() => useThemeContext(), {
        wrapper: AllTheProviders,
      });
      expect(result.current.colorMode).toEqual(ColorMode.light);
    });

    it("Should update the colorMode when calling setColorMode.", () => {
      const { result } = renderHook(() => useThemeContext(), {
        wrapper: AllTheProviders,
      });

      expect(result.current.colorMode).toEqual(ColorMode.light);

      act(() => {
        result.current.setColorMode(ColorMode.dark);
      });

      expect(result.current.colorMode).toEqual(ColorMode.dark);
    });

    it("Should update the colorMode to the available one when calling toggleColorMode.", () => {
      const { result } = renderHook(() => useThemeContext(), {
        wrapper: AllTheProviders,
      });

      expect(result.current.colorMode).toEqual(ColorMode.light);

      act(() => {
        result.current.toggleColorMode();
      });

      expect(result.current.colorMode).toEqual(ColorMode.dark);

      act(() => {
        result.current.toggleColorMode();
      });

      expect(result.current.colorMode).toEqual(ColorMode.light);
    });
  });
});
