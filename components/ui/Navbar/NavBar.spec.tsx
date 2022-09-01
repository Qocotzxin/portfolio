import { render } from "@utils/test-utils";
import NavBar from "./Navbar";

describe("NavBar", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
