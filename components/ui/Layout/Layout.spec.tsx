import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout.", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
