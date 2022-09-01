import { render } from "@utils/test-utils";
import Layout from "./Layout";

describe("Layout.", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<Layout hygraphData={{}} />);
    expect(container).toMatchSnapshot();
  });
});
