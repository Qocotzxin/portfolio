import { useHygraphContext } from "@contexts/hygraphContext";
import { render } from "@testing-library/react";
import {
  AllTheProviders,
  hygraphMockData,
  renderHook,
} from "@utils/test-utils";
import { FC } from "react";

const Wrapper: FC = () => {
  const data = useHygraphContext();
  return <div>Test</div>;
};

describe("HygraphContext.", () => {
  it("Should throw an error when not used with HygraphProvider.", () => {
    expect(() => render(<Wrapper />)).toThrowError(
      "useHygraphContext must be used within a HygraphProvider"
    );
  });

  it("Should return the value passed to the provider.", () => {
    const { result } = renderHook(() => useHygraphContext(), {
      wrapper: AllTheProviders,
    });
    expect(result.current).toEqual(hygraphMockData);
  });
});
