import { render, screen } from "@utils/test-utils";
import FooterLinks from "@ui/Footer/FooterLinks";

describe("FooterLinks", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<FooterLinks />);
    expect(container).toMatchSnapshot();
  });

  it("Should render active link icons with the information provided by Hygraph.", () => {
    render(<FooterLinks />);

    expect(screen.getByLabelText("Visit Github")).toBeInTheDocument();
    expect(screen.queryByLabelText("Visit test")).not.toBeInTheDocument();
  });
});
