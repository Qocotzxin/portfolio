import { render } from "@utils/test-utils";
import NavBar from "@ui/NavBar";

describe("NavBar", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
