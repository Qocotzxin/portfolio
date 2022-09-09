import { useAriaLabel } from "@hooks/useAriaLabel";
import { Components } from "@models/hygraph";
import { AllTheProviders, renderHook } from "@utils/test-utils";

describe("useAriaLabel", () => {
  it("Should return 1 AriaLabel according to the parameters passed.", () => {
    const { result } = renderHook(
      () =>
        useAriaLabel({
          component: Components.ColorModeSwitcher,
          metadata: "light",
        }),
      { wrapper: AllTheProviders }
    );

    expect(result.current?.content).toBe("Switch to dark mode");
  });

  it("Should return null when there are no results", () => {
    const { result } = renderHook(
      () =>
        useAriaLabel({
          component: Components.ColorModeSwitcher,
          metadata: "test",
        }),
      { wrapper: AllTheProviders }
    );

    expect(result.current).toBe(null);
  });
});
