import { render, screen } from "@utils/test-utils";
import SkipLink from "@ui/NavBar/SkipLink";

describe("SkipLink", () => {
  it("Should render the skip link as long as the skipLinks array is defined and has elements in it, and match the snapshot.", () => {
    const { container } = render(<SkipLink />);
    expect(screen.getByTestId("SkipLink")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
