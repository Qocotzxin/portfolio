import Footer from "@ui/Footer";
import { render, screen } from "@utils/test-utils";

describe("Footer.", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("Should render the language selector.", () => {
    render(<Footer />);
    expect(screen.getByTestId("LanguageSelector")).toBeInTheDocument();
  });
});
