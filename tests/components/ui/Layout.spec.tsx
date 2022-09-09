import { useHygraphContext } from "@contexts/hygraphContext";
import { render, renderHook } from "@utils/test-utils";
import Layout from "@ui/Layout";

describe("Layout.", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<Layout hygraphData={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("Should pass hygraph data to the provider when the value is truthy.", () => {
    const { result } = renderHook(() => useHygraphContext(), {
      wrapper: ({ children }) => (
        <Layout hygraphData={{ skipLinks: [] }}>{children}</Layout>
      ),
    });

    expect(result.current).toEqual({ skipLinks: [] });
  });
});
