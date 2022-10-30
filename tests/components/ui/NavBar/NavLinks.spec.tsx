import NavLinks from "@ui/NavBar/NavLinks";
import { render } from "@utils/test-utils";

describe("NavLinks", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<NavLinks />);

    expect(container).toMatchSnapshot();
  });
});
