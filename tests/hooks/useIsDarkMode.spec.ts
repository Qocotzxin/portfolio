import { useIsDarkMode } from "@hooks/useIsDarkMode";
import { AllTheProviders, renderHook } from "@utils/test-utils";
import { useColorMode } from "@chakra-ui/react";

jest.mock("@chakra-ui/react", () => {
  return {
    ...jest.requireActual("@chakra-ui/react"),
    useColorMode: jest.fn(() => ({ colorMode: "dark" })),
  };
});

describe("useIsDarkMode", () => {
  it("Should return true if Chakra's colorMode is dark.", () => {
    const { result } = renderHook(() => useIsDarkMode(), {
      wrapper: AllTheProviders,
    });

    expect(result.current).toBe(true);
  });

  it("Should return false if Chakra's colorMode is light.", () => {
    (
      useColorMode as jest.MockedFunction<typeof useColorMode>
    ).mockImplementation(() => ({
      colorMode: "light",
      toggleColorMode: jest.fn(),
      setColorMode: jest.fn(),
    }));
    const { result } = renderHook(() => useIsDarkMode(), {
      wrapper: AllTheProviders,
    });

    expect(result.current).toBe(false);
  });
});
