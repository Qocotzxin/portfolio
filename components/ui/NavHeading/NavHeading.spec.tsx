import NavHeading from "./NavHeading";
import { render, screen } from "@utils/test-utils";

describe("NavHeading", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<NavHeading />);
    expect(container).toMatchSnapshot();
  });

  it("Should display the text CE initially.", () => {
    render(<NavHeading />);
    expect(screen.getByText(/C/)).toBeInTheDocument();
    expect(screen.getByText(/E/)).toBeInTheDocument();
  });
});
